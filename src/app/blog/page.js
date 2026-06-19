import { getAllPosts } from '@/lib/blog'
import BlogCard from '@/components/blog/BlogCard'
import BlogNav from '@/components/blog/BlogNav'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata = {
  title: 'Blog | Stick & Grow — B2B SaaS Content Strategy',
  description: 'Insights on founder-led content, MQL generation, and B2B SaaS content strategy from the Stick & Grow team.',
  openGraph: {
    title: 'Blog | Stick & Grow',
    description: 'Founder-led content strategy for B2B SaaS.',
    url: 'https://stickandgrow.co/blog',
    type: 'website',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111] p-4 md:p-8 selection:bg-[#00ead9]/40 overflow-x-hidden">
      <div className="max-w-7xl mx-auto border-[3px] border-black bg-white relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <BlogNav />

        <section className="relative z-10 p-8 md:p-16">
          <div className="inline-block border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest mb-8 bg-[#cc01ff] text-white -rotate-1 font-mono">
            Insights & Strategy
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4">
            The Blog
          </h1>
          <p className="text-xl font-bold text-gray-600 mb-12 max-w-2xl">
            Tactical content strategy for B2B SaaS founders who want pipeline, not pageviews.
          </p>

          {posts.length === 0 ? (
            <div className="border-2 border-black p-12 text-center bg-gray-50">
              <p className="text-xl font-black uppercase text-gray-400">Posts coming soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </section>
        <NewsletterSignup className="border-b-0" />
      </div>

      <div className="max-w-7xl mx-auto text-center mt-8 text-xs font-black uppercase tracking-widest text-gray-400 font-mono">
        &copy; 2026 Stick & Grow // Founder-Led Pipeline Systems
      </div>
    </div>
  )
}
