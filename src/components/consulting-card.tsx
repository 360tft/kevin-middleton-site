import { CONSULTING } from "@/lib/constants";

export function ConsultingCard() {
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
        <p className="text-[15px] md:text-[16px] text-[#aaa] leading-relaxed max-w-[640px]">
          {CONSULTING.differentiator}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-t border-[#1e2229] pt-8 mb-8">
        <div>
          <p className="text-[13px] font-mono uppercase tracking-[0.15em] text-[#666] mb-4">
            What you get
          </p>
          <ul className="space-y-3">
            {CONSULTING.whatYouGet.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[14px] md:text-[15px] text-[#bbb] leading-relaxed"
              >
                <span aria-hidden="true" className="text-[#E5A11C] shrink-0">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[13px] font-mono uppercase tracking-[0.15em] text-[#666] mb-4">
            How I work
          </p>
          <ul className="space-y-3">
            {CONSULTING.howIWork.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[14px] md:text-[15px] text-[#bbb] leading-relaxed"
              >
                <span aria-hidden="true" className="text-[#E5A11C] shrink-0">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
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
