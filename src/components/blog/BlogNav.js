import Link from 'next/link'

export default function BlogNav() {
  return (
    <nav className="relative z-10 flex justify-between items-center p-4 md:p-8 border-b-[3px] border-black bg-white">
      <Link href="/" className="text-2xl font-black bg-black text-white px-3 py-1 -rotate-2 inline-block">
        STICK & GROW
      </Link>
      <div className="flex items-center gap-4 md:gap-6">
        <Link href="/blog" className="font-black uppercase text-sm hover:text-[#cc01ff] transition-colors">
          Blog
        </Link>
        <a
          href="https://calendly.com/dan-mcdermott/let-s-talk"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#00ead9] border-2 border-black font-black px-4 py-2 md:px-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase text-sm"
        >
          Get Started
        </a>
      </div>
    </nav>
  )
}
