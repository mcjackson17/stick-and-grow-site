"use client";
import { useState } from 'react'
import { HelpCircle } from 'lucide-react'

export default function Faq({ items }) {
  const [active, setActive] = useState(null)

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((faq, i) => (
        <div key={i} className="border-2 border-black bg-white">
          <button
            type="button"
            onClick={() => setActive(active === i ? null : i)}
            aria-expanded={active === i}
            className="w-full text-left p-6 font-black text-lg flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            {faq.q}
            <HelpCircle
              className={`shrink-0 transition-transform ${active === i ? 'text-[#cc01ff] rotate-180' : 'text-black'}`}
            />
          </button>
          {active === i && (
            <div className="p-6 pt-0 font-bold text-gray-600 border-t-2 border-dashed border-gray-200">
              <span className="text-[#cc01ff] font-black mr-2 font-mono">A:</span>
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
