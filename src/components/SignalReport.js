import { ClipboardCheck } from 'lucide-react'

const ROWS = [
  { score: 94, company: 'Northwind Logistics', role: 'VP Operations', signals: ['Engaged 5 posts', 'Opened last 4 newsletters', 'Read case study', 'Returned wk 3'] },
  { score: 89, company: 'Apex Health Systems', role: 'Director, IT', signals: ['Downloaded benchmark', 'Engaged 3 posts', 'Asked: integration'] },
  { score: 83, company: 'Cobalt Fintech', role: 'Head of RevOps', signals: ['DM’d the founder', 'Engaged 4 posts', 'Newsletter subscriber'] },
  { score: 76, company: 'Meridian Software', role: 'Founder / CEO', signals: ['Found us via AI answer', 'Downloaded teardown', 'Engaged 3 posts'] },
]

// The receipt for the whole promise, so it appears wherever that promise is made.
export default function SignalReport() {
  return (
    <>
      <div className="border-[3px] border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_#cc01ff] max-w-4xl mx-auto">
        <div className="flex items-center justify-between border-b-[3px] border-black bg-black text-white px-5 py-3">
          <div className="flex items-center gap-3">
            <ClipboardCheck size={20} className="text-[#00ead9]" />
            <span className="font-black uppercase tracking-wider text-sm font-mono">Signal Report</span>
          </div>
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-gray-300">
            Delivered weekly &rarr; Sales
          </span>
        </div>

        <div className="divide-y-2 divide-dashed divide-gray-200">
          {ROWS.map((row, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 p-5 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4 md:w-72 shrink-0">
                <div
                  className={`w-14 h-14 shrink-0 border-2 border-black flex items-center justify-center font-black text-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${row.score >= 90 ? 'bg-[#cc01ff] text-white' : 'bg-[#00ead9] text-black'}`}
                >
                  {row.score}
                </div>
                <div>
                  <div className="font-black uppercase text-sm leading-tight">{row.company}</div>
                  <div className="text-xs font-bold text-gray-500 font-mono uppercase tracking-wide">{row.role}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {row.signals.map((s, j) => (
                  <span
                    key={j}
                    className="inline-block border-2 border-black bg-white px-2 py-1 text-[11px] font-black uppercase tracking-wide font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t-[3px] border-black bg-[#f4f4f5] px-5 py-3 text-center font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">
          Scored from behavior on your own surfaces. Handed to your sales team every week.
        </div>
      </div>
      <p className="text-center text-xs font-bold text-gray-400 mt-4 font-mono uppercase tracking-widest">
        Sample report. Your accounts and signals will be real.
      </p>
    </>
  )
}
