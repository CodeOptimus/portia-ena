import Link from "next/link";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6">

      <section className="py-32 border-b border-neutral-100">
        <p className="text-xs font-mono text-neutral-400 mb-6 tracking-widest uppercase">
          Available for work
        </p>
        <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-neutral-950 leading-tight max-w-2xl">
          Frontend Developer building clean, purposeful interfaces.
        </h1>
        <p className="mt-6 text-neutral-500 text-lg max-w-xl leading-relaxed">
          I focus on performance, accessibility, and the kind of detail that makes
          an interface feel inevitable rather than assembled.
        </p>
        <div className="mt-10 flex items-center gap-6">
          <Link
            href="/projects"
            className="text-sm font-medium text-neutral-950 underline underline-offset-4 hover:text-neutral-600 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="text-sm text-neutral-400 hover:text-neutral-700 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <section className="py-20 border-b border-neutral-100">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
            Selected work
          </h2>
          <Link
            href="/projects"
            className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors"
          >
            View all
          </Link>
        </div>

        <div className="divide-y divide-neutral-100">
          {projects.slice(0, 3).map((project) => (
            <div
              key={project.slug}
              className="py-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-neutral-400">
                    {project.year}
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
                    className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors"
                  >
                    Live
                  </a>
                ) : null}
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors"
                  >
                    Repo
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
            About
          </h2>
        </div>
        <div className="sm:col-span-2 space-y-4 text-neutral-600 leading-relaxed">
          <p>
            I am a frontend developer based in [Your City]. I build interfaces
            that are fast, accessible, and considered.
          </p>
          <p>
            My work sits at the intersection of engineering and design. I care
            about the details that most people will not notice but will feel.
          </p>
          <p className="text-neutral-400 text-sm">
            Alongside frontend work, I also explore{" "}
            <Link
              href="/security"
              className="underline underline-offset-4 hover:text-teal-600 transition-colors"
            >
              cybersecurity
            </Link>
            {" "} - CTFs, web vulnerabilities, and security research.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20">
        <h2 className="text-xs font-mono text-neutral-400 tracking-widest uppercase mb-12">
          Contact
        </h2>
        <div className="grid sm:grid-cols-3 gap-12">
          <div className="sm:col-span-2">
            <p className="text-2xl font-medium text-neutral-950 leading-snug max-w-md">
              Have a project in mind? Lets talk.
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
              className="text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
