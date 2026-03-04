import type { Metadata } from "next";
import Image from "next/image";
import { Section, PageTitle, PageIntro } from "@/components/section"
import { ServiceCard } from "@/components/service-card";
export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "You have an idea for an AI tool. Kevin has built ten. One strategy call and you will have a clear plan to build yours.",
};

const services = [
  {
    title: "Strategy Call",
    price: "\u00A3297",
    description:
      "Walk away with a clear plan for your AI tool in 90 minutes. Kevin will assess your idea, show you what's realistic, and map out exactly how to build it. No fluff. Just a plan you can act on.",
    colour: "#E5A11C",
  },
  {
    title: "Builder Bootcamp",
    price: "$497",
    description:
      "Leave with your own working AI tool in 30 days. You get Kevin's actual FootballGPT codebase, API access to every product, and weekly calls to keep you on track.",
    colour: "#10b981",
  },
  {
    title: "Custom AI Build",
    price: "\u00A35K\u201315K+",
    description:
      "Kevin builds it for you. You get a finished AI product, deployed and ready for users. Flat fee, revenue share, or white-label. The right model is decided on your strategy call.",
    colour: "#f97316",
  },
  {
    title: "Advisory",
    price: "Ongoing",
    description:
      "Priority access to Kevin after launch. Product direction, technical guidance, and strategic support so your AI tool keeps growing.",
    colour: "#8b5cf6",
  },
];

const avatars = [
  {
    title: "Coaches with an idea",
    description: "You know what you want to build but you don't have the technical skills. Kevin does.",
  },
  {
    title: "Coach educators",
    description: "Your coaches ask the same questions over and over. An AI tool answers them 24/7.",
  },
  {
    title: "Clubs and academies",
    description: "Your coaches spend hours on admin that AI could handle in minutes.",
  },
  {
    title: "Federations",
    description: "You need to scale coach education without scaling headcount.",
  },
  {
    title: "Football business owners",
    description: "You have the audience. You need the product. Kevin has built ten.",
  },
];

export default function WorkWithMe() {
  return (
    <>
      <Section className="pt-24 md:pt-32">
        <PageTitle>Work With Kevin</PageTitle>
        <PageIntro>
          You have the idea. Kevin has the code, the experience, and eight
          live products to prove it works. One call is all it takes to get
          started.
        </PageIntro>
      </Section>

      <Section>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="shrink-0">
            <Image
              src="/images/kevin-profile.png"
              alt="Kevin Middleton"
              width={160}
              height={160}
              className="w-[120px] h-[120px] md:w-[160px] md:h-[160px]"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            <div className="bg-card rounded-xl p-5 border border-border">
              <p className="text-[13px] font-semibold text-accent-blue uppercase tracking-wide mb-1">
                What you get
              </p>
              <p className="text-[16px] md:text-[18px] font-semibold text-text leading-snug">
                Your own AI tool, live and working
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 border border-border">
              <p className="text-[13px] font-semibold text-accent-blue uppercase tracking-wide mb-1">
                Why it works
              </p>
              <p className="text-[16px] md:text-[18px] font-semibold text-text leading-snug">
                Built by someone who has shipped ten
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 border border-border">
              <p className="text-[13px] font-semibold text-accent-blue uppercase tracking-wide mb-1">
                How fast
              </p>
              <p className="text-[16px] md:text-[18px] font-semibold text-text leading-snug">
                Weeks, not months
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 border border-border">
              <p className="text-[13px] font-semibold text-accent-blue uppercase tracking-wide mb-1">
                Your effort
              </p>
              <p className="text-[16px] md:text-[18px] font-semibold text-text leading-snug">
                You bring the idea. Kevin brings the code.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-[22px] md:text-[28px] font-semibold text-text mb-8">
          Who Kevin Works With
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card rounded-xl overflow-hidden border border-border">
            <Image
              src="/images/ray-power-masterclass.png"
              alt="Ray Power CoachPower masterclass: Coaching in the Future - Get Ahead in the Age of AI, featuring Kevin Middleton"
              width={600}
              height={315}
              className="w-full h-auto"
            />
            <div className="p-5">
              <p className="text-[16px] md:text-[18px] font-semibold text-text mb-1">
                Ray Power &middot; CoachPower
              </p>
              <p className="text-[14px] md:text-[15px] text-text-secondary leading-relaxed">
                Presenting a four-lesson masterclass on AI in football coaching.
                April&ndash;May 2026.
              </p>
            </div>
          </div>
          <div className="bg-card rounded-xl border border-border border-dashed flex items-center justify-center p-8">
            <p className="text-[14px] md:text-[15px] text-text-secondary text-center leading-relaxed">
              More client work and testimonials coming soon.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-[22px] md:text-[28px] font-semibold text-text mb-8">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-[22px] md:text-[28px] font-semibold text-text mb-8">
          Who This Is For
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {avatars.map((avatar) => (
            <div
              key={avatar.title}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <h3 className="text-[16px] md:text-[18px] font-semibold text-text mb-2">
                {avatar.title}
              </h3>
              <p className="text-[14px] md:text-[15px] text-text-secondary leading-relaxed">
                {avatar.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="bg-[#1a1a1a] rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-[22px] md:text-[28px] font-semibold text-white mb-3">
            One call. A clear plan.
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/70 max-w-[560px] mx-auto mb-6">
            90 minutes with someone who has built ten AI products from scratch.
            You will leave with a plan, not a pitch.
          </p>
          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent-blue text-[#1a1a1a] text-[15px] font-medium rounded-full hover:bg-accent-blue/90 transition-colors"
          >
            Book a strategy call
          </a>
          <p className="text-[13px] text-white/50 mt-4">
            The call costs &pound;297 and lasts 90 minutes.
          </p>
        </div>
      </Section>
    </>
  );
}
