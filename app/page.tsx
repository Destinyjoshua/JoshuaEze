import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const posts = getAllPosts().slice(0, 4); // Featured on home

  return (
    <main>
      {/* Hero Section */}
      <header className="pt-20 pb-16 md:pt-24 md:pb-20 border-b border-white/10">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-x-2 px-4 py-1.5 rounded-3xl bg-white/5 border border-white/10 mb-6">
              <div className="w-2 h-2 bg-[#c9a84c] rounded-full"></div>
              <span className="text-xs font-medium tracking-[1px] text-[#c9a84c]">MBA • NIGERIAN • BUILDING IN THE UK</span>
            </div>

            {/* Photo + Name - close together as requested */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 mb-4">
              <Image
                src="/images/JoshuaEze.JPG"
                alt="Joshua Eze"
                width={112}
                height={112}
                className="w-[88px] h-[88px] sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover border-[3px] border-[#c9a84c]/40 shadow-2xl flex-shrink-0"
                priority
              />
              <h1 className="section-header tracking-tighter text-white font-display">
                Joshua Eze
              </h1>
            </div>

            <p className="text-3xl md:text-4xl font-semibold tracking-tight text-[#c9a84c] mb-6">
              I help Africans think bigger<br />about business, money,<br />and building from nothing.
            </p>

            <p className="max-w-xl text-lg text-[#a3a3a3] mb-9 leading-relaxed">
              MBA-qualified business strategist. Nigerian. Based in Wrexham, Wales on a visa. 
              I speak directly from real experience — no fluff, no recycled advice.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="#thinking" 
                className="group inline-flex items-center justify-center gap-x-3 bg-[#c9a84c] hover:bg-[#b8973e] active:bg-[#a07f2e] transition-all px-8 h-14 rounded-3xl text-[#0a0a0a] font-semibold text-base"
              >
                <span>Explore my thinking</span>
                <span className="group-active:translate-x-0.5 transition-transform">→</span>
              </Link>

              <a 
                href="https://calendly.com/destinyjoshuas/new-meeting"
                target="_blank"
                className="inline-flex items-center justify-center gap-x-3 border border-white/30 hover:bg-white/5 px-8 h-14 rounded-3xl font-semibold text-base transition-colors"
              >
                Book a strategy conversation
              </a>
            </div>

            <div className="flex items-center gap-x-6 mt-10 text-sm">
              <div className="flex items-center gap-x-2 text-[#a3a3a3]">
                <span className="text-[#c9a84c]">𝕏</span>
                <a href="https://x.com/mrjoshuaeze" target="_blank" className="hover:text-white transition-colors">@mrjoshuaeze</a>
              </div>
              <div className="text-xs text-[#666]">Wrexham, Wales, United Kingdom</div>
            </div>
          </div>
        </div>
      </header>

      {/* About + Positioning */}
      <section id="about" className="max-w-screen-2xl mx-auto px-8 pt-20 pb-16">
        <div className="grid md:grid-cols-12 gap-x-12 items-start">
          <div className="md:col-span-5">
            <div className="sticky top-24">
              <span className="uppercase tracking-[3px] text-xs font-semibold text-[#c9a84c]">CHAPTER 01</span>
              <h2 className="section-header tracking-tighter mt-3 mb-6 text-white font-display">A rare combination</h2>
              
              <div className="text-[#a3a3a3] max-w-none text-[15px] leading-relaxed">
                <p>I sit at the intersection of four things that almost never show up together:</p>
              </div>
              
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex gap-x-3"><span className="text-[#c9a84c] mt-1">→</span> <span>MBA-qualified business thinker</span></li>
                <li className="flex gap-x-3"><span className="text-[#c9a84c] mt-1">→</span> <span>Nigerian identity and cultural context</span></li>
                <li className="flex gap-x-3"><span className="text-[#c9a84c] mt-1">→</span> <span>Building in the UK on a visa — real constraints, real results</span></li>
                <li className="flex gap-x-3"><span className="text-[#c9a84c] mt-1">→</span> <span>Lived experience designing and running actual businesses</span></li>
              </ul>
              
              <p className="mt-6 text-sm text-[#a3a3a3]">This combination is rare. It’s also powerful.</p>
            </div>
          </div>
          
          <div className="md:col-span-7 mt-10 md:mt-0">
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10">
              <div className="text-[#c9a84c] text-sm tracking-widest mb-3">MY NORTH STAR</div>
              <blockquote className="text-xl leading-tight text-white">
                “Would someone share this because it made them think differently?”
              </blockquote>
              <p className="mt-4 text-sm text-[#a3a3a3]">Every piece of content I create must pass this test. If it doesn’t, I rewrite it.</p>
              
              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="text-[#c9a84c] text-xs tracking-widest">CURRENT FOCUS</div>
                  <div className="mt-1 font-medium">Building in public while helping others do the same — honestly.</div>
                </div>
                <div>
                  <div className="text-[#c9a84c] text-xs tracking-widest">LOCATION</div>
                  <div className="mt-1 font-medium">Wrexham, Wales, UK<br /><span className="text-xs text-[#666]">On Visa</span></div>
                </div>
                <div>
                  <div className="text-[#c9a84c] text-xs tracking-widest">APPROACH</div>
                  <div className="mt-1 font-medium">Direct. Honest. Zero fluff.<br />Practical frameworks rooted in African reality, every day african.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Pillars */}
      <section id="pillars" className="max-w-screen-2xl mx-auto px-8 py-16 border-t border-white/10 bg-[#111]">
        <div className="max-w-3xl mb-10">
          <span className="uppercase tracking-[3px] text-xs font-semibold text-[#c9a84c]">CHAPTER 02</span>
          <h2 className="section-header tracking-tighter mt-2 text-white">What I talk about</h2>
          <p className="text-[#a3a3a3] mt-3">Five content pillars. Every post, thread, and video serves one of these.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {[
            { pct: "35%", title: "Business Strategy", desc: "Frameworks, models, and strategic thinking that actually works in real markets." },
            { pct: "25%", title: "Nigerian / African Context", desc: "Economy, opportunity, entrepreneurship, and doing business on the continent." },
            { pct: "20%", title: "Personal Journey", desc: "Building under real constraints, visa life, honest reflections, and lessons learned the hard way." },
            { pct: "10%", title: "Policy & Big Thinking", desc: "Governance, leadership, and ideas for Africa’s future — no surface-level takes." },
            { pct: "10%", title: "Engagement", desc: "Questions, polls, reactions to trending topics, and direct conversation with the community." },
          ].map((p, i) => (
            <div key={i} className="pillar-card bg-[#0a0a0a] border border-white/10 hover:border-[#c9a84c]/60 rounded-3xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[#c9a84c] text-4xl font-semibold tracking-tighter">{p.pct}</div>
              </div>
              <div className="font-semibold text-lg mb-2">{p.title}</div>
              <div className="text-sm text-[#a3a3a3]">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Thinking / Blog */}
      <section id="thinking" className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <span className="uppercase tracking-[3px] text-xs font-semibold text-[#c9a84c]">CHAPTER 03</span>
            <h2 className="section-header tracking-tighter mt-2 text-white">Featured thinking</h2>
          </div>
          <Link href="/blog" className="mt-4 md:mt-0 inline-flex items-center text-sm font-medium text-[#a3a3a3] hover:text-white group">
            See everything on the blog 
            <span className="ml-2 group-hover:translate-x-0.5 transition">→</span>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="project-card group cursor-pointer bg-[#111] border border-white/10 rounded-3xl overflow-hidden flex flex-col hover:border-[#c9a84c]/40 transition-colors"
            >
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs px-3 py-1 bg-white/5 rounded-2xl text-[#c9a84c]">{post.pillar.split(" + ")[0].toUpperCase()}</span>
                  <span className="text-xs text-[#666]">{post.readingTime}</span>
                </div>
                <h3 className="font-semibold text-xl tracking-tight mb-3 group-hover:text-[#c9a84c] transition-colors">{post.title}</h3>
                <p className="text-[#a3a3a3] text-sm line-clamp-3">{post.excerpt}</p>
              </div>
              <div className="px-6 pb-6 text-xs text-[#c9a84c] group-hover:underline">Read the full post →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="max-w-screen-2xl mx-auto px-8 py-16 border-t border-white/10">
        <div className="max-w-3xl mb-12">
          <span className="uppercase tracking-[3px] text-xs font-semibold text-[#c9a84c]">CHAPTER 04</span>
          <h2 className="section-header tracking-tighter mt-2 text-white">The journey so far</h2>
        </div>
        
        <div className="max-w-3xl space-y-10">
          {[
            { icon: "🎓", title: "MBA in Business Strategy", sub: "Formal education + real-world application", body: "Learned the frameworks. Then spent years learning which ones survive contact with African markets." },
            { icon: "💼", title: "Built and ran real businesses", sub: "Products, services, and operations — from the ground up", body: "Designed, launched, and scaled multiple ventures. Failed some. Learned from all of them. This is where the honesty comes from." },
            { icon: "✈️", title: "Moved to the UK on a Visa", sub: "Wrexham, Wales — new chapter, same mission", body: "Building in a new environment with new constraints. Documenting the process publicly so others can learn from it." },
            { icon: "📢", title: "Building in public as a business strategist", sub: "X-first personal brand focused on honest African business strategy", body: "Now helping ambitious Africans cut through the noise with sharp, practical, context-aware thinking." },
          ].map((item, index) => (
            <div key={index} className="timeline-item flex gap-6">
              <div className="w-8 h-8 mt-1 flex-shrink-0 rounded-2xl bg-[#c9a84c]/10 flex items-center justify-center border border-[#c9a84c]/30 text-lg">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-lg">{item.title}</div>
                <div className="text-[#a3a3a3] text-sm">{item.sub}</div>
                <div className="mt-3 text-sm text-[#a3a3a3]">{item.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-screen-2xl mx-auto px-8 py-20 border-t border-white/10 bg-[#111]">
        <div className="max-w-2xl mx-auto text-center">
          <span className="uppercase tracking-[3px] text-xs font-semibold text-[#c9a84c]">CHAPTER 05</span>
          <h2 className="section-header tracking-tighter mt-3 mb-4 text-white">Ready to think bigger?</h2>
          <p className="text-[#a3a3a3] max-w-md mx-auto">Whether you’re building your first venture, scaling an existing one, or just want sharper strategic thinking — I’m here for the honest conversation.</p>
        </div>

        <div className="max-w-xl mx-auto mt-10">
          <ContactForm />

          <div className="mt-4 text-center">
            <a href="https://calendly.com/destinyjoshuas/new-meeting" target="_blank" className="text-sm text-[#c9a84c] hover:text-[#b8973e] transition-colors inline-flex items-center gap-x-1.5">
              Or book a strategy conversation directly <span>→</span>
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-x-8 mt-12 text-sm">
          <a href="https://x.com/mrjoshuaeze" target="_blank" className="flex items-center gap-x-2 text-[#a3a3a3] hover:text-white transition-colors">
            𝕏 <span>@mrjoshuaeze on X</span>
          </a>
          <a href="https://www.linkedin.com/in/mrjoshuaeze" target="_blank" className="flex items-center gap-x-2 text-[#a3a3a3] hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-screen-2xl mx-auto px-8 flex flex-col md:flex-row md:items-center justify-between gap-y-4 text-xs text-[#666]">
          <div>© 2026 Joshua Eze. Sharp thinking, no fluff.</div>
          <div className="flex items-center gap-x-5">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <div className="w-px h-2.5 bg-white/20"></div>
            <span>Built with intention in Wrexham, Wales</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
