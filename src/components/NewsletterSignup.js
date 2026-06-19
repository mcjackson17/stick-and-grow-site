'use client'

import { useState } from 'react'

export default function NewsletterSignup({ className = '' }) {
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.get('email'),
          website: formData.get('website'),
        }),
      })
      const data = await response.json()

      if (!response.ok) throw new Error(data.error || 'Unable to subscribe right now.')

      form.reset()
      setStatus('success')
      setMessage('You’re in. Check your inbox for a welcome email.')
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'Unable to subscribe right now.')
    }
  }

  return (
    <section className={`relative z-10 p-8 md:p-14 bg-[#cc01ff] border-y-[3px] border-black ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block border-2 border-black bg-yellow-200 px-3 py-1 text-xs font-black uppercase tracking-widest mb-5 -rotate-1 font-mono">
          The Stick &amp; Grow Newsletter
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
          Founder-led content that builds pipeline.
        </h2>
        <p className="text-lg font-bold text-white/90 max-w-2xl mx-auto mb-8">
          Practical ideas on turning expertise, content, and buyer signals into growth. No empty reach hacks.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto" aria-label="Newsletter signup">
          <label className="sr-only" htmlFor="newsletter-email">Email address</label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            required
            className="min-w-0 flex-1 border-[3px] border-black bg-white px-5 py-4 text-base font-bold outline-none focus:shadow-[5px_5px_0px_0px_#00ead9]"
          />
          <input
            name="website"
            type="text"
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[10000px] h-px w-px overflow-hidden"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="border-[3px] border-black bg-[#00ead9] px-7 py-4 font-black uppercase shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all disabled:opacity-60 disabled:cursor-wait"
          >
            {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>

        <div className="min-h-6 mt-4 text-sm font-bold text-white" role="status" aria-live="polite">
          {message || 'Free. Unsubscribe anytime.'}
        </div>
      </div>
    </section>
  )
}
