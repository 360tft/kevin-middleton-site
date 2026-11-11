/**
 * Pull videos from YouTube channels and write src/data/youtube-videos.ts
 * Uses YOUTUBE_API_KEY from ~/.env.shared
 *
 * Run manually:  node scripts/gen-youtube-videos.mjs
 * Run via cron:   scripts/refresh-youtube-videos-cron.sh (weekly, commits + pushes on change)
 */
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Load env
const envShared = readFileSync('/home/kevin/.env.shared', 'utf8')
const apiKey = envShared.match(/YOUTUBE_API_KEY=(.+)/)?.[1]?.trim()
if (!apiKey) { console.error('No YOUTUBE_API_KEY found'); process.exit(1) }

const OUT = join(__dirname, '..', 'src', 'data', 'youtube-videos.ts')

// Channels to pull from: handle → channel label
const CHANNELS = [
  { handle: '360TFT', label: '360TFT' },
  { handle: 'coach_kevin_m', label: 'Kevin Middleton' },
]

async function getChannelId(handle) {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=id,contentDetails,statistics,snippet&forHandle=${handle}&key=${apiKey}`
  const res = await fetch(url)
  const data = await res.json()
  if (!data.items?.length) { console.warn(`No channel found for @${handle}`); return null }
  const ch = data.items[0]
  return {
    id: ch.id,
    uploadsPlaylistId: ch.contentDetails.relatedPlaylists.uploads,
    title: ch.snippet.title,
  }
}

async function getPlaylistVideos(playlistId) {
  const videos = []
  let pageToken = ''
  do {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails,snippet&playlistId=${playlistId}&maxResults=50&pageToken=${pageToken}&key=${apiKey}`
    const res = await fetch(url)
    const data = await res.json()
    if (!data.items) break
    for (const item of data.items) {
      videos.push({
        id: item.contentDetails.videoId,
        title: item.snippet.title,
        publishedAt: item.contentDetails.videoPublishedAt?.split('T')[0] || item.snippet.publishedAt?.split('T')[0],
      })
    }
    pageToken = data.nextPageToken || ''
  } while (pageToken)
  return videos
}

async function getVideoStats(videoIds) {
  const chunks = []
  for (let i = 0; i < videoIds.length; i += 50) chunks.push(videoIds.slice(i, i + 50))
  const stats = {}
  for (const chunk of chunks) {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${chunk.join(',')}&key=${apiKey}`
    const res = await fetch(url)
    const data = await res.json()
    for (const item of data.items || []) {
      stats[item.id] = parseInt(item.statistics.viewCount || '0', 10)
    }
  }
  return stats
}

const allVideos = []
for (const ch of CHANNELS) {
  console.log(`Fetching @${ch.handle}...`)
  const channel = await getChannelId(ch.handle)
  if (!channel) continue
  const videos = await getPlaylistVideos(channel.uploadsPlaylistId)
  console.log(`  ${videos.length} videos`)
  const stats = await getVideoStats(videos.map(v => v.id))
  for (const v of videos) {
    allVideos.push({
      id: v.id,
      title: v.title,
      publishedAt: v.publishedAt,
      views: stats[v.id] || 0,
      channel: ch.label,
    })
  }
}

// Sort newest first
allVideos.sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''))

console.log(`Total: ${allVideos.length} videos across ${CHANNELS.length} channels`)

const lines = allVideos.map(v => JSON.stringify(v))

const output = `// Auto-generated from YouTube Data API v3 — do not edit by hand.
// Regenerate: node scripts/gen-youtube-videos.mjs (or wait for the weekly cron)

export interface YouTubeVideo {
  id: string;
  title: string;
  description?: string;
  publishedAt?: string;
  views?: number;
  channel?: string;
}

// ${allVideos.length} videos from @360TFT and @coach_kevin_m channels
export const youtubeVideos: YouTubeVideo[] = [
  ${lines.join(',\n  ')}
]
`

writeFileSync(OUT, output)
console.log(`Wrote ${allVideos.length} videos to ${OUT}`)
