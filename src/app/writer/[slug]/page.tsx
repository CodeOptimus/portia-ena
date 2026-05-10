import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { writeups } from "@/content/writing";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return writeups.filter((p) => p.published).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = writeups.find((p) => p.published && p.slug === params.slug);
  if (!post) return { title: "Not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function WriterPostPage({ params }: { params: Params }) {
  const post = writeups.find((p) => p.published && p.slug === params.slug);
  if (!post) notFound();

  const paragraphs = post.body.split(/\n{2,}/g).map((p) => p.trim()).filter(Boolean);

  return (
    <div className="max-w-3xl mx-auto px-6">
      <section className="py-24 sm:py-28 border-b border-neutral-100 dark:border-neutral-900">
        <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-6 tracking-widest uppercase">
          Writer
        </p>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 leading-tight">
          {post.title}
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">{post.date}</span>
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-6 text-neutral-500 dark:text-neutral-400 leading-relaxed">{post.excerpt}</p>
        <div className="mt-8">
          <Link
            href="/writer"
            className="text-xs font-mono text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            ← Back to writer
          </Link>
        </div>
      </section>

      <article className="py-14 space-y-6">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {p}
          </p>
        ))}
      </article>
    </div>
  );
}

