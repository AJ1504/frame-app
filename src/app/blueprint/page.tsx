'use client'
import { useState } from 'react'

const milestones = [
  { name: 'Script Locked', status: 'complete', amount: 8000, verifiers: 3 },
  { name: 'Locations Scouted', status: 'complete', amount: 0, verifiers: 2 },
  { name: 'Full Crew Attached', status: 'in-progress', amount: 0, verifiers: 0 },
  { name: 'Principal Photography', status: 'open', amount: 20000, verifiers: 0 },
  { name: 'Picture Lock', status: 'open', amount: 10000, verifiers: 0 },
  { name: 'Final Delivery', status: 'open', amount: 7000, verifiers: 0 },
]

const crewRoles = [
  { role: 'Director', name: 'Maya Chen', status: 'confirmed' },
  { role: 'Producer', name: 'James Okafor', status: 'confirmed' },
  { role: 'DP', name: 'Terrence Washington', status: 'confirmed' },
  { role: '1st AD', name: null, status: 'open' },
  { role: 'Gaffer', name: null, status: 'open' },
  { role: 'Sound', name: null, status: 'open' },
  { role: 'Editor', name: 'Priya Sharma', status: 'confirmed' },
]

export default function BlueprintPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'script', label: 'Script' },
    { id: 'moodboard', label: 'Mood Board' },
    { id: 'crew', label: 'Crew Roster' },
    { id: 'milestones', label: 'Milestones' },
  ]

  const completedMilestones = milestones.filter(m => m.status === 'complete').length
  const progress = (completedMilestones / milestones.length) * 100

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Project header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="text-purple-400/40 text-sm font-mono tracking-widest">PHASE II</div>
            <span className="px-3 py-1 rounded-full text-xs border phase-blueprint">Blueprint</span>
          </div>
          <h1 className="text-4xl font-bold mb-1">Echoes of Silence</h1>
          <p className="text-frame-light">Short Film · Brooklyn, NY · by Maya Chen</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-frame-gold">{Math.round(progress)}%</div>
          <div className="text-sm text-frame-light">Blueprint complete</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-frame-gray/50 rounded-full overflow-hidden mb-8">
        <div className="h-full bg-gradient-to-r from-purple-500/50 to-purple-500 rounded-full progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-8 border-b border-frame-gray/50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-3 text-sm font-medium transition-all border-b-2 -mb-[1px] ${
              activeTab === tab.id
                ? 'border-frame-gold text-frame-gold'
                : 'border-transparent text-frame-light hover:text-frame-cream'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === 'overview' && (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Script summary */}
          <div className="bg-frame-dark rounded-xl p-6 border border-frame-gray/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Script</h3>
              <span className="text-xs text-emerald-400">Uploaded</span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div><div className="text-2xl font-bold text-frame-gold">8</div><div className="text-xs text-frame-light">Locations</div></div>
              <div><div className="text-2xl font-bold text-frame-gold">24</div><div className="text-xs text-frame-light">Scenes</div></div>
              <div><div className="text-2xl font-bold text-frame-gold">6</div><div className="text-xs text-frame-light">Cast</div></div>
            </div>
          </div>

          {/* Crew status */}
          <div className="bg-frame-dark rounded-xl p-6 border border-frame-gray/50">
            <h3 className="font-semibold mb-4">Crew Roster</h3>
            <div className="space-y-2">
              {crewRoles.slice(0, 5).map((c) => (
                <div key={c.role} className="flex items-center justify-between text-sm">
                  <span className="text-frame-light">{c.role}</span>
                  {c.status === 'confirmed' ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {c.name}
                    </span>
                  ) : (
                    <span className="text-red-400 text-xs">Open · Searching nearby…</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Milestones */}
          <div className="bg-frame-dark rounded-xl p-6 border border-frame-gray/50">
            <h3 className="font-semibold mb-4">Milestones</h3>
            <div className="space-y-3">
              {milestones.map((m) => (
                <div key={m.name} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    m.status === 'complete' ? 'bg-emerald-500/20 text-emerald-400' :
                    m.status === 'in-progress' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-frame-gray/50 text-frame-light/30'
                  }`}>
                    {m.status === 'complete' && <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                    {m.status === 'in-progress' && <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />}
                  </div>
                  <span className={`flex-1 text-sm ${m.status === 'complete' ? 'text-frame-cream' : 'text-frame-light'}`}>{m.name}</span>
                  {m.amount > 0 && <span className="text-xs text-frame-light">${m.amount.toLocaleString()}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Mood board preview */}
          <div className="bg-frame-dark rounded-xl p-6 border border-frame-gray/50">
            <h3 className="font-semibold mb-4">Mood Board</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-square bg-gradient-to-br from-amber-900/30 to-amber-950/50 rounded-lg flex items-center justify-center text-frame-light/30 text-xs">Cinematographer Ref</div>
              <div className="aspect-square bg-gradient-to-br from-blue-900/30 to-blue-950/50 rounded-lg flex items-center justify-center text-frame-light/30 text-xs">Color Palette</div>
              <div className="aspect-square bg-gradient-to-br from-green-900/30 to-green-950/50 rounded-lg flex items-center justify-center text-frame-light/30 text-xs">Costume Direction</div>
              <div className="aspect-square border-2 border-dashed border-frame-gray/50 rounded-lg flex items-center justify-center text-frame-light/30 text-xs cursor-pointer hover:border-frame-gold/30 transition">+ Add Image</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'milestones' && (
        <div className="max-w-2xl">
          <div className="space-y-4">
            {milestones.map((m, i) => (
              <div key={m.name} className={`bg-frame-dark rounded-xl p-5 border transition-all ${
                m.status === 'in-progress' ? 'border-frame-gold/30' : 'border-frame-gray/50'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-frame-gold/40 text-sm font-mono">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-medium">{m.name}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    m.status === 'complete' ? 'bg-emerald-500/15 text-emerald-400' :
                    m.status === 'in-progress' ? 'bg-amber-500/15 text-amber-400' :
                    'bg-frame-gray/30 text-frame-light/50'
                  }`}>
                    {m.status === 'complete' ? 'Crew-Verified' : m.status === 'in-progress' ? 'In Progress' : 'Open'}
                  </span>
                </div>
                {m.amount > 0 && (
                  <div className="text-sm text-frame-light ml-9">${m.amount.toLocaleString()} escrow released on verification</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
