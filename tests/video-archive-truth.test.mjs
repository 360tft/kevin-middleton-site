import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(
  new URL("../src/app/videos/video-grid.tsx", import.meta.url),
  "utf8",
);

test("public video cards do not publish view counts", () => {
  assert.doesNotMatch(source, /formattedViews|video\.views|\bk views\b/);
  assert.match(source, /\{formattedDate\}/);
});
