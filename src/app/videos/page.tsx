import { Metadata } from "next";
import { Section, PageTitle, PageIntro } from "@/components/section";
import { youtubeVideos } from "@/data/youtube-videos";
import { VideoGrid } from "./video-grid";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "YouTube videos from Kevin Middleton on football coaching, player development, and building AI for football.",
};

export default function VideosPage() {
  return (
    <Section className="pt-28 md:pt-36 pb-32">
      <div className="mb-10">
        <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#E5A11C] mb-3">
          Archive
        </p>
        <PageTitle>Videos</PageTitle>
        <PageIntro>
          Coaching content, AI in football, and building in public — all on the{" "}
          <a
            href="https://www.youtube.com/@360TFT"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#E5A11C] transition-colors"
          >
            @360TFT YouTube channel
          </a>
          .
        </PageIntro>
      </div>

      {youtubeVideos.length === 0 ? (
        <EmptyState />
      ) : (
        <VideoGrid videos={youtubeVideos} />
      )}
    </Section>
  );
}

function EmptyState() {
  return (
    <div className="border border-[#1e2229] rounded-xl p-8 md:p-12 max-w-[560px]">
      <p className="text-[13px] font-mono uppercase tracking-[0.15em] text-[#555] mb-3">
        Coming soon
      </p>
      <p className="text-[15px] text-[#888] leading-relaxed mb-4">
        This archive is being populated. In the meantime, the full video library lives on YouTube.
      </p>
      <a
        href="https://www.youtube.com/@360TFT"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-[14px] text-[#E5A11C] hover:underline transition-colors"
      >
        Watch on YouTube →
      </a>
    </div>
  );
}
