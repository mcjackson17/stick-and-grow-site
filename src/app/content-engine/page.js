import Link from 'next/link'
import {
  ArrowRight, CheckSquare, XSquare, Linkedin, Mail, PenLine, Radio,
  ClipboardCheck, AlertTriangle, Layers,
} from 'lucide-react'
import PageShell from '@/components/PageShell'
import AuditCTA from '@/components/AuditCTA'
import Faq from '@/components/Faq'
import { CALENDLY_URL } from '@/lib/site'

export const metadata = {
  title: 'The Content Engine | Stick & Grow',
  description:
    'A 90-day sprint that makes you visible every week with things only you can say, and hands your sales team the accounts that engaged. Founder-led B2B SaaS content that produces trackable pipeline, not just reach.',
  alternates: { canonical: 'https://stickandgrow.co/content-engine' },
}

const SURFACES = [
  {
    Icon: Linkedin,
    label: 'Weekly',
    title: 'LinkedIn',
    text: 'Where your buyers already are. Posts built from your positions, your customer calls, and the arguments you make in sales conversations. Published under your name, in your voice.',
  },
  {
    Icon: Mail,
    label: 'Weekly',
    title: 'The newsletter',
    text: 'The asset you own outright, on a list no algorithm can take away. It goes deeper than a post can, and it is the surface where a reader turns into a named account you can track.',
  },
  {
    Icon: PenLine,
    label: 'Ongoing',
    title: 'The blog',
    text: 'The durable layer. Where your proof gets written down properly, indexed, and cited back to you by search engines and AI assistants when buyers go looking.',
  },
  {
    Icon: Radio,
    label: 'Optional',
    title: 'A live show',
    text: 'If you are willing to go on camera, everything accelerates. One taping feeds a week of the engine and produces the strongest engagement signal there is. Powerful, and not mandatory.',
  },
]

const PHASES = [
  {
    window: 'Days 01 - 30',
    title: 'Extraction',
    text: 'We mine what you already know. Your positions, the arguments that win deals, the objections you answer weekly, and the customer results nobody has written down. We build the messaging spine, agree what you will be known for, and start publishing.',
    points: ['Founder extraction sessions', 'Messaging spine and content pillars', 'First posts live inside week two'],
  },
  {
    window: 'Days 31 - 60',
    title: 'Rhythm',
    text: 'The full weekly cadence goes live across every surface, and it stops depending on your motivation. Signal tracking comes online in parallel, so we can see which accounts are reacting to which arguments.',
    points: ['LinkedIn, newsletter and blog on cadence', 'Engagement tracking live', 'First weekly signal report'],
  },
  {
    window: 'Days 61 - 90',
    title: 'Compounding',
    text: 'We add the capture layer and close the loop to sales. Lead magnets engineered to surface in-market buyers, warm account lists going to your reps every week, and the whole operating system documented so it survives without heroics.',
    points: ['Lead magnets and hand-raiser assets', 'Weekly account lists to sales', 'The system documented and repeatable'],
  },
]

const SIGNAL_ROWS = [
  { score: 94, company: 'Northwind Logistics', role: 'VP Operations', signals: ['Engaged 5 posts', 'Opened last 4 newsletters', 'Read case study', 'Returned wk 3'] },
  { score: 89, company: 'Apex Health Systems', role: 'Director, IT', signals: ['Downloaded teardown', 'Engaged 3 posts', 'Asked: integration'] },
  { score: 83, company: 'Cobalt Fintech', role: 'Head of RevOps', signals: ['DM’d the founder', 'Engaged 4 posts', 'Newsletter subscriber'] },
  { score: 76, company: 'Meridian Software', role: 'Founder / CEO', signals: ['Attended live session', 'Downloaded teardown', 'Engaged 3 posts'] },
]

const FAQS = [
  {
    q: 'How is this different from a content agency?',
    a: 'A content agency is measured on what it published. We are measured on which accounts moved. The work looks similar from the outside, posts and newsletters and articles, but the input and the output are different: the input is your actual expertise rather than a research brief, and the output includes a named list of accounts that engaged. Publishing is the mechanism, not the deliverable.',
  },
  {
    q: 'Will the content still sound like me?',
    a: 'Yes, because it starts as you. Everything traces back to an extraction session, a customer call, or a position you have argued in a sales conversation. We use AI to shape and scale what you actually said. We never use it to invent a point of view on your behalf, which is the exact failure mode this offer exists to avoid.',
  },
  {
    q: 'How much of my time does this take?',
    a: 'Roughly an hour a week once the sprint is running, and a heavier first couple of weeks while we extract your thinking. If you take the optional live show, that hour becomes the taping. Your time is the one input we genuinely cannot substitute, and it is also the thing that makes the output impossible to copy.',
  },
  {
    q: 'What makes the account list worth anything?',
    a: 'It is built from behavior on your own surfaces rather than bought from a data vendor. We can see who engaged with which argument, how often, and whether they came back. That is a first-party signal about your specific positioning, which is a far better predictor than a third-party score guessing that a company might be in-market.',
  },
  {
    q: 'Do I need to have done a case study first?',
    a: 'No, but many clients arrive that way, because a finished case study is a cheap way to test whether proof moves your buyers before committing to a 90-day sprint. If you already know it does, you can start here.',
  },
  {
    q: 'What happens after 90 days?',
    a: 'The sprint installs the system and proves the loop. Most clients continue with us operating it. Some take it in-house using the documentation, which is a legitimate outcome and one we build for deliberately rather than resist.',
  },
]

export default function ContentEngine() {
  return (
    <PageShell>
      {/* --- HERO --- */}
      <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black flex flex-col items-center text-center">
        <div className="inline-block border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest mb-8 bg-[#cc01ff] text-white -rotate-1 font-mono">
          The Content Engine
        </div>

        <h1 className="text-[clamp(1.75rem,6vw,2.75rem)] md:text-4xl lg:text-6xl font-black mb-8 tracking-tighter uppercase max-w-5xl">
          Be the obvious choice{' '}
          <span className="inline-block bg-[#00ead9] px-2 pb-1 border-2 border-black -rotate-1">
            before the first call.
          </span>
        </h1>

        <p className="text-xl font-bold mb-10 text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Your buyers spend months forming a view of you before they ever raise a hand. Right now that view is being shaped by whoever publishes most, not by whoever is best. The Content Engine puts you in front of them every week with things only you can say, then tells you by name which accounts are paying attention.
        </p>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-8 py-5 text-lg md:text-xl font-black shadow-[8px_8px_0px_0px_#cc01ff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all inline-flex items-center justify-center gap-3 uppercase"
        >
          Book A Roadmap Session <ArrowRight size={24} />
        </a>

        <p className="mt-6 font-bold text-sm text-gray-500 font-mono uppercase tracking-widest">
          A 90-day sprint. One hour of your time a week.
        </p>
      </section>

      {/* --- THE PROBLEM --- */}
      <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-red-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-8">
            <AlertTriangle className="text-red-500" size={32} />
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">
              The Founder-Led Ceiling
            </h2>
          </div>

          <p className="text-center font-bold text-xl mb-10 text-gray-700 max-w-3xl mx-auto">
            You are the best salesperson in your company and the only person who can explain why the product is different. That works, right up until it does not.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { title: 'It only scales to your calendar', text: 'Your magnetism converts brilliantly on calls. It reaches exactly as many people as you can personally speak to in a week, and not one more.' },
              { title: 'Publishing dies when you get busy', text: 'You post for three weeks, close a deal, and vanish for two months. Nothing compounds, because nothing is consistent enough to compound.' },
              { title: 'You cannot see who is warming up', text: 'Someone reads everything you write for four months and you have no idea they exist until they fill in a form, if they ever do.' },
            ].map((item, i) => (
              <div key={i} className={`bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_#ff4d4f] ${i === 1 ? 'rotate-1' : '-rotate-1'}`}>
                <h3 className="text-lg font-black mb-3 uppercase text-red-600">{item.title}</h3>
                <p className="font-bold text-gray-700 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-white border-2 border-black p-6 rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-3xl mx-auto">
            <p className="text-xl font-black uppercase tracking-tighter">
              You do not need to become a full-time creator. You need a system that runs on one hour of you.
            </p>
          </div>
        </div>
      </section>

      {/* --- THE SURFACES --- */}
      <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Layers className="mx-auto mb-4 text-[#cc01ff]" size={40} />
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Where You Become Visible
            </h2>
            <p className="text-lg font-bold text-gray-600 max-w-2xl mx-auto">
              One weekly rhythm across the surfaces where your buyers actually form opinions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SURFACES.map((s, i) => (
              <div
                key={i}
                className={`border-[3px] border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}
              >
                <div className="flex items-center justify-between mb-5">
                  <s.Icon className="text-[#cc01ff]" size={32} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 font-mono border border-gray-300 px-2 py-1">
                    {s.label}
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">{s.title}</h3>
                <p className="font-bold text-gray-600 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE 90 DAY SPRINT --- */}
      <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-[#f4f4f5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest mb-6 bg-[#cc01ff] text-white -rotate-1 font-mono">
              The Structure
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">The 90-Day Sprint</h2>
            <p className="text-lg font-bold text-gray-600 max-w-2xl mx-auto">
              Three phases. At the end of it you have a running system, not a folder of drafts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PHASES.map((p, i) => (
              <div key={i} className="border-[3px] border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative flex flex-col">
                <div className="bg-black text-white text-xs font-black inline-block px-2 py-1 mb-4 font-mono self-start">
                  {p.window}
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight">{p.title}</h3>
                <p className="font-bold text-gray-600 leading-relaxed mb-6 flex-1">{p.text}</p>
                <ul className="space-y-2 border-t-2 border-dashed border-gray-200 pt-4">
                  {p.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2 font-bold text-sm text-gray-700">
                      <CheckSquare className="text-[#cc01ff] shrink-0 mt-0.5" size={16} /> {pt}
                    </li>
                  ))}
                </ul>
                {i !== 2 && (
                  <ArrowRight className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-black z-10" size={28} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE WEEKLY RECEIPT --- */}
      <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest mb-6 bg-black text-white -rotate-1 font-mono">
              The Weekly Receipt
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Proof That The Engine Is Working
            </h2>
            <p className="text-lg font-bold text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Content programs usually ask you to take reach on faith. This one does not. Every week you get the accounts that engaged, what they engaged with, and how warm they are, so the argument stops being about impressions and starts being about who your team should call.
            </p>
          </div>

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
              {SIGNAL_ROWS.map((row, i) => (
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
        </div>
      </section>

      {/* --- FIT --- */}
      <section className="relative z-10 flex flex-col md:flex-row border-b-[3px] border-black">
        <div className="flex-1 p-8 md:p-16 bg-[#e0fcf9] border-b-[3px] md:border-b-0 md:border-r-[3px] border-black">
          <h2 className="text-3xl font-black uppercase mb-8">We Build For:</h2>
          <ul className="space-y-4 font-bold text-lg">
            <li className="flex items-start gap-3"><CheckSquare className="text-black shrink-0 mt-1" /> Founder-led B2B SaaS with traction and stalled growth.</li>
            <li className="flex items-start gap-3"><CheckSquare className="text-black shrink-0 mt-1" /> Founders with no marketing function, doing it all themselves.</li>
            <li className="flex items-start gap-3"><CheckSquare className="text-black shrink-0 mt-1" /> Founders with real opinions they have never published.</li>
            <li className="flex items-start gap-3"><CheckSquare className="text-black shrink-0 mt-1" /> Teams with a sales motion ready to work warm accounts.</li>
          </ul>
        </div>
        <div className="flex-1 p-8 md:p-16 bg-gray-100">
          <h2 className="text-3xl font-black uppercase mb-8">We Don&rsquo;t Work With:</h2>
          <ul className="space-y-4 font-bold text-lg">
            <li className="flex items-start gap-3 text-gray-500"><XSquare className="text-gray-400 shrink-0 mt-1" /> Pre-revenue, idea-stage startups.</li>
            <li className="flex items-start gap-3 text-gray-500"><XSquare className="text-gray-400 shrink-0 mt-1" /> Founders who want to outsource having a point of view.</li>
            <li className="flex items-start gap-3 text-gray-500"><XSquare className="text-gray-400 shrink-0 mt-1" /> Anyone chasing viral reach instead of booked pipeline.</li>
          </ul>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-white">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-12 text-center">Skeptical? Good.</h2>
        <Faq items={FAQS} />
      </section>

      {/* --- FREE AUDIT --- */}
      <AuditCTA />

      {/* --- CTA --- */}
      <section className="p-8 md:p-20 text-center bg-[#00ead9] relative border-b-[3px] border-black">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 max-w-4xl mx-auto">
          One hour of you. A full week of{' '}
          <span className="bg-black text-white px-4 py-1 inline-block -rotate-2">proof.</span>
        </h2>
        <p className="font-bold text-lg text-black/70 max-w-2xl mx-auto mb-10">
          Book a roadmap session. We will map what you already know, where your buyers are looking, and what the first 90 days would actually produce.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-8 py-4 text-lg md:px-12 md:py-6 md:text-2xl font-black border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all inline-block uppercase"
        >
          Book A Roadmap Session
        </a>
      </section>

      {/* --- POINTER BACK TO CASE STUDIES --- */}
      <section className="relative z-10 p-8 md:p-12 bg-white border-b-[3px] border-black">
        <div className="max-w-3xl mx-auto border-2 border-black bg-[#f4f4f5] p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
          <div className="text-[10px] font-black uppercase tracking-widest text-[#cc01ff] mb-3 font-mono">
            Not Ready For 90 Days?
          </div>
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4">
            Start with a single proof asset instead
          </h2>
          <p className="font-bold text-gray-600 leading-relaxed mb-6">
            A single case study is a cheaper way to find out whether proof moves your buyers. One engagement, one finished asset, no ongoing commitment. Most clients start there.
          </p>
          <Link
            href="/case-study-creation"
            className="font-black uppercase text-sm inline-flex items-center gap-2 border-b-4 border-[#cc01ff] pb-1 hover:text-[#cc01ff] transition-colors"
          >
            See Case Study Creation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
