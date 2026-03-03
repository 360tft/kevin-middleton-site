import Link from "next/link";

interface CTACardProps {
  title: string;
  description: string;
  href: string;
  label: string;
  external?: boolean;
}

export function CTACard({
  title,
  description,
  href,
  label,
  external,
}: CTACardProps) {
  const linkProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <div className="bg-[#1a1a1a] rounded-xl p-8 md:p-12 text-center">
      <h2 className="text-[22px] md:text-[28px] font-semibold text-white mb-3">
        {title}
      </h2>
      <p className="text-[16px] md:text-[18px] text-white/70 max-w-[520px] mx-auto mb-6">
        {description}
      </p>
      {external ? (
        <a
          href={href}
          className="inline-flex items-center justify-center px-8 py-3 bg-accent-blue text-white text-[15px] font-medium rounded-full hover:bg-accent-blue/90 transition-colors"
          {...linkProps}
        >
          {label}
        </a>
      ) : (
        <Link
          href={href}
          className="inline-flex items-center justify-center px-8 py-3 bg-accent-blue text-white text-[15px] font-medium rounded-full hover:bg-accent-blue/90 transition-colors"
        >
          {label}
        </Link>
      )}
    </div>
  );
}
