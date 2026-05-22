import { COACHING_LADDER } from "@/lib/constants";

export function CoachingLadder() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {COACHING_LADDER.map((offer) => (
        <a
          key={offer.name}
          href={offer.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-[#0d1014] border border-[#1e2229] rounded-xl p-6 md:p-7 hover:border-[#E5A11C] transition-colors"
        >
          <div className="flex items-baseline justify-between gap-4 mb-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#666]">
              {offer.tier}
            </span>
            <span className="text-[13px] font-mono text-[#E5A11C]">
              {offer.price}
            </span>
          </div>
          <h3 className="text-[18px] md:text-[20px] font-semibold text-[#f0f0f0] leading-tight mb-3 tracking-tight group-hover:text-[#E5A11C] transition-colors">
            {offer.name}
          </h3>
          <p className="text-[14px] text-[#888] leading-relaxed">
            {offer.blurb}
          </p>
        </a>
      ))}
    </div>
  );
}
