import Link from "next/link";
import { securityProjects } from "@/content/security-projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security",
  description: "Cybersecurity portfolio — CTF writeups, tools, and research.",
};

export default function SecurityHome() {
  return (
    <div className="max-w-5xl mx-auto px-6">

      <section className="py-32 border-b border-neutral-100">
        <p className="text-xs font-mono text-teal-600 mb-6 tracking-widest uppercase">
          Cybersecurity
        </p>
        <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-neutral-950 leading-tight max-w-2xl">
          Breaking things to understand how they work.
        </h1>
        <p className="mt-6 text-neutral-500 text-lg max-w-xl leading-relaxed">
          CTF competitions, vulnerability research, and security tooling.
          This is the other side of the work.
        </p>
        <div className="mt-10 flex items-center gap-6">
          <Link
            href="/security/projects"
            className="text-sm font-medium text-neutral-950 underline underline-offset-4 hover:text-neutral-600 transition-colors"
          >
            View Writeups
          </Link>
          <Link
            href="/"
            className="text-sm text-neutral-400 hover:text-neutral-700 transition-colors"
          >
            Frontend work
          </Link>
        </div>
      </section>

      <section className="py-20 border-b border-neutral-100">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
            Recent work
          </h2>
          <Link
            href="/security/projects"
            className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors"
          >
            View all
          </Link>
        </div>

        <div className="divide-y divide-neutral-100">
          {securityProjects.slice(0, 3).map((project) => (
            <div
              key={project.slug}
              className="py-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-neutral-400">
                    {project.year}
                  </span>
                  <span className="text-xs px-2 py-0.5 border border-teal-600 text-teal-600 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex gap-1.5">
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
                <h3 className="text-base font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-500 max-w-lg">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-400 hover:text-teal-600 transition-colors"
                  >
                    Read
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 border-b border-neutral-100 grid sm:grid-cols-3 gap-12">
        <div>
          <h2 className="text-xs font-mono text-neutral-400 tracking-widest uppercase mb-6">
            Focus areas
          </h2>
        </div>
        <div className="sm:col-span-2 grid sm:grid-cols-2 gap-8">
          {[
            { title: "Web Security", body: "XSS, SQLi, CSRF, IDOR — application-layer vulnerabilities and how to find them." },
            { title: "CTF Competitions", body: "Capture the Flag competitions across web, crypto, forensics, and binary categories." },
            { title: "Recon & OSINT", body: "Passive and active reconnaissance techniques for understanding attack surfaces." },
            { title: "Tooling", body: "Scripts and tools built to automate repetitive security tasks." },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="text-sm font-medium text-neutral-900 mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20">
        <h2 className="text-xs font-mono text-neutral-400 tracking-widest uppercase mb-12">
          Contact
        </h2>
        <div className="grid sm:grid-cols-3 gap-12">
          <div className="sm:col-span-2">
            <p className="text-2xl font-medium text-neutral-950 leading-snug max-w-md">
              Want to collaborate or talk security?
            </p>
            <a
              href="mailto:you@example.com"
              className="mt-6 inline-block text-sm font-medium underline underline-offset-4 hover:text-neutral-500 transition-colors"
            >
              you@example.com
            </a>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-teal-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-teal-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
