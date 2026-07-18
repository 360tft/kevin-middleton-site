#!/usr/bin/env bash
# Weekly YouTube mirror refresh for kevinmiddleton.360tft.com.
# Root-cause fix for the "one-off script, never scheduled" staleness bug
# (mirror sat stale 2026-06-20 -> 2026-07-18 with no cron wired up).
#
# Always operates against the LATEST origin/main (never a stale/parked
# branch — see reference_host_crons_run_stale_code_from_shared_checkout),
# regenerates src/data/youtube-videos.ts from the live YouTube Data API,
# and commits + pushes ONLY if the content actually changed. Push to main
# triggers Coolify auto-deploy via .github/workflows/deploy.yml.
#
# No human input required: pure data refresh, no HARD-BAN surface.
set -euo pipefail

REPO_DIR=/home/kevin/kevin-middleton-site
LOG_PREFIX="$(date -u +%FT%TZ)"

cd "$REPO_DIR"
git fetch origin main -q
git checkout -q main
git reset --hard origin/main -q

node scripts/gen-youtube-videos.mjs

if git diff --quiet -- src/data/youtube-videos.ts; then
  echo "$LOG_PREFIX no change — mirror already current"
  exit 0
fi

COUNT=$(grep -c '"id":' src/data/youtube-videos.ts || true)
git add src/data/youtube-videos.ts
git commit -q -m "chore(videos): weekly YouTube mirror refresh (${COUNT} videos)

Automated weekly refresh via scripts/refresh-youtube-videos-cron.sh." \
  --author="Kevin Middleton <admin@360tft.com>"
git push -q origin main

echo "$LOG_PREFIX refreshed and pushed — ${COUNT} videos"
