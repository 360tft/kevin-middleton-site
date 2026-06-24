export interface Essay {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
}

export const essays: Essay[] = [
  {
    slug: "what-10000-grassroots-coaches-actually-use-ai-for",
    title: "What 10,000 grassroots coaches actually use AI for",
    date: "2026-06-24",
    excerpt:
      "We pulled 14,773 messages from FootballGPT. The answer is not what most people writing about AI in sport assume.",
    body: `Football coaching has an information problem. Not a knowledge problem.

That distinction matters. And the data from 14,773 coach messages shows it clearly.

---

For the last year, I have been watching what 10,000+ grassroots coaches actually do with AI. Not what they say they do. Not what the coaching education sector assumes they do. What they type into a chat window at half-time on a Tuesday night, or after training when they're trying to work out what went wrong.

We pulled the full message history from FootballGPT and ran the numbers. Every message was categorised as either an execution request (help me do the thing) or a knowledge request (help me understand the concept).

The ratio: 5.4 to 1. Execution to knowledge.

Five messages asking "can you give me a 4-6-1 rondo for my U12s" for every one asking "why does a 4-6-1 work structurally."

Tactics and formations: 1,993 messages. How-to and help requests: 763. Drills: 539. Session plans: 500.

---

Here is what this inverts.

The entire coaching education industry operates on the assumption that the gap is knowledge. The coach does not know enough. So we teach them more. More badges. More courses. More models. More theory. More CPD hours that might or might not connect to what happens on grass in the rain on a Thursday evening.

The data says that is the wrong diagnosis.

The coaches using FootballGPT are not asking it to teach them football. They know football. They are asking it to close the gap between what they know and what they can execute, in the time and energy they actually have.

They know a 4-3-3 works for their team. They need the session that builds the wide forward's movement, designed around six players, runnable in 25 minutes with the equipment they have. They need that on Wednesday evening. Not a theory seminar about positional play.

The gap is execution, not knowledge.

---

This is not a comfortable finding for coaching education, including my own 15 years in it.

The traditional model — badge by badge, module by module — is excellent at delivering knowledge. Coaches leave with better concepts. The best coaches leave and apply those concepts. Most coaches leave and face the gap: they know it, but applying it takes time and planning resource they do not have.

AI does not replace that conceptual foundation. But it closes the execution gap in a way that no amount of CPD ever could.

The coach who knows their players need more ball mastery in transition zones, but cannot sit down for three hours to design the week's sessions around it — that coach, with AI, can now bridge the knowing-doing gap in ten minutes.

---

I am not making a marketing argument for FootballGPT here. The point is structural.

Football coaching education has been solving for knowledge transfer for 40 years because that was the solvable problem. You can design a course. You can run a seminar. You cannot, historically, give every grassroots coach a planning partner who knows their team, their constraints, and their level.

Now you can.

The question for everyone in coaching education is not "how do we teach coaches about AI." It is "what do we teach now that AI handles the execution load?"

That is a harder question. I do not have a complete answer yet. But 14,773 messages tell me the industry needs to start asking it.

---

*FootballGPT is used by 10,000+ grassroots coaches. Data is from the last 90 days of chat history, categorised by message intent.*`,
  },
];

export function getEssayBySlug(slug: string): Essay | undefined {
  return essays.find((e) => e.slug === slug);
}

export function getAllEssaySlugs(): string[] {
  return essays.map((e) => e.slug);
}
