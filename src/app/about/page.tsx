import type { Metadata } from "next";
import Image from "next/image";
import { Section, PageTitle, PageIntro } from "@/components/section";
import { Testimonial } from "@/components/testimonial";
import { CTACard } from "@/components/cta-card";
import { playerTestimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "About",
  description:
    "From a muddy pitch in Scotland to ten AI tools used by 10,000+ coaches in 40+ countries. This is how it happened.",
};

const credentials = [
  "UEFA Licensed",
  "Author",
  "15+ Years Coaching",
  "10,000+ Coaches",
  "10 Live Products",
  "1,000+ Players",
];

export default function About() {
  return (
    <>
      <Section className="pt-24 md:pt-32">
        <PageTitle>About Kevin</PageTitle>
        <PageIntro>
          Started with zero qualifications on a muddy pitch in Scotland. Now
          building AI tools that 10,000+ coaches rely on every week.
        </PageIntro>
      </Section>

      <Section className="py-0 md:py-0">
        <div className="flex flex-wrap gap-3">
          {credentials.map((c) => (
            <span
              key={c}
              className="text-[13px] md:text-[14px] font-medium text-text bg-card border border-border rounded-full px-4 py-2"
            >
              {c}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-[720px] space-y-12">
          <div>
            <h2 className="text-[20px] md:text-[24px] font-semibold text-text mb-4">
              The beginning
            </h2>
            <div className="space-y-4 text-[16px] md:text-[18px] leading-relaxed text-text-secondary">
              <p>
                In 2010, my son&apos;s coach left. The team was stuck in limbo.
                I had no qualifications, no experience. I just stepped in.
              </p>
              <p>
                I started coaching kids on a muddy pitch in Scotland, planning
                sessions on Sunday nights, copying drills from wherever I could
                find them. My sessions looked good on paper but fell apart with
                real players. Skills practised in training disappeared during
                matches.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-[20px] md:text-[24px] font-semibold text-text mb-4">
              Building the system
            </h2>
            <div className="space-y-4 text-[16px] md:text-[18px] leading-relaxed text-text-secondary">
              <p>
                I spent years figuring out what actually works. I ran two
                football academies, coached at Arbroath FC, and worked with over
                1,000 players. Through all of that, I developed a system that
                bridges the gap between training and matches.
              </p>
              <p>
                At Arbroath FCCT, I was tasked with creating a game model for
                clubs across the town. What started as a 30-page template grew
                into a 750+ page blueprint covering age-stage development,
                resources, knowledge, and sessions. Nobody else had built
                anything like it.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden">
            <Image
              src="/images/kevin-coaching.png"
              alt="Kevin Middleton coaching on the pitch"
              width={720}
              height={720}
              className="w-full h-auto"
            />
          </div>

          <div>
            <h2 className="text-[20px] md:text-[24px] font-semibold text-text mb-4">
              Lockdown
            </h2>
            <div className="space-y-4 text-[16px] md:text-[18px] leading-relaxed text-text-secondary">
              <p>
                When lockdown hit, two things scared me. Losing income, and kids
                falling out of love with football.
              </p>
              <p>
                I went live at 7:30am every morning. Parents sent photos of
                their kids in bedrooms and garages doing ball mastery while
                watching on TV. Hundreds of views at peak. It proved something:
                you can reach more coaches and players online than you ever could
                on one pitch.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-[20px] md:text-[24px] font-semibold text-text mb-4">
              The book
            </h2>
            <div className="space-y-4 text-[16px] md:text-[18px] leading-relaxed text-text-secondary">
              <p>
                I wrote &ldquo;The Rise of the Dogmatic Football Coach&rdquo;
                because younger coaches are drowning in contradictory content
                online. One day it&apos;s &ldquo;no drills, just
                principles&rdquo;. The next it&apos;s &ldquo;20 drills&rdquo;.
                Then &ldquo;200 drills&rdquo;.
              </p>
              <p>
                Confused coaches fall into traps: the Copy-Paste Coach, the
                Closed Coach, the Results-First Coach, the Social Media Coach.
                The book helps coaches figure out who they are and move forward
                with clarity. It&apos;s not anti-anyone. It&apos;s
                pro-self-awareness.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-[20px] md:text-[24px] font-semibold text-text mb-4">
              FootballGPT and beyond
            </h2>
            <div className="space-y-4 text-[16px] md:text-[18px] leading-relaxed text-text-secondary">
              <p>
                I was overwhelmed with questions from coaches. FootballGPT
                removes the delay. Five modes, 18 specialist advisors, animated
                drill diagrams, real stats from 100+ leagues. I learned from
                users, extending Coach Mode to Player Mode, Football Manager
                Mode, Scout Mode, and Goalkeeper Mode.
              </p>
              <p>
                That was the start. Now there are ten live products:
                FootballGPT, RefereeGPT, CoachReflect, CruiseGPT, the AI
                Football Marketplace, PlayerReflection, the Football Coaching
                Academy, and the Football Coaching Directory.
              </p>
              <p>
                I stepped away from pitch coaching to focus on online impact.
                Thousands of coaches daily versus one team weekly. AI is an
                industry disruptor and football coaching is next.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-[22px] md:text-[28px] font-semibold text-text mb-8">
          Professional player endorsements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {playerTestimonials.map((t) => (
            <Testimonial key={t.name} {...t} />
          ))}
        </div>
      </Section>

      <Section>
        <CTACard
          title="Work with Kevin"
          description="Strategy calls, bootcamps, and custom AI builds for football organisations."
          href="/work-with-me"
          label="See options"
        />
      </Section>
    </>
  );
}
