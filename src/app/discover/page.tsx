const people = [
  { name: 'James Okafor', dept: 'Producer', location: 'NYC', skills: ['Documentary', 'Indie Features', 'Budgeting'], connections: 3, verified: true },
  { name: 'Sofia Reyes', dept: 'Writer/Director', location: 'LA', skills: ['Screenwriting', 'Narrative', 'Bilingual (EN/ES)'], connections: 1, verified: false },
  { name: 'Terrence Washington', dept: 'Director of Photography', location: 'Atlanta', skills: ['Steadicam', 'Natural Light', 'Music Videos'], connections: 5, verified: true },
  { name: 'Alex Kim', dept: 'Sound Designer', location: 'Portland', skills: ['Foley', 'Ambient', 'Post-Production'], connections: 2, verified: false },
  { name: 'Priya Sharma', dept: 'Editor', location: 'NYC', skills: ['Premiere Pro', 'DaVinci Resolve', 'Documentary'], connections: 4, verified: true },
  { name: 'Marcus Johnson', dept: 'Composer', location: 'Chicago', skills: ['Orchestral', 'Electronic', 'Film Scoring'], connections: 6, verified: false },
  { name: 'Elena Volkov', dept: 'Production Designer', location: 'LA', skills: ['Set Design', 'Props', 'Period Pieces'], connections: 2, verified: true },
  { name: 'David Park', dept: 'Colorist', location: 'LA', skills: ['DaVinci Resolve', 'Film Emulation', 'Commercial'], connections: 3, verified: false },
]

export default function DiscoverPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-display mb-2">Discover Crew</h1>
        <p className="text-frame-light">Find collaborators through your network — not a marketplace of strangers.</p>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input type="text" className="flex-1 bg-frame-dark border border-frame-gray rounded-lg px-4 py-3 text-frame-cream focus:border-frame-gold focus:outline-none transition" placeholder="Search by name, role, or skill..." />
        <select className="bg-frame-dark border border-frame-gray rounded-lg px-4 py-3 text-frame-cream focus:border-frame-gold focus:outline-none transition">
          <option>All Departments</option>
          <option>Director</option>
          <option>Producer</option>
          <option>DP</option>
          <option>Editor</option>
          <option>Sound</option>
          <option>Composer</option>
        </select>
        <select className="bg-frame-dark border border-frame-gray rounded-lg px-4 py-3 text-frame-cream focus:border-frame-gold focus:outline-none transition">
          <option>Any Location</option>
          <option>NYC</option>
          <option>LA</option>
          <option>Atlanta</option>
          <option>Chicago</option>
        </select>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-2 gap-4">
        {people.map((p) => (
          <a key={p.name} href="/profile" className="bg-frame-dark rounded-lg p-5 border border-frame-gray/50 hover:border-frame-gold/30 transition group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-frame-gray rounded-full flex items-center justify-center text-frame-gold font-display shrink-0">
                {p.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-display group-hover:text-frame-gold transition truncate">{p.name}</h3>
                  {p.verified && <span className="text-frame-gold text-xs">✓</span>}
                </div>
                <p className="text-sm text-frame-gold/80 mb-1">{p.dept} · {p.location}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {p.skills.map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 bg-frame-gray/50 rounded text-frame-light">{s}</span>
                  ))}
                </div>
                <p className="text-xs text-frame-light/50">{p.connections} connection{p.connections > 1 ? 's' : ''} in your network</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
