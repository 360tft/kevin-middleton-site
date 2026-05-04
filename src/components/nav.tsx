import { CONSULTING } from "@/lib/constants";

export function Nav() {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-[rgba(10,10,10,0.92)] backdrop-blur-md rounded-full px-2 py-2 border border-[#1e2229]">
        <a
          href="#work"
          className="text-[13px] text-[#aaa] hover:text-[#f0f0f0] px-4 py-1.5 rounded-full transition-colors"
        >
          Work
        </a>
        <a
          href={CONSULTING.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-medium bg-[#E5A11C] text-[#080a0d] px-4 py-1.5 rounded-full hover:bg-[#d4940f] transition-colors"
        >
          Book a call
        </a>
      </div>
    </nav>
  );
}
