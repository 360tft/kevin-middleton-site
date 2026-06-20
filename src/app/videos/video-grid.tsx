"use client";

import Image from "next/image";
import { useState } from "react";
import type { YouTubeVideo } from "@/data/youtube-videos";

const PAGE_SIZE = 24;

interface VideoGridProps {
  videos: YouTubeVideo[];
}

export function VideoGrid({ videos }: VideoGridProps) {
  const [shown, setShown] = useState(PAGE_SIZE);
  const visible = videos.slice(0, shown);
  const hasMore = shown < videos.length;

  return (
    <div>
      <p className="text-[12px] font-mono text-[#666] mb-6">
        {videos.length} videos
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {visible.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShown((s) => s + PAGE_SIZE)}
            className="text-[13px] font-mono text-[#888] hover:text-[#E5A11C] border border-[#1e2229] hover:border-[#E5A11C] px-6 py-2.5 rounded-lg transition-colors"
          >
            Load more ({videos.length - shown} remaining)
          </button>
        </div>
      )}
    </div>
  );
}

function VideoCard({ video }: { video: YouTubeVideo }) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
  const fallbackUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${video.id}`;

  const formattedViews =
    video.views != null
      ? video.views >= 1000
        ? `${(video.views / 1000).toFixed(1)}k views`
        : `${video.views} views`
      : null;

  const formattedDate = video.publishedAt
    ? new Date(video.publishedAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <a
      href={youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 hover:opacity-90 transition-opacity"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-[#111418] rounded-lg overflow-hidden border border-[#1e2229]">
        <Image
          src={thumbnailUrl}
          alt={video.title}
          fill
          className="object-cover"
          onError={(e) => {
            // Fall back to hqdefault if maxresdefault fails
            const img = e.currentTarget as HTMLImageElement;
            if (img.src !== fallbackUrl) {
              img.src = fallbackUrl;
            }
          }}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
        />
        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
          <div className="w-12 h-12 rounded-full bg-[#E5A11C] flex items-center justify-center">
            <svg className="w-5 h-5 text-[#080a0d] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-1">
        <p className="text-[14px] font-medium text-[#f0f0f0] leading-snug group-hover:text-[#E5A11C] transition-colors line-clamp-2">
          {video.title}
        </p>
        {(formattedDate || formattedViews) && (
          <p className="text-[12px] font-mono text-[#555]">
            {[formattedDate, formattedViews].filter(Boolean).join(" · ")}
          </p>
        )}
        {video.description && (
          <p className="text-[13px] text-[#666] leading-relaxed line-clamp-2 mt-0.5">
            {video.description}
          </p>
        )}
      </div>
    </a>
  );
}
