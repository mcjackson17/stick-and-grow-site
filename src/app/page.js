"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, FileText, Mail, Linkedin, ArrowRight, CheckSquare, XSquare, Quote, Crosshair, HelpCircle, AlertTriangle } from 'lucide-react';

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
      
      <div className="max-w-7xl mx-auto border-[3px] border-black bg-white relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

        {/* --- NAVIGATION --- */}
        <nav className="relative z-10 flex justify-between items-center p-8 border-b-[3px] border-black bg-white">
          <div className="text-2xl font-black bg-black text-white px-3 py-1 -rotate-2">
            STICK & GROW
          </div>
          <a href="https://calendly.com/dan-mcdermott/let-s-talk" target="_blank" rel="noopener noreferrer" className="bg-[#00ead9] border-2 border-black font-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase text-sm">
            Get Started
          </a>
        </nav>

        {/* --- 1. HERO SECTION --- */}
        <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black flex flex-col items-center text-center">
          
          <div className="inline-block border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest mb-8 bg-[#cc01ff] text-white -rotate-1 font-mono">
            For B2B SaaS Founders
          </div>
          
          {/* THE HEADLINE FIX: Cleaned up spacing, no more hacks, natural font rendering */}
          <h1 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter uppercase mx-auto max-w-6xl flex flex-col items-center">
            <span className="block mb-2 whitespace-nowrap">
              Your content should
            </span>
            <span className="block mb-2 whitespace-nowrap">
              hand you{' '}
              <span className="inline-block bg-[#00ead9] px-2 pb-1 border-2 border-black -rotate-1 relative top-[-4px]">
                leads
              </span>,
            </span>
            <span className="block whitespace-nowrap">
              not just likes.
            </span>
          </h1>

          <p className="text-xl font-bold mb-12 text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We extract your expertise into a repeatable system. You get the authority; your sales team gets the MQL list.
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
              Watch: The Stick & Grow Blueprint (2 Min)
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl justify-center mt-4 mb-8">
            <a href="https://calendly.com/dan-mcdermott/let-s-talk" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-5 text-xl font-black shadow-[8px_8px_0px_0px_#cc01ff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all inline-flex items-center justify-center gap-3 w-full md:w-auto">
              BUILD MY CONTENT ENGINE <ArrowRight size={24}/>
            </a>
            
            <div className="bg-yellow-200 border-2 border-black p-4 -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-left w-full md:max-w-sm">
                <span className="font-black uppercase text-sm border-b-2 border-black pb-1 mb-2 block font-mono">The Guarantee:</span>
                <span className="font-bold text-sm">Your first "Warm Lead Report" is delivered to your inbox on <span className="underline decoration-black decoration-4">Day 7</span>.</span>
            </div>
          </div>

        </section>

        {/* --- 2. THE PROBLEM --- */}
        <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-red-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <AlertTriangle className="text-red-500" size={32} />
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-center">The Founder's Content Trap</h2>
            </div>
            
            <p className="text-center font-bold text-xl mb-12 text-gray-700">You know you need to build authority, but every time you try, you fall into one of these losing traps:</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { title: "Trap 1: The Burnout", text: "You try to do it all yourself. You spend 10 hours a week staring at a blank screen, trying to figure out the LinkedIn algorithm. Your actual product suffers because your time is gone." },
                { title: "Trap 2: The Bad Hire", text: "You hire a generic ghostwriter or agency. They don't understand your technical product or industry nuance, and the leads never actually materialize." },
                { title: "Trap 3: The AI Echo Chamber", text: "You try prompting ChatGPT to do it for you. The result sounds exactly like everyone else on the timeline. It ruins your credibility and generates zero pipeline." }
              ].map((trap, i) => (
                <div key={i} className={`bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_#ff4d4f] flex flex-col ${i === 1 ? 'rotate-1' : '-rotate-1'}`}>
                  <h3 className="text-xl font-black mb-4 uppercase text-red-600">{trap.title}</h3>
                  <p className="font-bold text-gray-700 leading-relaxed text-sm">{trap.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center bg-white border-2 border-black p-6 rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-3xl mx-auto">
              <p className="text-xl font-black uppercase tracking-tighter">If you want content that actually cuts through the noise and builds pipeline, you need a completely different system.</p>
            </div>
          </div>
        </section>

        {/* --- 3. THE TIMELINE --- */}
        <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-white">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 text-center">The 30-Day Pipeline Sprint</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {[
              { day: "Day 01", title: "The Brain Dump", text: "A 45-min extraction call to capture your tone, frameworks, and unique POV." },
              { day: "Day 07", title: "The First Report", text: "Content is live. We deliver your first Friday Report of high-intent content engagers and analytics." },
              { day: "Day 14", title: "The Strategy", text: "We deliver your customized Content Positioning Blueprint. Your core narrative pillars are locked in, and your first high-value asset is published." },
              { day: "Day 30", title: "The Autopilot", text: "The engine is humming: 20 posts, 4 blogs, 4 newsletters published. Pipeline is flowing." }
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
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-6">Stop wasting time on content that doesn't convert.</h2>
          <a href="https://calendly.com/dan-mcdermott/let-s-talk" target="_blank" rel="noopener noreferrer" className="bg-[#00ead9] text-black border-[3px] border-black px-8 py-4 text-xl font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all inline-block">
            BUILD MY CONTENT ENGINE
          </a>
        </section>

        {/* --- 4. THE QUALIFICATION --- */}
        <section className="relative z-10 flex flex-col md:flex-row border-b-[3px] border-black">
          <div className="flex-1 p-8 md:p-16 bg-[#e0fcf9] border-b-[3px] md:border-b-0 md:border-r-[3px] border-black">
            <h2 className="text-3xl font-black uppercase mb-8">We Build For:</h2>
            <ul className="space-y-4 font-bold text-lg">
              <li className="flex items-start gap-3"><CheckSquare className="text-black shrink-0 mt-1"/> B2B SaaS Founders & Execs.</li>
              <li className="flex items-start gap-3"><CheckSquare className="text-black shrink-0 mt-1"/> Teams with a sales floor ready to work warm leads.</li>
              <li className="flex items-start gap-3"><CheckSquare className="text-black shrink-0 mt-1"/> Founders who have strong opinions but zero time to write.</li>
            </ul>
          </div>
          <div className="flex-1 p-8 md:p-16 bg-gray-100">
            <h2 className="text-3xl font-black uppercase mb-8">We Don't Work With:</h2>
            <ul className="space-y-4 font-bold text-lg">
              <li className="flex items-start gap-3 text-gray-500"><XSquare className="text-gray-400 shrink-0 mt-1"/> Pre-revenue idea-stage startups.</li>
              <li className="flex items-start gap-3 text-gray-500"><XSquare className="text-gray-400 shrink-0 mt-1"/> B2C companies or lifestyle brands.</li>
              <li className="flex items-start gap-3 text-gray-500"><XSquare className="text-gray-400 shrink-0 mt-1"/> Founders looking to "go viral" with memes instead of booking demos.</li>
            </ul>
          </div>
        </section>

        {/* --- 5. THE SYSTEM --- */}
        <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">The Content Engine</h2>
            <p className="text-lg font-bold text-gray-600">The exact deliverables you get every single week.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "01 / Authority", title: "1 Blog Post", icon: <FileText/>, text: "SEO-optimized thought leadership." },
              { label: "02 / Ownership", title: "1 Newsletter", icon: <Mail/>, text: "Transition social reach into an email list." },
              { label: "03 / Capture", title: "1 Lead Magnet", icon: <Crosshair/>, text: "Assets designed to trade value for emails." },
              { label: "04 / Visibility", title: "5 Social Posts", icon: <Linkedin/>, text: "Daily visibility to capture top-of-funnel intent." }
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

        {/* --- 6. TESTIMONIALS --- */}
        <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-[#f4f4f5] overflow-hidden">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 text-center">Proof It Works</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {[
              { text: "Dan and his team finally solved the founder-led motion for us. I talk for 45 minutes, and they turn my actual thoughts into pipeline. Best ROI of the year.", author: "Sarah Jenkins", role: "CEO @ TechFlow", color: "bg-yellow-200" },
              { text: "We tried ghostwriters before. They sounded like robots. Stick & Grow actually captured my voice and got us 4 qualified demos in the first month alone.", author: "Marcus Reed", role: "Founder @ DataSync", color: "bg-[#e0fcf9]" },
              { text: "The Friday Report is the hand-off my sales team always needed. We stopped cold calling and only reach out to people reading our content.", author: "Elena Rostova", role: "VP Sales @ CloudNine", color: "bg-pink-100" }
            ].map((t, i) => (
              <div key={i} className={`${t.color} border-2 border-black p-6 w-full md:w-1/3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative ${i === 1 ? '-rotate-2' : 'rotate-2'}`}>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-4 bg-black/10 border border-black/20 backdrop-blur-sm -rotate-2" />
                <Quote size={20} className="mb-3 opacity-50" />
                <p className="font-bold text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="font-black text-sm uppercase">{t.author}</div>
                <div className="text-xs font-bold text-gray-600 uppercase font-mono">{t.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 7. FOUNDER BIO --- */}
        <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-[#fdfdfd] flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-64 h-80 bg-white border-[3px] border-black p-3 pb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-3 shrink-0 flex flex-col relative group hover:rotate-0 transition-transform">
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
              <span className="text-[10px] text-[#cc01ff] not-italic tracking-widest font-mono">CHIEF ARCHITECT</span>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Why I built this.</h2>
            <p className="text-lg font-bold text-gray-700 leading-relaxed mb-4">
              Over the last 20 years, I’ve been a CMO, built in-house content teams from the ground up, and served as the Head Copy Coach at CopywritingCourse.com. 
            </p>
            <p className="text-lg font-bold text-gray-700 leading-relaxed">
              I built Stick & Grow because I was tired of seeing brilliant, product-obsessed founders lose to louder competitors simply because they didn't have the time to write. You shouldn't have to become a full-time "influencer" to get demos booked. We extract your expertise and turn it into a repeatable pipeline.
            </p>
          </div>
        </section>

        {/* --- 8. OBJECTION CRUSHER (FAQ) --- */}
        <section className="relative z-10 p-8 md:p-16 border-b-[3px] border-black bg-white">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 text-center">Skeptical? Good.</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Will the AI make me sound like a generic robot?", a: "No. We don't use AI to write from scratch. We use it to format and scale the literal transcripts of your 45-minute extraction calls. It's 100% your ideas and your tone." },
              { q: "What if I don't know what to talk about?", a: "That's why you hire us. We come to the extraction calls with interview prompts based on your industry, competitors, and product roadmap." },
              { q: "Do I have to log in and post everything?", a: "You lift zero fingers. We schedule, publish, and track the analytics across all platforms." }
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

        {/* --- 9. FINAL CTA --- */}
        <section className="p-8 md:p-20 text-center bg-[#00ead9] relative">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 mt-4">
            Start posting <span className="bg-black text-white px-4 py-1 inline-block -rotate-2">for revenue.</span>
          </h2>
          <a href="https://calendly.com/dan-mcdermott/let-s-talk" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-12 py-6 text-2xl font-black border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all inline-block">
            BUILD MY CONTENT ENGINE
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