import Link from "next/link";

interface CTACardProps {
  title: string;
  description: string;
  href: string;
  label: string;
  external?: boolean;
}

export function CTACard({ title, description, href, label, external }: CTACardProps) {
  const linkProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  const cls =
    "inline-flex items-center justify-center px-7 py-3 bg-[#E5A11C] text-[#080a0d] text-[14px] font-semibold rounded-full hover:bg-[#d4940f] transition-colors";

  return (
    <div className="relative overflow-hidden bg-[#111418] border border-[#1e2229] rounded-xl p-10 md:p-14">
      <div
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ backgroundColor: "#E5A11C" }}
      />
      <h2 className="text-[22px] md:text-[30px] font-semibold text-[#f0f0f0] mb-3 max-w-[520px] leading-tight">
        {title}
      </h2>
      <p className="text-[15px] text-[#777] max-w-[480px] mb-7 leading-relaxed">
        {description}
      </p>
      {external ? (
        <a href={href} className={cls} {...linkProps}>
          {label}
        </a>
      ) : (
        <Link href={href} className={cls}>
          {label}
        </Link>
      )}
    </div>
  );
}
