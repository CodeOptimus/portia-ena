import Link from "next/link";
import { certifications, trainings } from "@/content/security-credentials";
import { securityProjects } from "@/content/security-projects";
import type { Metadata } from "next";
import CertificationsRim from "@/components/certifications-rim";

export const metadata: Metadata = {
  title: "Cybersecurity portfolio",
  description:
    "Cybersecurity work by a former web developer—labs, writeups, tooling, and practical application security.",
};

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <section className="py-32 border-b border-neutral-100 dark:border-neutral-900">
        <p className="text-xs font-mono text-teal-600 dark:text-teal-400 mb-6 tracking-widest uppercase">
          Cybersecurity
        </p>
        <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 leading-tight max-w-2xl">
          From shipping UIs to stress-testing them.
        </h1>
        <p className="mt-6 text-neutral-500 dark:text-neutral-400 text-lg max-w-xl leading-relaxed">
          I come from web development; this side of the site is CTFs, writeups, lab tooling, and the kind of
          research that makes me sharper in an app review.
        </p>
        <div className="mt-10 flex items-center gap-6">
          <Link
            href="/security/projects"
            className="text-sm font-medium text-neutral-950 dark:text-neutral-50 underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
          >
            View writeups
          </Link>
          <Link
            href="/web"
            className="text-sm text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
          >
            Web developer site
          </Link>
          <Link
            href="#contact"
            className="text-sm text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <CertificationsRim certifications={certifications} />

      <section className="py-20 border-b border-neutral-100 dark:border-neutral-900">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 sm:gap-14">
          <div className="sm:col-span-4">
            <h2 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-widest uppercase">
              Training
            </h2>
            <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xs">
              Structured courses that complement hands-on labs and writeups.
            </p>
          </div>
          <div className="sm:col-span-8">
            <ul className="divide-y divide-neutral-100 dark:divide-neutral-900 list-none">
              {trainings.map((t) => (
                <li
                  key={`${t.title}-${t.provider}`}
                  className="py-6 first:pt-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3"
                >
                  <div>
                    <p className="text-base font-medium text-neutral-950 dark:text-neutral-50">{t.title}</p>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                      {t.provider}
                      {t.completed ? ` · ${t.completed}` : null}
                    </p>
                  </div>
                  {t.url ? (
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors shrink-0"
                    >
                      Details
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-neutral-100 dark:border-neutral-900">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-widest uppercase">
            Recent work
          </h2>
          <Link
            href="/security/projects"
            className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
          >
            View all
          </Link>
        </div>

        <div className="divide-y divide-neutral-100 dark:divide-neutral-900">
          {securityProjects.slice(0, 3).map((project) => (
            <div
              key={project.slug}
              className="py-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">{project.year}</span>
                  <span className="text-xs px-2 py-0.5 border border-teal-600 text-teal-600 dark:border-teal-500 dark:text-teal-400 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex gap-1.5 flex-wrap">
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
                <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 max-w-lg">{project.description}</p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    Read
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 border-b border-neutral-100 dark:border-neutral-900 grid sm:grid-cols-3 gap-12">
        <div>
          <h2 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-widest uppercase mb-6">
            Focus areas
          </h2>
        </div>
        <div className="sm:col-span-2 grid sm:grid-cols-2 gap-8">
          {[
            {
              title: "Application & web security",
              body:
                "XSS, SQLi, CSRF, IDOR, auth weaknesses—classes I hunt with context from having built the kinds of apps that get targeted.",
            },
            {
              title: "CTF & competitions",
              body:
                "Web, crypto, forensics, and misc—keeping skills sharp through structured challenges and room writeups.",
            },
            {
              title: "Recon & OSINT",
              body:
                "Understanding attack surfaces before exploitation—mapping what is exposed by design versus by mistake.",
            },
            {
              title: "Tooling",
              body: "Scripts and small utilities that automate repetitive lab steps so reviews stay repeatable.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-50 mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20">
        <h2 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-widest uppercase mb-12">
          Contact
        </h2>
        <div className="grid sm:grid-cols-3 gap-12">
          <div className="sm:col-span-2">
            <p className="text-2xl font-medium text-neutral-950 dark:text-neutral-50 leading-snug max-w-lg">
              Have a disclosure, collaboration, or security question?
            </p>
            <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed">
              Share enough context to respond responsibly—scope, systems, and timelines help. No spam.
            </p>
            <a
              href="mailto:you@example.com"
              className="mt-6 inline-block text-sm font-medium underline underline-offset-4 hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors"
            >
              you@example.com
            </a>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 dark:text-neutral-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 dark:text-neutral-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
