'use client'
import { useState, useEffect } from 'react'

const filmQuotes = [
  '"The only way to get rid of my fears is to make films about them." — Alfred Hitchcock',
  '"Cinema is a matter of what\'s in the frame and what\'s out." — Martin Scorsese',
  '"A film is — or should be — more like music than like fiction." — Stanley Kubrick',
  '"Making a film means, first of all, to tell a story." — Michelangelo Antonioni',
]

const filmography = [
  { year: '2024', title: 'Past Lives' }, { year: '2023', title: 'Poor Things' },
  { year: '2022', title: 'Everything Everywhere' }, { year: '2019', title: 'Midsommar' },
  { year: '2017', title: 'Lady Bird' }, { year: '2016', title: 'Moonlight' },
]

export default function Home() {
  const [countdown, setCountdown] = useState(3)
  const [showCountdown, setShowCountdown] = useState(true)
  const [curtainsOpen, setCurtainsOpen] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 700)
      return () => clearTimeout(timer)
    } else {
      setTimeout(() => {
        setShowCountdown(false)
        setCurtainsOpen(true)
      }, 500)
    }
  }, [countdown])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <div className="film-grain" onMouseMove={handleMouseMove}>
      {/* ===== REALISTIC THEATER CURTAINS ===== */}
      {curtainsOpen && (
        <div className="curtain-container">
          <div className="curtain-left">
            <div className="curtain-fabric" />
            <div className="curtain-folds" />
            <div className="curtain-light" />
            <div className="curtain-gather" />
          </div>
          <div className="curtain-right">
            <div className="curtain-fabric" />
            <div className="curtain-folds" />
            <div className="curtain-light" />
            <div className="curtain-gather" />
          </div>
          <div className="curtain-valance" />
          <div className="curtain-tieback-left" />
          <div className="curtain-tieback-right" />
        </div>
      )}

      {/* ===== FILM COUNTDOWN (3-2-1) ===== */}
      {showCountdown && (
        <div className="fixed inset-0 z-[100] bg-frame-black flex items-center justify-center">
          <div className="relative">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-radial from-frame-gold/[0.06] via-transparent to-transparent rounded-full blur-2xl" />
            <svg className="w-72 h-72 relative z-10" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(201,169,97,0.12)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(201,169,97,0.25)" strokeWidth="2" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(201,169,97,0.08)" strokeWidth="1" />
              <line x1="100" y1="5" x2="100" y2="195" stroke="rgba(201,169,97,0.08)" strokeWidth="0.5" />
              <line x1="5" y1="100" x2="195" y2="100" stroke="rgba(201,169,97,0.08)" strokeWidth="0.5" />
              <path d="M25 25 L45 25 M25 25 L25 45" stroke="rgba(201,169,97,0.35)" strokeWidth="2" fill="none" />
              <path d="M175 25 L155 25 M175 25 L175 45" stroke="rgba(201,169,97,0.35)" strokeWidth="2" fill="none" />
              <path d="M25 175 L45 175 M25 175 L25 155" stroke="rgba(201,169,97,0.35)" strokeWidth="2" fill="none" />
              <path d="M175 175 L155 175 M175 175 L175 155" stroke="rgba(201,169,97,0.35)" strokeWidth="2" fill="none" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                <rect key={deg} x="97" y="3" width="6" height="8" rx="1" fill="rgba(201,169,97,0.15)" transform={`rotate(${deg} 100 100)`} />
              ))}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div key={countdown} className="animate-scale-in">
                <span className="display text-[140px] text-frame-gold text-gold-glow">{countdown}</span>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border border-frame-gold/8 rounded-full animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center">
              <span className="mono text-[10px] tracking-[0.5em] text-frame-gold/30">FRAME PRODUCTIONS</span>
            </div>
          </div>
        </div>
      )}

      {/* ===== FILM QUOTE MARQUEE ===== */}
      <div className="fixed top-16 left-0 right-0 z-40 py-3 border-b border-frame-gray/20 overflow-hidden glass">
        <div className="animate-marquee whitespace-nowrap">
          {[...filmQuotes, ...filmQuotes].map((q, i) => (
            <span key={i} className="script text-[11px] tracking-wide text-frame-gold/25 mx-10 italic">{q}</span>
          ))}
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center pt-10 spotlight-cursor overflow-hidden"
        style={{ '--mx': `${mousePos.x}%`, '--my': `${mousePos.y}%` } as React.CSSProperties}>
        <div className="absolute inset-0 vignette" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial from-frame-gold/[0.05] via-transparent to-transparent rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-frame-burgundy/[0.04] to-transparent" />

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          {/* Director's slate */}
          <div className="animate-fade-up initial-hidden d-300 mb-8">
            <div className="inline-flex items-center gap-4 px-5 py-2.5 bg-frame-dark/60 border border-frame-gray/30 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="action-text text-[9px] text-frame-burgundy-light/60">SCENE</span>
                <span className="mono text-[11px] text-frame-cream/50">001</span>
              </div>
              <div className="w-px h-4 bg-frame-gray" />
              <div className="flex items-center gap-2">
                <span className="action-text text-[9px] text-frame-burgundy-light/60">TAKE</span>
                <span className="mono text-[11px] text-frame-cream/50">∞</span>
              </div>
              <div className="w-px h-4 bg-frame-gray" />
              <span className="script text-[10px] text-frame-gold/40 italic">The Operating System for Indie Film</span>
            </div>
          </div>

          {/* TITLE with light leak */}
          <h1 className="animate-fade-up initial-hidden d-400 light-leak mb-6">
            <span className="block text-7xl md:text-9xl lg:text-[10rem] font-black leading-[0.85] tracking-tight">MAKE THE</span>
            <span className="block text-7xl md:text-9xl lg:text-[10rem] font-black italic leading-[0.85] tracking-tight text-gradient">FILM.</span>
            <span className="block text-7xl md:text-9xl lg:text-[10rem] font-black italic leading-[0.85] tracking-tight" style={{ color: '#c9a961' }}>NOW.</span>
          </h1>

          {/* Script subtext */}
          <div className="animate-fade-up initial-hidden d-600 mb-6">
            <p className="script text-lg text-frame-light/70 italic max-w-lg mx-auto leading-relaxed">
              FADE IN:<br />
              A platform where films get made.<br />
              Not just pitched. Not just dreamed.<br />
              <span className="text-frame-gold/60">Made.</span>
            </p>
          </div>

          {/* Director's call */}
          <div className="animate-fade-up initial-hidden d-700 mb-16">
            <div className="inline-flex items-center gap-3 script text-[11px] text-frame-light/25">
              <span className="text-frame-gold/30">INT. FRAME — DAY</span>
              <span className="text-frame-gray">—</span>
              <span className="text-frame-gold/30">DIRECT-TO-PRODUCTION</span>
            </div>
          </div>

          {/* TWO PATHS */}
          <div className="animate-fade-up initial-hidden d-900 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a href="/feed" className="viewfinder group card-hover p-8 rounded-2xl border-2 border-frame-gray/40 bg-frame-dark/60 hover:border-frame-gold/40 transition-all duration-700 text-left">
              <div className="flex items-center justify-between mb-4">
                <span className="action-text text-[10px] text-frame-gold/40 tracking-[0.3em]">ACTION</span>
                <span className="text-3xl">🎬</span>
              </div>
              <h2 className="text-3xl font-bold mb-3 group-hover:text-frame-gold transition-colors">I Make Films</h2>
              <p className="script text-sm text-frame-light/70 italic leading-relaxed mb-4">
                Post sparks. Build blueprints.<br />
                Assemble crews. Get funded.
              </p>
              <div className="flex items-center gap-2 text-frame-gold text-sm font-semibold action-text tracking-widest">
                ENTER AS CREATIVE →
              </div>
            </a>

            <a href="/discover-producer" className="viewfinder group card-hover p-8 rounded-2xl border-2 border-frame-gray/40 bg-frame-dark/60 hover:border-frame-gold/40 transition-all duration-700 text-left">
              <div className="flex items-center justify-between mb-4">
                <span className="action-text text-[10px] text-frame-gold/40 tracking-[0.3em]">ACTION</span>
                <span className="text-3xl">💰</span>
              </div>
              <h2 className="text-3xl font-bold mb-3 group-hover:text-frame-gold transition-colors">I Fund Films</h2>
              <p className="script text-sm text-frame-light/70 italic leading-relaxed mb-4">
                Discover vetted projects.<br />
                Fund line items. Track progress.
              </p>
              <div className="flex items-center gap-2 text-frame-gold text-sm font-semibold action-text tracking-widest">
                ENTER AS PRODUCER →
              </div>
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in d-1500">
          <span className="script text-[10px] text-frame-gold/30 italic tracking-wider">ROLL CAMERA</span>
          <div className="w-px h-12 bg-gradient-to-b from-frame-gold/30 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ===== FILM STRIP ===== */}
      <section className="py-8 border-y border-frame-gray/15 overflow-hidden bg-frame-dark/30 film-strip">
        <div className="animate-marquee flex items-center">
          {filmography.concat(filmography).map((f, i) => (
            <div key={i} className="flex items-center gap-3 mx-8 group cursor-default">
              <span className="mono text-[10px] text-frame-gold/40">{f.year}</span>
              <span className="text-sm text-frame-light/40 group-hover:text-frame-cream transition-colors">{f.title}</span>
              <span className="text-frame-gold/10 text-xl">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOUR PHASES ===== */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="clap-header inline-block mb-6">
              <span className="action-text text-[11px] text-frame-gold/50 block mb-2 tracking-[0.4em]">THE PIPELINE</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight">Four Phases. One Platform.</h2>
            </div>
            <p className="script text-frame-light/50 italic text-sm">Every project moves through four phases. Each gate ensures production readiness.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {[
              { num: 'I', name: 'Spark', tag: 'The idea ignites', desc: 'Post logline. Crew vouches. Heat score builds.', bg: 'from-blue-500/8 to-transparent', border: 'border-blue-500/20 hover:border-blue-400/40', icon: '🔥' },
              { num: 'II', name: 'Blueprint', tag: 'The plan takes shape', desc: 'Script, mood board, milestones, crew roster.', bg: 'from-purple-500/8 to-transparent', border: 'border-purple-500/20 hover:border-purple-400/40', icon: '📐' },
              { num: 'III', name: 'Market', tag: 'The crew assembles', desc: 'Proximity Engine. Gear meets need. Portfolios.', bg: 'from-amber-500/8 to-transparent', border: 'border-amber-500/20 hover:border-amber-400/40', icon: '📍' },
              { num: 'IV', name: 'Patronage', tag: 'The film gets funded', desc: 'Line-item funding. Escrow. Milestone proof.', bg: 'from-emerald-500/8 to-transparent', border: 'border-emerald-500/20 hover:border-emerald-400/40', icon: '💰' },
            ].map((phase, i) => (
              <div key={i} className={`card-hover scene-slate rounded-2xl p-6 bg-gradient-to-b ${phase.bg} border-2 ${phase.border} transition-all duration-700`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="action-text text-[10px] text-frame-gold/30">PHASE {phase.num}</span>
                  <span className="text-3xl">{phase.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{phase.name}</h3>
                <p className="script text-[11px] italic text-frame-gold/40 mb-3">{phase.tag}</p>
                <p className="script text-sm text-frame-light/60 italic leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOR CREATIVES ===== */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-frame-burgundy/[0.03] via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="clap-header mb-8">
                <span className="action-text text-[11px] text-frame-gold/50 block mb-2 tracking-[0.4em]">FOR FILMMAKERS</span>
                <h2 className="text-4xl md:text-6xl font-black leading-[1.1]">
                  Stop patching<br />
                  <span className="text-gradient italic">five tools</span><br />
                  together.
                </h2>
              </div>
              <p className="script text-frame-light/70 italic leading-relaxed mb-8 text-base">
                FADE IN: A filmmaker sits at their desk.<br />
                Five browser tabs open. Five tools that don't talk to each other.<br />
                <span className="text-frame-cream not-italic font-semibold">Frame replaces all of it.</span>
              </p>
              <div className="space-y-4">
                {[
                  { icon: '🔥', text: 'Post a Spark — attract crew before any heavy planning' },
                  { icon: '📐', text: 'Build your Blueprint — script, moodboard, milestones' },
                  { icon: '🎒', text: 'List your Gear Locker — let nearby projects find you' },
                  { icon: '💰', text: 'Get funded — milestone-based, quality-gated campaigns' },
                ].map((f, i) => (
                  <div key={i} className="ticket-stub pl-8 py-2">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-xl">{f.icon}</span>
                      <span className="script text-frame-light/70 italic">{f.text}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a href="/feed" className="inline-flex items-center gap-3 mt-10 bg-frame-gold text-frame-black px-10 py-4 rounded-xl font-bold hover:bg-frame-gold-bright transition-all duration-300 glow-gold hover:glow-gold-strong btn-press action-text tracking-[0.3em] text-lg">
                START CREATING →
              </a>
            </div>

            {/* Spark Feed preview */}
            <div className="call-sheet rounded-2xl p-6 border-2 border-frame-gray/30">
              <div className="flex items-center justify-between mb-5">
                <span className="action-text text-[10px] text-frame-gold/40 tracking-[0.3em]">LIVE SPARK FEED</span>
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
              </div>
              {[
                { title: 'Echoes of Silence', heat: 89, vouches: 48, active: true },
                { title: 'The Last Blockbuster', heat: 76, vouches: 41 },
                { title: 'Night Shift', heat: 67, vouches: 34 },
              ].map((s, i) => (
                <div key={i} className={`flex items-center justify-between p-4 rounded-xl mb-2.5 ${
                  s.active ? 'bg-frame-gold/6 border-2 border-frame-gold/20 glow-gold' : 'bg-frame-gray/15 border border-frame-gray/20'
                }`}>
                  <div>
                    <div className="font-bold text-base">{s.title}</div>
                    <div className="script text-[10px] text-frame-light/40 italic">{s.vouches} vouches</div>
                  </div>
                  <div className={`mono text-3xl font-bold ${s.active ? 'text-frame-gold animate-flicker text-gold-glow' : 'text-frame-light/25'}`}>{s.heat}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-12 border border-frame-gray/8 rounded-2xl frame-corners" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="action-text text-[11px] text-frame-gold/40 tracking-[0.5em] mb-8">CUT TO:</div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6">
            For the people who make films<br />
            <span className="italic text-gradient">nobody told them they could make.</span>
          </h2>
          <p className="script text-frame-light/40 italic mb-10 text-sm">
            "Every great film should seem new every time you see it." — Roger Ebert
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="/signup?role=creative" className="bg-frame-gold text-frame-black px-12 py-5 rounded-xl text-xl font-bold hover:bg-frame-gold-bright transition-all duration-300 glow-gold hover:glow-gold-strong btn-press action-text tracking-[0.3em]">
              I MAKE FILMS
            </a>
            <a href="/signup?role=producer" className="border-2 border-frame-gold/30 text-frame-cream px-12 py-5 rounded-xl text-xl font-bold hover:bg-frame-gold/5 hover:border-frame-gold/50 transition-all duration-300 btn-press action-text tracking-[0.3em]">
              I FUND FILMS
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-frame-gray/15 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-frame-gold rounded-lg flex items-center justify-center animate-pulse-glow">
                <span className="text-frame-black font-black text-sm">F</span>
              </div>
              <span className="display text-lg tracking-[0.2em]">FRAME</span>
            </div>
            <p className="script text-[11px] text-frame-light/25 italic">Make the film. Now.</p>
            <span className="mono text-[9px] text-frame-gold/20">v1.1</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
