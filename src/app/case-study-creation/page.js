import Link from 'next/link'
import {
  ArrowRight, XSquare, CheckSquare, FileText, Search, Mic,
  BarChart3, PenLine, Send, Clock,
} from 'lucide-react'
import PageShell from '@/components/PageShell'
import Faq from '@/components/Faq'
import { CALENDLY_URL } from '@/lib/site'

export const metadata = {
  title: 'Case Study Creation | Stick & Grow',
  description:
    'Your best sales asset is a story your customer already told you. We interview your customers, find the number that actually moved, and write proof a skeptical buyer can verify. For founder-led B2B SaaS.',
  alternates: { canonical: 'https://stickandgrow.co/case-study-creation' },
}

const FAILURES = [
  {
    title: 'The logo wall',
    text: 'A grid of customer logos and nothing else. It tells a buyer you have customers. It tells them nothing about whether you solved a problem that resembles theirs.',
  },
  {
    title: 'The hollow quote',
    text: '“The team was great to work with.” Nobody has ever bought software because a stranger enjoyed the onboarding. A quote that could be about any vendor is about no vendor.',
  },
  {
    title: 'The untraceable number',
    text: '“40% more efficient.” More efficient at what, measured how, over what period, compared to what? A number a buyer cannot trace is a number they will not trust.',
  },
  {
    title: 'The interview that never happened',
    text: 'Most case studies are written from a CRM note and a marketing brief. It shows. The specifics that make a story persuasive only come out of an actual conversation.',
  },
]

const PROCESS = [
  {
    step: '01',
    Icon: Search,
    title: 'Pick the right customer',
    text: 'Not your biggest logo. The one with the clearest before and after, whose situation looks most like the buyers you want next. We go through your accounts with you and choose deliberately.',
  },
  {
    step: '02',
    Icon: Mic,
    title: 'Run the interview',
    text: 'We book it, we chase it, and we run it. Thirty to forty-five minutes with the person who actually lived the change. You do not have to be on the call, and your team does not have to project-manage it.',
  },
  {
    step: '03',
    Icon: BarChart3,
    title: 'Find the number that moved',
    text: 'We dig past the headline claim to something specific and defensible: what it was before, what it is now, how it was measured, and over what period. If the number does not hold up, we find the one that does.',
  },
  {
    step: '04',
    Icon: PenLine,
    title: 'Write it as a story with a spine',
    text: 'A real narrative: the situation, what they tried, why it failed, what changed, what it cost them to change it. Every claim in it is traceable back to something the customer said or a figure they gave us.',
  },
  {
    step: '05',
    Icon: Send,
    title: 'Ship it in the formats sales uses',
    text: 'The finished study, a one-page version your reps can attach, and the quotes and figures pulled out so they can drop into a deck, a landing page, or an email without anyone rewriting them.',
  },
]

const DELIVERABLES = [
  { title: 'The full case study', text: 'Publish-ready, written from the interview, structured so a buyer can follow the argument and check the claims.' },
  { title: 'A one-page sales version', text: 'The same story compressed to something a rep can attach to an email without apologizing for the length.' },
  { title: 'LinkedIn posts', text: 'Several posts pulled directly from the story, in your voice, ready to publish over the following weeks.' },
  { title: 'Isolated quotes and figures', text: 'The verified numbers and the usable quotes, separated out for slides, your website, and proposals.' },
  { title: 'An outreach angle', text: 'A short script that opens with the result, for reps approaching accounts that look like the customer in the story.' },
  { title: 'The customer relationship, intact', text: 'We run the interview as a conversation your customer enjoys. Done properly, this strengthens the account rather than taxing it.' },
]

const FAQS = [
  {
    q: 'Will my customers actually agree to do this?',
    a: 'More often than founders expect. We approach it as a chance for them to talk about a decision that worked, which is a flattering thing to be asked about, and we handle the scheduling and the chasing. If a customer needs approvals on their side, we work to what their legal and comms teams will sign off on rather than fighting it.',
  },
  {
    q: 'What if we do not have clean data on the result?',
    a: 'Very few companies do, and it is rarely fatal. Part of the interview is reconstructing what changed with the customer, in their own terms. A specific, honestly-framed number the customer stands behind beats a precise-looking one nobody can source.',
  },
  {
    q: 'How is this different from hiring a freelance writer?',
    a: 'A writer will produce the artifact you brief them on. The work here is upstream of the writing: choosing which customer to feature, getting the interview to yield something specific, and pressure-testing the result so it survives a skeptical reader. The writing is the last step, not the job.',
  },
  {
    q: 'How long does it take?',
    a: 'Usually two to three weeks from the kick-off to a finished asset, and most of that is waiting on your customer’s calendar and their internal approvals. We keep our part of it moving.',
  },
  {
    q: 'Do you need us to be publishing already?',
    a: 'No. This is the front door precisely because it works standalone. You do not need a content program, a marketing hire, or a publishing habit for a case study to start earning its place in sales conversations.',
  },
]

export default function CaseStudyCreation() {
  return (
    <PageShell>
      {/* --- HERO --- */}
      <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black flex flex-col items-center text-center">
        <div className="inline-block border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest mb-8 bg-[#cc01ff] text-white -rotate-1 font-mono">
          Case Study Creation
        </div>

        <h1 className="text-[clamp(1.75rem,6vw,2.75rem)] md:text-4xl lg:text-6xl font-black mb-8 tracking-tighter uppercase max-w-5xl">
          Your best sales asset is a story your customer{' '}
          <span className="inline-block bg-[#00ead9] px-2 pb-1 border-2 border-black -rotate-1">
            already told you.
          </span>
        </h1>

        <p className="text-xl font-bold mb-10 text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Somewhere in your last twenty customer calls is a number that would close your next deal. It is not written down anywhere. It lives in someone&rsquo;s memory, in a Slack thread, in a renewal call nobody transcribed. We find it, verify it, and turn it into proof a buyer can check.
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
          One engagement. One finished asset. No retainer required.
        </p>
      </section>

      {/* --- WHY NOW --- */}
      <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-[#f4f4f5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-6">
            Why this matters more than it did two years ago
          </h2>
          <p className="text-lg font-bold text-gray-700 leading-relaxed mb-6">
            Every competitor in your category can now produce a competent guide, comparison page, or explainer in about a minute. That content used to signal effort and expertise. It signals neither now, because the cost of making it has collapsed to nothing.
          </p>
          <p className="text-lg font-bold text-gray-700 leading-relaxed">
            What has not collapsed is the value of something that actually happened. A named customer, a real situation, a number they will stand behind. No tool can generate that, because it has not happened to anyone else. It is the one category of content where being the company that did the work is an unfair advantage.
          </p>
        </div>
      </section>

      {/* --- THE FAILURE MODE --- */}
      <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Most Case Studies Are Wallpaper
            </h2>
            <p className="text-lg font-bold text-gray-700 max-w-2xl mx-auto">
              You probably have two or three already. Your sales team never sends them. Here is usually why:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {FAILURES.map((f, i) => (
              <div
                key={i}
                className={`bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_#ff4d4f] ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}
              >
                <div className="flex items-start gap-3">
                  <XSquare className="text-red-500 shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="text-xl font-black mb-3 uppercase text-red-600">{f.title}</h3>
                    <p className="font-bold text-gray-700 leading-relaxed text-sm">{f.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-white border-2 border-black p-6 rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-3xl mx-auto">
            <p className="text-xl font-black uppercase tracking-tighter">
              A case study is not a testimonial with better typography. It is an argument, and it has to survive a skeptic.
            </p>
          </div>
        </div>
      </section>

      {/* --- PROCESS --- */}
      <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">How We Build It</h2>
            <p className="text-lg font-bold text-gray-600 max-w-2xl mx-auto">
              Five steps. The only one that needs your time is the first.
            </p>
          </div>

          <div className="space-y-6">
            {PROCESS.map((p, i) => (
              <div
                key={i}
                className="border-2 border-black bg-white p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-6"
              >
                <div className="flex md:flex-col items-center md:items-start gap-4 md:w-24 shrink-0">
                  <div className="bg-black text-white text-xs font-black px-2 py-1 font-mono">{p.step}</div>
                  <p.Icon className="text-[#cc01ff]" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">{p.title}</h3>
                  <p className="font-bold text-gray-600 leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DELIVERABLES --- */}
      <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-[#f4f4f5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <FileText className="mx-auto mb-4 text-[#cc01ff]" size={40} />
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">What You Get</h2>
            <p className="text-lg font-bold text-gray-600 max-w-2xl mx-auto">
              One interview, turned into everything your team can use from it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DELIVERABLES.map((d, i) => (
              <div
                key={i}
                className={`border-2 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
              >
                <CheckSquare className="text-[#cc01ff] mb-4" size={24} />
                <h3 className="text-lg font-black mb-3 uppercase tracking-tight">{d.title}</h3>
                <p className="font-bold text-gray-600 text-sm leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TIMELINE STRIP --- */}
      <section className="relative z-10 p-8 md:p-12 border-b-[3px] border-black bg-white">
        <div className="max-w-4xl mx-auto border-[3px] border-black bg-[#e0fcf9] p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-6 items-center text-center md:text-left">
          <Clock className="text-black shrink-0" size={40} />
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight mb-2">Two to three weeks, start to finish</h2>
            <p className="font-bold text-gray-700 leading-relaxed">
              Most of that is your customer&rsquo;s calendar and their internal approvals. Your own time commitment is one short call at the start to choose the account and agree the angle.
            </p>
          </div>
        </div>
      </section>

      {/* --- FIT --- */}
      <section className="relative z-10 flex flex-col md:flex-row border-b-[3px] border-black">
        <div className="flex-1 p-8 md:p-16 bg-[#e0fcf9] border-b-[3px] md:border-b-0 md:border-r-[3px] border-black">
          <h2 className="text-3xl font-black uppercase mb-8">This is for you if:</h2>
          <ul className="space-y-4 font-bold text-lg">
            <li className="flex items-start gap-3">
              <CheckSquare className="text-black shrink-0 mt-1" /> You have customers who got a real result and you have never written it up.
            </li>
            <li className="flex items-start gap-3">
              <CheckSquare className="text-black shrink-0 mt-1" /> Your sales conversations keep stalling at &ldquo;who else like us have you done this for?&rdquo;
            </li>
            <li className="flex items-start gap-3">
              <CheckSquare className="text-black shrink-0 mt-1" /> You are founder-led, with no marketing function to hand this to.
            </li>
            <li className="flex items-start gap-3">
              <CheckSquare className="text-black shrink-0 mt-1" /> You want one concrete asset before committing to anything ongoing.
            </li>
          </ul>
        </div>
        <div className="flex-1 p-8 md:p-16 bg-gray-100">
          <h2 className="text-3xl font-black uppercase mb-8">This is not for you if:</h2>
          <ul className="space-y-4 font-bold text-lg">
            <li className="flex items-start gap-3 text-gray-500">
              <XSquare className="text-gray-400 shrink-0 mt-1" /> You are pre-revenue, with no customers to interview yet.
            </li>
            <li className="flex items-start gap-3 text-gray-500">
              <XSquare className="text-gray-400 shrink-0 mt-1" /> You want the result written before anyone talks to the customer.
            </li>
            <li className="flex items-start gap-3 text-gray-500">
              <XSquare className="text-gray-400 shrink-0 mt-1" /> No customer will go on record, under any framing or level of anonymity.
            </li>
          </ul>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-white">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-12 text-center">
          Fair Questions
        </h2>
        <Faq items={FAQS} />
      </section>

      {/* --- CTA --- */}
      <section className="p-8 md:p-20 text-center bg-[#00ead9] relative border-b-[3px] border-black">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 max-w-4xl mx-auto">
          You are already sitting on the{' '}
          <span className="bg-black text-white px-4 py-1 inline-block -rotate-2">proof.</span>
        </h2>
        <p className="font-bold text-lg text-black/70 max-w-2xl mx-auto mb-10">
          Book a roadmap session. We will go through your accounts, find the story worth telling first, and tell you honestly whether it is strong enough to build on.
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

      {/* --- POINTER TO CONTENT ENGINE --- */}
      <section className="relative z-10 p-8 md:p-12 bg-white border-b-[3px] border-black">
        <div className="max-w-3xl mx-auto border-2 border-black bg-[#f4f4f5] p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
          <div className="text-[10px] font-black uppercase tracking-widest text-[#cc01ff] mb-3 font-mono">
            After This
          </div>
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4">
            When one case study is not the problem any more
          </h2>
          <p className="font-bold text-gray-600 leading-relaxed mb-6">
            A finished case study answers whether proof moves your deals. It does not answer how you produce proof every week without it landing back on you. That is what the Content Engine is for.
          </p>
          <Link
            href="/content-engine"
            className="font-black uppercase text-sm inline-flex items-center gap-2 border-b-4 border-[#cc01ff] pb-1 hover:text-[#cc01ff] transition-colors"
          >
            See The Content Engine <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
