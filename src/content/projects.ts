export type Project = {
  slug: string;
  /** Shown above the title, e.g. role or engagement type */
  role?: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
  url: string | null;
  repo: string | null;
};

export const projects: Project[] = [
  {
    slug: "portfolio-platform",
    role: "Lead developer",
    title: "Portfolio & dual-site platform",
    description:
      "This site—fast React/Next UI with a dedicated security corner for writeups, certs, and research.",
    year: "2026",
    tags: ["Next.js", "React", "AppSec"],
    url: null,
    repo: "https://github.com/CodeOptimus",
  },
  {
    slug: "secure-product-work",
    role: "Frontend engineer · security-minded delivery",
    title: "Web apps with defense in depth",
    description:
      "Shipping product UI while baking in sensible auth, headers, dependency hygiene, and review-friendly patterns.",
    year: "2025",
    tags: ["TypeScript", "APIs", "OWASP-minded"],
    url: null,
    repo: null,
  },
  {
    slug: "labs-and-tooling",
    role: "Security tooling & labs",
    title: "Scripts, labs, and CTF workflow",
    description:
      "Automation and small tools that speed up recon, parsing, and repeatable checks during hands-on practice.",
    year: "2025",
    tags: ["Python", "CTF", "Automation"],
    url: null,
    repo: null,
  },
];