export type SecurityProject = {
    slug: string;
    title: string;
    description: string;
    year: string;
    category: "CTF" | "Tool" | "Research" | "Writeup";
    tags: string[];
    url: string | null;
  };
  
export const securityProjects: SecurityProject[] = [
  {
    slug: "ctf-web-writeup-sample",
    title: "Web challenge walkthrough",
    description:
      "Step-by-step notes: recon, narrowing the bug class, crafting the payload, and documenting so others can reproduce.",
    year: "2025",
    category: "Writeup",
    tags: ["Web", "XSS", "Writeup"],
    url: null,
  },
];