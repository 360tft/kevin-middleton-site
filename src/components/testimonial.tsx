import type { Testimonial as TestimonialType } from "@/data/testimonials";

export function Testimonial({ quote, name, role }: TestimonialType) {
  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <blockquote className="text-[15px] md:text-[16px] leading-relaxed text-text-secondary">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-4 pt-4 border-t border-border">
        <div className="text-[15px] font-semibold text-text">{name}</div>
        <div className="text-[13px] text-text-secondary">{role}</div>
      </div>
    </div>
  );
}
