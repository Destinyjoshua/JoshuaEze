import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-8">
        <div className="mb-8">
          <Link href="/blog" className="text-sm text-[#c9a84c] hover:underline">← All writing</Link>
        </div>

        <div className="flex items-center gap-x-3 mb-4 text-xs">
          <span className="px-3 py-1 bg-white/5 rounded-2xl text-[#c9a84c]">{post.pillar}</span>
          <span className="text-[#666]">{new Date(post.date).toLocaleDateString('en-GB', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          <span className="text-[#666]">· {post.readingTime}</span>
        </div>

        <h1 className="section-header tracking-tighter text-white mb-6">{post.title}</h1>

        <div className="text-xl text-[#a3a3a3] leading-relaxed mb-10 border-b border-white/10 pb-10">
          {post.excerpt}
        </div>

        <div className="prose max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>

        <div className="mt-12 pt-10 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm">
          <div>
            <div className="text-xs text-[#c9a84c] tracking-widest mb-1">PILLAR</div>
            <div className="text-[#a3a3a3]">{post.pillar}</div>
          </div>
          <a 
            href="https://x.com/mrjoshuaeze" 
            target="_blank" 
            className="inline-flex items-center gap-x-2 px-6 py-3 bg-white text-[#0a0a0a] font-semibold rounded-3xl hover:bg-zinc-100 transition-colors"
          >
            Discuss on X
          </a>
        </div>

        <div className="mt-8 text-xs text-[#666]">
          <Link href="/blog" className="hover:text-white transition-colors">← Back to all posts</Link>
        </div>
      </div>
    </article>
  );
}
