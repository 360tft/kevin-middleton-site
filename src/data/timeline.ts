export interface TimelineEntry {
  month: string;
  name: string;
  description: string;
  metric: string;
  colour: string;
  url: string;
}

export const timeline: TimelineEntry[] = [
  {
    month: "Nov 2025",
    name: "FootballGPT",
    description: "Rebuilt with 18 AI advisors, animated drills, and real stats from 100+ leagues.",
    metric: "4,000+ coaches",
    colour: "#16a34a",
    url: "https://footballgpt.co",
  },
  {
    month: "Dec 2025",
    name: "RefereeGPT",
    description: "AI referee training across 5 sports and 9 countries. Gamified exam prep.",
    metric: "5 sports, 9 countries",
    colour: "#eab308",
    url: "https://refereegpt.co",
  },
  {
    month: "Jan 2026",
    name: "CoachReflect",
    description: "AI coaching journal with voice notes, session recordings, and pattern recognition.",
    metric: "3 subscription tiers",
    colour: "#8b5cf6",
    url: "https://coachreflection.com",
  },
  {
    month: "Jan 2026",
    name: "CruiseGPT",
    description: "14 brand advisors, 59,000+ sailings, real-time port and excursion search.",
    metric: "59K+ sailings",
    colour: "#06b6d4",
    url: "https://360cruising.com",
  },
  {
    month: "Feb 2026",
    name: "PlayReflect",
    description: "100% free for players forever. AI-guided reflection that builds confidence.",
    metric: "Free for all players",
    colour: "#ec4899",
    url: "https://playreflect.com",
  },
  {
    month: "Feb 2026",
    name: "AI Football Marketplace",
    description: "Public API gateway connecting football AI tools to any application.",
    metric: "14 tools via MCP",
    colour: "#a855f7",
    url: "https://aifootball.co",
  },
  {
    month: "Feb 2026",
    name: "AI Football Skool",
    description: "Free AI education for football coaches. A 30-day course, prompts, and resources.",
    metric: "200+ members",
    colour: "#3b82f6",
    url: "https://www.skool.com/aifootball",
  },
  {
    month: "Mar 2026",
    name: "Football Coaching Directory",
    description: "Searchable directory of coaches, clubs, and programmes across the UK.",
    metric: "fcd.football",
    colour: "#0ea5e9",
    url: "https://fcd.football",
  },
];
