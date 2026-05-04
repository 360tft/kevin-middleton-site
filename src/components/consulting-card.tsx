"use client";

import { useState } from "react";
import { CONSULTING } from "@/lib/constants";

export function ConsultingCard() {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  return (
    <div className="bg-[#0d1014] border border-[#1e2229] rounded-xl p-7 md:p-10">
      <div className="flex items-baseline justify-between gap-4 mb-6">
        <span className="text-[13px] font-mono uppercase tracking-[0.15em] text-[#aaa]">
          {CONSULTING.title}
        </span>
        <span className="text-[14px] font-mono text-[#E5A11C]">
          {CONSULTING.price}
        </span>
      </div>

      <div className="mb-8">
        <h2 className="text-[22px] md:text-[30px] font-semibold text-[#f0f0f0] leading-tight mb-4 tracking-tight">
          {CONSULTING.headline}
        </h2>
        <p className="text-[15px] md:text-[16px] text-[#888] leading-relaxed max-w-[640px]">
          {CONSULTING.subhead}
        </p>
      </div>

      <div className="border-t border-[#1e2229] mb-8">
        {CONSULTING.points.map((point, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={point.title} className="border-b border-[#1e2229]">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between py-4 text-left hover:text-[#f0f0f0] transition-colors"
              >
                <span className="text-[15px] font-medium text-[#e0e0e0]">
                  {point.title}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className={`text-[#666] transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {isOpen && (
                <div className="pb-5 pr-8">
                  <p className="text-[14px] text-[#888] leading-relaxed">
                    {point.body}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <a
        href={CONSULTING.ctaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-between gap-3 px-5 py-3 bg-[#E5A11C] text-[#080a0d] text-[14px] font-semibold rounded-md hover:bg-[#d4940f] transition-colors min-w-[220px]"
      >
        <span>{CONSULTING.ctaLabel}</span>
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
