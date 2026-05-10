"use client";

import { useMemo } from "react";
import { useFadeIn } from "@/lib/use-fade-in";
import type { Certification } from "@/content/security-credentials";
import Image from "next/image";

function getYearish(value?: string) {
  if (!value) return "";
  const match = value.match(/(19|20)\d{2}/);
  return match ? match[0] : value;
}

function getInitials(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "?";
  const parts = trimmed.split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const second = (parts.length > 1 ? parts[1]?.[0] : parts[0]?.[1]) ?? "";
  return (first + second).toUpperCase() || trimmed.slice(0, 2).toUpperCase();
}

function CertCardWrapper({
  cert,
  children,
}: {
  cert: Certification;
  children: React.ReactNode;
}) {
  if (!cert.credentialUrl) {
    return <article className="cert-milestone-card">{children}</article>;
  }

  return (
    <a
      href={cert.credentialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block cert-milestone-card cursor-pointer"
      aria-label={`View credential: ${cert.name}`}
    >
      {children}
    </a>
  );
}

export default function CertificationsRim({
  certifications,
  title = "Certifications",
  subtitle = "Clickable cards—open Credly / verify links.",
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

  const milestones: Certification[] =
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

        <div className="sm:col-span-8">
          <div className="cert-vtimeline" aria-label="Certifications timeline">
            <ol className="cert-vtimeline-track list-none">
              {milestones.map((c, idx) => {
                const year = getYearish(c.date) || "—";
                const side = idx % 2 === 0 ? "cert-left" : "cert-right";
                return (
                  <li key={`${c.name}-${c.issuer}-${idx}`} className={`cert-vitem ${side}`}>
                    <div className="cert-vrail" aria-hidden="true">
                      <span className="cert-dot" />
                      <span className="cert-year">{year}</span>
                    </div>

                    <CertCardWrapper cert={c}>
                      <div className="flex items-start gap-3">
                        {c.issuerLogoUrl?.trim() ? (
                          <Image
                            src={c.issuerLogoUrl.trim()}
                            alt={`${c.issuer} logo`}
                            className="cert-issuer-logo"
                            width={40}
                            height={40}
                            unoptimized={c.issuerLogoUrl.trim().toLowerCase().endsWith(".svg")}
                          />
                        ) : (
                          <div className="cert-issuer-fallback" aria-hidden="true">
                            {getInitials(c.issuer)}
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 tracking-widest uppercase">
                            {c.issuer}
                          </p>
                          <p className="mt-2 text-sm font-semibold text-neutral-950 dark:text-neutral-50 leading-snug">
                            {c.name}
                          </p>
                          <p className="mt-2 text-xs text-neutral-400 dark:text-neutral-500">
                            {c.date ?? "—"}
                            {c.credentialId ? ` · ID: ${c.credentialId}` : ""}
                            {c.credentialUrl ? " · Click to view" : ""}
                          </p>
                        </div>
                      </div>
                    </CertCardWrapper>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

