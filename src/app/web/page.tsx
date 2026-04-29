"use client";

import Link from "next/link";
import { projects } from "@/content/projects";
import { useFadeIn } from "@/lib/use-fade-in";

const GITHUB_URL = "https://github.com/CodeOptimus";
const LINKEDIN_URL = "https://linkedin.com/in/portia-mawuena";
const EMAIL = "you@example.com";

const capabilities = [
  {
    title: "Application & web security",
    body:
      "OWASP-minded testing and review—authentication, sessions, input handling, and common web flaws—grounded in years of shipping real UIs.",
    bullets: ["Threat-informed code review", "Auth & session edge cases", "Injection & access-control mindset"],
  },
  {
    title: "Secure product development",
    body:
      "Building interfaces and APIs with discipline: headers, dependency hygiene, least privilege, and patterns teams can sustain.",
    bullets: ["React / Next.js delivery", "API & integration awareness", "Review-ready documentation"],
  },
  {
    title: "Hands-on practice & tooling",
    body:
      "CTFs, labs, and small scripts so recommendations stay practical—not slide-deck theory.",
    bullets: ["Labs & competitions", "Automation & parsing", "Repro steps you can verify"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    body:
      "Map the system: assets, trust boundaries, and data flows—what matters if it breaks, and what an attacker would target first.",
  },
  {
    step: "02",
    title: "Frame",
    body:
      "Align on scope, constraints, and what “secure enough” means—so effort lands on the risks that actually matter.",
  },
  {
    step: "03",
    title: "Assess",
    body:
      "Review design and implementation together—code, configuration, and the classic web bug classes—with clear findings.",
  },
  {
    step: "04",
    title: "Harden & hand off",
    body:
      "Prioritize fixes, verify retests, and leave stakeholders with actionable notes—not a generic checklist.",
  },
];

export default function WebHome() {
  const heroRef = useFadeIn();
  const metaRef = useFadeIn();
  const workRef = useFadeIn();
  const capabilitiesRef = useFadeIn();
  const aboutRef = useFadeIn();
  const processRef = useFadeIn();
  const contactRef = useFadeIn();

  return (
    <div className="max-w-5xl mx-auto px-6">
      <section
        ref={heroRef}
        className="fade-in py-24 sm:py-32 border-b border-neutral-100 dark:border-neutral-900"
      >
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 sm:gap-14">
          <div className="sm:col-span-4 space-y-4">
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-widest uppercase">
              Let&apos;s talk
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Available for select projects
            </p>
          </div>
          <div className="sm:col-span-8 space-y-8">
            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 leading-[1.08] max-w-2xl">
              Web developer · cybersecurity focus
            </h1>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-xl leading-relaxed">
              I started in frontend engineering—shipping interfaces that perform and stay accessible. Today I lean into
              application security: reading code like a builder and testing like someone who wants systems to fail safely.
            </p>
            <ul className="flex flex-wrap gap-2">
              {["Secure development", "Application security", "Web platform depth"].map((tag) => (
                <li key={tag}>
                  <span className="text-xs px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <Link
                href="/projects"
                className="text-sm font-medium text-neutral-950 dark:text-neutral-50 underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
              >
                View projects
              </Link>
              <Link
                href="/"
                className="text-sm text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
              >
                Security portfolio
              </Link>
              <Link
                href="#contact"
                className="text-sm text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={metaRef}
        className="fade-in py-16 border-b border-neutral-100 dark:border-neutral-900"
      >
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 sm:gap-14 sm:items-start">
          <div className="sm:col-span-4">
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-widest uppercase">
              PM
            </p>
            <p className="mt-3 text-sm font-medium text-neutral-950 dark:text-neutral-50">
              Portia Mawuena Adaletey
            </p>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">Based in Ghana</p>
          </div>
          <div className="sm:col-span-8">
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
              My path runs from shipping product UI to deliberately breaking and hardening web systems. That overlap—how
              apps are built and how they fail—is where I do my best work.
            </p>
            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
              <div>
                <dt className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                  Background
                </dt>
                <dd className="mt-2 text-sm text-neutral-950 dark:text-neutral-50">
                  Web · product shipping
                </dd>
              </div>
              <div>
                <dt className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                  Focus now
                </dt>
                <dd className="mt-2 text-sm text-neutral-950 dark:text-neutral-50">
                  AppSec · web
                </dd>
              </div>
              <div>
                <dt className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                  Deeper dive
                </dt>
                <dd className="mt-2 text-sm text-neutral-950 dark:text-neutral-50">
                  <Link
                    href="/security/projects"
                    className="underline underline-offset-4 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    Labs &amp; writeups
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section
        ref={workRef}
        className="fade-in py-20 border-b border-neutral-100 dark:border-neutral-900"
      >
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 sm:gap-14">
          <div className="sm:col-span-4 flex flex-row sm:flex-col items-start justify-between sm:justify-start gap-6">
            <div>
              <h2 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-widest uppercase">
                Selected work
              </h2>
              <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400 max-w-56 leading-relaxed">
                Builds and engagements that span interface craft and security-aware delivery.
              </p>
            </div>
            <Link
              href="/projects"
              className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors sm:mt-4"
            >
              View all
            </Link>
          </div>
          <div className="sm:col-span-8 divide-y divide-neutral-100 dark:divide-neutral-900">
            {projects.slice(0, 3).map((project) => (
              <div
                key={project.slug}
                className="py-8 first:pt-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 group"
              >
                <div className="flex-1 min-w-0">
                  {project.role ? (
                    <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                      {project.role}
                    </p>
                  ) : null}
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">{project.year}</span>
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
                      className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    >
                      Live
                    </a>
                  ) : null}
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    >
                      Repo
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={capabilitiesRef}
        className="fade-in py-20 border-b border-neutral-100 dark:border-neutral-900"
      >
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 sm:gap-14">
          <div className="sm:col-span-4">
            <h2 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-widest uppercase">
              Capabilities
            </h2>
            <p className="mt-4 text-lg font-medium text-neutral-950 dark:text-neutral-50 tracking-tight leading-snug">
              How I can help
            </p>
            <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xs">
              From shipped web products to focused reviews—I sit where solid engineering and practical security overlap.
            </p>
          </div>
          <div className="sm:col-span-8 space-y-12">
            {capabilities.map((item) => (
              <div key={item.title}>
                <h3 className="text-base font-medium text-neutral-950 dark:text-neutral-50">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed">
                  {item.body}
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={aboutRef}
        className="fade-in py-20 border-b border-neutral-100 dark:border-neutral-900"
      >
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 sm:gap-14">
          <div className="sm:col-span-4">
            <h2 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-widest uppercase">
              About
            </h2>
          </div>
          <div className="sm:col-span-8 space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <p>
              I am a developer based in Ghana. For years my job was clear: ship fast, accessible interfaces and partner
              with design and product. That craft still matters—but I have deliberately moved toward cybersecurity, where
              the same attention to detail turns into safer defaults and clearer risk tradeoffs.
            </p>
            <p>
              I care about evidence: reproducible findings, honest severity, and fixes teams can maintain. If we work
              together, you get someone who has written the components and also poked at where they crack.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={processRef}
        className="fade-in py-20 border-b border-neutral-100 dark:border-neutral-900"
      >
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 sm:gap-14">
          <div className="sm:col-span-4">
            <h2 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-widest uppercase">
              Process
            </h2>
            <p className="mt-4 text-lg font-medium text-neutral-950 dark:text-neutral-50 tracking-tight leading-snug">
              How engagements move
            </p>
            <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xs">
              A straightforward rhythm you can map to reviews, collaborations, or build cycles—without losing rigor.
            </p>
          </div>
          <ol className="sm:col-span-8 space-y-10 list-none">
            {processSteps.map((s) => (
              <li key={s.step} className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8">
                <span className="sm:col-span-2 text-xs font-mono text-neutral-400 dark:text-neutral-500">{s.step}</span>
                <div className="sm:col-span-10">
                  <h3 className="text-base font-medium text-neutral-950 dark:text-neutral-50">{s.title}</h3>
                  <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section ref={contactRef} id="contact" className="fade-in py-20">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 sm:gap-14">
          <div className="sm:col-span-4">
            <h2 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-widest uppercase">
              Contact
            </h2>
            <p className="mt-4 text-lg font-medium text-neutral-950 dark:text-neutral-50 tracking-tight leading-snug">
              Let&apos;s work together
            </p>
            <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xs">
              Share a few lines about your product, audit window, or security question. I usually reply within a couple
              of business days.
            </p>
          </div>
          <div className="sm:col-span-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-8">
              <div>
                <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                  Or email directly
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-2 inline-block text-lg font-medium text-neutral-950 dark:text-neutral-50 underline underline-offset-4 hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-3 text-sm">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors w-fit"
              >
                GitHub
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors w-fit"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
