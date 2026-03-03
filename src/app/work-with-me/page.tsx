import type { Metadata } from "next";
import { Section, PageTitle, PageIntro } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { Testimonial } from "@/components/testimonial";
import { coachTestimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Kevin helps clubs, federations, and entrepreneurs bring AI into football coaching. Strategy calls, bootcamps, and custom builds.",
};

const services = [
  {
    title: "Strategy Call",
    price: "\u00A3297",
    description:
      "90-minute call. We assess your situation, identify opportunities, and create an action plan. Whether you want to build an AI tool, integrate AI into your coaching business, or explore what's possible. This is where it starts.",
    colour: "#2563eb",
  },
  {
    title: "Builder Bootcamp",
    price: "$497",
    description:
      "Get the FootballGPT codebase, API access to all products, a 30-day build curriculum, and weekly calls. You build your own AI tool with Kevin's code and guidance.",
    colour: "#10b981",
  },
  {
    title: "Custom AI Build",
    price: "\u00A35K\u201315K+",
    description:
      "Kevin builds your AI tool. Flat fee, revenue share, or white-label license. The commercial model is determined on the strategy call based on your situation.",
    colour: "#f97316",
  },
  {
    title: "Advisory",
    price: "Ongoing",
    description:
      "Strategic support beyond the initial build. Priority access, product direction, and ongoing technical guidance for organisations investing in AI.",
    colour: "#8b5cf6",
  },
];

const avatars = [
  {
    title: "Coaches with an idea",
    description: "You have a concept for an AI tool but can't build it yourself.",
  },
  {
    title: "Coach educators",
    description: "You want to enhance your offering with AI-powered tools.",
  },
  {
    title: "Clubs and academies",
    description: "You want AI integrated into your coaching operations.",
  },
  {
    title: "Federations",
    description: "You want an AI assistant for coach education programmes.",
  },
  {
    title: "Football business owners",
    description: "You have an audience and want an AI product to serve them.",
  },
];

export default function WorkWithMe() {
  return (
    <>
      <Section className="pt-24 md:pt-32">
        <PageTitle>Work with Kevin</PageTitle>
        <PageIntro>
          Kevin helps clubs, federations, and entrepreneurs bring AI into
          football coaching. From a single strategy call to a fully built
          product.
        </PageIntro>
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
          Who this is for
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
        <h2 className="text-[22px] md:text-[28px] font-semibold text-text mb-2">
          Proof it works
        </h2>
        <p className="text-[16px] md:text-[18px] text-text-secondary mb-8">
          Scottish FA approached Kevin about integrating FootballGPT into their
          coach education platform. 1,500+ coaches use the Football Coaching
          Academy. Eight live AI products across football and beyond.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coachTestimonials.map((t) => (
            <Testimonial key={t.name + t.role} {...t} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="bg-[#1a1a1a] rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-[22px] md:text-[28px] font-semibold text-white mb-3">
            Start the conversation
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/70 max-w-[560px] mx-auto mb-6">
            Book a strategy call. Kevin will assess your situation and present
            the right option for you.
          </p>
          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent-blue text-white text-[15px] font-medium rounded-full hover:bg-accent-blue/90 transition-colors"
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
