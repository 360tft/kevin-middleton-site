"use client";

import { useState, useMemo } from "react";
import type { Tweet } from "./load-tweets";

const PAGE_SIZE = 30;

interface TweetsClientProps {
  tweets: Tweet[];
}

export function TweetsClient({ tweets }: TweetsClientProps) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (!query.trim()) return tweets;
    const q = query.toLowerCase();
    return tweets.filter((t) => t.text.toLowerCase().includes(q));
  }, [tweets, query]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleSearch(value: string) {
    setQuery(value);
    setPage(1);
  }

  return (
    <div>
      {/* Search */}
      <div className="mb-8">
        <input
          type="search"
          placeholder="Search tweets..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full max-w-[480px] bg-[#111418] border border-[#1e2229] rounded-lg px-4 py-2.5 text-[14px] text-[#f0f0f0] placeholder:text-[#555] focus:outline-none focus:border-[#E5A11C] transition-colors"
        />
        {query && (
          <p className="mt-2 text-[12px] font-mono text-[#555]">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </p>
        )}
      </div>

      {/* Tweet list */}
      <div className="flex flex-col divide-y divide-[#1e2229]">
        {visible.length === 0 ? (
          <p className="text-[14px] text-[#555] py-8">No tweets match that search.</p>
        ) : (
          visible.map((tweet) => <TweetRow key={tweet.id} tweet={tweet} />)
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-10 flex items-center gap-3">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="text-[13px] font-mono text-[#aaa] hover:text-[#f0f0f0] disabled:text-[#333] disabled:cursor-not-allowed transition-colors"
          >
            ← Prev
          </button>
          <span className="text-[12px] font-mono text-[#555]">
            {page} / {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="text-[13px] font-mono text-[#aaa] hover:text-[#f0f0f0] disabled:text-[#333] disabled:cursor-not-allowed transition-colors"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

function TweetRow({ tweet }: { tweet: Tweet }) {
  const [expanded, setExpanded] = useState(false);

  const isLong = tweet.text.length > 280;
  const preview = isLong && !expanded ? tweet.text.slice(0, 280).trimEnd() + "…" : tweet.text;

  return (
    <div className="py-5 group">
      <p className="text-[15px] text-[#ccc] leading-relaxed whitespace-pre-wrap break-words">
        {preview}
      </p>
      <div className="mt-2 flex items-center gap-4">
        {isLong && (
          <button
            onClick={() => setExpanded((e) => !e)}
            className="text-[12px] font-mono text-[#555] hover:text-[#E5A11C] transition-colors"
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        )}
        <div className="flex items-center gap-3 text-[12px] font-mono text-[#444]">
          {tweet.date && <span>{tweet.date}</span>}
          {tweet.likes > 0 && <span>{tweet.likes} ♥</span>}
          {tweet.url && (
            <a
              href={tweet.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-[#E5A11C] transition-colors"
            >
              →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
