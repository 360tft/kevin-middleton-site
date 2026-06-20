import { tweets, type Tweet } from "@/data/tweets";

export type { Tweet };

export function loadTweets(): Tweet[] {
  return tweets;
}
