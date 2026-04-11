import { Suspense } from 'react'
import { MDXRemote } from 'next-mdx-remote-client/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { format } from 'date-fns'
import Image from 'next/image'
import { mdxComponents } from './mdx-components'

export default function BlogPost({ post }) {
  const { frontmatter, content, readingTime } = post

  return (
    <article className="p-8 md:p-16">
      {/* Hero image */}
      {frontmatter.image && (
        <div className="aspect-video border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden mb-10">
          <Image
            src={frontmatter.image}
            alt={frontmatter.imageAlt || frontmatter.title}
            width={1200}
            height={630}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      )}

      {/* Tags */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {frontmatter.tags?.map(tag => (
          <span key={tag} className="bg-[#00ead9] border border-black px-2 py-0.5 text-xs font-black uppercase font-mono">
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
        {frontmatter.title}
      </h1>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm font-black text-gray-500 uppercase font-mono mb-10 pb-10 border-b-[3px] border-black">
        <span>{frontmatter.author}</span>
        <span className="hidden md:inline">//</span>
        <span>{format(new Date(frontmatter.date), 'MMMM dd, yyyy')}</span>
        <span className="hidden md:inline">//</span>
        <span>{readingTime} min read</span>
      </div>

      {/* MDX Content */}
      <div className="max-w-3xl">
        <Suspense fallback={<div className="animate-pulse h-96 bg-gray-100 border-2 border-black" />}>
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                ],
              },
            }}
            components={mdxComponents}
          />
        </Suspense>
      </div>

      {/* CTA at bottom of every post */}
      <div className="mt-16 bg-[#00ead9] border-[3px] border-black p-8 md:p-12 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4">
          Want content that actually books demos?
        </h2>
        <a
          href="https://calendly.com/dan-mcdermott/let-s-talk"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-8 py-4 font-black text-lg shadow-[4px_4px_0px_0px_#cc01ff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all inline-block uppercase"
        >
          Build My Content Engine
        </a>
      </div>
    </article>
  )
}
