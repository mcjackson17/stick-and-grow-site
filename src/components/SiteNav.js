"use client";
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { CALENDLY_URL, NAV_LINKS } from '@/lib/site'

const linkClass =
  'font-black uppercase text-sm hover:text-[#cc01ff] transition-colors whitespace-nowrap'

function Dropdown({ link }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // A dropdown that only closes on mouse-out strands keyboard and touch users.
  useEffect(() => {
    if (!open) return
    const onPointerDown = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKeyDown = e => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`${linkClass} inline-flex items-center gap-1.5 cursor-pointer`}
      >
        {link.label}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? 'rotate-180 text-[#cc01ff]' : ''}`}
        />
      </button>

      {open && (
        // The padded wrapper bridges the gap so the menu survives the trip
        // from button to panel.
        <div className="absolute left-0 top-full pt-3 z-50">
          <div className="border-[3px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-[230px]">
            {link.children.map(child => (
              <Link
                key={child.href}
                href={child.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-4 font-black uppercase text-sm border-b-2 border-black last:border-b-0 hover:bg-[#00ead9] transition-colors whitespace-nowrap"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="relative z-20 border-b-[3px] border-black bg-white">
      <div className="flex justify-between items-center p-4 md:p-8">
        <Link
          href="/"
          className="text-xl md:text-2xl font-black bg-black text-white px-3 py-1 -rotate-2 inline-block shrink-0"
        >
          STICK &amp; GROW
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map(link =>
            link.children ? (
              <Dropdown key={link.label} link={link} />
            ) : (
              <Link key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            )
          )}
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
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden border-2 border-black bg-[#00ead9] p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu: the whole thing is already vertical, so groups are shown
          expanded rather than hidden behind another tap. */}
      {menuOpen && (
        <div className="lg:hidden border-t-[3px] border-black bg-white p-4 flex flex-col gap-4">
          {NAV_LINKS.map(link =>
            link.children ? (
              <div key={link.label} className="border-b-2 border-dashed border-gray-200 pb-3">
                <div className="text-[10px] font-black uppercase tracking-widest text-[#cc01ff] mb-3 font-mono">
                  {link.label}
                </div>
                <div className="flex flex-col gap-3 pl-3 border-l-2 border-black">
                  {link.children.map(child => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-black uppercase text-base hover:text-[#cc01ff] transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-black uppercase text-base border-b-2 border-dashed border-gray-200 pb-3 hover:text-[#cc01ff] transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
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
