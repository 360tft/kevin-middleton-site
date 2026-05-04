export interface Credential {
  name: string;
  metric: string;
  url?: string;
}

// Ordered most-successful-first. The order is the message:
// paying communities and shipped SaaS at the top, supporting credentials underneath.
export const credentials: Credential[] = [
  {
    name: "Football Coaching Academy",
    metric: "10,000+ paying coaches",
    url: "https://www.skool.com/coachingacademy",
  },
  {
    name: "FootballGPT",
    metric: "4,000+ coaches, AI for coaching",
    url: "https://footballgpt.co",
  },
  {
    name: "The Rise of the Dogmatic Football Coach",
    metric: "Published book",
    url: "https://www.amazon.co.uk/dp/B0GF9VSGKG",
  },
  {
    name: "CoachPower Masterclass with Ray Power",
    metric: "4 lessons × 60 minutes, AI for coaches",
  },
  {
    name: "CoachPa.ge",
    metric: "Coach profile SaaS, paying customers",
    url: "https://coachpa.ge",
  },
  {
    name: "CruiseGPT",
    metric: "59,000+ sailings, 14 AI advisors",
    url: "https://360cruising.com",
  },
  {
    name: "RefereeGPT",
    metric: "5 sports, 9 countries",
    url: "https://refereegpt.co",
  },
  {
    name: "CoachReflect",
    metric: "AI coaching journal",
    url: "https://coachreflection.com",
  },
  {
    name: "AI Football Skool",
    metric: "200+ members, free 30-day course",
    url: "https://www.skool.com/aifootball",
  },
  {
    name: "PlayReflect",
    metric: "100% free for players",
    url: "https://playreflect.com",
  },
  {
    name: "Football Coaching Directory",
    metric: "Searchable directory",
    url: "https://fcd.football",
  },
  {
    name: "AI Football Marketplace",
    metric: "Public API gateway",
    url: "https://aifootball.co",
  },
  {
    name: "The 2 Drill Club",
    metric: "Skool community",
    url: "https://www.skool.com/the-2-drill-club-5017",
  },
  {
    name: "360TFT Skool",
    metric: "Free coaching community",
    url: "https://www.skool.com/360tft-7374",
  },
  {
    name: "Gumroad store",
    metric: "30+ coaching resources",
    url: "https://kev1wired.gumroad.com",
  },
  {
    name: "UEFA Licensed coach",
    metric: "15+ years pro level — Birmingham, Newcastle, Salford",
  },
];
