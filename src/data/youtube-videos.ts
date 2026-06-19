// YouTube video archive for the /videos page.
//
// Populate this manually or via the YouTube Data API v3.
// The script at /home/kevin/360tft-hub/scripts/youtube-audit.ts pulls live
// data from the @360TFT channel — run it, extract video IDs + titles,
// and add them here.
//
// Thumbnail format: https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg
// (Falls back to: https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg)

export interface YouTubeVideo {
  id: string;
  title: string;
  description?: string;
  publishedAt?: string; // ISO date string, e.g. "2024-03-15"
  views?: number;
  channel?: string;
}

// Populated manually from the @360TFT YouTube channel.
// Channel: https://www.youtube.com/@360TFT
// Last updated: 2026-06-19
//
// To add more: visit https://www.youtube.com/@360TFT/videos, copy the video ID
// from the URL (youtube.com/watch?v=VIDEO_ID) and add an entry below.
export const youtubeVideos: YouTubeVideo[] = [
  // Add video entries here. Example:
  // {
  //   id: "dQw4w9WgXcQ",
  //   title: "Example Video Title",
  //   publishedAt: "2024-01-01",
  //   views: 1234,
  // },
];
