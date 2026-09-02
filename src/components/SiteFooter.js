import Link from 'next/link'
import { CALENDLY_URL, NAV_LINKS } from '@/lib/site'

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t-[3px] border-black bg-white p-8 md:p-12">
      <div className="flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
        <div>
          <Link href="/" className="text-xl font-black bg-black text-white px-3 py-1 -rotate-2 inline-block mb-4">
            STICK &amp; GROW
          </Link>
          <p className="font-bold text-sm text-gray-600 max-w-sm leading-relaxed">
            A content operation for founder-led B2B SaaS. Research, search, founder POV and customer proof, reporting to your sales team every week.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="font-black uppercase text-sm hover:text-[#cc01ff] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-black uppercase text-sm hover:text-[#cc01ff] transition-colors"
          >
            Book A Call
          </a>
        </div>
      </div>
    </footer>
  )
}
