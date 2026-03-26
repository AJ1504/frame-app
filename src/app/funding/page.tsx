const campaigns = [
  {
    id: 1, title: 'The Last Blockbuster', goal: 45000, raised: 32400, backers: 187,
    milestones: [
      { name: 'Script Locked', amount: 8000, status: 'completed' },
      { name: 'Principal Photography', amount: 20000, status: 'active' },
      { name: 'Rough Cut', amount: 10000, status: 'pending' },
      { name: 'Festival Submission', amount: 7000, status: 'pending' },
    ],
    team: ['James Okafor (Producer)', 'Maya Chen (Director)', 'Terrence Washington (DP)'],
    daysLeft: 18, format: 'Documentary'
  },
  {
    id: 2, title: 'Dirt Road Hymnal', goal: 12000, raised: 12000, backers: 94,
    milestones: [
      { name: 'Pre-Production', amount: 3000, status: 'completed' },
      { name: 'Shoot Day', amount: 6000, status: 'completed' },
      { name: 'Post-Production', amount: 3000, status: 'completed' },
    ],
    team: ['Terrence Washington (Director/DP)'],
    daysLeft: 0, format: 'Music Video'
  },
]

function MilestoneBar({ milestones }: { milestones: any[] }) {
  return (
    <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-frame-gray/50">
      {milestones.map((m, i) => (
        <div
          key={i}
          className={`flex-1 transition-all ${
            m.status === 'completed' ? 'bg-frame-gold' :
            m.status === 'active' ? 'bg-frame-gold/50 animate-pulse' :
            'bg-transparent'
          }`}
        />
      ))}
    </div>
  )
}

export default function FundingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-display mb-2">Funding</h1>
          <p className="text-frame-light">Milestone-based campaigns. Quality-gated. Creator-aligned.</p>
        </div>
        <a href="/funding/new" className="bg-frame-gold text-frame-black px-6 py-3 rounded font-medium hover:bg-frame-gold/90 transition">
          Start a Campaign
        </a>
      </div>

      {/* How it works */}
      <div className="bg-frame-dark rounded-lg p-6 border border-frame-gray/50 mb-10">
        <h2 className="text-lg font-display mb-3 text-frame-gold">How Frame Funding Works</h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-frame-light">
          <div>
            <div className="text-frame-gold font-mono mb-1">01 Quality Gate</div>
            <p>Your project must have 3+ core roles, a script draft, moodboard, timeline, and budget before campaigns unlock.</p>
          </div>
          <div>
            <div className="text-frame-gold font-mono mb-1">02 Milestone Pledges</div>
            <p>Backers pledge against specific checkpoints — script locked, principal photography, rough cut, festival submission.</p>
          </div>
          <div>
            <div className="text-frame-gold font-mono mb-1">03 Auto-Credits</div>
            <p>When a project completes, every collaborator's profile updates with their role, format, and dates — automatically.</p>
          </div>
        </div>
      </div>

      {/* Active Campaigns */}
      <div className="space-y-6">
        {campaigns.map((c) => (
          <a key={c.id} href={`/funding/${c.id}`} className="block bg-frame-dark rounded-lg p-6 border border-frame-gray/50 hover:border-frame-gold/30 transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-display mb-1">{c.title}</h3>
                <p className="text-sm text-frame-light">{c.format} · {c.daysLeft > 0 ? `${c.daysLeft} days left` : 'Funded ✓'}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-display text-frame-gold">${c.raised.toLocaleString()}</div>
                <div className="text-sm text-frame-light">of ${c.goal.toLocaleString()} goal</div>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-frame-light">{c.backers} backers</span>
                <span className="text-frame-gold">{Math.round((c.raised / c.goal) * 100)}%</span>
              </div>
              <MilestoneBar milestones={c.milestones} />
            </div>

            {/* Milestones */}
            <div className="grid md:grid-cols-4 gap-2 mb-4">
              {c.milestones.map((m) => (
                <div key={m.name} className={`text-xs p-2 rounded ${
                  m.status === 'completed' ? 'bg-frame-gold/10 text-frame-gold' :
                  m.status === 'active' ? 'bg-frame-gold/5 text-frame-gold/70 border border-frame-gold/20' :
                  'bg-frame-gray/30 text-frame-light/50'
                }`}>
                  <div className="font-medium">{m.name}</div>
                  <div>${m.amount.toLocaleString()}</div>
                </div>
              ))}
            </div>

            {/* Team */}
            <div className="text-sm text-frame-light">
              <span className="text-frame-light/50">Team:</span> {c.team.join(' · ')}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
