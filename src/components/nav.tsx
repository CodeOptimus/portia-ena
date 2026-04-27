"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const frontendLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

const cyberLinks = [
  { href: "/security", label: "Home" },
  { href: "/security/projects", label: "Writeups" },
];

export default function Nav() {
  const pathname = usePathname();
  const isCyber = pathname.startsWith("/security");
  const links = isCyber ? cyberLinks : frontendLinks;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-neutral-100">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

        <Link
          href={isCyber ? "/security" : "/"}
          className="text-sm font-medium tracking-tight"
        >
          {isCyber ? (
            <span className="text-teal-600">YN.sec</span>
          ) : (
            "Your Name"
          )}
        </Link>

        <ul className="flex items-center gap-6 list-none">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "text-sm transition-colors duration-200",
                  pathname === href
                    ? "text-neutral-950"
                    : "text-neutral-400 hover:text-neutral-700"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={isCyber ? "/" : "/security"}
          className={cn(
            "text-xs font-mono px-3 py-1.5 border rounded-full transition-all duration-200",
            isCyber
              ? "border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
              : "border-neutral-300 text-neutral-500 hover:border-neutral-900 hover:text-neutral-900"
          )}
        >
          {isCyber ? "← Frontend" : "Security →"}
        </Link>

      </nav>
    </header>
  );
}