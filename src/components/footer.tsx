"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function isWebSection(pathname: string) {
  return (
    pathname.startsWith("/web") ||
    pathname.startsWith("/projects") ||
    pathname.startsWith("/blog")
  );
}

export default function Footer() {
  const pathname = usePathname();
  const onWeb = isWebSection(pathname);

  return (
    <footer className="border-t border-neutral-100 dark:border-neutral-900 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
            {onWeb ? (
              "Portia Mawuena Adaletey"
            ) : (
              <span className="text-teal-600 dark:text-teal-400">PM.sec</span>
            )}
          </span>
          <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">
            {onWeb ? "Web developer · cybersecurity" : "Cybersecurity · labs & writeups"}
          </span>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {onWeb ? (
            <>
              <Link
                href="/web"
                className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/web#contact"
                className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/"
                className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                Security
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/"
                className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/web"
                className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                Web developer site
              </Link>
              <Link
                href="/security/projects"
                className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                Writeups
              </Link>
            </>
          )}
        </nav>

        <div className="flex flex-col gap-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:you@example.com"
            className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            Email
          </a>
        </div>

        <p className="text-xs text-neutral-300 dark:text-neutral-600 font-mono sm:text-right">
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
