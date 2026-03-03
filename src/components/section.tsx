import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto w-[90%] md:w-[83%] max-w-[1200px]">
        {children}
      </div>
    </section>
  );
}

export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-[28px] md:text-[48px] font-semibold leading-tight tracking-tight text-text mb-6">
      {children}
    </h1>
  );
}

export function PageIntro({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[18px] md:text-[22px] leading-relaxed text-text-secondary max-w-[720px]">
      {children}
    </p>
  );
}
