export type Writeup = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd
  tags: string[];
  published: boolean;
  body: string;
};

export const writeups: Writeup[] = [
  {
    slug: "bizease-collaboration-notes",
    title: "Shipping BizEase with a team: collaboration notes",
    excerpt:
      "A short writeup on what went well (and what I learned) while collaborating across different expertise levels to ship an inventory management app frontend.",
    date: "2026-05-10",
    tags: ["Collaboration", "Next.js", "Inventory"],
    published: true,
    body: [
      "BizEase is an inventory management web app we built as a team with different strengths and experience levels. The goal was simple: make business operations easier online — keep stock visible, workflows clear, and the UI consistent as features shipped in parallel.",
      "In team projects, speed comes from alignment. The biggest wins for us were agreeing on component patterns early (buttons/forms/layout), keeping routes and naming consistent, and integrating frequently so we didn’t discover conflicts at the end.",
      "As I keep adding to the Writer lane, I’ll share more notes like this: what I built, how the UX decisions were made, and what I’d tighten next (RBAC, audit logs, and stronger states for data loading and errors).",
    ].join("\n\n"),
  },
];

