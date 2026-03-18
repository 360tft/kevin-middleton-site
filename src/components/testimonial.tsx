import type { Testimonial as TestimonialType } from "@/data/testimonials";

export function Testimonial({ quote, name, role }: TestimonialType) {
  return (
    <div className="rounded-lg p-4 bg-[#0d1014] border border-[#1e2229]">
      <blockquote className="text-[14px] leading-relaxed text-[#888]">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-3 pt-3 border-t border-[#1e2229]">
        <div className="text-[13px] font-semibold text-[#ccc]">{name}</div>
        <div className="text-[12px] text-[#555] mt-0.5">{role}</div>
      </div>
    </div>
  );
}
