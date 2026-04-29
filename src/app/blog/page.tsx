import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on web development, security, and craft.",
};

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-32">
      <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-6 tracking-widest uppercase">
        Journal
      </p>
      <h1 className="text-4xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 leading-tight">
        Blog
      </h1>
      <p className="mt-6 text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed">
        Posts coming soon—notes on building interfaces and breaking them responsibly.
      </p>
    </div>
  );
}
