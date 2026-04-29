"use client";

import { useMemo } from "react";
import { useFadeIn } from "@/lib/use-fade-in";
import type { Certification } from "@/content/security-credentials";

function getYearish(value?: string) {
  if (!value) return "";
  const match = value.match(/(19|20)\d{2}/);
  return match ? match[0] : value;
}

export default function CertificationsRim({
  certifications,
  title = "Certifications",
  subtitle = "A quick, visual index—plus a timeline you can verify.",
}: {
  certifications: Certification[];
  title?: string;
  subtitle?: string;
}) {
  const sectionRef = useFadeIn();

  const ordered = useMemo(() => {
    const copy = [...certifications];
    // Sort by year-ish desc, unknowns last.
    copy.sort((a, b) => {
      const ay = getYearish(a.date);
      const by = getYearish(b.date);
      const an = ay ? Number.parseInt(ay, 10) : -1;
      const bn = by ? Number.parseInt(by, 10) : -1;
      return bn - an;
    });
    return copy;
  }, [certifications]);

  const rimItems: Certification[] =
    ordered.length > 0
      ? ordered
      : [
          {
            name: "Add your certifications",
            issuer: "Update `src/content/security-credentials.ts`",
            date: "—",
          },
        ];

  return (
    <section ref={sectionRef} className="py-20 border-b border-neutral-100 dark:border-neutral-900">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 sm:gap-14">
        <div className="sm:col-span-4">
          <h2 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-widest uppercase">
            {title}
          </h2>
          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xs">
            {subtitle}
          </p>
        </div>

        <div className="sm:col-span-8 space-y-10">
          <div className="cert-scroll-fade">
            <div className="cert-scroll" aria-label="Certifications list">
              {rimItems.map((c, idx) => (
                <article key={`${c.name}-${c.issuer}-${idx}`} className="cert-card">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-xs font-mono text-teal-600 dark:text-teal-400 tracking-widest uppercase">
                        {c.issuer}
                      </p>
                      <p className="mt-2 text-sm font-medium text-neutral-950 dark:text-neutral-50 leading-snug">
                        {c.name}
                      </p>
                      <p className="mt-2 text-xs text-neutral-400 dark:text-neutral-500">
                        {c.date ?? "—"}
                        {c.credentialId ? ` · ID: ${c.credentialId}` : ""}
                      </p>
                    </div>
                    {c.credentialUrl ? (
                      <a
                        href={c.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors shrink-0"
                      >
                        Verify
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-5">
              Timeline
            </h3>
            <ol className="divide-y divide-neutral-100 dark:divide-neutral-900 list-none">
              {ordered.map((c) => (
                <li
                  key={`${c.name}-${c.issuer}`}
                  className="py-5 first:pt-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-neutral-950 dark:text-neutral-50">{c.name}</p>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                      {c.issuer}
                      {c.date ? ` · ${c.date}` : null}
                      {c.credentialId ? ` · ${c.credentialId}` : null}
                    </p>
                  </div>
                  {c.credentialUrl ? (
                    <a
                      href={c.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors shrink-0"
                    >
                      View / verify
                    </a>
                  ) : (
                    <span className="text-xs text-neutral-300 dark:text-neutral-700 shrink-0">No public link</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

