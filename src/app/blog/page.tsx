"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isCyber = pathname.startsWith("/security");

  return (
    <footer className="border-t border-neutral-100 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-neutral-900">
            {isCyber ? (
              <span className="text-teal-600">YN.sec</span>
            ) : (
              "Your Name"
            )}
          </span>
          <span className="text-xs text-neutral-400 font-mono">
            {isCyber ? "Cybersecurity portfolio" : "Frontend Developer"}
          </span>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {isCyber ? (
            <>
              <Link href="/security" className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors">Home</Link>
              <Link href="/security/projects" className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors">Writeups</Link>
              <Link href="/" className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors">Frontend site</Link>
            </>
          ) : (
            <>
              <Link href="/" className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors">Home</Link>
              <Link href="/projects" className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors">Projects</Link>
              <Link href="/blog" className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors">Blog</Link>
              <Link href="/security" className="text-xs text-neutral-400 hover:text-teal-600 transition-colors">Security</Link>
            </>
          )}
        </nav>

        <div className="flex flex-col gap-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:you@example.com"
            className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            Email
          </a>
        </div>

        <p className="text-xs text-neutral-300 font-mono sm:text-right">
          {new Date().getFullYear()}
        </p>

      </div>
    </footer>
  );
}
