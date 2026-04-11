import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'

export default function BlogCard({ post }) {
  const { slug, frontmatter, readingTime } = post

  return (
    <Link href={`/blog/${slug}`}>
      <article className="border-[3px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_#cc01ff] hover:-translate-x-1 hover:-translate-y-1 transition-all group h-full flex flex-col">
        {frontmatter.image && (
          <div className="aspect-video border-b-[3px] border-black overflow-hidden">
            <Image
              src={frontmatter.image}
              alt={frontmatter.imageAlt || frontmatter.title}
              width={600}
              height={340}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex gap-2 mb-3 flex-wrap">
            {frontmatter.tags?.slice(0, 2).map(tag => (
              <span key={tag} className="bg-[#00ead9] border border-black px-2 py-0.5 text-xs font-black uppercase font-mono">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-[#cc01ff] transition-colors">
            {frontmatter.title}
          </h2>
          <p className="text-sm font-bold text-gray-600 mb-4 line-clamp-2 flex-1">
            {frontmatter.excerpt}
          </p>
          <div className="text-xs font-black text-gray-400 uppercase font-mono">
            {format(new Date(frontmatter.date), 'MMM dd, yyyy')} // {readingTime} min read
          </div>
        </div>
      </article>
    </Link>
  )
}
