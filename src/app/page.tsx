'use client'
import { useState, useEffect } from 'react'

const phases = [
  { num: 'I', name: 'Spark', tagline: 'The idea ignites', desc: 'Post a logline. Crew vouches. Heat score builds. 50 vouches unlocks the Blueprint.', gate: '50 verified vouches' },
  { num: 'II', name: 'Blueprint', tagline: 'The plan takes shape', desc: 'Script, mood board, IP reference, milestones, crew roster. Director marks it complete.', gate: 'Director marks Blueprint Complete' },
  { num: 'III', name: 'Market', tagline: 'The crew assembles', desc: 'Proximity Engine matches nearby crew. Gear meets need. Diptych portfolios reviewed.', gate: 'All required crew roles confirmed' },
  { num: 'IV', name: 'Patronage', tagline: 'The film gets funded', desc: 'Line-item funding opens. Fans back specific budget items in escrow. Funds release on milestone proof.', gate: 'Principal photography wrapped' },
]

const stats = [
  { value: '4', label: 'Lifecycle Phases' },
  { value: '2K+', label: 'Public Domain Works' },
  { value: '50mi', label: 'Crew Radius' },
  { value: '0%', label: 'Fee on Failures' },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [activePhase, setActivePhase] = useState(0)

  useEffect(() => { setMounted(true) }, [])

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Animated background grain */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }} />

        {/* Gold gradient accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-frame-gold/8 via-transparent to-transparent rounded-full blur-3xl" />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          {mounted && (
            <>
              <div className="animate-fade-in-up stagger-1 inline-block mb-8 px-5 py-2 border border-frame-gold/20 rounded-full text-frame-gold text-xs tracking-[0.3em] uppercase font-medium">
                The Operating System for Indie Film
              </div>

              <h1 className="animate-fade-in-up stagger-2 text-7xl md:text-9xl font-bold mb-6 leading-[0.9] tracking-tight">
                Make the film.<br />
                <span className="text-frame-gold italic">Now.</span>
              </h1>

              <p className="animate-fade-in-up stagger-3 text-xl md:text-2xl text-frame-light max-w-2xl mx-auto mb-4 font-light">
                Direct-to-Production Pipeline
              </p>

              <p className="animate-fade-in-up stagger-4 text-base text-frame-light/60 max-w-xl mx-auto mb-12 leading-relaxed">
                From first logline to final delivery. One platform replaces X pitching, 
                LinkedIn crew searches, Kickstarter campaigns, and email chains.
              </p>

              <div className="animate-fade-in-up stagger-5 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/spark" className="group relative bg-frame-gold text-frame-black px-10 py-4 rounded-lg text-lg font-semibold hover:bg-frame-gold/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,162,39,0.3)]">
                  Post a Spark
                  <span className="absolute inset-0 rounded-lg ring-2 ring-frame-gold/30 ring-offset-2 ring-offset-frame-black opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="/feed" className="border border-frame-gray text-frame-cream px-10 py-4 rounded-lg text-lg hover:border-frame-light/50 transition-all duration-300 hover:bg-white/[0.02]">
                  Explore the Feed
                </a>
              </div>
            </>
          )}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-frame-light/30">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-frame-gray/50 py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-frame-gold mb-1">{s.value}</div>
              <div className="text-sm text-frame-light tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOUR-PHASE PIPELINE */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Four-Phase Pipeline</h2>
            <p className="text-frame-light text-lg max-w-xl mx-auto">
              Every project moves through four phases. Each gate ensures production readiness.
            </p>
          </div>

          {/* Phase selector */}
          <div className="flex justify-center gap-2 mb-12">
            {phases.map((p, i) => (
              <button
                key={i}
                onClick={() => setActivePhase(i)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activePhase === i
                    ? 'bg-frame-gold text-frame-black'
                    : 'bg-frame-gray/50 text-frame-light hover:bg-frame-gray hover:text-frame-cream'
                }`}
              >
                {p.num}. {p.name}
              </button>
            ))}
          </div>

          {/* Active phase detail */}
          <div className="bg-frame-dark rounded-2xl p-8 md:p-12 border border-frame-gray/50 animate-fade-in" key={activePhase}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-frame-gold/40 text-sm font-mono tracking-widest mb-2">PHASE {phases[activePhase].num}</div>
                <h3 className="text-4xl font-bold mb-2">{phases[activePhase].name}</h3>
                <p className="text-frame-gold text-lg mb-4 italic">{phases[activePhase].tagline}</p>
                <p className="text-frame-light leading-relaxed mb-8">{phases[activePhase].desc}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-frame-gold/10 rounded-lg border border-frame-gold/20">
                  <svg className="w-4 h-4 text-frame-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-frame-gold">Gate: {phases[activePhase].gate}</span>
                </div>
              </div>
              <div className="bg-frame-black rounded-xl p-6 border border-frame-gray/30">
                {/* Phase preview mockup */}
                {activePhase === 0 && <SparkPreview />}
                {activePhase === 1 && <BlueprintPreview />}
                {activePhase === 2 && <MarketPreview />}
                {activePhase === 3 && <PatronagePreview />}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THESIS */}
      <section className="py-24 px-6 bg-frame-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug">
            Frame is NOT a social network.<br />
            NOT a crowdfunding site.<br />
            NOT a job board.<br />
            <span className="text-frame-gold">It's a production OS.</span>
          </h2>
          <p className="text-frame-light text-lg leading-relaxed max-w-2xl mx-auto">
            The project is the primary object. Social proof, crew matching, and funding all serve it. 
            Physical gear and geographic proximity create a moat against AI-generated synthetic noise.
          </p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Built for Real Filmmakers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🔥', title: 'Heat Score', desc: 'Weighted vouch-velocity metric. 50 crew vouches outrank 500 passive likes.' },
              { icon: '🎒', title: 'Gear Locker', desc: 'List your owned equipment. Demand signals show what nearby projects need.' },
              { icon: '📍', title: 'Proximity Engine', desc: 'Find crew within 50 miles whose gear matches your production needs.' },
              { icon: '📚', title: 'IP Library', desc: '2,000+ public domain works searchable by genre, era, and theme.' },
              { icon: '🎬', title: 'Script Analysis', desc: 'Upload .PDF or .fountain. Auto-extract locations, scenes, cast size.' },
              { icon: '💰', title: 'Line-Item Funding', desc: 'Backers fund specific budget items in escrow. Funds release on milestone proof.' },
            ].map((f, i) => (
              <div key={i} className="card-lift bg-frame-dark rounded-xl p-6 border border-frame-gray/50">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-frame-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop patching five tools together.
          </h2>
          <p className="text-xl text-frame-light mb-10 leading-relaxed">
            X for pitching. LinkedIn for crew. Kickstarter for funding. Drive for files. Email for everything else.<br />
            <strong className="text-frame-cream">Frame replaces all of it.</strong>
          </p>
          <a href="/signup" className="inline-block bg-frame-gold text-frame-black px-10 py-4 rounded-lg text-lg font-semibold hover:bg-frame-gold/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,162,39,0.3)]">
            Join Frame — It's Free
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-frame-gray/30 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-frame-gold rounded flex items-center justify-center">
              <span className="text-frame-black font-bold text-xs">F</span>
            </div>
            <span className="text-sm text-frame-light">Frame — Make the film. Now.</span>
          </div>
          <div className="flex gap-8 text-sm text-frame-light">
            <a href="/about" className="hover:text-frame-cream transition">About</a>
            <a href="/terms" className="hover:text-frame-cream transition">Terms</a>
            <a href="/privacy" className="hover:text-frame-cream transition">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* Phase preview components */
function SparkPreview() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <span className="text-xs text-blue-400 uppercase tracking-wider">Live Spark Feed</span>
      </div>
      {[
        { title: 'Echoes of Silence', genre: 'Drama', vouches: 34, heat: 67 },
        { title: 'The Last Blockbuster', genre: 'Documentary', vouches: 48, heat: 89 },
        { title: 'Night Shift', genre: 'Thriller', vouches: 12, heat: 23 },
      ].map((s, i) => (
        <div key={i} className="flex items-center justify-between p-3 bg-frame-gray/30 rounded-lg">
          <div>
            <div className="text-sm font-medium">{s.title}</div>
            <div className="text-xs text-frame-light">{s.genre}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-frame-gold font-mono">🔥 {s.heat}</div>
            <div className="text-xs text-frame-light">{s.vouches} vouches</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function BlueprintPreview() {
  return (
    <div className="space-y-4">
      <div className="text-xs text-purple-400 uppercase tracking-wider mb-2">Blueprint Dashboard</div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Script', status: 'Uploaded', done: true },
          { label: 'Mood Board', status: '4 images', done: true },
          { label: 'IP Reference', status: 'Linked', done: true },
          { label: 'Crew Roster', status: '3/7 filled', done: false },
        ].map((item, i) => (
          <div key={i} className={`p-3 rounded-lg border ${item.done ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-frame-gray/30 border-frame-gray/50'}`}>
            <div className="text-sm font-medium">{item.label}</div>
            <div className={`text-xs ${item.done ? 'text-emerald-400' : 'text-frame-light'}`}>{item.status}</div>
          </div>
        ))}
      </div>
      <div className="h-2 bg-frame-gray/50 rounded-full overflow-hidden">
        <div className="h-full bg-purple-500 rounded-full progress-fill" style={{ width: '65%' }} />
      </div>
      <div className="text-xs text-frame-light text-center">4 of 6 milestones complete</div>
    </div>
  )
}

function MarketPreview() {
  return (
    <div className="space-y-3">
      <div className="text-xs text-amber-400 uppercase tracking-wider mb-2">Nearby Crew Matches</div>
      {[
        { name: 'Sarah K.', role: 'DP', dist: '12mi', gear: 'RED Komodo', match: 94 },
        { name: 'Mike R.', role: 'Gaffer', dist: '8mi', gear: 'Aputure 600d', match: 87 },
        { name: 'Ana L.', role: 'Sound', dist: '23mi', gear: 'Sound Devices MixPre', match: 72 },
      ].map((c, i) => (
        <div key={i} className="flex items-center justify-between p-3 bg-frame-gray/30 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-frame-gray rounded-full flex items-center justify-center text-xs text-frame-gold">
              {c.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="text-sm font-medium">{c.name} <span className="text-frame-light">· {c.role}</span></div>
              <div className="text-xs text-frame-light">{c.gear} · {c.dist}</div>
            </div>
          </div>
          <div className="text-sm text-frame-gold font-mono">{c.match}%</div>
        </div>
      ))}
    </div>
  )
}

function PatronagePreview() {
  return (
    <div className="space-y-3">
      <div className="text-xs text-green-400 uppercase tracking-wider mb-2">Funding Progress</div>
      <div className="text-2xl font-bold text-frame-gold mb-1">$32,400 <span className="text-sm text-frame-light font-normal">of $45,000</span></div>
      <div className="h-3 bg-frame-gray/50 rounded-full overflow-hidden mb-4">
        <div className="h-full bg-gradient-to-r from-frame-gold-dim to-frame-gold rounded-full progress-fill" style={{ width: '72%' }} />
      </div>
      <div className="space-y-2">
        {[
          { item: 'Camera Package', amount: 8000, funded: true },
          { item: 'Location Fees', amount: 5000, funded: true },
          { item: 'Cast & Crew', amount: 15000, funded: false },
          { item: 'Post-Production', amount: 12000, funded: false },
        ].map((line, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-sm ${line.funded ? 'bg-frame-gold' : 'bg-frame-gray/50'}`} />
              <span className={line.funded ? 'text-frame-cream' : 'text-frame-light'}>{line.item}</span>
            </div>
            <span className="text-frame-light">${line.amount.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
