import { tweets, type Tweet } from "@/data/tweets";

export type { Tweet };

/**
 * Returns the full tweet archive.
 * Data is loaded from src/data/tweets.ts (generated from tweethunter_coach_kevin_m.csv).
 */
export function loadTweets(): Tweet[] {
  return tweets;
}
