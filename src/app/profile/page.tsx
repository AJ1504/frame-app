const profile = {
  name: 'Maya Chen',
  dept: 'Writer / Director',
  location: 'Brooklyn, NY',
  bio: 'Making films about the quiet moments nobody else notices. NYU Tisch \'23. Sundance Ignite Fellow.',
  verified: true,
  skills: ['Directing', 'Screenwriting', 'Story Development', 'Documentary'],
  credits: [
    { title: 'Echoes of Silence', role: 'Writer/Director', format: 'Short', year: 2024, status: 'In Development' },
    { title: 'The Waiting Room', role: 'Director', format: 'Short', year: 2023, status: 'Completed' },
    { title: 'Liminal', role: 'Writer', format: 'Feature', year: 2023, status: 'Pre-Production' },
  ],
  collaborators: [
    { name: 'James Okafor', dept: 'Producer', projects: 2 },
    { name: 'Sofia Reyes', dept: 'Writer', projects: 1 },
    { name: 'Terrence Washington', dept: 'DP', projects: 3 },
    { name: 'Alex Kim', dept: 'Sound Designer', projects: 1 },
  ],
  stats: { projects: 5, credits: 8, collaborators: 12, funded: 1 },
}

export default function ProfilePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Profile Header */}
      <div className="flex items-start gap-8 mb-12">
        <div className="w-24 h-24 bg-frame-gray rounded-full flex items-center justify-center text-3xl font-display text-frame-gold">
          {profile.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-3xl font-display">{profile.name}</h1>
            {profile.verified && (
              <span className="text-frame-gold text-sm px-2 py-0.5 border border-frame-gold/30 rounded">✓ Verified</span>
            )}
          </div>
          <p className="text-frame-gold text-lg mb-1">{profile.dept}</p>
          <p className="text-frame-light text-sm mb-4">{profile.location}</p>
          <p className="text-frame-light max-w-xl">{profile.bio}</p>
        </div>
        <div className="grid grid-cols-4 gap-6 text-center">
          {Object.entries(profile.stats).map(([key, val]) => (
            <div key={key}>
              <div className="text-2xl font-display text-frame-gold">{val}</div>
              <div className="text-xs text-frame-light capitalize">{key}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-10">
        <h2 className="text-lg font-display mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((s) => (
            <span key={s} className="text-sm px-3 py-1 bg-frame-dark border border-frame-gray/50 rounded text-frame-cream">{s}</span>
          ))}
        </div>
      </div>

      {/* Credits */}
      <div className="mb-10">
        <h2 className="text-lg font-display mb-3">Credits</h2>
        <div className="space-y-3">
          {profile.credits.map((c) => (
            <a key={c.title} href="#" className="flex items-center justify-between bg-frame-dark rounded-lg p-4 border border-frame-gray/50 hover:border-frame-gold/30 transition">
              <div>
                <h3 className="font-display">{c.title}</h3>
                <p className="text-sm text-frame-light">{c.role} · {c.format}</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-frame-light">{c.year}</div>
                <StageBadge stage={c.status === 'Completed' ? 'Production' : c.status === 'In Development' ? 'Development' : 'Project'} />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Collaboration Graph */}
      <div>
        <h2 className="text-lg font-display mb-3">Collaboration Graph</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {profile.collaborators.map((c) => (
            <a key={c.name} href="#" className="flex items-center gap-4 bg-frame-dark rounded-lg p-4 border border-frame-gray/50 hover:border-frame-gold/30 transition">
              <div className="w-10 h-10 bg-frame-gray rounded-full flex items-center justify-center text-sm text-frame-gold">
                {c.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-display">{c.name}</div>
                <div className="text-sm text-frame-light">{c.dept} · {c.projects} project{c.projects > 1 ? 's' : ''} together</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function StageBadge({ stage }: { stage: string }) {
  const colors: Record<string, string> = {
    Idea: 'stage-idea', Development: 'stage-development', Project: 'stage-project',
    Funding: 'stage-funding', Production: 'stage-production',
  }
  return <span className={`text-xs px-2 py-0.5 rounded ${colors[stage] || 'stage-idea'}`}>{stage}</span>
}
