import Image from "next/image";
import { Section } from "@/components/section";
import { ConsultingCard } from "@/components/consulting-card";
import { CredentialsList } from "@/components/credentials-list";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <Section className="pt-28 md:pt-36 pb-12 md:pb-20">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
          <div className="shrink-0">
            <Image
              src="/images/kevin-profile.png"
              alt="Kevin Middleton"
              width={120}
              height={120}
              priority
              className="w-[88px] h-[88px] md:w-[120px] md:h-[120px] rounded-2xl object-cover"
              style={{ boxShadow: "0 0 0 1px #1e2229" }}
            />
          </div>

          <div className="flex-1 max-w-[680px]">
            <h1 className="text-[32px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.1] tracking-tight text-[#f0f0f0] mb-5">
              Kevin Middleton
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#888] leading-relaxed">
              Football coach. AI builder. UEFA licensed. I help clubs, federations, and football founders ship AI products that coaches actually use.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Consulting (William-style single offer) ─────────────────── */}
      <Section id="consulting" className="pt-0 pb-16 md:pb-20">
        <ConsultingCard />
      </Section>

      {/* ── What I have shipped ──────────────────────────────────────── */}
      <Section id="work" className="pt-0 pb-32">
        <div className="mb-8">
          <p className="text-[11px] font-mono tracking-[0.15em] text-[#555] uppercase mb-3">
            What I have shipped
          </p>
          <h2 className="text-[22px] md:text-[28px] font-semibold tracking-tight text-[#f0f0f0]">
            Sixteen things in football, ordered by impact.
          </h2>
        </div>
        <CredentialsList />
      </Section>
    </>
  );
}
