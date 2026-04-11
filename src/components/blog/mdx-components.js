import Image from 'next/image'
import Link from 'next/link'
import Callout from './Callout'

export const mdxComponents = {
  h2: (props) => (
    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mt-12 mb-4 border-b-[3px] border-black pb-2" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mt-8 mb-3" {...props} />
  ),
  p: (props) => (
    <p className="text-lg font-bold text-gray-700 leading-relaxed mb-6" {...props} />
  ),
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith('http')
    if (isExternal) {
      return (
        <a href={href}
          className="text-[#cc01ff] font-black underline decoration-2 underline-offset-2 hover:bg-[#cc01ff] hover:text-white transition-colors px-0.5"
          target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href || '#'}
        className="text-[#cc01ff] font-black underline decoration-2 underline-offset-2 hover:bg-[#cc01ff] hover:text-white transition-colors px-0.5"
        {...props}>
        {children}
      </Link>
    )
  },
  ul: (props) => (
    <ul className="space-y-2 mb-6 ml-4" {...props} />
  ),
  ol: (props) => (
    <ol className="space-y-2 mb-6 ml-4 list-decimal" {...props} />
  ),
  li: (props) => (
    <li className="text-lg font-bold text-gray-700 pl-2 border-l-[3px] border-[#00ead9]" {...props} />
  ),
  blockquote: (props) => (
    <blockquote className="border-l-[6px] border-[#cc01ff] bg-[#fdf4ff] p-6 my-8 font-black text-lg italic shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" {...props} />
  ),
  img: ({ src, alt, ...props }) => (
    <figure className="my-8">
      <div className="border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <Image src={src || ''} alt={alt || ''} width={800} height={450} className="w-full h-auto" />
      </div>
      {alt && <figcaption className="text-sm font-bold text-gray-500 mt-2 font-mono uppercase">{alt}</figcaption>}
    </figure>
  ),
  pre: (props) => (
    <pre className="border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-x-auto my-8 !bg-[#1a1a2e] !p-6" {...props} />
  ),
  code: (props) => {
    if (typeof props.children === 'string' && !props.className) {
      return <code className="bg-yellow-200 border border-black px-1.5 py-0.5 font-mono font-black text-sm" {...props} />
    }
    return <code {...props} />
  },
  hr: () => (
    <hr className="border-t-[3px] border-black my-12" />
  ),
  strong: (props) => (
    <strong className="font-black text-black" {...props} />
  ),
  table: (props) => (
    <div className="overflow-x-auto my-8 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <table className="w-full" {...props} />
    </div>
  ),
  th: (props) => (
    <th className="bg-black text-white font-black uppercase text-sm p-3 text-left" {...props} />
  ),
  td: (props) => (
    <td className="border-t-2 border-black p-3 font-bold text-sm" {...props} />
  ),
  Callout,
}
