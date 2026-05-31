"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Scissors, Crosshair, Activity, Filter, Linkedin, ArrowRight, CheckSquare, XSquare, Radio, HelpCircle, AlertTriangle, Database, ClipboardCheck } from 'lucide-react';

const StickAndGrowCascadingVSL = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const springHover = {
    rest: { x: 0, y: 0, boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" },
    hover: {
      x: -6,
      y: -6,
      boxShadow: "14px 14px 0px 0px #cc01ff",
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111] p-4 md:p-8 selection:bg-[#00ead9]/40 overflow-x-hidden">

      <div className="max-w-7xl mx-auto border-[3px] border-black bg-white relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">

        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

        {/* --- NAVIGATION --- */}
        <nav className="relative z-10 flex justify-between items-center p-4 md:p-8 border-b-[3px] border-black bg-white">
          <div className="text-2xl font-black bg-black text-white px-3 py-1 -rotate-2">
            STICK & GROW
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <a href="/blog" className="font-black uppercase text-sm hover:text-[#cc01ff] transition-colors">
              Blog
            </a>
            <a href="https://calendly.com/dan-mcdermott/let-s-talk" target="_blank" rel="noopener noreferrer" className="bg-[#00ead9] border-2 border-black font-black px-4 py-2 md:px-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase text-sm">
              Get Started
            </a>
          </div>
        </nav>

        {/* --- 1. HERO SECTION --- */}
        <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black flex flex-col items-center text-center">

          <div className="inline-block border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest mb-8 bg-[#cc01ff] text-white -rotate-1 font-mono">
            For Founders Who Are Their Own Best Salesperson
          </div>

          <h1 className="text-[clamp(1.75rem,7vw,3rem)] md:text-5xl lg:text-7xl font-black mb-10 tracking-tighter uppercase mx-auto max-w-6xl flex flex-col items-center">
            <span className="block mb-2 md:whitespace-nowrap">
              Most content builds
            </span>
            <span className="block mb-2 md:whitespace-nowrap">
              an audience. Ours builds
            </span>
            <span className="block md:whitespace-nowrap">
              <span className="inline-block bg-[#00ead9] px-2 pb-1 border-2 border-black -rotate-1 relative top-[-4px]">
                pipeline.
              </span>
            </span>
          </h1>

          <p className="text-xl font-bold mb-12 text-gray-700 max-w-2xl mx-auto leading-relaxed">
            You host a weekly show. You show up for one hour; we do everything else. We turn that hour into a full week of content and a list of in-market accounts, then hand the list to your sales team.
          </p>

          <div className="w-full max-w-4xl relative mb-12 group">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="aspect-video bg-gray-100 border-[3px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center cursor-pointer relative overflow-hidden group-hover:shadow-[20px_20px_0px_0px_#cc01ff]"
            >
               <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-black" />
                <div className="w-3 h-3 rounded-full bg-black" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 h-2 bg-black/10 rounded-full border border-black overflow-hidden">
                <div className="w-1/3 h-full bg-[#cc01ff]" />
              </div>

              <div className="w-24 h-24 bg-[#00ead9] border-[3px] border-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-[#cc01ff]">
                <Play fill="black" size={40} className="ml-2" />
              </div>
            </motion.div>

            <div className="absolute -bottom-6 -right-6 bg-[#e0fcf9] border-2 border-black p-3 text-sm font-black rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 hidden md:block font-mono">
              Watch: How the show becomes pipeline (2 Min)
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl justify-center mt-4 mb-8">
            <a href="https://calendly.com/dan-mcdermott/let-s-talk" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-5 text-xl font-black shadow-[8px_8px_0px_0px_#cc01ff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all inline-flex items-center justify-center gap-3 w-full md:w-auto">
              BUILD MY PIPELINE ENGINE <ArrowRight size={24}/>
            </a>

            <div className="bg-yellow-200 border-2 border-black p-4 -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-left w-full md:max-w-sm">
                <span className="font-black uppercase text-sm border-b-2 border-black pb-1 mb-2 block font-mono">The Promise:</span>
                <span className="font-bold text-sm">Your live show is on air inside your first <span className="underline decoration-black decoration-4">30 days</span>.</span>
            </div>
          </div>

        </section>

        {/* --- 2. THE PROBLEM --- */}
        <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-red-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-8">
              <AlertTriangle className="text-red-500" size={32} />
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">Reach Is Not Pipeline</h2>
            </div>

            <p className="text-center font-bold text-xl mb-12 text-gray-700">You're a magnet in the room. But your growth has stalled, and the content you're doing isn't fixing it. Usually it's one of these:</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { title: "Trap 1: The Vanity Loop", text: "You post. Likes climb, impressions look great, and none of it shows up in your CRM. Reach feels like progress, but your sales team has nothing new to call." },
                { title: "Trap 2: The Ghostwriter Gap", text: "You hire a generic agency. They chase vanity metrics like reach and likes, not buying signals. Nobody tracks who is actually in-market, so the leads never materialize." },
                { title: "Trap 3: The One-Hour Bottleneck", text: "You're your own best salesperson, but you can only be in so many rooms. Your magnetism never scales past the calls you personally take." }
              ].map((trap, i) => (
                <div key={i} className={`bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_#ff4d4f] flex flex-col ${i === 1 ? 'rotate-1' : '-rotate-1'}`}>
                  <h3 className="text-xl font-black mb-4 uppercase text-red-600">{trap.title}</h3>
                  <p className="font-bold text-gray-700 leading-relaxed text-sm">{trap.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center bg-white border-2 border-black p-6 rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-3xl mx-auto">
              <p className="text-xl font-black uppercase tracking-tighter">The fix isn't louder content. It's a system that turns the attention you earn into a list of buyers your sales team can close.</p>
            </div>
          </div>
        </section>

        {/* --- STUPIDLY SIMPLE --- */}
        <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">The Offer Is Stupidly Simple</h2>
              <p className="text-lg font-bold text-gray-600 max-w-2xl mx-auto">You do one thing. We do everything else. Your sales team gets the payoff.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { num: "1", who: "You", color: "bg-[#cc01ff] text-white", title: "Show up for one hour", text: "On camera, once a week, as yourself. Bring your expertise and your opinions. That's the whole job." },
                { num: "2", who: "We", color: "bg-[#00ead9] text-black", title: "Run the entire system", text: "We produce the show, cut the clips, write the posts and newsletter, build the lead magnets, and track every buying signal across every surface." },
                { num: "3", who: "Your sales team", color: "bg-black text-white", title: "Gets a list of buyers", text: "Every week, the accounts that raised their hand. Warm, qualified, and ready to work. No cold calling." }
              ].map((s, i) => (
                <div key={i} className={`border-[3px] border-black p-8 bg-white relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}>
                  <div className={`w-14 h-14 ${s.color} border-2 border-black flex items-center justify-center font-black text-2xl mb-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}>{s.num}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#cc01ff] mb-2 font-mono">{s.who}</div>
                  <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">{s.title}</h3>
                  <p className="font-bold text-gray-600 leading-relaxed">{s.text}</p>
                  {i !== 2 && <ArrowRight className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-black z-10" size={28}/>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 3. THE HEARTBEAT --- */}
        <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6">
              <Radio className="text-[#cc01ff]" size={32} />
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">The Heartbeat: Your Weekly Show</h2>
            </div>
            <p className="text-center font-bold text-xl mb-12 text-gray-700 max-w-3xl mx-auto">
              Most metrics are <span className="bg-[#00ead9] px-1 border border-black">noise</span>. Behavior is the signal. A live show generates the strongest behavioral signal there is, because showing up live beats a click, and a click beats a like.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "It compounds", text: "A standing weekly appointment with your audience. Every episode stacks on the last instead of disappearing into the feed." },
                { title: "It can't be copied", text: "The show is hosted by you. Your expertise and personality are the moat. No competitor can clone the founder." },
                { title: "It's the richest signal you have", text: "Who shows up, who stays, who asks questions, who comes back. Live attendance is a buying indicator that likes will never be." },
                { title: "One taping fuels a week", text: "A single hour on camera becomes clips, posts, and lead magnets that run all week. You record once; the system does the rest." }
              ].map((item, i) => (
                <div key={i} className={`border-2 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}>
                  <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">{item.title}</h3>
                  <p className="font-bold text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 4. THE LOOP --- */}
        <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-[#f4f4f5]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">The Loop</h2>
            <p className="text-lg font-bold text-gray-600 max-w-2xl mx-auto">Every asset feeds the same engine. The show is the net. The qualified pipeline is the catch.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            {[
              { step: "01", icon: <Radio/>, title: "The Show", text: "Your weekly live show. The heartbeat and the highest-signal asset you produce." },
              { step: "02", icon: <Scissors/>, title: "Clips & Posts", text: "One taping repurposed into a week of founder-led content. Audience grows as a byproduct." },
              { step: "03", icon: <Crosshair/>, title: "Capture Intent", text: "Lead magnets and hand-raiser posts engineered to surface in-market buyers." },
              { step: "04", icon: <Activity/>, title: "Track Signals", text: "Every signal scored across every surface. Behavior, not vanity, tells us who's buying." },
              { step: "05", icon: <Filter/>, title: "Qualified Pipeline", text: "Signals filtered into a warm ABM list and handed to your sales team. The product." }
            ].map((node, i) => (
              <div key={i} className="flex-1 border-2 border-black p-6 relative bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col">
                <div className="bg-black text-white text-xs font-black inline-block px-2 py-1 mb-4 font-mono self-start">{node.step}</div>
                {React.cloneElement(node.icon, { size: 28, className: "mb-3 text-[#cc01ff]" })}
                <h3 className="text-lg font-black mb-2 uppercase">{node.title}</h3>
                <p className="text-sm font-bold text-gray-600 leading-relaxed">{node.text}</p>
                {i !== 4 && <ArrowRight className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 text-black z-10" size={24}/>}
              </div>
            ))}
          </div>
        </section>

        {/* --- 4B. THE SIGNAL REPORT --- */}
        <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest mb-6 bg-[#cc01ff] text-white -rotate-1 font-mono">
                The Product
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Owned Intent, Not Rented Intent</h2>
              <p className="text-lg font-bold text-gray-600 max-w-3xl mx-auto leading-relaxed">
                ABM vendors sell you third-party data that guesses who might be in-market. We hand you a list built from first-party behavior on your own show. You don't guess who's buying. You watched them raise their hand.
              </p>
            </div>

            {/* Rented vs Owned contrast */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 max-w-4xl mx-auto">
              <div className="border-2 border-black p-6 bg-gray-100 -rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-2 mb-3"><Database className="text-gray-400" size={24}/><h3 className="text-xl font-black uppercase text-gray-500">Rented Intent</h3></div>
                <p className="font-bold text-gray-500 text-sm leading-relaxed">Bought from a data vendor. A probability score that an account might be researching your category somewhere on the internet. You never see the behavior.</p>
              </div>
              <div className="border-2 border-black p-6 bg-[#e0fcf9] rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-2 mb-3"><Activity className="text-[#cc01ff]" size={24}/><h3 className="text-xl font-black uppercase">Owned Intent</h3></div>
                <p className="font-bold text-gray-700 text-sm leading-relaxed">Generated on your own show. The exact accounts that showed up live, stayed, asked questions, and came back. The behavior is the proof.</p>
              </div>
            </div>

            {/* The artifact mock */}
            <div className="border-[3px] border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_#cc01ff] max-w-4xl mx-auto">
              <div className="flex items-center justify-between border-b-[3px] border-black bg-black text-white px-5 py-3">
                <div className="flex items-center gap-3">
                  <ClipboardCheck size={20} className="text-[#00ead9]"/>
                  <span className="font-black uppercase tracking-wider text-sm font-mono">Signal Report</span>
                </div>
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-gray-300">Delivered weekly &rarr; Sales</span>
              </div>

              <div className="divide-y-2 divide-dashed divide-gray-200">
                {[
                  { score: 94, company: "Northwind Logistics", role: "VP Operations", signals: ["Attended live", "Stayed 41m", "Asked: pricing", "Returned wk 2"] },
                  { score: 89, company: "Apex Health Systems", role: "Director, IT", signals: ["Attended live", "Asked: integration", "Downloaded teardown"] },
                  { score: 83, company: "Cobalt Fintech", role: "Head of RevOps", signals: ["Attended live", "Stayed 33m", "DM'd the founder"] },
                  { score: 76, company: "Meridian Software", role: "Founder / CEO", signals: ["Watched replay", "Downloaded teardown", "Engaged 3 posts"] }
                ].map((row, i) => (
                  <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 p-5 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4 md:w-72 shrink-0">
                      <div className={`w-14 h-14 shrink-0 border-2 border-black flex items-center justify-center font-black text-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${row.score >= 90 ? 'bg-[#cc01ff] text-white' : 'bg-[#00ead9] text-black'}`}>{row.score}</div>
                      <div>
                        <div className="font-black uppercase text-sm leading-tight">{row.company}</div>
                        <div className="text-xs font-bold text-gray-500 font-mono uppercase tracking-wide">{row.role}</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {row.signals.map((s, j) => (
                        <span key={j} className="inline-block border-2 border-black bg-white px-2 py-1 text-[11px] font-black uppercase tracking-wide font-mono">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t-[3px] border-black bg-[#f4f4f5] px-5 py-3 text-center font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">
                Scored from live behavior. No guesswork. Handed to your sales team every week.
              </div>
            </div>
            <p className="text-center text-xs font-bold text-gray-400 mt-4 font-mono uppercase tracking-widest">Sample report. Your accounts and signals will be real.</p>
          </div>
        </section>

        {/* --- 5. THE TIMELINE --- */}
        <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-white">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-12 text-center">Your First 30 Days</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {[
              { day: "Day 01", title: "The Extraction", text: "A 45-min call to capture your voice, frameworks, and POV, and to design your show format." },
              { day: "Day 07", title: "The Show Goes Live", text: "Your first weekly show airs. The repurposing engine starts turning one taping into a week of content." },
              { day: "Day 14", title: "Signals Online", text: "Signal tracking is live across every surface. We start scoring who shows up, stays, and raises a hand." },
              { day: "Day 30", title: "Pipeline Flowing", text: "Your first qualified ABM list lands with your sales team. The loop is running and compounding." }
            ].map((step, i) => (
              <div key={i} className="flex-1 border-2 border-black p-6 relative bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-black text-white text-xs font-black inline-block px-2 py-1 mb-4 font-mono">{step.day}</div>
                <h3 className="text-xl font-black mb-2 uppercase">{step.title}</h3>
                <p className="text-sm font-bold text-gray-600 leading-relaxed">{step.text}</p>
                {i !== 3 && <ArrowRight className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 text-black z-10" size={24}/>}
              </div>
            ))}
          </div>
        </section>

        {/* --- MID-PAGE CTA --- */}
        <section className="relative z-10 p-12 text-center bg-[#cc01ff] border-b-[3px] border-black">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-6">Reach is not pipeline. Let's fix that.</h2>
          <a href="https://calendly.com/dan-mcdermott/let-s-talk" target="_blank" rel="noopener noreferrer" className="bg-[#00ead9] text-black border-[3px] border-black px-8 py-4 text-xl font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all inline-block">
            BUILD MY PIPELINE ENGINE
          </a>
        </section>

        {/* --- 6. THE QUALIFICATION --- */}
        <section className="relative z-10 flex flex-col md:flex-row border-b-[3px] border-black">
          <div className="flex-1 p-8 md:p-16 bg-[#e0fcf9] border-b-[3px] md:border-b-0 md:border-r-[3px] border-black">
            <h2 className="text-3xl font-black uppercase mb-8">We Build For:</h2>
            <ul className="space-y-4 font-bold text-lg">
              <li className="flex items-start gap-3"><CheckSquare className="text-black shrink-0 mt-1"/> Founders with traction but stalled growth.</li>
              <li className="flex items-start gap-3"><CheckSquare className="text-black shrink-0 mt-1"/> Founders who are their own best salesperson, magnetic on camera and on calls.</li>
              <li className="flex items-start gap-3"><CheckSquare className="text-black shrink-0 mt-1"/> Founders willing to show up weekly on camera.</li>
              <li className="flex items-start gap-3"><CheckSquare className="text-black shrink-0 mt-1"/> Teams with a sales motion ready to work warm accounts.</li>
            </ul>
          </div>
          <div className="flex-1 p-8 md:p-16 bg-gray-100">
            <h2 className="text-3xl font-black uppercase mb-8">We Don't Work With:</h2>
            <ul className="space-y-4 font-bold text-lg">
              <li className="flex items-start gap-3 text-gray-500"><XSquare className="text-gray-400 shrink-0 mt-1"/> Pre-revenue, idea-stage startups.</li>
              <li className="flex items-start gap-3 text-gray-500"><XSquare className="text-gray-400 shrink-0 mt-1"/> Founders who won't get on camera.</li>
              <li className="flex items-start gap-3 text-gray-500"><XSquare className="text-gray-400 shrink-0 mt-1"/> Anyone chasing viral reach instead of booked pipeline.</li>
            </ul>
          </div>
        </section>

        {/* --- 7. THE SYSTEM --- */}
        <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">What You Get</h2>
            <p className="text-lg font-bold text-gray-600">A full content engine, with the show as its heartbeat. You get all of it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "01 / Heartbeat", title: "The Weekly Show", icon: <Radio/>, text: "Hosted by you, produced and run by us." },
              { label: "02 / Reach", title: "Clips & Posts", icon: <Linkedin/>, text: "One taping repurposed into a week of founder-led content." },
              { label: "03 / Capture", title: "Lead Magnets", icon: <Crosshair/>, text: "Hand-raiser assets built to surface in-market buyers." },
              { label: "04 / Pipeline", title: "Qualified List", icon: <Filter/>, text: "Behavioral signals filtered into a warm account list for sales." }
            ].map((item, i) => (
              <motion.div key={i} variants={springHover} initial="rest" whileHover="hover" className={`border-[3px] border-black p-6 bg-white relative ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#cc01ff] mb-4 font-mono">{item.label}</div>
                {React.cloneElement(item.icon, { size: 32, className: "mb-4 text-gray-400" })}
                <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                <p className="text-sm font-bold text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- 8. TRACK RECORD --- */}
        <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-[#f4f4f5] overflow-hidden">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Run Four Times. Not A Hypothesis.</h2>
            <p className="text-lg font-bold text-gray-600 max-w-2xl mx-auto">This live-show-to-pipeline play isn't theory. It's been run inside four very different organizations.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Copywriting Course", tag: "Education", color: "bg-yellow-200" },
              { name: "Vouris", tag: "B2B Sales", color: "bg-[#e0fcf9]" },
              { name: "Zen Healthcare IT", tag: "Healthcare", color: "bg-pink-100" },
              { name: "Stick & Grow", tag: "This Agency", color: "bg-[#00ead9]" }
            ].map((org, i) => (
              <div key={i} className={`${org.color} border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center text-center min-h-[140px] ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                <div className="font-black text-base md:text-lg uppercase tracking-tight leading-tight mb-2">{org.name}</div>
                <div className="text-[10px] font-bold text-gray-600 uppercase font-mono tracking-widest">{org.tag}</div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 9. FOUNDER BIO --- */}
        <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-[#fdfdfd] flex flex-col md:flex-row gap-12 items-center">

          <div className="w-64 h-80 bg-white border-[3px] border-black p-3 pb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-3 shrink-0 flex flex-col relative group hover:rotate-0 transition-transform mx-auto md:mx-0">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-[#00ead9]/40 border border-black/20 backdrop-blur-sm -rotate-2 z-10" />

            <div className="flex-1 border-2 border-black overflow-hidden bg-gray-100 relative">
              <img
                src="/founder.png"
                alt="Dan McDermott"
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '4px 4px' }} />
            </div>

            <div className="pt-4 text-center font-black uppercase text-sm italic">
              Dan McDermott<br/>
              <span className="text-[10px] text-[#cc01ff] not-italic tracking-widest font-mono">FOUNDER</span>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Why I built this.</h2>
            <p className="text-lg font-bold text-gray-700 leading-relaxed mb-4">
              Over the last 20 years I've been a CMO, built in-house content teams from the ground up, and served as the Head Copy Coach at CopywritingCourse.com. I've run this exact live-show play across four organizations, so I know it repeats.
            </p>
            <p className="text-lg font-bold text-gray-700 leading-relaxed">
              I built Stick & Grow because I was tired of watching brilliant, product-obsessed founders lose to louder competitors who simply showed up more. You shouldn't have to become a full-time influencer to fill your pipeline. You bring one hour on camera. We turn it into a list of buyers your sales team can close.
            </p>
          </div>
        </section>

        {/* --- 10. OBJECTION CRUSHER (FAQ) --- */}
        <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-white">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-12 text-center">Skeptical? Good.</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How is this different from a content agency?", a: "We do the content a great agency does: posts, clips, lead magnets, a newsletter. The difference is the finish line. A content agency stops at reach. We use your show to turn that content into buying signals, then hand your sales team a qualified list of in-market accounts. Pipeline is the product; audience growth is the byproduct." },
              { q: "What makes the list actually qualified?", a: "It's built from behavioral signals: who shows up live, who stays, who asks questions, who engages with your lead magnets. Live attendance is the strongest buying indicator there is. We never relabel passive followers as pipeline." },
              { q: "I don't have time to produce a show.", a: "You bring one hour on camera. We handle booking, run-of-show prep, production support, clipping, repurposing, engagement tracking, and building the list. Your hour is the only thing we can't do for you, and it's the part that's your moat." },
              { q: "Will the content still sound like me?", a: "Yes. Everything we publish comes straight from your show and your voice. We use AI to format and scale what you actually said, never to write from scratch. It's 100% your ideas and your tone." }
            ].map((faq, i) => (
              <div key={i} className="border-2 border-black bg-white cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                <div className="p-6 font-black text-lg flex justify-between items-center">
                  {faq.q}
                  <HelpCircle className={activeFaq === i ? "text-[#cc01ff] rotate-180 transition-transform" : "text-black transition-transform"} />
                </div>
                {activeFaq === i && (
                  <div className="p-6 pt-0 font-bold text-gray-600 border-t-2 border-dashed border-gray-200">
                    <span className="text-[#00ead9] font-black mr-2 font-mono">A:</span>{faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* --- 11. FINAL CTA --- */}
        <section className="p-8 md:p-20 text-center bg-[#00ead9] relative">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-8 mt-4">
            Stop building an audience. Start building <span className="bg-black text-white px-4 py-1 inline-block -rotate-2">pipeline.</span>
          </h2>
          <a href="https://calendly.com/dan-mcdermott/let-s-talk" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-4 text-lg md:px-12 md:py-6 md:text-2xl font-black border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all inline-block">
            BUILD MY PIPELINE ENGINE
          </a>
        </section>

      </div>

      <div className="max-w-7xl mx-auto text-center mt-8 text-xs font-black uppercase tracking-widest text-gray-400 font-mono">
        © 2026 Stick & Grow // Founder-Led Pipeline Systems
      </div>
    </div>
  );
};

export default StickAndGrowCascadingVSL;
