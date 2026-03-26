const mockIdeas = [
  {
    id: 1, title: 'Echoes of Silence', format: 'Short Film',
    concept: 'A deaf musician discovers she can hear colors. A 12-minute exploration of synesthesia, isolation, and the music we make in silence.',
    roles: ['Director of Photography', 'Sound Designer', 'Composer'],
    author: { name: 'Maya Chen', dept: 'Director' },
    stage: 'Idea', visibility: 'Public', collaborators: 2
  },
  {
    id: 2, title: 'The Last Blockbuster', format: 'Documentary',
    concept: 'The final night of the last Blockbuster in Bend, Oregon. Staff, regulars, and the death of physical media — told through the people who refused to let go.',
    roles: ['Editor', 'Colorist', 'Archival Researcher'],
    author: { name: 'James Okafor', dept: 'Producer' },
    stage: 'Development', visibility: 'Public', collaborators: 4
  },
  {
    id: 3, title: 'Night Shift', format: 'Feature',
    concept: 'A bodega owner in the Bronx discovers her late-night customers are all hiding something. Part thriller, part character study. Think Collateral meets Do the Right Thing.',
    roles: ['Writer', 'Casting Director', 'Location Scout', '1st AD'],
    author: { name: 'Sofia Reyes', dept: 'Writer/Director' },
    stage: 'Idea', visibility: 'Public', collaborators: 1
  },
  {
    id: 4, title: 'Frequency', format: 'Pilot',
    concept: 'In a world where emotions are broadcast as radio frequencies, a signal jammer falls in love with the one frequency she can\'t block.',
    roles: ['VFX Supervisor', 'Production Designer', 'Gaffer'],
    author: { name: 'Alex Kim', dept: 'Director' },
    stage: 'Idea', visibility: 'Network Only', collaborators: 3
  },
  {
    id: 5, title: 'Dirt Road Hymnal', format: 'Music Video',
    concept: 'A gospel singer drives through the rural South, picking up strangers who each add a verse to her song. Shot in one continuous take.',
    roles: ['Steadicam Operator', 'Colorist', 'Art Director'],
    author: { name: 'Terrence Washington', dept: 'Director/DP' },
    stage: 'Development', visibility: 'Public', collaborators: 5
  },
]

function StageBadge({ stage }: { stage: string }) {
  const colors: Record<string, string> = {
    Idea: 'stage-idea',
    Development: 'stage-development',
    Project: 'stage-project',
    Funding: 'stage-funding',
    Production: 'stage-production',
  }
  return <span className={`text-xs px-2 py-0.5 rounded ${colors[stage] || 'stage-idea'}`}>{stage}</span>
}

export default function IdeasPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-display mb-2">Ideas</h1>
          <p className="text-frame-light">Before there's a project, there's an idea. Find yours.</p>
        </div>
        <a href="/ideas/new" className="bg-frame-gold text-frame-black px-6 py-3 rounded font-medium hover:bg-frame-gold/90 transition">
          + Post an Idea
        </a>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {['All', 'Short Film', 'Feature', 'Documentary', 'Pilot', 'Music Video'].map((f) => (
          <button key={f} className={`px-4 py-2 rounded text-sm border transition ${f === 'All' ? 'border-frame-gold text-frame-gold bg-frame-gold/10' : 'border-frame-gray text-frame-light hover:border-frame-light'}`}>
            {f}
          </button>
        ))}
      </div>

      {/* Ideas Feed */}
      <div className="space-y-4">
        {mockIdeas.map((idea) => (
          <a key={idea.id} href={`/ideas/${idea.id}`} className="block bg-frame-dark rounded-lg p-6 border border-frame-gray/50 hover:border-frame-gold/30 transition group">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-display group-hover:text-frame-gold transition">{idea.title}</h3>
                  <StageBadge stage={idea.stage} />
                </div>
                <p className="text-sm text-frame-light">{idea.format} · by {idea.author.name} · {idea.author.dept}</p>
              </div>
              <div className="text-right text-sm text-frame-light">
                <div>{idea.collaborators} collaborator{idea.collaborators !== 1 ? 's' : ''}</div>
                <div className="text-xs text-frame-light/50">{idea.visibility}</div>
              </div>
            </div>
            <p className="text-frame-light text-sm mb-4 leading-relaxed">{idea.concept}</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-frame-light/50 mr-2">Looking for:</span>
              {idea.roles.map((role) => (
                <span key={role} className="text-xs px-2 py-1 bg-frame-gray/50 rounded text-frame-cream">{role}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
