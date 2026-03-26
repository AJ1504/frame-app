'use client'
import { useState } from 'react'

const sparks = [
  {
    id: 1, title: 'Echoes of Silence', logline: 'A deaf musician discovers she can hear colors. Twelve minutes of synesthesia, isolation, and the music we make in silence.',
    genre: 'Drama', format: 'Short', city: 'Brooklyn, NY', mood: 'desolate prairie, bone light',
    author: 'Maya Chen', dept: 'Director', vouches: 34, heat: 67, hoursAgo: 18, verified: true
  },
  {
    id: 2, title: 'The Last Blockbuster', logline: 'The final night of the last Blockbuster in Bend, Oregon. Staff, regulars, and the death of physical media — told through the people who refused to let go.',
    genre: 'Documentary', format: 'Feature', city: 'Portland, OR', mood: 'fluorescent hum, carpet dust',
    author: 'James Okafor', dept: 'Producer', vouches: 48, heat: 89, hoursAgo: 6, verified: true
  },
  {
    id: 3, title: 'Night Shift', logline: 'A bodega owner in the Bronx discovers her late-night customers are all hiding something. Part thriller, part character study.',
    genre: 'Thriller', format: 'Feature', city: 'NYC', mood: 'neon bleed, 3am quiet',
    author: 'Sofia Reyes', dept: 'Writer/Director', vouches: 12, heat: 23, hoursAgo: 36, verified: false
  },
  {
    id: 4, title: 'Frequency', logline: 'In a world where emotions are broadcast as radio frequencies, a signal jammer falls in love with the one frequency she can\'t block.',
    genre: 'Sci-Fi', format: 'Pilot', city: 'LA', mood: 'static wash, electric blue',
    author: 'Alex Kim', dept: 'Director', vouches: 27, heat: 51, hoursAgo: 12, verified: true
  },
  {
    id: 5, title: 'Dirt Road Hymnal', logline: 'A gospel singer drives through the rural South, picking up strangers who each add a verse to her song. Shot in one continuous take.',
    genre: 'Music Video', format: 'Short', city: 'Atlanta, GA', mood: 'golden hour, red clay',
    author: 'Terrence Washington', dept: 'Director/DP', vouches: 41, heat: 76, hoursAgo: 8, verified: true
  },
]

export default function FeedPage() {
  const [filter, setFilter] = useState('Hot')
  const [genreFilter, setGenreFilter] = useState('All')
  const filters = ['All', 'Hot 🔥', 'New', 'Crewing Now', 'Near Me']
  const genres = ['All', 'Drama', 'Documentary', 'Thriller', 'Sci-Fi', 'Horror', 'Comedy', 'Romance']

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold mb-2">Spark Feed</h1>
          <p className="text-frame-light">Ideas looking for crew. Crew looking for ideas.</p>
        </div>
        <a href="/spark" className="group bg-frame-gold text-frame-black px-6 py-3 rounded-lg font-semibold hover:bg-frame-gold/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,162,39,0.3)]">
          + Post a Spark
        </a>
      </div>

      <div className="flex gap-8">
        {/* Main feed */}
        <div className="flex-1">
          {/* Filters */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === f
                    ? 'bg-frame-gold/15 text-frame-gold border border-frame-gold/30'
                    : 'bg-frame-gray/30 text-frame-light border border-frame-gray/50 hover:border-frame-light/50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Genre filters */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => setGenreFilter(g)}
                className={`px-3 py-1 rounded-full text-xs transition-all ${
                  genreFilter === g
                    ? 'bg-frame-cream/10 text-frame-cream'
                    : 'text-frame-light hover:text-frame-cream'
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          {/* Spark cards */}
          <div className="space-y-4">
            {sparks.map((spark, i) => (
              <div key={spark.id} className={`card-lift animate-fade-in-up stagger-${i + 1} bg-frame-dark rounded-xl p-6 border border-frame-gray/50`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold hover:text-frame-gold transition cursor-pointer">{spark.title}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30">Spark</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-frame-light">
                      <span>{spark.genre}</span>
                      <span>·</span>
                      <span>{spark.format}</span>
                      <span>·</span>
                      <span>{spark.city}</span>
                      <span>·</span>
                      <span>{spark.hoursAgo}h ago</span>
                    </div>
                  </div>

                  {/* Heat score */}
                  <div className={`text-center px-4 py-2 rounded-xl ${spark.heat > 60 ? 'bg-frame-gold/10 heat-glow' : 'bg-frame-gray/30'}`}>
                    <div className="text-2xl font-bold text-frame-gold font-mono">{spark.heat}</div>
                    <div className="text-xs text-frame-light">Heat</div>
                  </div>
                </div>

                <p className="text-frame-light text-sm mb-3 leading-relaxed">{spark.logline}</p>

                {/* Mood note */}
                {spark.mood && (
                  <div className="text-xs italic text-frame-gold/60 mb-4">"{spark.mood}"</div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-frame-gray rounded-full flex items-center justify-center text-xs text-frame-gold">
                      {spark.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <span className="text-sm font-medium">{spark.author}</span>
                      {spark.verified && <span className="text-frame-gold text-xs ml-1">✓</span>}
                      <span className="text-xs text-frame-light ml-1">· {spark.dept}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-sm text-frame-light">
                      <span className="text-frame-gold font-mono">{spark.vouches}</span> vouches
                    </div>
                    <button className="px-4 py-2 bg-frame-gold/10 text-frame-gold rounded-lg text-sm font-medium border border-frame-gold/20 hover:bg-frame-gold/20 transition">
                      Vouch
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block w-72 space-y-6">
          <div className="bg-frame-dark rounded-xl p-5 border border-frame-gray/50">
            <h3 className="text-sm font-semibold mb-3 text-frame-gold">🔥 Trending This Week</h3>
            <div className="space-y-3">
              {sparks.slice(0, 3).map((s) => (
                <div key={s.id} className="flex items-center justify-between text-sm">
                  <span className="text-frame-cream truncate">{s.title}</span>
                  <span className="text-frame-gold font-mono text-xs">{s.heat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-frame-dark rounded-xl p-5 border border-frame-gray/50">
            <h3 className="text-sm font-semibold mb-3 text-frame-gold">📍 Gear Wanted Near You</h3>
            <div className="space-y-2 text-sm text-frame-light">
              <div className="flex justify-between"><span>RED Komodo</span><span className="text-frame-gold">Hot</span></div>
              <div className="flex justify-between"><span>Aputure 600d</span><span className="text-frame-gold">Hot</span></div>
              <div className="flex justify-between"><span>Sennheiser MKH 416</span><span>Warm</span></div>
            </div>
          </div>

          <div className="bg-frame-dark rounded-xl p-5 border border-frame-gray/50">
            <h3 className="text-sm font-semibold mb-3 text-frame-gold">💡 How Vouching Works</h3>
            <div className="space-y-2 text-xs text-frame-light leading-relaxed">
              <p>• 1 vouch = 1.0 base point</p>
              <p>• High-rank vouches = 1.5× multiplier</p>
              <p>• First 48hrs = 2.0× velocity bonus</p>
              <p>• 5% decay after 72hrs inactivity</p>
              <p>• 50 verified vouches unlocks Blueprint</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
