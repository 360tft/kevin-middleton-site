import {
  ACCESS,
  AUDIENCES,
  PROJECTS,
  STATUSES,
  TYPES,
  type Access,
  type Audience,
  type ProjectEntry,
  type ProjectType,
  type Status,
} from "@/data/projects";

export type FilterState = {
  q: string;
  audience: Audience[];
  access: Access[];
  type: ProjectType[];
  status: Status[];
};

export const EMPTY_FILTERS: FilterState = {
  q: "",
  audience: [],
  access: [],
  type: [],
  status: [],
};

export function isFiltered(state: FilterState): boolean {
  return (
    state.q.trim().length > 0 ||
    state.audience.length > 0 ||
    state.access.length > 0 ||
    state.type.length > 0 ||
    state.status.length > 0
  );
}

export function activeFacetCount(state: FilterState): number {
  return (
    state.audience.length +
    state.access.length +
    state.type.length +
    state.status.length +
    (state.q.trim() ? 1 : 0)
  );
}

/** Text a search query is matched against, including family children. */
function haystack(entry: ProjectEntry): string {
  return [
    entry.name,
    entry.summary,
    ...entry.type,
    ...entry.audience,
    ...entry.access,
    entry.status,
    ...(entry.children ?? []).map((child) => child.name),
  ]
    .join(" ")
    .toLowerCase();
}

/** Family children whose own name matches the query. */
export function matchingChildren(
  entry: ProjectEntry,
  q: string,
): Array<{ name: string; url: string }> {
  const needle = q.trim().toLowerCase();
  if (!needle || !entry.children) return [];
  return entry.children.filter((child) =>
    child.name.toLowerCase().includes(needle),
  );
}

/**
 * OR within a facet, AND between facets. An entry carrying both `free` and
 * `paid` matches either access filter - freemium work is never hidden by
 * asking for the free things.
 */
export function matches(entry: ProjectEntry, state: FilterState): boolean {
  const needle = state.q.trim().toLowerCase();
  if (needle && !haystack(entry).includes(needle)) return false;
  if (
    state.audience.length > 0 &&
    !state.audience.some((a) => entry.audience.includes(a))
  ) {
    return false;
  }
  if (
    state.access.length > 0 &&
    !state.access.some((a) => entry.access.includes(a))
  ) {
    return false;
  }
  if (state.type.length > 0 && !state.type.some((t) => entry.type.includes(t))) {
    return false;
  }
  if (state.status.length > 0 && !state.status.includes(entry.status)) {
    return false;
  }
  return true;
}

const STATUS_RANK: Record<Status, number> = {
  active: 0,
  beta: 1,
  experiment: 2,
  paused: 3,
  archived: 4,
  sold: 5,
};

/**
 * Featured first, then live work, then the paused and archived history. Ties
 * break on name so the order is deterministic and testable.
 */
export function sortProjects(entries: ProjectEntry[]): ProjectEntry[] {
  return [...entries].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    const rank = STATUS_RANK[a.status] - STATUS_RANK[b.status];
    if (rank !== 0) return rank;
    return a.name.localeCompare(b.name, "en-GB");
  });
}

export function filterProjects(
  entries: ProjectEntry[],
  state: FilterState,
): ProjectEntry[] {
  return sortProjects(entries.filter((entry) => matches(entry, state)));
}

export type Counts = {
  listed: number;
  active: number;
  free: number;
  pausedOrArchived: number;
};

export function countProjects(entries: ProjectEntry[]): Counts {
  return {
    listed: entries.length,
    active: entries.filter((e) => e.status === "active").length,
    free: entries.filter((e) => e.access.includes("free")).length,
    pausedOrArchived: entries.filter(
      (e) => e.status === "paused" || e.status === "archived",
    ).length,
  };
}

// ---------------------------------------------------------------- URL state

function readList<T extends string>(
  raw: string | string[] | undefined,
  allowed: readonly T[],
): T[] {
  if (!raw) return [];
  const parts = (Array.isArray(raw) ? raw : [raw])
    .flatMap((value) => value.split(","))
    .map((value) => value.trim().toLowerCase());
  return allowed.filter((option) => parts.includes(option));
}

export function parseFilterState(
  params: Record<string, string | string[] | undefined> | URLSearchParams,
): FilterState {
  const get = (key: string) =>
    params instanceof URLSearchParams
      ? (params.get(key) ?? undefined)
      : params[key];
  const q = get("q");
  return {
    q: typeof q === "string" ? q : "",
    audience: readList(get("audience"), AUDIENCES),
    access: readList(get("access"), ACCESS),
    type: readList(get("type"), TYPES),
    status: readList(get("status"), STATUSES),
  };
}

/** Stable key order so the same filter selection always produces one URL. */
export function serialiseFilterState(state: FilterState): string {
  const params = new URLSearchParams();
  if (state.q.trim()) params.set("q", state.q.trim());
  if (state.audience.length) params.set("audience", state.audience.join(","));
  if (state.access.length) params.set("access", state.access.join(","));
  if (state.type.length) params.set("type", state.type.join(","));
  if (state.status.length) params.set("status", state.status.join(","));
  return params.toString();
}

export function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

export const ALL_PROJECTS_SORTED = sortProjects(PROJECTS);
