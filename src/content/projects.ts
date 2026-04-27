export type Project = {
    slug: string;
    title: string;
    description: string;
    year: string;
    tags: string[];
    url: string | null;
    repo: string | null;
  };
  
  export const projects: Project[] = [
    {
      slug: "project-one",
      title: "Project One",
      description: "A short description of what this project does and why it matters.",
      year: "2025",
      tags: ["React", "TypeScript", "API"],
      url: "https://example.com",
      repo: "https://github.com",
    },
  ];