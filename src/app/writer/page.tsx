import type { Metadata } from "next";
import Link from "next/link";
import { writeups } from "@/content/writing";

export const metadata: Metadata = {
  title: "Writer",
  description: "Blog-style writeups on building, shipping, security mindset, and lessons learned.",
};

export default function WriterIndexPage() {
  const posts = [...writeups]
    .filter((p) => p.published)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="max-w-5xl mx-auto px-6">
      <section className="py-32 border-b border-neutral-100 dark:border-neutral-900">
        <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-6 tracking-widest uppercase">
          Writer
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 leading-tight">
          Writeups
        </h1>
        <p className="mt-4 text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed">
          Notes on building, shipping, collaboration, and learning in public—kept simple so adding a new post is just
          adding an entry in <span className="font-mono">src/content/writing.ts</span>.
        </p>
      </section>

      <section className="py-20">
        {posts.length === 0 ? (
          <div className="py-10">
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
              No posts published yet. Add a new item to <span className="font-mono">src/content/writing.ts</span> and set{" "}
              <span className="font-mono">published: true</span>.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-neutral-100 dark:divide-neutral-900">
            {posts.map((post) => (
              <article key={post.slug} className="py-10 group">
                <div className="flex items-center gap-3 mb-3">
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

                <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
                  <Link href={`/writer/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-5">
                  <Link
                    href={`/writer/${post.slug}`}
                    className="text-xs font-mono text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

