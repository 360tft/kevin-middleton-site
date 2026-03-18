import { SOCIAL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="pb-28 pt-12 border-t border-[#1e2229]">
      <div className="mx-auto w-[90%] md:w-[83%] max-w-[1200px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-[#444] font-mono">
            Kevin Middleton · 10 AI tools · 10,000+ coaches · 40+ countries
          </p>
          <div className="flex items-center gap-6">
            <a
              href={SOCIAL.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[#444] hover:text-[#888] transition-colors"
            >
              Twitter
            </a>
            <a
              href={SOCIAL.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[#444] hover:text-[#888] transition-colors"
            >
              Telegram
            </a>
            <a
              href={SOCIAL.indiePage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[#444] hover:text-[#888] transition-colors"
            >
              Links
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
