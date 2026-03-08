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
    name: "PlayReflect",
    description:
      "100% free for players, forever. AI-guided reflection that builds confidence and self-awareness. Team plans for coaches.",
    url: "https://playreflect.com",
    colour: "#ec4899",
  },
  {
    name: "Football Coaching Directory",
    description:
      "Find the right coach, club, or programme near you. A searchable directory for the football coaching community.",
    url: "https://fcd.football",
    colour: "#0ea5e9",
  },
  {
    name: "360TFT",
    description:
      "Free football coaching resources, blog content, and the gateway to the full 360TFT ecosystem.",
    url: "https://360tft.com",
    colour: "#E5A11C",
  },
  {
    name: "AI Football Skool",
    description:
      "Free AI education for football coaches. A 30-day course, prompts, resources, and a builder bootcamp.",
    url: "https://www.skool.com/aifootball",
    colour: "#3b82f6",
  },
];
