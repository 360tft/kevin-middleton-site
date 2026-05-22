import Image from "next/image";
import { Section } from "@/components/section";
import { ConsultingCard } from "@/components/consulting-card";
import { CredentialsList } from "@/components/credentials-list";
import { CoachingLadder } from "@/components/coaching-ladder";
import { HERO_PRIMARY_CTA, CONSULTING, STORES } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <Section className="pt-28 md:pt-36 pb-12 md:pb-20">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
          <div className="shrink-0">
            <Image
              src="/images/kevin-trophy.jpg"
              alt="Kevin Middleton holding the SWPL 2 trophy with Hamilton Academical Women's"
              width={240}
              height={240}
              priority
              className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] rounded-2xl object-cover"
              style={{ boxShadow: "0 0 0 1px #1e2229" }}
            />
          </div>

          <div className="flex-1 max-w-[680px]">
            <h1 className="text-[32px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.1] tracking-tight text-[#f0f0f0] mb-5">
              Kevin Middleton
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#888] leading-relaxed mb-7">
              Assistant manager when Hamilton Academical Women&apos;s won SWPL 2 in 2024/25. Coached 1,000+ players on the pitch. Built 8 AI products and 4 communities now used by 10,000+ coaches — 8,000+ on FootballGPT alone.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HERO_PRIMARY_CTA.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 bg-[#E5A11C] hover:bg-[#d49417] text-[#0a0c0f] font-semibold text-[14px] rounded-lg transition-colors"
              >
                {HERO_PRIMARY_CTA.label}
              </a>
              <a
                href="#book-a-call"
                className="inline-flex items-center justify-center px-5 py-3 border border-[#1e2229] hover:border-[#2a2f37] text-[#e0e0e0] font-medium text-[14px] rounded-lg transition-colors"
              >
                Book a call — {CONSULTING.price}
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Work (AI) ────────────────────────────────────────────────── */}
      <Section id="work" className="pt-0 pb-16 md:pb-20">
        <div className="mb-6">
          <p className="text-[11px] font-mono tracking-[0.15em] text-[#555] uppercase mb-3">
            Work — AI for football
          </p>
          <h2 className="text-[22px] md:text-[28px] font-semibold tracking-tight text-[#f0f0f0] mb-3">
            For clubs, federations and football founders.
          </h2>
          <p className="text-[15px] text-[#888] leading-relaxed max-w-[640px]">
            Built 8 AI products and 4 communities now used by 10,000+ coaches. FootballGPT alone has 8,000+. If you want to build AI that coaches actually use, this is the work — and the stack — to study.
          </p>
        </div>
        <CredentialsList />
      </Section>

      {/* ── Coaching ─────────────────────────────────────────────────── */}
      <Section id="coaching" className="pt-0 pb-16 md:pb-20">
        <div className="mb-6">
          <p className="text-[11px] font-mono tracking-[0.15em] text-[#555] uppercase mb-3">
            Coaching — for grassroots & academy coaches
          </p>
          <h2 className="text-[22px] md:text-[28px] font-semibold tracking-tight text-[#f0f0f0] mb-3">
            The resources I built across 15 years on the grass.
          </h2>
          <p className="text-[15px] text-[#888] leading-relaxed max-w-[640px]">
            UEFA licensed. Assistant manager when Hamilton Academical Women&apos;s won SWPL 2 in 2024/25. The pack below is what I wish I&apos;d had when I first started coaching.
          </p>
        </div>
        <CoachingLadder />
      </Section>

      {/* ── Book a Call ──────────────────────────────────────────────── */}
      <Section id="book-a-call" className="pt-0 pb-16 md:pb-20">
        <div className="mb-6">
          <p className="text-[11px] font-mono tracking-[0.15em] text-[#555] uppercase mb-3">
            Book a Call — one hour with me direct
          </p>
        </div>
        <ConsultingCard />
      </Section>

      {/* ── About ────────────────────────────────────────────────────── */}
      <Section id="about" className="pt-0 pb-32">
        <div className="mb-6">
          <p className="text-[11px] font-mono tracking-[0.15em] text-[#555] uppercase mb-3">
            About
          </p>
        </div>
        <p className="text-[16px] md:text-[18px] text-[#aaa] leading-relaxed max-w-[720px]">
          UEFA licensed. 15 years in Scottish football, coaching over 1,000 players from age 1 to 70, at grassroots and pro level. Assistant manager at Hamilton Academical Women&apos;s when we won SWPL 2. Head of Pre Academy at Montrose FC. Coached at Arbroath FC, Arbroath FC Women and 360TFT. The resources here are ones I built along the way, that I wish I&apos;d had when I first started coaching.
        </p>
        <p className="text-[14px] text-[#666] leading-relaxed max-w-[720px] mt-6">
          Library of individual coaching resources lives at{" "}
          <a href={STORES.library} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#E5A11C]">
            360tft.com
          </a>
          . The premium system + private WhatsApp access lives at{" "}
          <a href={STORES.premium} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#E5A11C]">
            premium.360tft.com
          </a>
          .
        </p>
      </Section>
    </>
  );
}
