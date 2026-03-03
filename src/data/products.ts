export interface Product {
  name: string;
  description: string;
  url: string;
  colour: string;
}

export const products: Product[] = [
  {
    name: "FootballGPT",
    description:
      "AI coaching assistant with 5 modes, 18 specialist advisors, animated drill diagrams, and real stats from 100+ leagues.",
    url: "https://footballgpt.co",
    colour: "#16a34a",
  },
  {
    name: "RefereeGPT",
    description:
      "Duolingo-style referee education. Learn the laws of the game through scenarios and quizzes.",
    url: "https://refereegpt.co",
    colour: "#eab308",
  },
  {
    name: "CoachReflect",
    description:
      "AI-guided coaching journal. Reflect on sessions, track growth, and build your coaching identity.",
    url: "https://coachreflection.com",
    colour: "#10b981",
  },
  {
    name: "CruiseGPT",
    description:
      "AI cruise guide with port information, excursion tips, and personalised itinerary planning.",
    url: "https://360cruising.com",
    colour: "#06b6d4",
  },
  {
    name: "AI Football Marketplace",
    description:
      "MCP gateway and API marketplace for football AI tools. Build your own integrations.",
    url: "https://aifootball.co",
    colour: "#8b5cf6",
  },
  {
    name: "Football Coaching Academy",
    description:
      "1,500+ coach community. Sessions, game models, masterclasses, and direct access to Kevin.",
    url: "https://www.skool.com/coachingacademy",
    colour: "#f97316",
  },
  {
    name: "PlayerReflection",
    description:
      "AI-guided reflection for players. Track development, set goals, and build confidence.",
    url: "https://playreflect.com",
    colour: "#ec4899",
  },
];
