import { projects } from "@/content/projects";
import type { Metadata } from "next";

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
            <div
              key={project.slug}
              className="py-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 group"
            >
              <div className="flex-1">
                {project.role ? (
                  <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
                    {project.role}
                  </p>
                ) : null}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                    {project.year}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center gap-6 shrink-0 pt-1">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    Live
                  </a>
                ) : null}
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    Repo
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
