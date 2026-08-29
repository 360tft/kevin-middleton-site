import type { Metadata } from "next";

import { PROJECTS } from "@/data/projects";
import { SITE } from "@/lib/constants";
import { ALL_PROJECTS_SORTED, countProjects, parseFilterState } from "./filter";
import { ProjectsClient } from "./projects-client";

const TITLE = "Projects by Kevin Middleton";
const DESCRIPTION =
  "Every app, resource, community, book and tool Kevin Middleton has built and published, in one place. Filter by who it is for, whether it is free or paid, and what state it is in.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}/projects` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/projects`,
    type: "website",
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

/**
 * The ItemList always carries the complete registry, whatever is filtered in
 * the view, so search engines and agents see the whole portfolio without
 * running the filter JavaScript. Factual fields only: no offers, no prices,
 * no aggregate ratings, no invented founding dates.
 */
function structuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/projects`,
    about: { "@type": "Person", name: "Kevin Middleton", url: SITE.url },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: ALL_PROJECTS_SORTED.length,
      itemListElement: ALL_PROJECTS_SORTED.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.name,
          description: project.summary,
          url: project.url.startsWith("http") ? project.url : `${SITE.url}${project.url}`,
          genre: project.type,
          audience: project.audience.map((audience) => ({
            "@type": "Audience",
            audienceType: audience,
          })),
          creator: { "@type": "Person", name: "Kevin Middleton", url: SITE.url },
        },
      })),
    },
  };
}

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const initialFilters = parseFilterState(await searchParams);
  const counts = countProjects(PROJECTS);

  return (
    <main className="container mx-auto px-4 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()) }}
      />

      <div className="mx-auto w-full max-w-[1200px]">
        <header className="max-w-[760px] pt-20 md:pt-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#666]">
            Kevin Middleton · Coach educator and builder
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-[56px] md:leading-[60px]">
            {TITLE}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#9a9a9a] md:text-lg md:leading-[29px]">
            Everything I have built and published, in one place. Football coaching, AI, player
            development, refereeing, travel and the odd experiment. Filter it by who it is for,
            whether it is free or paid, and what state it is actually in.
          </p>
        </header>

        <dl className="flex flex-wrap gap-x-10 gap-y-6 border-b border-border pb-8 pt-10 md:gap-x-14 md:pt-11">
          <Count value={counts.listed} label="Listed" />
          <Count value={counts.active} label="Active" />
          <Count value={counts.free} label="Free available" gold />
          <Count value={counts.pausedOrArchived} label="Paused or archived" />
        </dl>

        <ProjectsClient projects={ALL_PROJECTS_SORTED} initialFilters={initialFilters} />
      </div>
    </main>
  );
}

function Count({ value, label, gold }: { value: number; label: string; gold?: boolean }) {
  return (
    <div>
      <dd
        className={`font-mono text-2xl font-medium tabular-nums tracking-tight md:text-3xl ${gold ? "text-primary" : "text-foreground"}`}
      >
        {value}
      </dd>
      <dt className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#6c6c6c]">
        {label}
      </dt>
    </div>
  );
}
