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
      slug: "ctf-challenge-one",
      title: "CTF Challenge Name",
      description: "Brief description of the vulnerability exploited or technique used.",
      year: "2025",
      category: "CTF",
      tags: ["Web", "XSS", "OWASP"],
      url: null,
    },
  ];