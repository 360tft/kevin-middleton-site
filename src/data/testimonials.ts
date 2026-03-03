export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const playerTestimonials: Testimonial[] = [
  {
    quote:
      "The sessions are high intensity and very technical. This is all a player can ask for when they are looking to improve their game.",
    name: "Marcel Oakley",
    role: "Birmingham City / Solihull Moors",
  },
  {
    quote:
      "Position specific sessions that allowed me to improve on areas I needed. Always high quality and intensity. I've seen an increase in my confidence on game days.",
    name: "Jay Bird",
    role: "Arbroath FC / Salford City",
  },
  {
    quote:
      "Attention to detail in every session. Enthusiasm paired with knowledge delivers enjoyable and beneficial sessions, bringing out the best in every individual.",
    name: "Yasin Ben El-Mhanni",
    role: "Ex-Newcastle United",
  },
  {
    quote:
      "These sessions inspired me to get into the coaching side of football. Communication skills are exemplary. Sessions enjoyable for all.",
    name: "Bobby Linn",
    role: "Arbroath FC",
  },
];

export const coachTestimonials: Testimonial[] = [
  {
    quote:
      "I moved from coaching part-time grassroots to being selected for the Elite Girls pathway at Stevenage FC. The FCA gave me the structure and confidence to make that leap.",
    name: "FCA Member",
    role: "Stevenage FC Elite Girls Pathway",
  },
  {
    quote:
      "The game model alone is worth the membership. 750+ pages of structured age-stage development that I can actually use with my team.",
    name: "FCA Member",
    role: "Grassroots Coach",
  },
];
