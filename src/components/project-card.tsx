"use client";

import { useId, useMemo, useState } from "react";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
  defaultOpen?: boolean;
};

export default function ProjectCard({ project, defaultOpen = false }: Props) {
  const detailsId = useId();
  const [open, setOpen] = useState(defaultOpen);

  const hasDetails = Boolean(
    project.details?.overview ||
      (project.details?.keyFeatures && project.details.keyFeatures.length > 0) ||
      (project.toolsUsed && project.toolsUsed.length > 0) ||
      (project.details?.highlights && project.details.highlights.length > 0) ||
      (project.details?.nextImprovements && project.details.nextImprovements.length > 0) ||
      project.url ||
      project.repo,
  );

  const topMeta = useMemo(() => {
    const meta: string[] = [];
    if (project.category) meta.push(project.category);
    meta.push(project.year);
    return meta.join(" · ");
  }, [project.category, project.year]);

  return (
    <article className="py-10 group">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
        <div className="flex-1 min-w-0">
          {project.role ? (
            <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
              {project.role}
            </p>
          ) : null}

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">{topMeta}</span>
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
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0 pt-1">
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

          {hasDetails ? (
            <button
              type="button"
              aria-expanded={open}
              aria-controls={detailsId}
              onClick={() => setOpen((v) => !v)}
              className="text-xs font-mono text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              {open ? "Hide details" : "Details"}
            </button>
          ) : null}
        </div>
      </div>

      {hasDetails ? (
        <div
          id={detailsId}
          className={cn(
            "mt-6 grid transition-[grid-template-rows,opacity] duration-300 ease-out",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <div className="rounded-2xl border border-neutral-100 dark:border-neutral-900 bg-neutral-50/40 dark:bg-neutral-950/20 p-6">
              {project.details?.overview ? (
                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                    Overview
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed whitespace-pre-line">
                    {project.details.overview}
                  </p>
                </div>
              ) : null}

              {project.toolsUsed && project.toolsUsed.length > 0 ? (
                <div className={cn("mt-6", project.details?.overview ? "" : "mt-0")}>
                  <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                    Tools used
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.toolsUsed.map((tool) => (
                      <li key={tool}>
                        <span className="text-xs px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400">
                          {tool}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {project.details?.keyFeatures && project.details.keyFeatures.length > 0 ? (
                <div className="mt-6">
                  <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                    Key features
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.details.keyFeatures.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {project.details?.highlights && project.details.highlights.length > 0 ? (
                <div className="mt-6">
                  <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                    Highlights
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.details.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {project.details?.nextImprovements && project.details.nextImprovements.length > 0 ? (
                <div className="mt-6">
                  <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                    Next improvements
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.details.nextImprovements.map((n) => (
                      <li key={n} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600 shrink-0" />
                        <span>{n}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
}

