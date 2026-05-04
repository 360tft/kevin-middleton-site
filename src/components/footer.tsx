import { SOCIAL } from "@/lib/constants";

const COMMUNITIES = [
  { label: "Football Coaching Academy", href: "https://www.skool.com/coachingacademy" },
  { label: "360TFT Skool", href: "https://www.skool.com/360tft-7374" },
  { label: "AI Football Skool", href: "https://www.skool.com/aifootball" },
  { label: "The 2 Drill Club", href: "https://www.skool.com/the-2-drill-club-5017" },
];

const RESOURCES = [
  { label: "Gumroad store", href: "https://kev1wired.gumroad.com" },
  { label: "Book on Amazon", href: "https://www.amazon.co.uk/dp/B0GF9VSGKG" },
  { label: "Telegram channel", href: SOCIAL.telegram },
  { label: "WhatsApp group", href: SOCIAL.whatsapp },
];

const SOCIAL_LINKS = [
  { label: "X", href: SOCIAL.twitter },
  { label: "LinkedIn", href: SOCIAL.linkedin },
  { label: "Instagram", href: SOCIAL.instagram },
  { label: "YouTube", href: SOCIAL.youtube },
];

export function Footer() {
  return (
    <footer className="pb-16 pt-12 border-t border-[#1e2229]">
      <div className="mx-auto w-[90%] md:w-[83%] max-w-[1200px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <FooterColumn title="Communities" items={COMMUNITIES} />
          <FooterColumn title="Resources" items={RESOURCES} />
          <FooterColumn title="Social" items={SOCIAL_LINKS} />
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#555] mb-3">
              Contact
            </p>
            <a
              href={`mailto:${SOCIAL.email}`}
              className="text-[13px] text-[#aaa] hover:text-[#E5A11C] transition-colors break-all"
            >
              {SOCIAL.email}
            </a>
            <p className="text-[12px] text-[#444] mt-2 leading-relaxed">
              Email is for genuine non-call inquiries. For everything else, book a paid consultation above.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-[#1e2229] flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="text-[12px] text-[#444] font-mono">
            Kevin Middleton · UEFA licensed · Building in public.
          </p>
          <p className="text-[12px] text-[#444] font-mono">
            © {new Date().getFullYear()} Kevin Middleton.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div>
      <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#555] mb-3">
        {title}
      </p>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[#aaa] hover:text-[#E5A11C] transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
