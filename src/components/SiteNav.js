"use client";
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { CALENDLY_URL, NAV_LINKS } from '@/lib/site'

export default function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="relative z-20 border-b-[3px] border-black bg-white">
      <div className="flex justify-between items-center p-4 md:p-8">
        <Link href="/" className="text-xl md:text-2xl font-black bg-black text-white px-3 py-1 -rotate-2 inline-block shrink-0">
          STICK &amp; GROW
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="font-black uppercase text-sm hover:text-[#cc01ff] transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00ead9] border-2 border-black font-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase text-sm whitespace-nowrap"
          >
            Book A Roadmap Session
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden border-2 border-black bg-[#00ead9] p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t-[3px] border-black bg-white p-4 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-black uppercase text-base border-b-2 border-dashed border-gray-200 pb-3 hover:text-[#cc01ff] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00ead9] border-2 border-black font-black px-6 py-3 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase text-sm"
          >
            Book A Roadmap Session
          </a>
        </div>
      )}
    </nav>
  )
}
