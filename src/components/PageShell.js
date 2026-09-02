import SiteNav from './SiteNav'
import SiteFooter from './SiteFooter'

// The outer neo-brutalist frame shared by every marketing page:
// off-white page, bordered white card, faint grid, nav + footer.
export default function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111] p-4 md:p-8 selection:bg-[#00ead9]/40 overflow-x-hidden">
      <div className="max-w-7xl mx-auto border-[3px] border-black bg-white relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        <SiteNav />
        {children}
        <SiteFooter />
      </div>

      <div className="max-w-7xl mx-auto text-center mt-8 text-xs font-black uppercase tracking-widest text-gray-400 font-mono">
        © 2026 Stick &amp; Grow // Content Operations For B2B SaaS
      </div>
    </div>
  )
}
