import Link from "next/link";
import type { Metadata } from "next";
import { getOnXThreads } from "@/lib/on-x";
import TwitterWidgets from "@/components/TwitterWidgets";

export const metadata: Metadata = {
  title: "Thinking on X • Joshua Eze",
  description:
    "Live threads and ideas from @mrjoshuaeze — business strategy, African context, and building under real constraints.",
};

export default function OnXPage() {
  const threads = getOnXThreads();

  return (
    <div className="pt-28 pb-20">
      <TwitterWidgets />
      <div className="max-w-3xl mx-auto px-8">
        <div className="mb-10">
          <Link href="/" className="text-sm text-[#c9a84c] hover:underline">← Back to home</Link>
          <h1 className="section-header tracking-tighter text-white mt-4">Thinking on X</h1>
          <p className="text-[#a3a3a3] mt-3 max-w-xl leading-relaxed">
            I post most of my thinking on X first. These are the threads worth saving —
            full interactive versions, embedded below.
          </p>
          <a
            href="https://x.com/mrjoshuaeze"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-x-2 mt-6 px-6 py-3 bg-[#c9a84c] hover:bg-[#b8973e] text-[#0a0a0a] font-semibold rounded-3xl transition-colors"
          >
            Follow @mrjoshuaeze on X →
          </a>
        </div>

        <div className="space-y-12">
          {threads.map((thread) => (
            <section key={thread.url} className="border-b border-white/10 pb-12 last:border-none">
              <div className="mb-5">
                <h2 className="text-xl font-semibold text-white">{thread.title}</h2>
                <p className="text-xs text-[#666] mt-2">
                  {new Date(thread.date).toLocaleDateString("en-GB", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                {thread.note && <p className="text-sm text-[#a3a3a3] mt-3">{thread.note}</p>}
              </div>

              <blockquote className="twitter-tweet" data-theme="dark">
                <a href={thread.url}>Loading thread from X…</a>
              </blockquote>
            </section>
          ))}
        </div>

        {threads.length === 0 && (
          <p className="text-[#a3a3a3]">No threads listed yet. Add them in content/on-x/threads.json.</p>
        )}

        <div className="mt-12 pt-8 border-t border-white/10 text-sm text-[#a3a3a3]">
          Polished, long-form versions of these ideas live on the{" "}
          <Link href="/blog" className="text-[#c9a84c] hover:underline">blog</Link>.
        </div>
      </div>
    </div>
  );
}