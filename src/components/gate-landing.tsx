"use client";

import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

function GateCard({
  className,
  children,
  delayClass,
}: {
  className?: string;
  children: React.ReactNode;
  delayClass: string;
}) {
  return (
    <div
      className={cn(
        "gate-fade-up rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white/60 dark:bg-neutral-950/40 backdrop-blur-sm p-6 sm:p-7 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.18)] dark:shadow-[0_24px_70px_-28px_rgba(0,0,0,0.65)] transition-transform duration-300 hover:-translate-y-0.5",
        delayClass,
        className,
      )}
    >
      {children}
    </div>
  );
}

export default function GateLanding() {
  return (
    <div className="relative flex-1 flex flex-col justify-center overflow-hidden">
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
        <ThemeToggle />
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 dark:opacity-90"
        aria-hidden
      >
        <div
          className="gate-blob absolute -top-24 -left-20 h-[min(520px,80vw)] w-[min(520px,80vw)] rounded-full bg-teal-500/25 dark:bg-teal-400/15 blur-3xl"
        />
        <div
          className="gate-blob gate-blob-delay absolute -bottom-28 -right-16 h-[min(480px,75vw)] w-[min(480px,75vw)] rounded-full bg-violet-500/20 dark:bg-violet-400/12 blur-3xl"
        />
        <div
          className="gate-grid-fade absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
          aria-hidden
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-20 w-full">
        <p className="gate-fade-up gate-delay-1 text-xs font-mono tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500">
          Welcome
        </p>
        <h1 className="gate-fade-up gate-delay-2 mt-5 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 leading-[1.05]">
          Portia Mawuena Adaletey
        </h1>
        <p className="gate-fade-up gate-delay-3 mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
          I build web interfaces and I study how they break. This site splits into two lanes—product-style web work on
          one side, and cybersecurity labs, writeups, and reviews on the other.
        </p>

        <p className="gate-fade-up gate-delay-4 mt-12 text-sm sm:text-base font-medium text-neutral-800 dark:text-neutral-200 max-w-lg leading-relaxed">
          What are you here for?
        </p>
        <p className="gate-fade-up gate-delay-4 mt-2 text-sm text-neutral-500 dark:text-neutral-400 max-w-lg leading-relaxed">
          Pick a path below. After you enter, you can switch lanes anytime from the top navigation.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          <GateCard delayClass="gate-delay-5 sm:col-span-1">
            <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Web developer
            </p>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Projects, process, and how I ship interfaces with a security-aware mindset.
            </p>
            <Link
              href="/web"
              className="mt-6 inline-flex items-center text-sm font-medium text-neutral-950 dark:text-neutral-50 underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-600 hover:decoration-teal-600 dark:hover:decoration-teal-400 transition-[text-decoration-color]"
            >
              Enter web portfolio →
            </Link>
          </GateCard>

          <GateCard delayClass="gate-delay-6 sm:col-span-1">
            <p className="text-xs font-mono uppercase tracking-wider text-teal-600 dark:text-teal-400">
              Cybersecurity
            </p>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Labs, writeups, certifications, and the app-sec side of my practice.
            </p>
            <Link
              href="/security"
              className="mt-6 inline-flex items-center text-sm font-medium text-teal-700 dark:text-teal-300 underline underline-offset-4 decoration-teal-600/30 dark:decoration-teal-400/40 hover:decoration-teal-600 dark:hover:decoration-teal-400 transition-[text-decoration-color]"
            >
              Enter security portfolio →
            </Link>
          </GateCard>

          <GateCard delayClass="gate-delay-7 sm:col-span-1">
            <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Both
            </p>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Same person, two lenses—open either side, or use both links below.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/web"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2.5 text-sm font-medium text-neutral-950 dark:text-neutral-50 hover:border-neutral-900 dark:hover:border-neutral-400 transition-colors"
              >
                Web
              </Link>
              <Link
                href="/security"
                className="inline-flex items-center justify-center rounded-full border border-teal-600/50 dark:border-teal-500/50 px-4 py-2.5 text-sm font-medium text-teal-800 dark:text-teal-200 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-500 dark:hover:text-neutral-950 transition-colors"
              >
                Cybersecurity
              </Link>
            </div>
          </GateCard>
        </div>
      </div>
    </div>
  );
}
