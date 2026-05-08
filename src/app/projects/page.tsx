import { projects } from "@/content/projects";
import type { Metadata } from "next";
import ProjectCard from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected builds and engagements—web development with a security-conscious lens.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6">

      <section className="py-32 border-b border-neutral-100 dark:border-neutral-900">
        <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-6 tracking-widest uppercase">
          Selected work
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 leading-tight">
          Projects
        </h1>
        <p className="mt-4 text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed">
          Interfaces I have shipped, tooling I rely on in the lab, and work at the intersection of web delivery and
          practical security.
        </p>
      </section>

      <section className="py-20">
        <div className="divide-y divide-neutral-100 dark:divide-neutral-900">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

    </div>
  );
}
