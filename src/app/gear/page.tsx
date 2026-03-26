'use client'
import { useState } from 'react'

const gearItems = [
  { name: 'Sony FX6', spec: 'Full-frame cinema camera, 4K 120fps', category: 'Camera', demand: 'hot' },
  { name: 'Aputure 600d Pro', spec: '600W LED, Bowens mount', category: 'Lighting', demand: 'hot' },
  { name: 'Sennheiser MKH 416', spec: 'Shotgun condenser mic', category: 'Audio', demand: 'warm' },
  { name: 'DJI RS 3 Pro', spec: '3-axis gimbal, 4.5kg payload', category: 'Camera', demand: 'warm' },
  { name: 'Aputure MC', spec: 'RGBWW mini LED panel', category: 'Lighting', demand: 'quiet' },
  { name: 'Zoom F6', spec: '32-bit float field recorder', category: 'Audio', demand: 'quiet' },
  { name: 'Tilta Nucleus Nano', spec: 'Wireless follow focus', category: 'Grip', demand: 'warm' },
  { name: 'Atomos Ninja V', spec: '5" HDR monitor/recorder', category: 'Camera', demand: 'hot' },
]

export default function GearLockerPage() {
  const [category, setCategory] = useState('All')
  const categories = ['All', 'Camera', 'Lighting', 'Audio', 'Grip', 'Post']

  const filtered = category === 'All' ? gearItems : gearItems.filter(g => g.category === category)

  const demandBadge = (d: string) => {
    if (d === 'hot') return <span className="text-xs px-2 py-0.5 rounded demand-hot">🔥 Hot</span>
    if (d === 'warm') return <span className="text-xs px-2 py-0.5 rounded demand-warm">Warm</span>
    return <span className="text-xs px-2 py-0.5 rounded demand-quiet">Quiet</span>
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold mb-2">Your Gear Locker</h1>
          <p className="text-frame-light">List your equipment. Demand signals show what nearby projects need.</p>
        </div>
        <button className="bg-frame-gold text-frame-black px-6 py-3 rounded-lg font-semibold hover:bg-frame-gold/90 transition">
          + Add Equipment
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Items Listed', value: '8' },
          { label: 'Hot Demand', value: '3' },
          { label: 'Vouch Rank Bonus', value: '+47' },
          { label: 'Nearby Requests', value: '12' },
        ].map((s) => (
          <div key={s.label} className="bg-frame-dark rounded-xl p-4 border border-frame-gray/50 text-center">
            <div className="text-2xl font-bold text-frame-gold">{s.value}</div>
            <div className="text-xs text-frame-light">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Category filters */}
      <div className="flex gap-2 mb-6">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              category === c
                ? 'bg-frame-gold/15 text-frame-gold border border-frame-gold/30'
                : 'bg-frame-gray/30 text-frame-light border border-frame-gray/50'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Gear list */}
      <div className="space-y-3">
        {filtered.map((item, i) => (
          <div key={i} className="card-lift bg-frame-dark rounded-xl p-5 border border-frame-gray/50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-frame-gray/50 rounded-lg flex items-center justify-center text-xl">
                {item.category === 'Camera' ? '📷' : item.category === 'Lighting' ? '💡' : item.category === 'Audio' ? '🎙️' : '🔧'}
              </div>
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-frame-light">{item.spec}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-frame-light/50">{item.category}</span>
              {demandBadge(item.demand)}
              <button className="text-frame-light hover:text-frame-cream transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
