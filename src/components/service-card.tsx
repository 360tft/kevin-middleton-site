interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  colour: string;
  cta?: {
    label: string;
    href: string;
  };
}

export function ServiceCard({
  title,
  price,
  description,
  colour,
  cta,
}: ServiceCardProps) {
  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <div className="flex items-start gap-4">
        <div
          className="w-1 h-12 rounded-full shrink-0 mt-1"
          style={{ backgroundColor: colour }}
        />
        <div className="flex-1">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="text-[18px] md:text-[20px] font-semibold text-text">
              {title}
            </h3>
            <span className="text-[14px] font-medium text-accent-blue">
              {price}
            </span>
          </div>
          <p className="text-[15px] md:text-[16px] text-text-secondary leading-relaxed mt-2">
            {description}
          </p>
          {cta && (
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-[14px] font-medium text-accent-blue hover:underline"
            >
              {cta.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
