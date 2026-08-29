import assert from "node:assert/strict";
import test from "node:test";

import { PROJECTS, type ProjectEntry } from "@/data/projects";
import {
  EMPTY_FILTERS,
  activeFacetCount,
  countProjects,
  filterProjects,
  matchingChildren,
  parseFilterState,
  serialiseFilterState,
  sortProjects,
  toggle,
} from "./filter.ts";

const entry = (over: Partial<ProjectEntry>): ProjectEntry => ({
  id: "x",
  name: "X",
  summary: "s",
  url: "https://example.com",
  relationship: "built",
  type: ["app"],
  audience: ["coach"],
  access: ["free"],
  status: "active",
  featured: false,
  publicEvidence: "test",
  verifiedAt: "2026-08-29",
  ...over,
});

test("OR within a facet: coach OR player returns entries serving either", () => {
  const entries = [
    entry({ id: "a", audience: ["coach"] }),
    entry({ id: "b", audience: ["player"] }),
    entry({ id: "c", audience: ["referee"] }),
  ];
  const got = filterProjects(entries, {
    ...EMPTY_FILTERS,
    audience: ["coach", "player"],
  });
  assert.deepEqual(got.map((e) => e.id).sort(), ["a", "b"]);
});

test("AND between facets: (coach OR player) AND free AND active", () => {
  const entries = [
    entry({ id: "keep", audience: ["coach"], access: ["free"], status: "active" }),
    entry({ id: "paid-only", audience: ["coach"], access: ["paid"], status: "active" }),
    entry({ id: "paused", audience: ["player"], access: ["free"], status: "paused" }),
    entry({ id: "referee", audience: ["referee"], access: ["free"], status: "active" }),
  ];
  const got = filterProjects(entries, {
    ...EMPTY_FILTERS,
    audience: ["coach", "player"],
    access: ["free"],
    status: ["active"],
  });
  assert.deepEqual(got.map((e) => e.id), ["keep"]);
});

test("free and paid are independent: a freemium entry appears under both", () => {
  const freemium = entry({ id: "freemium", access: ["free", "paid"] });
  const others = [entry({ id: "free", access: ["free"] }), entry({ id: "paid", access: ["paid"] })];
  const all = [freemium, ...others];

  const free = filterProjects(all, { ...EMPTY_FILTERS, access: ["free"] });
  const paid = filterProjects(all, { ...EMPTY_FILTERS, access: ["paid"] });

  assert.ok(free.some((e) => e.id === "freemium"), "freemium missing from Free available");
  assert.ok(paid.some((e) => e.id === "freemium"), "freemium missing from Paid");
});

test("search matches family children, and reports which child matched", () => {
  const family = entry({
    id: "boards",
    name: "Editable Tactics Boards",
    children: [
      { name: "7-a-side board", url: "https://example.com/7" },
      { name: "9-a-side board", url: "https://example.com/9" },
    ],
  });
  const got = filterProjects([family, entry({ id: "other", name: "Something else" })], {
    ...EMPTY_FILTERS,
    q: "9-a-side",
  });
  assert.deepEqual(got.map((e) => e.id), ["boards"]);
  assert.deepEqual(matchingChildren(family, "9-a-side").map((c) => c.name), [
    "9-a-side board",
  ]);
});

test("an unknown facet value is ignored rather than emptying the page", () => {
  const state = parseFilterState({ audience: "coach,wizard", access: "gratis" });
  assert.deepEqual(state.audience, ["coach"]);
  assert.deepEqual(state.access, []);
});

test("filter state round-trips through the query string", () => {
  const state = parseFilterState({ audience: "coach", access: "free", q: "compass" });
  const qs = serialiseFilterState(state);
  assert.deepEqual(parseFilterState(new URLSearchParams(qs)), state);
  assert.equal(activeFacetCount(state), 3);
});

test("ordering is deterministic: featured, then live, then paused history", () => {
  const entries = [
    entry({ id: "archived", name: "Z", status: "archived" }),
    entry({ id: "featured", name: "Z", featured: true, status: "beta" }),
    entry({ id: "active-b", name: "B", status: "active" }),
    entry({ id: "active-a", name: "A", status: "active" }),
    entry({ id: "paused", name: "A", status: "paused" }),
  ];
  assert.deepEqual(sortProjects(entries).map((e) => e.id), [
    "featured",
    "active-a",
    "active-b",
    "paused",
    "archived",
  ]);
  // Sorting the same input twice must not reorder it.
  assert.deepEqual(sortProjects(entries), sortProjects(sortProjects(entries)));
});

test("every registry entry has a working-shaped URL and dated evidence", () => {
  for (const project of PROJECTS) {
    assert.ok(
      project.url.startsWith("https://") || project.url.startsWith("/"),
      `${project.id} has no public URL`,
    );
    assert.match(project.verifiedAt, /^\d{4}-\d{2}-\d{2}$/, `${project.id} evidence date`);
    assert.ok(project.publicEvidence.length > 10, `${project.id} evidence is thin`);
    assert.ok(project.access.length > 0, `${project.id} has no access facet`);
    assert.ok(project.audience.length > 0, `${project.id} has no audience`);
    assert.ok(project.type.length > 0, `${project.id} has no type`);
  }
});

test("registry ids are unique", () => {
  const ids = PROJECTS.map((p) => p.id);
  assert.equal(new Set(ids).size, ids.length);
});

test("counts describe the real registry", () => {
  const counts = countProjects(PROJECTS);
  assert.equal(counts.listed, PROJECTS.length);
  assert.ok(counts.free > 0);
  assert.ok(counts.active > 0);
});

test("toggle adds then removes", () => {
  assert.deepEqual(toggle<string>([], "coach"), ["coach"]);
  assert.deepEqual(toggle(["coach", "player"], "coach"), ["player"]);
});
