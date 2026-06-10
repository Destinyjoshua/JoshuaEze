import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-8 pt-28 pb-20">
      <div className="mb-12">
        <Link href="/" className="text-sm text-[#c9a84c] hover:underline">← Back to home</Link>
        <h1 className="section-header tracking-tighter text-white mt-4">Writing &amp; Thinking</h1>
        <p className="text-[#a3a3a3] mt-3 max-w-md">Frameworks, reflections, and honest takes on building in complex environments.</p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`}
            className="block group border-b border-white/10 pb-8 last:border-none"
          >
            <div className="flex items-center gap-x-3 text-xs mb-2">
              <span className="px-3 py-1 bg-white/5 rounded-2xl text-[#c9a84c]">{post.pillar}</span>
              <span className="text-[#666]">{new Date(post.date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</span>
              <span className="text-[#666]">· {post.readingTime}</span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight group-hover:text-[#c9a84c] transition-colors">{post.title}</h2>
            <p className="mt-3 text-[#a3a3a3] leading-relaxed">{post.excerpt}</p>
            <div className="mt-4 text-sm text-[#c9a84c] group-hover:underline">Read full post →</div>
          </Link>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-[#a3a3a3]">No posts yet. Check back soon.</p>
      )}
    </div>
  );
}
