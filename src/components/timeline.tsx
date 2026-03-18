"use client";

import { useEffect, useRef, useState } from "react";
import type { TimelineEntry } from "@/data/timeline";

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
}

function TimelineItem({ entry, index }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative pl-10 md:pl-16"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms`,
      }}
    >
      {/* Dot on the line */}
      <div
        className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-[#080a0d] ring-1 ring-white/10"
        style={{ backgroundColor: entry.colour }}
      />

      <div className="group flex flex-col md:flex-row md:items-start gap-3 md:gap-8">
        {/* Month */}
        <span className="shrink-0 text-xs font-mono tracking-widest text-[#555] uppercase md:w-20 pt-0.5">
          {entry.month}
        </span>

        {/* Content card */}
        <a
          href={entry.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 block bg-[#111418] border border-[#1e2229] rounded-xl p-5 hover:border-[#2a3040] transition-colors duration-200"
        >
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3
              className="text-[16px] md:text-[17px] font-semibold text-[#f0f0f0] group-hover:text-[#E5A11C] transition-colors"
            >
              {entry.name}
            </h3>
            <span
              className="shrink-0 text-[11px] font-mono px-2 py-0.5 rounded-full border"
              style={{
                color: entry.colour,
                borderColor: `${entry.colour}40`,
                backgroundColor: `${entry.colour}12`,
              }}
            >
              {entry.metric}
            </span>
          </div>
          <p className="text-[14px] text-[#777] leading-relaxed">
            {entry.description}
          </p>
        </a>
      </div>
    </div>
  );
}

interface TimelineProps {
  entries: TimelineEntry[];
}

export function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-[#1e2229] via-[#2a3040] to-[#1e2229]" />

      <div className="flex flex-col gap-6">
        {entries.map((entry, i) => (
          <TimelineItem key={`${entry.month}-${entry.name}`} entry={entry} index={i} />
        ))}
      </div>
    </div>
  );
}
