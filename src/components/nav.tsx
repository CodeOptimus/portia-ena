"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/theme-toggle";

function isWebSection(pathname: string) {
  return (
    pathname.startsWith("/web") ||
    pathname.startsWith("/projects") ||
    pathname.startsWith("/blog")
  );
}

const navLinks = [
  // { href: "/", label: "Cybersecurity" },
  { href: "/projects", label: "Projects" },
  { href: "/security/projects", label: "Writeups" },
  // { href: "/web", label: "Web" },
  { href: "/blog", label: "Blog" },
  { href: "/web#contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const onWeb = isWebSection(pathname);
  const links = navLinks;

  useEffect(() => {
    const sync = () => setHash(typeof window !== "undefined" ? window.location.hash : "");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-100 dark:border-neutral-900">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between gap-6">
        <Link
          href={onWeb ? "/web" : "/"}
          className="text-sm font-medium tracking-tight text-neutral-950 dark:text-neutral-50"
        >
          {onWeb ? (
            "PMweb"
          ) : (
            <span className="text-teal-600 dark:text-teal-400">PM.sec</span>
          )}
        </Link>

        <ul className="flex items-center gap-6 list-none">
          {links.map(({ href, label }) => {
            const isActive = (() => {
              if (href === "/") return pathname === "/" && hash !== "#contact";
              if (href === "/web") return pathname === "/web" && hash !== "#contact";
              if (href === "/web#contact") return pathname === "/web" && hash === "#contact";
              if (href === "/security/projects") return pathname.startsWith("/security/projects");
              if (href === "/projects") return pathname.startsWith("/projects");
              if (href === "/blog") return pathname.startsWith("/blog");
              return pathname === href;
            })();
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "text-sm transition-colors duration-200",
                    isActive
                      ? "text-neutral-950 dark:text-neutral-50"
                      : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href={onWeb ? "/" : "/web"}
            className={cn(
              "text-xs font-mono px-3 py-1.5 border rounded-full transition-all duration-200",
              onWeb
                ? "border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:border-neutral-900 dark:hover:border-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                : "border-teal-600 text-teal-600 dark:border-teal-500 dark:text-teal-400 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-500"
            )}
          >
            {onWeb ? "← Cybersecurity" : "Web →"}
          </Link>
        </div>
      </nav>
    </header>
  );
}
