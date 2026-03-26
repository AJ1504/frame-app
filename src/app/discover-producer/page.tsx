'use client'
import { useState } from 'react'

const projects = [
  {
    id: 1, title: 'Echoes of Silence', logline: 'A deaf musician discovers she can hear colors.',
    genre: 'Drama', format: 'Short', city: 'Brooklyn, NY',
    team: ['Maya Chen (Director)', 'James Okafor (Producer)', 'Terrence Washington (DP)'],
    goal: 45000, raised: 32400, backers: 187, daysLeft: 18, phase: 'Patronage',
    milestones: [
      { name: 'Script Locked', status: 'complete', amount: 8000 },
      { name: 'Principal Photography', status: 'active', amount: 20000 },
      { name: 'Rough Cut', status: 'pending', amount: 10000 },
      { name: 'Festival Submission', status: 'pending', amount: 7000 },
    ],
    budgetItems: [
      { item: 'Camera Package', amount: 8000, funded: true },
      { item: 'Location Fees', amount: 5000, funded: true },
      { item: 'Cast & Crew', amount: 15000, funded: false },
      { item: 'Post-Production', amount: 12000, funded: false },
    ]
  },
  {
    id: 2, title: 'The Last Blockbuster', logline: 'The final night of the last Blockbuster in Bend, Oregon.',
    genre: 'Documentary', format: 'Feature', city: 'Portland, OR',
    team: ['James Okafor (Producer)', 'Maya Chen (Director)'],
    goal: 65000, raised: 41200, backers: 234, daysLeft: 24, phase: 'Patronage',
    milestones: [
      { name: 'Pre-Production', status: 'complete', amount: 10000 },
      { name: 'Principal Photography', status: 'active', amount: 30000 },
      { name: 'Post-Production', status: 'pending', amount: 15000 },
      { name: 'Distribution', status: 'pending', amount: 10000 },
    ],
    budgetItems: [
      { item: 'Travel & Lodging', amount: 12000, funded: true },
      { item: 'Archival Licensing', amount: 8000, funded: true },
      { item: 'Crew Salaries', amount: 25000, funded: false },
      { item: 'Equipment Rental', amount: 10000, funded: false },
      { item: 'Post & Sound', amount: 10000, funded: false },
    ]
  },
  {
    id: 3, title: 'Frequency', logline: 'In a world where emotions are broadcast as radio frequencies.',
    genre: 'Sci-Fi', format: 'Pilot', city: 'LA',
    team: ['Alex Kim (Director)'],
    goal: 50000, raised: 17000, backers: 89, daysLeft: 31, phase: 'Market',
    milestones: [
      { name: 'Script Locked', status: 'complete', amount: 5000 },
      { name: 'Crew Attached', status: 'active', amount: 0 },
      { name: 'Principal Photography', status: 'pending', amount: 30000 },
      { name: 'Post-Production', status: 'pending', amount: 15000 },
    ],
    budgetItems: [
      { item: 'VFX Package', amount: 15000, funded: false },
      { item: 'Set Design', amount: 10000, funded: false },
      { item: 'Camera & Lighting', amount: 12000, funded: false },
      { item: 'Cast', amount: 8000, funded: false },
      { item: 'Sound Design', amount: 5000, funded: false },
    ]
  },
]

export default function ProducerDiscoverPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Funding Open', 'Nearly Funded', 'New This Week']

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <span className="mono text-[10px] tracking-[0.5em] text-frame-gold/50 uppercase block mb-2">Producer View</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Discover Projects</h1>
        <p className="text-frame-light text-lg">Vetted productions with real teams, real scripts, real plans.</p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              filter === f ? 'bg-frame-gold/15 text-frame-gold border border-frame-gold/30' : 'bg-frame-gray/30 text-frame-light border border-frame-gray/50 hover:border-frame-light/50'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Project cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => {
          const progress = Math.round((project.raised / project.goal) * 100)
          return (
            <div
              key={project.id}
              className="card-hover bg-frame-dark rounded-2xl border border-frame-gray/50 overflow-hidden cursor-pointer group"
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              {/* Phase indicator */}
              <div className={`h-1 ${
                project.phase === 'Patronage' ? 'bg-gradient-to-r from-emerald-500 to-emerald-400' :
                project.phase === 'Market' ? 'bg-gradient-to-r from-amber-500 to-amber-400' :
                'bg-gradient-to-r from-purple-500 to-purple-400'
              }`} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-frame-gold transition-colors">{project.title}</h3>
                    <p className="text-sm text-frame-light">{project.genre} · {project.format} · {project.city}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    project.phase === 'Patronage' ? 'phase-patronage' : 'phase-market'
                  }`}>
                    {project.phase}
                  </span>
                </div>

                <p className="text-sm text-frame-light mb-4">{project.logline}</p>

                {/* Team */}
                <div className="mb-4">
                  <div className="text-xs text-frame-light/50 mb-1">TEAM</div>
                  <div className="flex flex-wrap gap-1">
                    {project.team.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 bg-frame-gray/30 rounded text-frame-light">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Funding progress */}
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="mono text-frame-gold font-bold">${project.raised.toLocaleString()}</span>
                    <span className="text-frame-light">of ${project.goal.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-frame-gray/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-frame-gold-dim to-frame-gold rounded-full progress-fill" style={{ width: `${progress}%` }} />
                  </div>
                </div>

                <div className="flex justify-between text-xs text-frame-light/50">
                  <span>{project.backers} backers</span>
                  <span>{project.daysLeft} days left</span>
                </div>

                {/* Expanded details */}
                {selectedProject === project.id && (
                  <div className="mt-6 pt-6 border-t border-frame-gray/30 animate-fade-in">
                    <div className="text-xs text-frame-light/50 mb-3">FUND SPECIFIC LINE ITEMS</div>
                    <div className="space-y-2">
                      {project.budgetItems.map((item) => (
                        <div key={item.item} className="flex items-center justify-between p-3 rounded-lg bg-frame-gray/20">
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-sm ${item.funded ? 'bg-frame-gold' : 'bg-frame-gray/50 border border-frame-gray'}`} />
                            <span className={`text-sm ${item.funded ? 'text-frame-cream' : 'text-frame-light'}`}>{item.item}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="mono text-sm text-frame-light">${item.amount.toLocaleString()}</span>
                            {!item.funded && (
                              <button className="text-xs px-3 py-1 bg-frame-gold/10 text-frame-gold rounded hover:bg-frame-gold/20 transition">
                                Fund
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Milestones */}
                    <div className="mt-4 text-xs text-frame-light/50 mb-3">MILESTONES</div>
                    <div className="flex gap-1">
                      {project.milestones.map((m, i) => (
                        <div key={i} className={`flex-1 h-2 rounded-full ${
                          m.status === 'complete' ? 'bg-frame-gold' :
                          m.status === 'active' ? 'bg-frame-gold/50 animate-pulse' :
                          'bg-frame-gray/50'
                        }`} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
