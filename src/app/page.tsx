'use client'
import { useState, useEffect, useRef } from 'react'

// Film quotes
const filmQuotes = [
  '"The only way to get rid of my fears is to make films about them." — Alfred Hitchcock',
  '"Cinema is a matter of what\'s in the frame and what\'s out." — Martin Scorsese',
  '"A film is — or should be — more like music than like fiction." — Stanley Kubrick',
  '"Making a film means, first of all, to tell a story." — Michelangelo Antonioni',
  '"I don\'t dream at night, I dream at day, I dream all day." — Steven Spielberg',
  '"Film is incredibly democratic and accessible, it\'s probably the best option." — Tilda Swinton',
]

// Filmography
const filmography = [
  { year: '2024', title: 'Past Lives', dir: 'Celine Song' },
  { year: '2023', title: 'Poor Things', dir: 'Yorgos Lanthimos' },
  { year: '2022', title: 'Everything Everywhere', dir: 'Daniel Kwan' },
  { year: '2019', title: 'Midsommar', dir: 'Ari Aster' },
  { year: '2017', title: 'Lady Bird', dir: 'Greta Gerwig' },
  { year: '2016', title: 'Moonlight', dir: 'Barry Jenkins' },
  { year: '2015', title: 'Ex Machina', dir: 'Alex Garland' },
  { year: '2014', title: 'Under the Skin', dir: 'Jonathan Glazer' },
]

// Set icons
const setIcons = ['🎬', '🎥', '🎞️', '📽️', '🎭', '🎪', '🎤', '🔊', '💡', '📹']

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [showCountdown, setShowCountdown] = useState(true)
  const [countdown, setCountdown] = useState(5)

  // Countdown sequence
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 600)
      return () => clearTimeout(timer)
    } else {
      setTimeout(() => setShowCountdown(false), 400)
    }
  }, [countdown])

  // Spotlight cursor
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <div className="film-grain" onMouseMove={handleMouseMove}>
      {/* FILM COUNTDOWN */}
      {showCountdown && (
        <div className="fixed inset-0 z-[100] bg-frame-black flex items-center justify-center">
          <div className="relative">
            {/* Film countdown circles */}
            <svg className="w-64 h-64" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(201,162,39,0.2)" strokeWidth="2" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(201,162,39,0.1)" strokeWidth="1" />
              {/* Crosshairs */}
              <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(201,162,39,0.15)" strokeWidth="1" />
              <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(201,162,39,0.15)" strokeWidth="1" />
              {/* Corner marks */}
              <path d="M30 30 L50 30 M30 30 L30 50" stroke="rgba(201,162,39,0.3)" strokeWidth="2" fill="none" />
              <path d="M170 30 L150 30 M170 30 L170 50" stroke="rgba(201,162,39,0.3)" strokeWidth="2" fill="none" />
              <path d="M30 170 L50 170 M30 170 L30 150" stroke="rgba(201,162,39,0.3)" strokeWidth="2" fill="none" />
              <path d="M170 170 L150 170 M170 170 L170 150" stroke="rgba(201,162,39,0.3)" strokeWidth="2" fill="none" />
            </svg>
            {/* Number */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="display text-[120px] text-frame-gold animate-flicker" key={countdown}>
                {countdown}
              </span>
            </div>
            {/* Rotating ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-56 h-56 border border-frame-gold/20 rounded-full animate-spin" style={{ animationDuration: '8s' }} />
            </div>
          </div>
        </div>
      )}

      {/* FILM QUOTE MARQUEE */}
      <div className="fixed top-16 left-0 right-0 z-40 py-2.5 border-b border-frame-gray/20 overflow-hidden glass">
        <div className="animate-marquee whitespace-nowrap">
          {[...filmQuotes, ...filmQuotes].map((q, i) => (
            <span key={i} className="mono text-[10px] tracking-wider text-frame-light/30 mx-10">{q}</span>
          ))}
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center pt-10 spotlight-cursor"
        style={{ '--mouse-x': `${mousePos.x}%`, '--mouse-y': `${mousePos.y}%` } as React.CSSProperties}>
        <div className="absolute inset-0 vignette" />

        {/* Floating set icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {setIcons.map((icon, i) => (
            <div
              key={i}
              className="absolute text-2xl opacity-[0.04] animate-breathe"
              style={{
                left: `${10 + (i * 9)}%`,
                top: `${20 + Math.sin(i * 1.5) * 30}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {icon}
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          {/* Scene slate header */}
          <div className="animate-fade-up initial-hidden d-200 mb-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-frame-dark/50 border border-frame-gray/30 rounded">
              <span className="mono text-[10px] text-frame-gold/60">SCENE</span>
              <span className="mono text-[10px] text-frame-light/40">001</span>
              <span className="w-px h-3 bg-frame-gray" />
              <span className="mono text-[10px] text-frame-gold/60">TAKE</span>
              <span className="mono text-[10px] text-frame-light/40">∞</span>
              <span className="w-px h-3 bg-frame-gray" />
              <span className="mono text-[10px] tracking-[0.3em] text-frame-gold/40 uppercase">The Operating System for Indie Film</span>
            </div>
          </div>

          {/* Title with clapperboard reveal */}
          <h1 className="animate-fade-up initial-hidden d-300 display text-[7rem] md:text-[11rem] leading-[0.85] tracking-wider mb-6">
            <span className="text-reveal inline-block" style={{ animationDelay: '0.4s' }}>MAKE THE</span><br />
            <span className="text-reveal inline-block text-gradient" style={{ animationDelay: '0.7s' }}>FILM.</span><br />
            <span className="text-reveal inline-block italic" style={{ animationDelay: '1.0s' }}>NOW.</span>
          </h1>

          <p className="animate-fade-up initial-hidden d-600 text-lg text-frame-light max-w-lg mx-auto mb-4 font-light">
            Direct-to-Production Pipeline
          </p>

          {/* Director's slate style tagline */}
          <div className="animate-fade-up initial-hidden d-700 mb-16">
            <div className="inline-flex items-center gap-2 mono text-xs text-frame-light/40">
              <span>PROD:</span>
              <span className="text-frame-gold/60">FRAME</span>
              <span>·</span>
              <span>DIR:</span>
              <span className="text-frame-gold/60">YOU</span>
              <span>·</span>
              <span>DATE:</span>
              <span className="text-frame-gold/60">TODAY</span>
            </div>
          </div>

          {/* THE CHOICE — Two paths with viewfinder effect */}
          <div className="animate-fade-up initial-hidden d-900 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Creative */}
            <a href="/feed" className="viewfinder group card-hover p-8 rounded-2xl border border-frame-gray/50 bg-frame-dark/50 hover:border-frame-gold/40 transition-all duration-700 text-left frame-corners">
              <div className="action-text text-[10px] text-frame-gold/30 mb-4">ACTION</div>
              <div className="text-4xl mb-4">🎬</div>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-frame-gold transition-colors duration-500 serif">I Make Films</h2>
              <p className="text-sm text-frame-light leading-relaxed mb-4">
                Post sparks, build blueprints, assemble crews, get funded.
              </p>
              <div className="flex items-center gap-2 text-frame-gold text-sm font-medium">
                <span>Enter as Creative</span>
                <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>

            {/* Producer */}
            <a href="/discover-producer" className="viewfinder group card-hover p-8 rounded-2xl border border-frame-gray/50 bg-frame-dark/50 hover:border-frame-gold/40 transition-all duration-700 text-left frame-corners">
              <div className="action-text text-[10px] text-frame-gold/30 mb-4">ACTION</div>
              <div className="text-4xl mb-4">💰</div>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-frame-gold transition-colors duration-500 serif">I Fund Films</h2>
              <p className="text-sm text-frame-light leading-relaxed mb-4">
                Discover vetted projects, fund line items, track productions.
              </p>
              <div className="flex items-center gap-2 text-frame-gold text-sm font-medium">
                <span>Enter as Producer</span>
                <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in d-1200">
          <span className="action-text text-[10px] text-frame-light/30">ROLL</span>
          <div className="w-px h-10 bg-gradient-to-b from-frame-gold/30 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ===== FILM STRIP ===== */}
      <section className="py-6 border-y border-frame-gray/20 overflow-hidden bg-frame-dark/30 film-strip-border">
        <div className="animate-marquee flex items-center">
          {filmography.concat(filmography).map((f, i) => (
            <div key={i} className="flex items-center gap-3 mx-6 group cursor-default">
              <span className="mono text-[10px] text-frame-gold/40">{f.year}</span>
              <span className="text-sm text-frame-light/60 group-hover:text-frame-cream transition-colors">{f.title}</span>
              <span className="mono text-[9px] text-frame-light/20">dir. {f.dir}</span>
              <span className="text-frame-gold/10 text-lg">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOUR-PHASE PIPELINE ===== */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="clap-header inline-block mb-6">
              <span className="action-text text-[10px] text-frame-gold/60 block mb-1">THE PIPELINE</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight serif">Four Phases. One Platform.</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {[
              { num: 'I', name: 'Spark', tag: 'The idea ignites', desc: 'Post logline. Crew vouches. Heat score builds.', color: 'from-blue-500/8 to-blue-950/5', border: 'border-blue-500/20 hover:border-blue-400/40', icon: '🔥' },
              { num: 'II', name: 'Blueprint', tag: 'The plan takes shape', desc: 'Script, mood board, milestones, crew roster.', color: 'from-purple-500/8 to-purple-950/5', border: 'border-purple-500/20 hover:border-purple-400/40', icon: '📐' },
              { num: 'III', name: 'Market', tag: 'The crew assembles', desc: 'Proximity Engine. Gear meets need. Portfolios.', color: 'from-amber-500/8 to-amber-950/5', border: 'border-amber-500/20 hover:border-amber-400/40', icon: '📍' },
              { num: 'IV', name: 'Patronage', tag: 'The film gets funded', desc: 'Line-item funding. Escrow. Milestone proof.', color: 'from-emerald-500/8 to-emerald-950/5', border: 'border-emerald-500/20 hover:border-emerald-400/40', icon: '💰' },
            ].map((phase, i) => (
              <div key={i} className={`card-hover scene-slate rounded-2xl p-6 bg-gradient-to-b ${phase.color} border ${phase.border} transition-all duration-700`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="action-text text-[10px] text-frame-light/30">PHASE {phase.num}</span>
                  <span className="text-2xl">{phase.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-1 serif">{phase.name}</h3>
                <p className="mono text-[10px] italic text-frame-light/50 mb-3">{phase.tag}</p>
                <p className="text-sm text-frame-light leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOR CREATIVES ===== */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background practical lights */}
        <div className="absolute top-10 left-20 w-2 h-2 bg-frame-gold/30 rounded-full practical-light animate-breathe" />
        <div className="absolute top-20 right-32 w-2 h-2 bg-frame-gold/20 rounded-full practical-light animate-breathe" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-frame-gold/25 rounded-full practical-light animate-breathe" style={{ animationDelay: '2s' }} />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="clap-header mb-6">
                <span className="action-text text-[10px] text-frame-gold/60 block mb-1">FOR FILMMAKERS</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight serif">
                  Stop managing your film across<br />
                  <span className="text-gradient italic">five different tools.</span>
                </h2>
              </div>
              <p className="text-frame-light leading-relaxed mb-8">
                X for pitching. LinkedIn for crew. Drive for files. Kickstarter for funding. 
                Email for everything else. Frame replaces all of it.
              </p>
              <div className="space-y-3">
                {[
                  { icon: '🔥', text: 'Post a Spark — attract crew before any heavy planning' },
                  { icon: '📐', text: 'Build your Blueprint — script, moodboard, milestones' },
                  { icon: '🎒', text: 'List your Gear Locker — let nearby projects find you' },
                  { icon: '💰', text: 'Get funded — milestone-based, quality-gated campaigns' },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm animate-slide-left initial-hidden" style={{ animationDelay: `${0.3 + i * 0.15}s` }}>
                    <span className="text-lg">{f.icon}</span>
                    <span className="text-frame-light">{f.text}</span>
                  </div>
                ))}
              </div>
              <a href="/feed" className="inline-flex items-center gap-2 mt-8 bg-frame-gold text-frame-black px-8 py-4 rounded-xl font-semibold hover:bg-frame-gold/90 transition-all duration-300 glow-gold hover:glow-gold-strong btn-press action-text tracking-wider">
                START CREATING →
              </a>
            </div>

            {/* Spark Feed preview */}
            <div className="call-sheet rounded-2xl p-6 border border-frame-gray/30">
              <div className="flex items-center justify-between mb-4">
                <span className="mono text-[10px] text-frame-light/30">LIVE SPARK FEED</span>
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              </div>
              {[
                { title: 'Echoes of Silence', heat: 89, vouches: 48, active: true },
                { title: 'The Last Blockbuster', heat: 76, vouches: 41 },
                { title: 'Night Shift', heat: 67, vouches: 34 },
                { title: 'Dirt Road Hymnal', heat: 54, vouches: 28 },
              ].map((s, i) => (
                <div key={i} className={`flex items-center justify-between p-4 rounded-xl mb-2 transition-all ${
                  s.active ? 'bg-frame-gold/5 border border-frame-gold/20' : 'bg-frame-gray/20 border border-transparent'
                }`}>
                  <div>
                    <div className="font-medium text-sm serif">{s.title}</div>
                    <div className="mono text-[10px] text-frame-light/50">{s.vouches} vouches</div>
                  </div>
                  <div className={`mono text-2xl font-bold ${s.active ? 'text-frame-gold animate-flicker' : 'text-frame-light/40'}`}>
                    {s.heat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOR PRODUCERS ===== */}
      <section className="py-32 px-6 bg-frame-dark/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Funding dashboard preview */}
            <div className="order-2 md:order-1 call-sheet rounded-2xl p-6 border border-frame-gray/30">
              <div className="mono text-[10px] text-frame-light/30 mb-4">FUNDING DASHBOARD</div>
              <div className="mb-6">
                <div className="display text-5xl text-frame-gold mb-1">$127,400</div>
                <div className="mono text-[10px] text-frame-light/50">ACROSS 3 ACTIVE CAMPAIGNS</div>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'Echoes of Silence', progress: 72, funded: '$32.4K', goal: '$45K' },
                  { title: 'Dirt Road Hymnal', progress: 100, funded: '$12K', goal: '$12K' },
                  { title: 'Frequency', progress: 34, funded: '$17K', goal: '$50K' },
                ].map((c, i) => (
                  <div key={i} className="p-4 rounded-xl bg-frame-gray/20 border border-frame-gray/10">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="serif">{c.title}</span>
                      <span className="mono text-frame-gold">{c.funded}</span>
                    </div>
                    <div className="h-1.5 bg-frame-gray/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-frame-gold-dim to-frame-gold rounded-full progress-fill" style={{ width: `${c.progress}%` }} />
                    </div>
                    <div className="mono text-[9px] text-frame-light/30 mt-1">{c.progress}% OF {c.goal} GOAL</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="clap-header mb-6">
                <span className="action-text text-[10px] text-frame-gold/60 block mb-1">FOR PRODUCERS & BACKERS</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight serif">
                  Fund what's real.<br />
                  <span className="text-gradient italic">Not what's hyped.</span>
                </h2>
              </div>
              <p className="text-frame-light leading-relaxed mb-8">
                Every project has a real team, a real script, and a real plan 
                before funding opens. Quality gates ensure you're backing productions 
                that can actually deliver.
              </p>
              <div className="space-y-3">
                {[
                  { icon: '🎬', text: 'Browse vetted projects with real crews attached' },
                  { icon: '📋', text: 'Fund specific budget line items — camera, locations, cast' },
                  { icon: '🔒', text: 'Escrow-protected — funds release on milestone proof' },
                  { icon: '📊', text: 'Track production progress in real-time' },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="text-lg">{f.icon}</span>
                    <span className="text-frame-light">{f.text}</span>
                  </div>
                ))}
              </div>
              <a href="/discover-producer" className="inline-flex items-center gap-2 mt-8 border border-frame-gold/30 text-frame-gold px-8 py-4 rounded-xl font-semibold hover:bg-frame-gold/10 transition-all duration-300 btn-press action-text tracking-wider">
                BROWSE PROJECTS →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Film frame corners on entire section */}
        <div className="absolute inset-8 border border-frame-gray/10 rounded pointer-events-none" />
        <div className="absolute inset-8 frame-corners rounded pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="action-text text-[10px] text-frame-gold/40 tracking-[0.5em] mb-6">CUT TO:</div>
          <h2 className="display text-6xl md:text-8xl mb-8 leading-[0.9] tracking-wider">
            FOR THE PEOPLE WHO MAKE FILMS<br />
            <span className="italic text-gradient">NOBODY TOLD THEM THEY COULD MAKE.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup?role=creative" className="bg-frame-gold text-frame-black px-10 py-4 rounded-xl text-lg font-semibold hover:bg-frame-gold/90 transition-all duration-300 glow-gold hover:glow-gold-strong btn-press action-text tracking-wider">
              I MAKE FILMS
            </a>
            <a href="/signup?role=producer" className="border border-frame-gold/30 text-frame-cream px-10 py-4 rounded-xl text-lg hover:bg-frame-gold/5 transition-all duration-300 btn-press action-text tracking-wider">
              I FUND FILMS
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-frame-gray/20 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-frame-gold rounded flex items-center justify-center animate-pulse-glow">
                  <span className="text-frame-black font-bold text-sm" style={{ fontFamily: 'DM Serif Display, serif' }}>F</span>
                </div>
                <span className="display text-xl tracking-wider">FRAME</span>
              </div>
              <p className="text-sm text-frame-light max-w-xs">Make the film. Now.</p>
              <div className="mono text-[9px] text-frame-light/20 mt-2">THE OPERATING SYSTEM FOR INDIE FILM</div>
            </div>
            <div className="grid grid-cols-3 gap-12 text-sm">
              <div className="space-y-3">
                <div className="action-text text-[9px] text-frame-light/40 tracking-widest mb-3">PLATFORM</div>
                <a href="/feed" className="block text-frame-light hover:text-frame-cream transition">Spark Feed</a>
                <a href="/discover" className="block text-frame-light hover:text-frame-cream transition">Crew Market</a>
                <a href="/funding" className="block text-frame-light hover:text-frame-cream transition">Funding</a>
              </div>
              <div className="space-y-3">
                <div className="action-text text-[9px] text-frame-light/40 tracking-widest mb-3">COMPANY</div>
                <a href="/about" className="block text-frame-light hover:text-frame-cream transition">About</a>
                <a href="/careers" className="block text-frame-light hover:text-frame-cream transition">Careers</a>
              </div>
              <div className="space-y-3">
                <div className="action-text text-[9px] text-frame-light/40 tracking-widest mb-3">LEGAL</div>
                <a href="/terms" className="block text-frame-light hover:text-frame-cream transition">Terms</a>
                <a href="/privacy" className="block text-frame-light hover:text-frame-cream transition">Privacy</a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-8 border-t border-frame-gray/10">
            <span className="mono text-[9px] text-frame-light/20">© 2024 FRAME — ALL RIGHTS RESERVED</span>
            <div className="flex items-center gap-3">
              <span className="mono text-[9px] text-frame-light/20">v1.1</span>
              <span className="w-1 h-1 bg-frame-gold/30 rounded-full" />
              <span className="mono text-[9px] text-frame-light/20">ROLLING</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
