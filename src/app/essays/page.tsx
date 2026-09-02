import { Metadata } from "next";
import Link from "next/link";
import { Section, PageTitle, PageIntro } from "@/components/section";
import { essays } from "@/data/essays";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Longform essays on AI in football coaching, grassroots coach development, and what the data actually shows — by Kevin Middleton.",
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function EssaysPage() {
  return (
    <Section className="pt-28 md:pt-36 pb-32">
      <div className="mb-10">
        <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#E5A11C] mb-3">
          Writing
        </p>
        <PageTitle>Essays</PageTitle>
        <PageIntro>
          Longform pieces on AI in football coaching, what the data shows, and
          why coaching education needs to ask different questions.
        </PageIntro>
      </div>

      {essays.length === 0 ? (
        <p className="text-[15px] text-[#888]">No essays yet.</p>
      ) : (
        <div className="divide-y divide-[#1e2229]">
          {essays.map((essay) => (
            <article key={essay.slug} className="py-8 first:pt-0">
              <p className="text-[11px] font-mono text-[#555] tracking-[0.12em] uppercase mb-2">
                {formatDate(essay.date)}
              </p>
              <h2 className="text-[20px] md:text-[24px] font-semibold text-[#f0f0f0] leading-snug mb-3">
                <Link
                  href={`/essays/${essay.slug}`}
                  className="hover:text-[#E5A11C] transition-colors"
                >
                  {essay.title}
                </Link>
              </h2>
              <p className="text-[15px] text-[#999] leading-relaxed max-w-[640px] mb-4">
                {essay.excerpt}
              </p>
              <Link
                href={`/essays/${essay.slug}`}
                className="text-[13px] text-[#E5A11C] hover:underline transition-colors"
              >
                Read →
              </Link>
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}
