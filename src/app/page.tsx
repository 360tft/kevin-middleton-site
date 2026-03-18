import Image from "next/image";
import { Section } from "@/components/section";
import { ProductCard } from "@/components/product-card";
import { Testimonial } from "@/components/testimonial";
import { Timeline } from "@/components/timeline";
import { STATS } from "@/lib/constants";
import { products } from "@/data/products";
import { timeline } from "@/data/timeline";
import { playerTestimonials } from "@/data/testimonials";

const featuredTestimonials = playerTestimonials.slice(0, 3);

const COACHING_CLUBS = [
  "Birmingham City",
  "Newcastle United",
  "Arbroath FC",
  "Salford City",
  "Solihull Moors",
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <Section className="pt-28 md:pt-36 pb-0">
        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
          <div className="shrink-0 flex justify-start">
            <div className="relative">
              <Image
                src="/images/kevin-profile.png"
                alt="Kevin Middleton"
                width={160}
                height={160}
                priority
                className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-2xl object-cover"
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ boxShadow: "0 0 0 1px #1e2229" }}
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] font-mono tracking-[0.15em] text-[#E5A11C] uppercase">
                Football Coach · AI Builder
              </span>
            </div>

            <h1 className="text-[32px] md:text-[52px] lg:text-[60px] font-semibold leading-[1.1] tracking-tight text-[#f0f0f0] mb-6 max-w-[800px]">
              15 years coaching.
              <br />
              <span className="text-[#E5A11C]">8 AI products</span> in 5 months.
            </h1>

            <p className="text-[16px] md:text-[18px] text-[#888] leading-relaxed max-w-[620px]">
              UEFA licensed coach. Author. Now building the AI tools that 10,000+ coaches across 40+ countries rely on every week — and helping football organisations do the same.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Stats strip ──────────────────────────────────────────────── */}
      <Section className="py-0 mt-10 md:mt-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1e2229] rounded-xl overflow-hidden border border-[#1e2229]">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#080a0d] px-6 py-5 md:py-7 text-center"
            >
              <div className="text-[26px] md:text-[32px] font-semibold tracking-tight text-[#f0f0f0]">
                {stat.value}
              </div>
              <div className="text-[13px] text-[#555] mt-0.5 uppercase tracking-wider font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Timeline ─────────────────────────────────────────────────── */}
      <Section>
        <div className="mb-10">
          <p className="text-[11px] font-mono tracking-[0.15em] text-[#E5A11C] uppercase mb-3">
            November 2025 → Present
          </p>
          <h2 className="text-[24px] md:text-[34px] font-semibold tracking-tight text-[#f0f0f0]">
            What I built
          </h2>
          <p className="text-[15px] text-[#666] mt-2 max-w-[480px]">
            Eight live products shipped in five months. Each one solving a real problem in football.
          </p>
        </div>

        <Timeline entries={timeline} />
      </Section>

      {/* ── Coaching credibility ─────────────────────────────────────── */}
      <Section className="pt-0">
        <div className="bg-[#111418] border border-[#1e2229] rounded-xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <p className="text-[11px] font-mono tracking-[0.15em] text-[#555] uppercase mb-4">
                Before the AI
              </p>
              <h2 className="text-[22px] md:text-[28px] font-semibold text-[#f0f0f0] mb-4 leading-tight">
                15 years on the pitch first.
              </h2>
              <p className="text-[15px] text-[#777] leading-relaxed mb-6">
                UEFA licensed. Author of <em className="text-[#aaa]">The Rise of the Dogmatic Football Coach</em>. Worked with professional players at every level before stepping away to build the tools coaches actually need.
              </p>
              <p className="text-[13px] text-[#555] mb-2 uppercase tracking-wider font-mono">
                Players coached at
              </p>
              <div className="flex flex-wrap gap-2">
                {COACHING_CLUBS.map((club) => (
                  <span
                    key={club}
                    className="text-[13px] px-3 py-1 rounded-full bg-[#1a1e24] border border-[#2a3040] text-[#aaa]"
                  >
                    {club}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {featuredTestimonials.map((t) => (
                <Testimonial key={t.name} {...t} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Products ─────────────────────────────────────────────────── */}
      <Section className="pt-0">
        <div className="mb-8">
          <p className="text-[11px] font-mono tracking-[0.15em] text-[#555] uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-[24px] md:text-[34px] font-semibold tracking-tight text-[#f0f0f0]">
            Ten live products
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <Section className="pt-0 pb-32">
        <div className="relative overflow-hidden bg-[#111418] border border-[#1e2229] rounded-xl p-10 md:p-14">
          {/* Subtle amber glow */}
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-[0.06] blur-3xl pointer-events-none"
            style={{ backgroundColor: "#E5A11C" }}
          />
          <p className="text-[11px] font-mono tracking-[0.15em] text-[#E5A11C] uppercase mb-4">
            Work with me
          </p>
          <h2 className="text-[24px] md:text-[36px] font-semibold text-[#f0f0f0] mb-4 leading-tight max-w-[560px]">
            I build AI tools for football organisations.
          </h2>
          <p className="text-[16px] text-[#777] mb-8 max-w-[480px] leading-relaxed">
            From a 90-minute strategy call to a fully deployed, branded product. Scottish FA reached out. Your organisation could be next.
          </p>
          <a
            href="/work-with-me"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#E5A11C] text-[#080a0d] text-[14px] font-semibold rounded-full hover:bg-[#d4940f] transition-colors"
          >
            See how it works
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </Section>
    </>
  );
}
