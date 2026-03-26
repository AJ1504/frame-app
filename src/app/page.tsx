'use client'
import { useState, useEffect, useRef } from 'react'

// Film quotes for the marquee
const filmQuotes = [
  '"The only way to get rid of my fears is to make films about them." — Alfred Hitchcock',
  '"Cinema is a matter of what\'s in the frame and what\'s out." — Martin Scorsese',
  '"I don\'t dream at night, I dream at day, I dream all day." — Steven Spielberg',
  '"Film is incredibly democratic and accessible, it\'s probably the best option." — Tilda Swinton',
  '"A film is — or should be — more like music than like fiction." — Stanley Kubrick',
  '"Making a film means, first of all, to tell a story." — Michelangelo Antonioni',
]

// A24-inspired filmography
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

export default function Home() {
  const [role, setRole] = useState<'creative' | 'producer' | null>(null)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="film-grain">
      {/* FILM QUOTE MARQUEE */}
      <div className="fixed top-16 left-0 right-0 z-40 py-2 border-b border-frame-gray/20 overflow-hidden bg-frame-black/90 backdrop-blur-sm">
        <div className="marquee-track">
          {[...filmQuotes, ...filmQuotes].map((q, i) => (
            <span key={i} className="text-xs text-frame-light/40 whitespace-nowrap mx-12 tracking-wider">{q}</span>
          ))}
        </div>
      </div>

      {/* HERO — THE CHOICE */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-10">
        {/* Cinematic vignette */}
        <div className="absolute inset-0 vignette" />

        {/* Parallax background grain */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
          <div className="w-full h-[120%] bg-gradient-to-b from-frame-gold/[0.03] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          {/* Slogan reveal */}
          <div className="mb-8 animate-fade-up initial-hidden delay-100">
            <span className="mono text-[10px] tracking-[0.5em] text-frame-gold/60 uppercase">The Operating System for Indie Film</span>
          </div>

          <h1 className="animate-fade-up initial-hidden delay-200 text-8xl md:text-[10rem] font-bold leading-[0.85] tracking-tight mb-8">
            Make the<br />
            <span className="italic text-gradient">film.</span><br />
            Now.
          </h1>

          <p className="animate-fade-up initial-hidden delay-300 text-lg text-frame-light max-w-lg mx-auto mb-16 leading-relaxed font-light">
            Direct-to-production pipeline.<br />
            From first logline to final delivery.
          </p>

          {/* THE CHOICE — Two paths */}
          <div className="animate-fade-up initial-hidden delay-500 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Creative path */}
            <a
              href="/feed"
              onMouseEnter={() => setRole('creative')}
              onMouseLeave={() => setRole(null)}
              className="group relative p-8 rounded-2xl border border-frame-gray/50 bg-frame-dark/50 hover:border-frame-gold/40 transition-all duration-700 card-hover text-left"
            >
              <div className="absolute top-6 right-6 mono text-xs text-frame-light/30">01</div>
              <div className="text-4xl mb-4">🎬</div>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-frame-gold transition-colors duration-500">I Make Films</h2>
              <p className="text-sm text-frame-light leading-relaxed mb-4">
                Post sparks, build blueprints, assemble crews, get funded. 
                The production OS for filmmakers.
              </p>
              <div className="flex items-center gap-2 text-frame-gold text-sm font-medium">
                <span>Enter as Creative</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>

            {/* Producer path */}
            <a
              href="/discover-producer"
              onMouseEnter={() => setRole('producer')}
              onMouseLeave={() => setRole(null)}
              className="group relative p-8 rounded-2xl border border-frame-gray/50 bg-frame-dark/50 hover:border-frame-gold/40 transition-all duration-700 card-hover text-left"
            >
              <div className="absolute top-6 right-6 mono text-xs text-frame-light/30">02</div>
              <div className="text-4xl mb-4">💰</div>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-frame-gold transition-colors duration-500">I Fund Films</h2>
              <p className="text-sm text-frame-light leading-relaxed mb-4">
                Discover vetted projects, fund specific line items, 
                track productions in real-time.
              </p>
              <div className="flex items-center gap-2 text-frame-gold text-sm font-medium">
                <span>Enter as Producer</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-800">
          <span className="text-[10px] tracking-[0.3em] text-frame-light/30 uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-frame-light/30 to-transparent animate-pulse" />
        </div>
      </section>

      {/* FILM STRIP — Filmography timeline */}
      <section className="py-20 border-y border-frame-gray/20 overflow-hidden">
        <div className="marquee-track">
          {filmography.concat(filmography).map((f, i) => (
            <div key={i} className="flex items-center gap-4 mx-8 group cursor-default">
              <span className="mono text-xs text-frame-gold/40">{f.year}</span>
              <span className="text-sm text-frame-light group-hover:text-frame-cream transition-colors">{f.title}</span>
              <span className="text-xs text-frame-light/30">dir. {f.dir}</span>
              <span className="text-frame-gold/20">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* FOUR-PHASE PIPELINE — Cinematic cards */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="mono text-[10px] tracking-[0.5em] text-frame-gold/50 uppercase block mb-4">The Pipeline</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Four Phases.<br />One Platform.</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { num: 'I', name: 'Spark', tag: 'The idea ignites', desc: 'Post logline. Crew vouches. Heat score builds.', color: 'from-blue-500/10 to-blue-900/5', border: 'hover:border-blue-500/30', icon: '🔥' },
              { num: 'II', name: 'Blueprint', tag: 'The plan takes shape', desc: 'Script, mood board, milestones, crew roster.', color: 'from-purple-500/10 to-purple-900/5', border: 'hover:border-purple-500/30', icon: '📐' },
              { num: 'III', name: 'Market', tag: 'The crew assembles', desc: 'Proximity Engine. Gear meets need. Portfolios.', color: 'from-amber-500/10 to-amber-900/5', border: 'hover:border-amber-500/30', icon: '📍' },
              { num: 'IV', name: 'Patronage', tag: 'The film gets funded', desc: 'Line-item funding. Escrow. Milestone proof.', color: 'from-emerald-500/10 to-emerald-900/5', border: 'hover:border-emerald-500/30', icon: '💰' },
            ].map((phase, i) => (
              <div key={i} className={`group relative card-hover rounded-2xl p-6 bg-gradient-to-b ${phase.color} border border-frame-gray/30 ${phase.border} transition-all duration-700`}>
                <div className="mono text-xs text-frame-light/30 mb-4">PHASE {phase.num}</div>
                <div className="text-3xl mb-3">{phase.icon}</div>
                <h3 className="text-xl font-bold mb-1">{phase.name}</h3>
                <p className="text-xs italic text-frame-light/60 mb-3">{phase.tag}</p>
                <p className="text-sm text-frame-light">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR CREATIVES */}
      <section className="py-32 px-6 bg-gradient-to-b from-frame-dark/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="mono text-[10px] tracking-[0.5em] text-frame-gold/50 uppercase block mb-4">For Filmmakers</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Stop managing your film across<br />
                <span className="text-gradient italic">five different tools.</span>
              </h2>
              <p className="text-frame-light leading-relaxed mb-8">
                X for pitching. LinkedIn for crew. Drive for files. Kickstarter for funding. 
                Email for everything else. Frame replaces all of it — starting with a simple 
                spark and ending with a funded production.
              </p>
              <div className="space-y-4">
                {[
                  { icon: '🔥', text: 'Post a Spark — attract crew before any heavy planning' },
                  { icon: '📐', text: 'Build your Blueprint — script, moodboard, milestones' },
                  { icon: '🎒', text: 'List your Gear Locker — let nearby projects find you' },
                  { icon: '💰', text: 'Get funded — milestone-based, quality-gated campaigns' },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="text-lg">{f.icon}</span>
                    <span className="text-frame-light">{f.text}</span>
                  </div>
                ))}
              </div>
              <a href="/feed" className="inline-flex items-center gap-2 mt-8 bg-frame-gold text-frame-black px-8 py-4 rounded-xl font-semibold hover:bg-frame-gold/90 transition-all duration-300 glow-gold hover:glow-gold-strong btn-press">
                Start Creating
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
            <div className="relative">
              <div className="bg-frame-dark rounded-2xl p-6 border border-frame-gray/30">
                <div className="mono text-xs text-frame-light/30 mb-4">LIVE SPARK FEED</div>
                {[
                  { title: 'Echoes of Silence', heat: 89, vouches: 48 },
                  { title: 'The Last Blockbuster', heat: 76, vouches: 41 },
                  { title: 'Night Shift', heat: 67, vouches: 34 },
                ].map((s, i) => (
                  <div key={i} className={`flex items-center justify-between p-4 rounded-xl mb-2 ${i === 0 ? 'bg-frame-gold/5 border border-frame-gold/20' : 'bg-frame-gray/20'}`}>
                    <div>
                      <div className="font-medium text-sm">{s.title}</div>
                      <div className="text-xs text-frame-light">{s.vouches} vouches</div>
                    </div>
                    <div className={`mono text-lg font-bold ${i === 0 ? 'text-frame-gold animate-flicker' : 'text-frame-light'}`}>
                      {s.heat}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR PRODUCERS */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="bg-frame-dark rounded-2xl p-6 border border-frame-gray/30">
                <div className="mono text-xs text-frame-light/30 mb-4">FUNDING DASHBOARD</div>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-frame-gold mb-1">$127,400</div>
                  <div className="text-xs text-frame-light">Across 3 active campaigns</div>
                </div>
                <div className="space-y-3">
                  {[
                    { title: 'Echoes of Silence', progress: 72, funded: '$32.4K', goal: '$45K' },
                    { title: 'Dirt Road Hymnal', progress: 100, funded: '$12K', goal: '$12K' },
                    { title: 'Frequency', progress: 34, funded: '$17K', goal: '$50K' },
                  ].map((c, i) => (
                    <div key={i} className="p-3 rounded-xl bg-frame-gray/20">
                      <div className="flex justify-between text-sm mb-2">
                        <span>{c.title}</span>
                        <span className="mono text-frame-gold">{c.funded}</span>
                      </div>
                      <div className="h-1.5 bg-frame-gray/50 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-frame-gold-dim to-frame-gold rounded-full progress-fill" style={{ width: `${c.progress}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="mono text-[10px] tracking-[0.5em] text-frame-gold/50 uppercase block mb-4">For Producers & Backers</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Fund what's real.<br />
                <span className="text-gradient italic">Not what's hyped.</span>
              </h2>
              <p className="text-frame-light leading-relaxed mb-8">
                Every project on Frame has a real team, a real script, and a real plan 
                before funding opens. Quality gates ensure you're backing productions 
                that can actually deliver.
              </p>
              <div className="space-y-4">
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
              <a href="/discover-producer" className="inline-flex items-center gap-2 mt-8 border border-frame-gold/30 text-frame-gold px-8 py-4 rounded-xl font-semibold hover:bg-frame-gold/10 transition-all duration-300 btn-press">
                Browse Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="mono text-[10px] tracking-[0.5em] text-frame-gold/50 uppercase block mb-6">Join Frame</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            For the people who make films<br />
            <span className="italic text-gradient">nobody told them they could make.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup?role=creative" className="bg-frame-gold text-frame-black px-10 py-4 rounded-xl text-lg font-semibold hover:bg-frame-gold/90 transition-all duration-300 glow-gold hover:glow-gold-strong btn-press">
              I Make Films
            </a>
            <a href="/signup?role=producer" className="border border-frame-gold/30 text-frame-cream px-10 py-4 rounded-xl text-lg hover:bg-frame-gold/5 transition-all duration-300 btn-press">
              I Fund Films
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-frame-gray/20 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-frame-gold rounded flex items-center justify-center">
                  <span className="text-frame-black font-bold text-sm" style={{ fontFamily: 'DM Serif Display, serif' }}>F</span>
                </div>
                <span className="text-lg font-bold" style={{ fontFamily: 'DM Serif Display, serif' }}>FRAME</span>
              </div>
              <p className="text-sm text-frame-light max-w-xs">Make the film. Now.<br />The Operating System for Indie Film.</p>
            </div>
            <div className="grid grid-cols-3 gap-12 text-sm">
              <div className="space-y-3">
                <div className="text-frame-light/50 uppercase tracking-wider text-xs mb-3">Platform</div>
                <a href="/feed" className="block text-frame-light hover:text-frame-cream transition">Spark Feed</a>
                <a href="/discover" className="block text-frame-light hover:text-frame-cream transition">Crew Market</a>
                <a href="/funding" className="block text-frame-light hover:text-frame-cream transition">Funding</a>
                <a href="/tools" className="block text-frame-light hover:text-frame-cream transition">Production Tools</a>
              </div>
              <div className="space-y-3">
                <div className="text-frame-light/50 uppercase tracking-wider text-xs mb-3">Company</div>
                <a href="/about" className="block text-frame-light hover:text-frame-cream transition">About</a>
                <a href="/careers" className="block text-frame-light hover:text-frame-cream transition">Careers</a>
                <a href="/press" className="block text-frame-light hover:text-frame-cream transition">Press</a>
              </div>
              <div className="space-y-3">
                <div className="text-frame-light/50 uppercase tracking-wider text-xs mb-3">Legal</div>
                <a href="/terms" className="block text-frame-light hover:text-frame-cream transition">Terms</a>
                <a href="/privacy" className="block text-frame-light hover:text-frame-cream transition">Privacy</a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-8 border-t border-frame-gray/20">
            <span className="text-xs text-frame-light/30">© 2024 Frame. All rights reserved.</span>
            <span className="text-xs text-frame-light/30 mono">v1.1</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
