import { securityProjects } from "@/content/security-projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writeups",
  description: "CTF writeups, security research, and tools.",
};

const categories = ["All", "CTF", "Tool", "Research", "Writeup"] as const;

export default function SecurityProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6">

      <section className="py-32 border-b border-neutral-100">
        <p className="text-xs font-mono text-teal-600 mb-6 tracking-widest uppercase">
          Writeups
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-neutral-950 leading-tight">
          Security work
        </h1>
        <p className="mt-4 text-neutral-500 max-w-xl leading-relaxed">
          CTF challenges, vulnerability writeups, and tools I have built
          for offensive and defensive security work.
        </p>
      </section>

      <section className="py-20">
        <div className="divide-y divide-neutral-100">
          {securityProjects.map((project) => (
            <div
              key={project.slug}
              className="py-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono text-neutral-400">
                    {project.year}
                  </span>
                  <span className="text-xs px-2 py-0.5 border border-teal-600 text-teal-600 rounded-full">
                    {project.category}
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
                    className="text-xs font-mono text-neutral-400 hover:text-teal-600 transition-colors"
                  >
                    Read
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
