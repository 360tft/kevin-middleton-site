"use client";

import { useState } from "react";
import { credentials } from "@/data/credentials";

const VISIBLE_COUNT = 6;

export function CredentialsList() {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? credentials : credentials.slice(0, VISIBLE_COUNT);
  const hiddenCount = credentials.length - VISIBLE_COUNT;

  return (
    <>
      <ol className="border-t border-[#1e2229]">
        {shown.map((c, i) => {
          const content = (
            <>
              <span className="text-[12px] font-mono text-[#777] tabular-nums w-7 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[15px] md:text-[16px] text-[#e0e0e0] font-medium flex-1 min-w-0">
                {c.name}
              </span>
              <span className="text-[13px] text-[#999] hidden md:inline text-right max-w-[45%] whitespace-normal">
                {c.metric}
              </span>
              {c.url ? (
                <span
                  aria-hidden="true"
                  className="text-[#444] group-hover:text-[#E5A11C] transition-colors text-[14px] shrink-0 ml-3"
                >
                  ↗
                </span>
              ) : (
                <span aria-hidden="true" className="w-[14px] ml-3 shrink-0" />
              )}
            </>
          );

          const mobileMetric = (
            <span className="text-[13px] text-[#999] md:hidden mt-1 block pl-[44px]">
              {c.metric}
            </span>
          );

          return (
            <li
              key={c.name}
              className="border-b border-[#1e2229] hover:bg-[#0d1014] transition-colors"
            >
              {c.url ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 py-4 px-2"
                >
                  {content}
                </a>
              ) : (
                <div className="flex items-start gap-4 py-4 px-2">{content}</div>
              )}
              {mobileMetric}
            </li>
          );
        })}
      </ol>

      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-4 text-[13px] font-mono uppercase tracking-[0.15em] text-[#888] hover:text-[#E5A11C] transition-colors"
        >
          {expanded ? "Show less" : `+${hiddenCount} more`}
        </button>
      )}
    </>
  );
}
