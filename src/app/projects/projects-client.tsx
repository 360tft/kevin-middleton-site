"use client";

import { useCallback, useEffect, useId, useMemo, useState } from "react";

import {
  ACCESS,
  ACCESS_LABELS,
  AUDIENCE_LABELS,
  PRIMARY_AUDIENCES,
  STATUSES,
  STATUS_LABELS,
  TYPES,
  TYPE_LABELS,
  type Access,
  type Audience,
  type ProjectEntry,
  type ProjectType,
  type Status,
} from "@/data/projects";
import {
  EMPTY_FILTERS,
  activeFacetCount,
  countProjects,
  filterProjects,
  isFiltered,
  matchingChildren,
  parseFilterState,
  serialiseFilterState,
  toggle,
  type FilterState,
} from "./filter";
import { ProjectCard } from "./project-card";

const SECONDARY_AUDIENCES = (
  ["club", "cruiser", "couple", "builder", "general"] as const
) satisfies readonly Audience[];

export function ProjectsClient({
  projects,
  initialFilters,
}: {
  projects: ProjectEntry[];
  initialFilters: FilterState;
}) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [moreOpen, setMoreOpen] = useState(
    initialFilters.audience.some((a) => (SECONDARY_AUDIENCES as readonly string[]).includes(a)),
  );
  const [drawerOpen, setDrawerOpen] = useState(false);
  const searchId = useId();

  // Keep the URL in step so a filtered view can be linked and shared, and so
  // browser back and forward move between filter states.
  useEffect(() => {
    const qs = serialiseFilterState(filters);
    const next = qs ? `/projects?${qs}` : "/projects";
    if (next !== window.location.pathname + window.location.search) {
      window.history.pushState(null, "", next);
    }
  }, [filters]);

  useEffect(() => {
    const onPop = () => {
      setFilters(parseFilterState(new URLSearchParams(window.location.search)));
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  const results = useMemo(() => filterProjects(projects, filters), [projects, filters]);
  const counts = useMemo(() => countProjects(projects), [projects]);
  const filtered = isFiltered(filters);
  const facetCount = activeFacetCount(filters);

  const flip = useCallback(
    <K extends "audience" | "access" | "type" | "status">(key: K, value: FilterState[K][number]) => {
      setFilters((prev) => ({ ...prev, [key]: toggle(prev[key] as never[], value as never) }));
    },
    [],
  );

  const clear = useCallback(() => setFilters(EMPTY_FILTERS), []);

  const facets = (
    <>
      <Facet label="Audience">
        {PRIMARY_AUDIENCES.map((audience) => (
          <Chip
            key={audience}
            on={filters.audience.includes(audience)}
            onClick={() => flip("audience", audience)}
          >
            {AUDIENCE_LABELS[audience]}
          </Chip>
        ))}
        <button
          type="button"
          onClick={() => setMoreOpen((open) => !open)}
          aria-expanded={moreOpen}
          className="flex h-[30px] items-center gap-1.5 rounded-full px-3 text-[13px] text-[#7d7d7d] hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          More audiences
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <path d={moreOpen ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} />
          </svg>
        </button>
      </Facet>
      {moreOpen && (
        <Facet label="">
          {SECONDARY_AUDIENCES.map((audience) => (
            <Chip
              key={audience}
              on={filters.audience.includes(audience)}
              onClick={() => flip("audience", audience)}
            >
              {AUDIENCE_LABELS[audience]}
            </Chip>
          ))}
        </Facet>
      )}
      <Facet label="Access">
        {ACCESS.map((access: Access) => (
          <Chip key={access} on={filters.access.includes(access)} onClick={() => flip("access", access)}>
            {ACCESS_LABELS[access]}
          </Chip>
        ))}
      </Facet>
      <Facet label="Type">
        {TYPES.map((type: ProjectType) => (
          <Chip key={type} on={filters.type.includes(type)} onClick={() => flip("type", type)}>
            {TYPE_LABELS[type]}
          </Chip>
        ))}
      </Facet>
      <Facet label="Status">
        {STATUSES.filter((s) => s !== "sold").map((status: Status) => (
          <Chip key={status} on={filters.status.includes(status)} onClick={() => flip("status", status)}>
            {STATUS_LABELS[status]}
          </Chip>
        ))}
      </Facet>
    </>
  );

  return (
    <>
      {/* Desktop: the whole facet set stays visible. */}
      <div className="hidden flex-col gap-4 border-b border-border py-7 md:flex">
        <SearchField
          id={searchId}
          value={filters.q}
          onChange={(q) => setFilters((prev) => ({ ...prev, q }))}
          className="w-[420px]"
        />
        {facets}
      </div>

      {/* Mobile: a compact sticky bar that opens a drawer. */}
      <div className="sticky top-0 z-30 -mx-4 flex items-center gap-2.5 border-y border-border bg-[#0b0d10] px-4 py-3 sm:-mx-6 sm:px-6 md:hidden">
        <SearchField
          id={`${searchId}-m`}
          value={filters.q}
          onChange={(q) => setFilters((prev) => ({ ...prev, q }))}
          className="flex-1"
        />
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          aria-haspopup="dialog"
          className="flex h-9 shrink-0 items-center gap-2 rounded-full border border-[#26282e] px-3.5 text-[13.5px] font-medium hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M3 6h18M6 12h12M10 18h4" />
          </svg>
          Filter{facetCount > 0 ? ` (${facetCount})` : ""}
        </button>
      </div>

      <div className="flex items-baseline justify-between pb-4 pt-6">
        <p
          aria-live="polite"
          className="font-mono text-xs uppercase tracking-[0.12em] text-[#7d7d7d]"
        >
          {filtered ? (
            <>
              <span className="text-foreground">
                {results.length} {results.length === 1 ? "result" : "results"}
              </span>
              {facetCount > 0 && (
                <span> · {facetCount} {facetCount === 1 ? "filter" : "filters"} applied</span>
              )}
            </>
          ) : (
            <>Showing all {counts.listed} · featured and active first</>
          )}
        </p>
        <button
          type="button"
          onClick={clear}
          disabled={!filtered}
          className="rounded-full text-[13px] text-[#3f4247] enabled:text-[#c8c8c8] enabled:hover:text-primary disabled:cursor-default focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Clear filters
        </button>
      </div>

      {results.length === 0 ? (
        <EmptyState filters={filters} onClear={clear} onDrop={flip} />
      ) : (
        <ul className="grid list-none grid-cols-1 gap-5 pb-16 md:grid-cols-2 lg:grid-cols-3">
          {results.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              matchedChildren={matchingChildren(project, filters.q)}
            />
          ))}
        </ul>
      )}

      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end md:hidden">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setDrawerOpen(false)}
            className="flex-1 bg-black/70"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Filter projects"
            className="max-h-[85vh] overflow-y-auto rounded-t-2xl border-t border-[#26282e] bg-[#0d1013] pb-5"
          >
            <div className="mx-auto mt-2.5 h-1 w-9 rounded-full bg-[#2a2d33]" />
            <div className="flex items-center justify-between border-b border-[#1a1d22] px-5 pb-3.5 pt-2">
              <h2 className="text-base font-semibold">Filter</h2>
              <button
                type="button"
                onClick={clear}
                disabled={!filtered}
                className="text-[13px] text-[#3f4247] enabled:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Clear all{facetCount > 0 ? ` (${facetCount})` : ""}
              </button>
            </div>
            <div className="flex flex-col gap-5 px-5 pt-4">{facets}</div>
            <div className="px-5 pt-5">
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="flex h-11 w-full items-center justify-center rounded-full bg-primary text-[14.5px] font-semibold text-primary-foreground active:scale-[0.98] transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Show {results.length} {results.length === 1 ? "result" : "results"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SearchField({
  id,
  value,
  onChange,
  className,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <div className={`flex h-10 items-center gap-3 rounded-full border px-4 ${value ? "border-primary" : "border-[#26282e]"} bg-[#0d1013] ${className ?? ""}`}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={value ? "#E5A11C" : "#6c6c6c"} strokeWidth="2" aria-hidden className="shrink-0">
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-4-4" />
      </svg>
      <label htmlFor={id} className="sr-only">
        Search projects and resources
      </label>
      <input
        id={id}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search name, summary or tag"
        className="w-full bg-transparent text-sm text-foreground placeholder:text-[#6c6c6c] focus:outline-none"
      />
    </div>
  );
}

function Facet({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5 md:flex-row md:items-center md:gap-3.5">
      <p
        className="w-[78px] shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-[#6c6c6c] md:text-[11px]"
        aria-hidden={label === "" ? true : undefined}
      >
        {label}
      </p>
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  );
}

function Chip({
  on,
  onClick,
  children,
}: {
  on: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={[
        "flex h-[34px] items-center gap-2 rounded-full border px-3.5 text-[13.5px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:h-[30px] md:text-[13px]",
        on
          ? "border-primary bg-[#1c1608] pr-2.5 font-medium text-primary"
          : "border-[#26282e] text-[#c8c8c8] hover:border-primary/40",
      ].join(" ")}
    >
      {children}
      {on && (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      )}
    </button>
  );
}

function EmptyState({
  filters,
  onClear,
  onDrop,
}: {
  filters: FilterState;
  onClear: () => void;
  onDrop: <K extends "audience" | "access" | "type" | "status">(
    key: K,
    value: FilterState[K][number],
  ) => void;
}) {
  const drops: Array<{ label: string; drop: () => void }> = [
    ...filters.type.map((type) => ({
      label: TYPE_LABELS[type],
      drop: () => onDrop("type", type),
    })),
    ...filters.access.map((access) => ({
      label: ACCESS_LABELS[access],
      drop: () => onDrop("access", access),
    })),
    ...filters.status.map((status) => ({
      label: STATUS_LABELS[status],
      drop: () => onDrop("status", status),
    })),
  ].slice(0, 2);

  return (
    <div className="flex max-w-[560px] flex-col items-start gap-4 py-16">
      <h2 className="text-2xl font-semibold leading-[34px] tracking-tight">
        Nothing matches all of that at once.
      </h2>
      <p className="text-[15px] leading-[25px] text-[#8b8b8b]">
        Drop one filter and something will. Every project and resource here is real, so a
        combination with no results usually means I have not built that particular thing.
      </p>
      <div className="flex flex-wrap gap-2.5 pt-1.5">
        <button
          type="button"
          onClick={onClear}
          className="flex h-9 items-center rounded-full bg-primary px-4 text-[13.5px] font-semibold text-primary-foreground active:scale-[0.98] transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Clear all filters
        </button>
        {drops.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={item.drop}
            className="flex h-9 items-center gap-2 rounded-full border border-[#26282e] px-4 text-[13.5px] text-[#c8c8c8] hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Remove <b className="font-semibold text-foreground">{item.label}</b>
          </button>
        ))}
      </div>
    </div>
  );
}
