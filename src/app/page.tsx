export default function Home() {
  const stages = [
    { num: '01', name: 'Idea', desc: 'Post a concept. List the roles you need. Collaborators join.' },
    { num: '02', name: 'Development', desc: 'Shared workspace unlocks. Scripts, moodboards, role boards.' },
    { num: '03', name: 'Project', desc: 'Budget builder, timeline lock. Team confirmed.' },
    { num: '04', name: 'Funding', desc: 'Milestone-based campaigns. Quality gate enforced.' },
    { num: '05', name: 'Production', desc: 'Daily updates. Auto-credits. Festival tracker.' },
  ]

  const features = [
    { title: 'Film-Native Profiles', desc: 'Portfolio reels tied to real projects. Department + role taxonomy. Collaboration graph.' },
    { title: 'Ideas Feed', desc: 'Post a concept in two minutes. Find collaborators before any heavy planning.' },
    { title: 'Collaboration Workspace', desc: 'Script versioning, moodboards, role boards, document vault — all in one place.' },
    { title: 'The Creative Graph', desc: 'Connections built on collaboration, not follower counts. Warm crew discovery.' },
    { title: 'Funding Gate', desc: 'Milestone-based campaigns with quality gates. Backers see the real team and plan.' },
    { title: 'Production Tools', desc: 'Budget builder, shooting schedule, script breakdown — what a $5K line producer does.' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-frame-gold/5 via-transparent to-transparent" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="inline-block mb-6 px-4 py-1 border border-frame-gold/30 rounded-full text-frame-gold text-sm tracking-widest uppercase">
            The Creative Network for Film
          </div>
          <h1 className="text-6xl md:text-8xl font-display mb-6 leading-tight">
            BE <span className="text-frame-gold">CREATIVE</span>
          </h1>
          <p className="text-xl md:text-2xl text-frame-light max-w-2xl mx-auto mb-4">
            Idea → Team → Structure → Funding → Production
          </p>
          <p className="text-lg text-frame-light/70 max-w-xl mx-auto mb-10">
            Frame connects the whole filmmaking lifecycle in one place. 
            For the people who make films nobody told them they could make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/ideas" className="bg-frame-gold text-frame-black px-8 py-4 rounded text-lg font-medium hover:bg-frame-gold/90 transition">
              Start an Idea
            </a>
            <a href="/discover" className="border border-frame-gray text-frame-cream px-8 py-4 rounded text-lg hover:border-frame-light transition">
              Explore Projects
            </a>
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="py-24 px-6 border-t border-frame-gray/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display text-center mb-4">The Five-Stage Lifecycle</h2>
          <p className="text-frame-light text-center mb-16 max-w-xl mx-auto">
            Every project on Frame moves through five stages. Each one unlocks new tools.
          </p>
          <div className="grid md:grid-cols-5 gap-4">
            {stages.map((stage) => (
              <div key={stage.num} className="bg-frame-dark rounded-lg p-6 border border-frame-gray/50 hover:border-frame-gold/30 transition">
                <div className="text-frame-gold/40 text-sm font-mono mb-3">{stage.num}</div>
                <h3 className="text-xl font-display mb-2">{stage.name}</h3>
                <p className="text-sm text-frame-light">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-frame-dark/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display text-center mb-4">Core Features</h2>
          <p className="text-frame-light text-center mb-16 max-w-xl mx-auto">
            Built by filmmakers, for filmmakers. Tools that don't exist anywhere else.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-frame-black rounded-lg p-8 border border-frame-gray/50 hover:border-frame-gold/30 transition">
                <h3 className="text-xl font-display mb-3 text-frame-gold">{f.title}</h3>
                <p className="text-frame-light text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6">
            Stop patching together five tools.
          </h2>
          <p className="text-xl text-frame-light mb-10">
            LinkedIn for networking. Drive for files. Stage32 for jobs. Kickstarter for funding. 
            Spreadsheets for everything else. <strong className="text-frame-cream">Frame replaces all of it.</strong>
          </p>
          <a href="/signup" className="inline-block bg-frame-gold text-frame-black px-10 py-4 rounded text-lg font-medium hover:bg-frame-gold/90 transition">
            Join Frame — It's Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-frame-gray/30 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-frame-gold rounded-sm flex items-center justify-center">
              <span className="text-frame-black font-bold text-sm font-display">F</span>
            </div>
            <span className="text-sm text-frame-light">FRAME — The Creative Network for Film</span>
          </div>
          <div className="flex gap-8 text-sm text-frame-light">
            <a href="/about" className="hover:text-frame-cream transition">About</a>
            <a href="/terms" className="hover:text-frame-cream transition">Terms</a>
            <a href="/privacy" className="hover:text-frame-cream transition">Privacy</a>
            <a href="/contact" className="hover:text-frame-cream transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
