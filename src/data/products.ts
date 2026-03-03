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
      "Get session plans, tactical advice, and real stats from 100+ leagues. Answers in seconds, not hours.",
    url: "https://footballgpt.co",
    colour: "#16a34a",
  },
  {
    name: "RefereeGPT",
    description:
      "Pass your referee exams faster. Learn the laws through real match scenarios, not textbooks.",
    url: "https://refereegpt.co",
    colour: "#eab308",
  },
  {
    name: "CoachReflect",
    description:
      "Become a better coach after every session. AI-guided reflection that turns experience into growth.",
    url: "https://coachreflection.com",
    colour: "#10b981",
  },
  {
    name: "CruiseGPT",
    description:
      "Plan the perfect cruise without the research. Port guides, excursion tips, and personalised itineraries on demand.",
    url: "https://360cruising.com",
    colour: "#06b6d4",
  },
  {
    name: "AI Football Marketplace",
    description:
      "Connect football AI tools to your own apps. One API, every product.",
    url: "https://aifootball.co",
    colour: "#8b5cf6",
  },
  {
    name: "Football Coaching Academy",
    description:
      "10,000+ coaches developing better players together. Sessions, game models, and direct access to Kevin.",
    url: "https://www.skool.com/coachingacademy",
    colour: "#f97316",
  },
  {
    name: "PlayerReflection",
    description:
      "Help players see their own progress. AI-guided reflection that builds confidence and self-awareness.",
    url: "https://playreflect.com",
    colour: "#ec4899",
  },
];
