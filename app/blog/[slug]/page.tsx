import type { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import XThreadCTA from "@/components/XThreadCTA";
import TwitterWidgets from "@/components/TwitterWidgets";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  const url = `https://joshuaeze.com/blog/${post.slug}`;
  const image = post.image || "/images/JoshuaEze.JPG";

  return {
    title: `${post.title} • Joshua Eze`,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url,
      publishedTime: post.date,
      authors: ["Joshua Eze"],
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const coverImage = post.image || "/images/JoshuaEze.JPG";
  const coverImageUrl = coverImage.startsWith("http")
    ? coverImage
    : `https://joshuaeze.com${coverImage}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Joshua Eze",
      url: "https://joshuaeze.com",
    },
    publisher: {
      "@type": "Person",
      name: "Joshua Eze",
      url: "https://joshuaeze.com",
    },
    mainEntityOfPage: `https://joshuaeze.com/blog/${post.slug}`,
    image: coverImageUrl,
  };

  return (
    <article className="pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TwitterWidgets />
      <div className="max-w-3xl mx-auto px-8">
        <div className="mb-8">
          <Link href="/blog" className="text-sm text-[#c9a84c] hover:underline">← All writing</Link>
        </div>

        <div className="flex items-center gap-x-3 mb-4 text-xs flex-wrap">
          <span className="px-3 py-1 bg-white/5 rounded-2xl text-[#c9a84c]">{post.category}</span>
          {post.xThreadUrl && (
            <span className="px-3 py-1 bg-[#c9a84c]/10 rounded-2xl text-[#c9a84c]">From X thread</span>
          )}
          <span className="text-[#666]">
            {new Date(post.date).toLocaleDateString("en-GB", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="text-[#666]">· {post.readTime}</span>
        </div>

        <h1 className="section-header tracking-tighter text-white mb-6">{post.title}</h1>

        {post.image && (
          <div className="mb-8 overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover max-h-[480px]"
            />
          </div>
        )}

        {post.xThreadUrl && <XThreadCTA url={post.xThreadUrl} variant="top" />}

        <div className="text-xl text-[#a3a3a3] leading-relaxed mb-10 border-b border-white/10 pb-10">
          {post.excerpt}
        </div>

        <div className="prose max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {post.content}
          </ReactMarkdown>
        </div>

        {post.xThreadUrl && <XThreadCTA url={post.xThreadUrl} variant="bottom" />}

        <div className="mt-12 pt-10 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm">
          <div>
            <div className="text-xs text-[#c9a84c] tracking-widest mb-1">CATEGORY</div>
            <div className="text-[#a3a3a3]">{post.category}</div>
          </div>
          <a
            href={post.xThreadUrl || "https://x.com/mrjoshuaeze"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-x-2 px-6 py-3 bg-white text-[#0a0a0a] font-semibold rounded-3xl hover:bg-zinc-100 transition-colors"
          >
            {post.xThreadUrl ? "Discuss on X →" : "Follow on X"}
          </a>
        </div>

        <div className="mt-8 text-xs text-[#666]">
          <Link href="/blog" className="hover:text-white transition-colors">← Back to all posts</Link>
        </div>
      </div>
    </article>
  );
}