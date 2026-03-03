import { SOCIAL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="pb-28 pt-12 border-t border-border">
      <div className="mx-auto w-[90%] md:w-[83%] max-w-[1200px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[14px] text-text-secondary">
            Kevin Middleton. UEFA B Coach, Author, Football AI Builder.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={SOCIAL.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-text-secondary hover:text-text transition-colors"
            >
              Twitter
            </a>
            <a
              href={SOCIAL.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-text-secondary hover:text-text transition-colors"
            >
              Telegram
            </a>
            <a
              href={SOCIAL.indiePage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-text-secondary hover:text-text transition-colors"
            >
              Links
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
