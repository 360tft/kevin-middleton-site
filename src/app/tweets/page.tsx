import { Metadata } from "next";
import { Section, PageTitle, PageIntro } from "@/components/section";
import { TweetsClient } from "./tweets-client";
import { loadTweets } from "./load-tweets";

export const metadata: Metadata = {
  title: "Tweets",
  description:
    "An archive of Kevin Middleton's tweets on football coaching, AI, and building in public.",
};

export default function TweetsPage() {
  const tweets = loadTweets();

  return (
    <Section className="pt-28 md:pt-36 pb-32">
      <div className="mb-10">
        <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#E5A11C] mb-3">
          Archive
        </p>
        <PageTitle>Tweets</PageTitle>
        <PageIntro>
          {tweets.length} posts on coaching, AI, and building in public.
          A record of the thinking, not a highlight reel.
        </PageIntro>
      </div>

      <TweetsClient tweets={tweets} />
    </Section>
  );
}
