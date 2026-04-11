import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import BlogPost from '@/components/blog/BlogPost'
import BlogNav from '@/components/blog/BlogNav'

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }

  const { frontmatter } = post
  return {
    title: `${frontmatter.title} | Stick & Grow`,
    description: frontmatter.excerpt,
    keywords: frontmatter.tags,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      type: 'article',
      publishedTime: frontmatter.date,
      url: `https://stickandgrow.co/blog/${slug}`,
      images: frontmatter.image
        ? [{ url: `https://stickandgrow.co${frontmatter.image}`, width: 1200, height: 630, alt: frontmatter.imageAlt || frontmatter.title }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    author: { '@type': 'Person', name: post.frontmatter.author },
    datePublished: post.frontmatter.date,
    image: post.frontmatter.image ? `https://stickandgrow.co${post.frontmatter.image}` : undefined,
    publisher: { '@type': 'Organization', name: 'Stick & Grow' },
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111] p-4 md:p-8 selection:bg-[#00ead9]/40 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto border-[3px] border-black bg-white relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <BlogNav />
        <BlogPost post={post} />
      </div>

      <div className="max-w-7xl mx-auto text-center mt-8 text-xs font-black uppercase tracking-widest text-gray-400 font-mono">
        &copy; 2026 Stick & Grow // Founder-Led Pipeline Systems
      </div>
    </div>
  )
}
