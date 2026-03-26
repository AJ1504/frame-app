'use client'
import { useState } from 'react'

const genres = ['Drama', 'Horror', 'Sci-Fi', 'Documentary', 'Thriller', 'Romance', 'Comedy', 'Experimental']
const formats = ['Feature', 'Short', 'Pilot', 'Series', 'Documentary', 'Music Video']

export default function PostSparkPage() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [selectedFormat, setSelectedFormat] = useState('')

  const toggleGenre = (g: string) => {
    setSelectedGenres(prev => prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g])
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="animate-fade-in-up stagger-1 mb-10">
        <div className="text-frame-gold/40 text-sm font-mono tracking-widest mb-2">PHASE I</div>
        <h1 className="text-4xl font-bold mb-2">Post a Spark</h1>
        <p className="text-frame-light">Two sentences. That's all it takes to start a film.</p>
      </div>

      <div className="space-y-8">
        {/* Title */}
        <div className="animate-fade-in-up stagger-2">
          <label className="block text-sm font-medium mb-2">Project Title</label>
          <input type="text" className="w-full bg-frame-dark border border-frame-gray rounded-xl px-5 py-4 text-frame-cream text-lg focus:border-frame-gold focus:outline-none transition-all placeholder:text-frame-light/30" placeholder="Echoes of Silence" />
        </div>

        {/* Logline */}
        <div className="animate-fade-in-up stagger-3">
          <label className="block text-sm font-medium mb-2">Logline</label>
          <p className="text-xs text-frame-light/50 mb-2">1–2 sentences max. The pitch, not the treatment.</p>
          <textarea rows={3} className="w-full bg-frame-dark border border-frame-gray rounded-xl px-5 py-4 text-frame-cream focus:border-frame-gold focus:outline-none transition-all resize-none placeholder:text-frame-light/30" placeholder="A deaf musician discovers she can hear colors..." />
          <div className="text-xs text-frame-light/30 mt-1 text-right">Keep it under 200 characters</div>
        </div>

        {/* Genre tags */}
        <div className="animate-fade-in-up stagger-4">
          <label className="block text-sm font-medium mb-2">Genre Tags</label>
          <div className="flex flex-wrap gap-2">
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => toggleGenre(g)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  selectedGenres.includes(g)
                    ? 'bg-frame-gold/15 text-frame-gold border border-frame-gold/30'
                    : 'bg-frame-gray/30 text-frame-light border border-frame-gray/50 hover:border-frame-light/50'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Format */}
        <div className="animate-fade-in-up stagger-5">
          <label className="block text-sm font-medium mb-2">Format</label>
          <div className="flex flex-wrap gap-2">
            {formats.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFormat(f)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  selectedFormat === f
                    ? 'bg-frame-gold text-frame-black font-medium'
                    : 'bg-frame-gray/30 text-frame-light border border-frame-gray/50 hover:border-frame-light/50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* City/State */}
        <div>
          <label className="block text-sm font-medium mb-2">City / State</label>
          <input type="text" className="w-full bg-frame-dark border border-frame-gray rounded-xl px-5 py-4 text-frame-cream focus:border-frame-gold focus:outline-none transition-all placeholder:text-frame-light/30" placeholder="Brooklyn, NY" />
        </div>

        {/* Mood Note */}
        <div>
          <label className="block text-sm font-medium mb-2">Mood Note <span className="text-frame-light/50 font-normal">(optional)</span></label>
          <p className="text-xs text-frame-light/50 mb-2">A short visual phrase — e.g. "desolate prairie, bone light"</p>
          <input type="text" className="w-full bg-frame-dark border border-frame-gray rounded-xl px-5 py-4 text-frame-cream focus:border-frame-gold focus:outline-none transition-all placeholder:text-frame-light/30 italic" placeholder="fluorescent hum, carpet dust" />
        </div>

        {/* IP Reference */}
        <div>
          <label className="block text-sm font-medium mb-2">IP Reference <span className="text-frame-light/50 font-normal">(optional)</span></label>
          <p className="text-xs text-frame-light/50 mb-2">Link to a public domain work from our library</p>
          <div className="flex gap-3">
            <input type="text" className="flex-1 bg-frame-dark border border-frame-gray rounded-xl px-5 py-4 text-frame-cream focus:border-frame-gold focus:outline-none transition-all placeholder:text-frame-light/30" placeholder="Search public domain works..." />
            <button className="px-5 py-4 bg-frame-gray/50 text-frame-light rounded-xl hover:bg-frame-gray transition text-sm">
              Browse Library
            </button>
          </div>
        </div>

        {/* Submit */}
        <div className="flex gap-4 pt-4">
          <button className="bg-frame-gold text-frame-black px-8 py-4 rounded-xl font-semibold hover:bg-frame-gold/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,162,39,0.3)]">
            Publish Spark
          </button>
          <button className="border border-frame-gray text-frame-light px-8 py-4 rounded-xl hover:border-frame-light/50 transition">
            Save Draft
          </button>
        </div>
      </div>
    </div>
  )
}
