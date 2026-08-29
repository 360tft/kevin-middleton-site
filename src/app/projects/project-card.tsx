import {
  ACCESS_LABELS,
  AUDIENCE_LABELS,
  RELATIONSHIP_LABELS,
  STATUS_LABELS,
  TYPE_LABELS,
  primaryAction,
  type ProjectEntry,
} from "@/data/projects";

function initials(name: string): string {
  const words = name.replace(/^The\s+/i, "").split(/\s+/).filter(Boolean);
  const letters = words.slice(0, 2).map((word) => word[0]).join("");
  return letters.toUpperCase() || "·";
}

/** Paused, archived and sold work is dimmed so it never reads as a live offer. */
function isQuiet(status: ProjectEntry["status"]): boolean {
  return status === "paused" || status === "archived" || status === "sold";
}

export function ProjectCard({
  project,
  matchedChildren,
}: {
  project: ProjectEntry;
  matchedChildren?: Array<{ name: string; url: string }>;
}) {
  const quiet = isQuiet(project.status);
  const external = project.url.startsWith("http");
  const hit = matchedChildren?.[0];
  const children = project.children ?? [];

  return (
    <li
      className={[
        "flex flex-col gap-3.5 rounded-lg border p-5",
        quiet
          ? "border-[#191b1f] bg-[#0a0c0f]"
          : "bg-[#0d1013] hover:border-primary/40 transition-colors",
        project.featured && !quiet ? "border-[#4a3a14]" : quiet ? "" : "border-border",
      ].join(" ")}
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className={[
            "flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-md border font-mono text-sm",
            quiet
              ? "border-[#1c1e22] bg-[#101317] text-[#3f4247]"
              : project.featured
                ? "border-transparent bg-[#1a1d22] font-medium text-primary"
                : "border-border bg-[#14171b] text-[#4a4d52]",
          ].join(" ")}
        >
          {initials(project.name)}
        </span>
        <h3
          className={[
            "flex-1 text-[17px] font-semibold leading-[23px] tracking-tight",
            quiet ? "text-[#a9a9a9]" : "text-foreground",
          ].join(" ")}
        >
          <a
            href={project.url}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            data-outbound={project.id}
            className="rounded-sm hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {project.name}
          </a>
        </h3>
        <span
          className={[
            "flex h-[22px] shrink-0 items-center rounded-full px-2.5 font-mono text-[10px] uppercase tracking-[0.08em]",
            quiet
              ? "border border-[#2a2d33] text-[#7d7d7d]"
              : "bg-[#1a1d22] text-[#c8c8c8]",
          ].join(" ")}
        >
          {STATUS_LABELS[project.status]}
        </span>
      </div>

      <p className={quiet ? "text-sm leading-[22px] text-[#767676]" : "text-sm leading-[22px] text-[#9a9a9a]"}>
        {project.summary}
      </p>

      {children.length > 0 && (
        <div className="flex flex-col gap-2 rounded-md border border-[#17191d] bg-[#0a0c0f] p-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#5c5c5c]">
            {hit ? "Matched in this family" : `${children.length} in this family`}
          </p>
          <ul className="flex flex-col gap-1.5">
            {children.map((child) => {
              const matched = matchedChildren?.some((c) => c.url === child.url);
              return (
                <li key={child.url} className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className={[
                      "block h-3.5 w-[3px] shrink-0 rounded-sm",
                      matched ? "bg-primary" : "bg-[#1e2229]",
                    ].join(" ")}
                  />
                  <a
                    href={child.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-outbound={`${project.id}:${child.name}`}
                    className={[
                      "rounded-sm text-[12.5px] hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                      matched ? "text-foreground" : "text-[#a8a8a8]",
                    ].join(" ")}
                  >
                    {child.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <ul className="flex flex-1 list-none flex-wrap content-start gap-1.5">
        {project.type.map((type) => (
          <Tag key={`t-${type}`} quiet={quiet}>{TYPE_LABELS[type]}</Tag>
        ))}
        {project.audience.map((audience) => (
          <Tag key={`a-${audience}`} quiet={quiet}>{AUDIENCE_LABELS[audience]}</Tag>
        ))}
        {project.access.map((access) => (
          <Tag key={`x-${access}`} quiet={quiet} free={access === "free"}>
            {ACCESS_LABELS[access]}
          </Tag>
        ))}
      </ul>

      <div
        className={[
          "flex items-center justify-between border-t pt-3.5",
          quiet ? "border-[#17191d]" : "border-[#1a1d22]",
        ].join(" ")}
      >
        <span
          className={[
            "font-mono text-[10px] uppercase tracking-[0.12em]",
            quiet ? "text-[#494949]" : "text-[#5c5c5c]",
          ].join(" ")}
        >
          {RELATIONSHIP_LABELS[project.relationship]}
        </span>
        <a
          href={hit ? hit.url : project.url}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          data-outbound={project.id}
          className={[
            "flex items-center gap-1.5 rounded-sm text-[13px] font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
            quiet ? "text-[#8b8b8b] hover:text-foreground" : "text-primary hover:opacity-80",
          ].join(" ")}
        >
          {hit ? `Get the ${hit.name}` : primaryAction(project)}
          <span className="sr-only"> {project.name}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </a>
      </div>
    </li>
  );
}

function Tag({
  children,
  quiet,
  free,
}: {
  children: React.ReactNode;
  quiet: boolean;
  free?: boolean;
}) {
  return (
    <li
      className={[
        "flex h-[21px] items-center rounded-sm border px-2 text-[11px]",
        quiet
          ? "border-[#1e2024] text-[#6a6a6a]"
          : free
            ? "border-[#3a3320] text-primary"
            : "border-[#24262b] text-[#8b8b8b]",
      ].join(" ")}
    >
      {children}
    </li>
  );
}
