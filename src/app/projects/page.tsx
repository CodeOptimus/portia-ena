import { projects } from "@/content/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Frontend projects and work.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6">

      <section className="py-32 border-b border-neutral-100">
        <p className="text-xs font-mono text-neutral-400 mb-6 tracking-widest uppercase">
          Work
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-neutral-950 leading-tight">
          Projects
        </h1>
        <p className="mt-4 text-neutral-500 max-w-xl leading-relaxed">
          A collection of things I have built — personal projects, client work,
          and experiments.
        </p>
      </section>

      <section className="py-20">
        <div className="divide-y divide-neutral-100">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="py-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono text-neutral-400">
                    {project.year}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-neutral-100 text-neutral-500 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="text-lg font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-neutral-500 max-w-xl leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center gap-6 shrink-0 pt-1">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-neutral-400 hover:text-neutral-900 transition-colors"
                  >
                    Live
                  </a>
                ) : null}
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-neutral-400 hover:text-neutral-900 transition-colors"
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
