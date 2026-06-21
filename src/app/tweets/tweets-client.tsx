"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import type { Tweet } from "./load-tweets";

const PAGE_SIZE = 24;

interface TweetsClientProps {
  tweets: Tweet[];
}

export function TweetsClient({ tweets }: TweetsClientProps) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"recent" | "likes">("likes");
  const [shown, setShown] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const base = query.trim()
      ? tweets.filter((t) => t.text.toLowerCase().includes(query.toLowerCase()))
      : [...tweets];
    if (sort === "likes") base.sort((a, b) => b.likes - a.likes);
    return base;
  }, [tweets, query, sort]);

  function handleSearch(value: string) {
    setQuery(value);
    setShown(PAGE_SIZE);
  }

  function handleSort(value: "recent" | "likes") {
    setSort(value);
    setShown(PAGE_SIZE);
  }

  const visible = filtered.slice(0, shown);
  const hasMore = shown < filtered.length;

  return (
    <div>
      {/* Search + Sort */}
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <input
          type="search"
          placeholder="Search tweets..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full max-w-[360px] bg-[#111418] border border-[#1e2229] rounded-lg px-4 py-2.5 text-[14px] text-[#f0f0f0] placeholder:text-[#555] focus:outline-none focus:border-[#E5A11C] transition-colors"
        />
        <div className="flex items-center gap-1 border border-[#1e2229] rounded-lg overflow-hidden">
          {(["likes", "recent"] as const).map((opt) => (
            <button
              key={opt}
              onClick={() => handleSort(opt)}
              className={`px-3 py-2 text-[12px] font-mono transition-colors ${
                sort === opt
                  ? "bg-[#E5A11C] text-[#0a0c0f]"
                  : "text-[#666] hover:text-[#f0f0f0]"
              }`}
            >
              {opt === "likes" ? "Most liked" : "Recent"}
            </button>
          ))}
        </div>
        {query && (
          <p className="text-[12px] font-mono text-[#555]">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </p>
        )}
      </div>

      <p className="text-[12px] font-mono text-[#666] mb-6">{tweets.length} tweets</p>

      {/* Grid */}
      {visible.length === 0 ? (
        <p className="text-[14px] text-[#555] py-8">No tweets match that search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {visible.map((tweet) => (
            <TweetCard key={tweet.id} tweet={tweet} />
          ))}
        </div>
      )}

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShown((s) => s + PAGE_SIZE)}
            className="text-[13px] font-mono text-[#888] hover:text-[#E5A11C] border border-[#1e2229] hover:border-[#E5A11C] px-6 py-2.5 rounded-lg transition-colors"
          >
            Load more ({filtered.length - shown} remaining)
          </button>
        </div>
      )}
    </div>
  );
}

function TweetCard({ tweet }: { tweet: Tweet }) {
  const isLong = tweet.text.length > 240;
  const preview = isLong ? tweet.text.slice(0, 240).trimEnd() + "…" : tweet.text;

  return (
    <a
      href={tweet.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 bg-[#0d1014] border border-[#1e2229] rounded-xl p-5 hover:border-[#E5A11C] transition-colors"
    >
      {/* Author row */}
      <div className="flex items-center gap-2.5">
        <Image
          src="/images/kevin-profile.png"
          alt="Kevin Middleton"
          width={32}
          height={32}
          className="rounded-full object-cover shrink-0"
        />
        <div className="flex flex-col min-w-0">
          <span className="text-[13px] font-semibold text-[#f0f0f0] leading-tight">Kevin Middleton</span>
          <span className="text-[11px] font-mono text-[#555] leading-tight">@coach_kevin_m</span>
        </div>
      </div>

      {/* Tweet text */}
      <p className="text-[14px] text-[#ddd] leading-relaxed whitespace-pre-wrap break-words flex-1 group-hover:text-[#f0f0f0] transition-colors">
        {preview}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-3 text-[11px] font-mono text-[#555]">
        {tweet.date && <span>{tweet.date}</span>}
        {tweet.likes > 0 && <span>{tweet.likes} ♥</span>}
      </div>
    </a>
  );
}
