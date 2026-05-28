export const SITE = {
  name: "Kevin Middleton",
  title: "Kevin Middleton — UEFA-licensed coach. SWPL 2 winners 2024/25. Built 8 AI products for football.",
  description:
    "Assistant manager when Hamilton Academical Women's won SWPL 2 in 2024/25. Built 8 AI products used by 10,000+ coaches. Get the free Small-Sided Games cheat sheet, or work with me 1-on-1.",
  url: "https://kevinmiddleton.360tft.com",
} as const;

export const SOCIAL = {
  twitter: "https://x.com/coach_kevin_m",
  twitterBrand: "https://x.com/360_tft",
  instagram: "https://www.instagram.com/coach_kevin_middleton",
  linkedin: "https://www.linkedin.com/in/kevinmiddleton82/",
  youtube: "https://www.youtube.com/@360TFT",
  telegram: "https://t.me/+eO5eH4JTL01iYTJk",
  whatsapp: "https://chat.whatsapp.com/KLGVG3ro1npHC5mHiI0Pmq",
  email: "admin@360tft.com",
} as const;

export const CONSULTING = {
  title: "Book a Call",
  price: "$250/hr",
  headline: "One focused hour with someone who has built and coached at the same time.",
  differentiator:
    "Most AI consultants do not know coaching. I do. I will tell you why your tool is not landing with coaches and exactly what to change so it does.",
  whatYouGet: [
    "A build plan: stack, prompts, costs, and what to skip",
    "Why your product is not landing with coaches, and how to fix it",
    "A straight answer on the next move: build, hire, or kill it",
    "Message access after the call for quick second opinions",
  ],
  howIWork: [
    "Eight live AI products in football, so the answers come from real builds, not theory",
    "You leave with a plan you can action that week, not a slide deck or a report",
  ],
  ctaLabel: "Book a call",
  ctaUrl: "https://cal.com/coachkevinm/consultation",
} as const;

const UTM = "utm_source=kevinsite";

export const COACHING_LADDER = [
  {
    tier: "Free",
    name: "The Small-Sided Games Cheat Sheet",
    price: "Free",
    blurb: "The drill structure every grassroots coach should know by heart. Start here.",
    url: `https://premium.360tft.com/l/ssg-cheat-sheet?${UTM}&utm_medium=coaching-section&utm_campaign=ssg-cheat-sheet`,
  },
  {
    tier: "$20",
    name: "Tomorrow's Session Sorted",
    price: "$20",
    blurb: "282 ready-to-run sessions across technical, ball mastery, 1v1, match-based, tactical, and finishing. Planning your next session at 10pm becomes a 30-second job.",
    url: `https://premium.360tft.com/l/tomorrows-session-sorted?${UTM}&utm_medium=coaching-section&utm_campaign=sessions`,
  },
  {
    tier: "$40",
    name: "Your Team's Game Model",
    price: "$40",
    blurb: "The full Master The Game / Ball / Opponent set, plus the Grassroots Pack. A model to guide your team through every age and stage.",
    url: `https://premium.360tft.com/l/your-teams-game-model?${UTM}&utm_medium=coaching-section&utm_campaign=game-model`,
  },
  {
    tier: "$100",
    name: "Coach Direct",
    price: "$100",
    blurb: "Two months of private WhatsApp access. Ask me anything, any day, same-day reply. Most direct way to work with me.",
    url: `https://premium.360tft.com/l/coach-direct?${UTM}&utm_medium=coaching-section&utm_campaign=coach-direct`,
  },
] as const;

export const HERO_CHEAT_SHEET_CTA = {
  label: "Free coaching cheat sheet",
  url: `https://premium.360tft.com/l/ssg-cheat-sheet?${UTM}&utm_medium=hero&utm_campaign=ssg-leadmagnet`,
} as const;

export const STORES = {
  library: "https://360tft.com",
  premium: "https://premium.360tft.com",
} as const;
