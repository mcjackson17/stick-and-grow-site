import { Linkedin, ArrowRight } from 'lucide-react'
import { AUDIT_URL } from '@/lib/site'

// Free lead magnet. Lower-commitment entry point than the roadmap session.
export default function AuditCTA() {
  return (
    <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-[#f4f4f5]">
      <div className="max-w-4xl mx-auto border-[3px] border-black bg-white p-8 md:p-10 shadow-[10px_10px_0px_0px_#cc01ff] flex flex-col md:flex-row gap-8 md:items-center">
        <div className="shrink-0">
          <div className="w-16 h-16 bg-[#00ead9] border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Linkedin size={32} />
          </div>
        </div>
        <div className="flex-1">
          <div className="text-[10px] font-black uppercase tracking-widest text-[#cc01ff] mb-2 font-mono">
            Free // No Call Required
          </div>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-3">
            Find out who is already paying attention
          </h2>
          <p className="font-bold text-gray-600 leading-relaxed">
            Run a free audit of your LinkedIn presence. You get the buying signals sitting in your existing activity: which accounts engage, which posts pull real interest, and where your proof is missing. No call, no pitch.
          </p>
        </div>
        <a
          href={AUDIT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-6 py-4 font-black uppercase shadow-[6px_6px_0px_0px_#00ead9] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all inline-flex items-center justify-center gap-2 shrink-0 text-center"
        >
          Run My Audit <ArrowRight size={20} />
        </a>
      </div>
    </section>
  )
}
