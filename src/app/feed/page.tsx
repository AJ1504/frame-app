'use client'
import { useState, useEffect, useRef } from 'react'

const sparks = [
  {
    id: 1, title: 'Echoes of Silence', logline: 'A deaf musician discovers she can hear colors. Twelve minutes of synesthesia, isolation, and the music we make in silence.',
    genre: 'Drama', format: 'Short', city: 'Brooklyn, NY', mood: 'desolate prairie, bone light',
    author: 'Maya Chen', dept: 'Director', vouches: 34, heat: 67, hoursAgo: 18, verified: true
  },
  {
    id: 2, title: 'The Last Blockbuster', logline: 'The final night of the last Blockbuster in Bend, Oregon. Staff, regulars, and the death of physical media.',
    genre: 'Documentary', format: 'Feature', city: 'Portland, OR', mood: 'fluorescent hum, carpet dust',
    author: 'James Okafor', dept: 'Producer', vouches: 48, heat: 89, hoursAgo: 6, verified: true
  },
  {
    id: 3, title: 'Night Shift', logline: 'A bodega owner in the Bronx discovers her late-night customers are all hiding something.',
    genre: 'Thriller', format: 'Feature', city: 'NYC', mood: 'neon bleed, 3am quiet',
    author: 'Sofia Reyes', dept: 'Writer/Director', vouches: 12, heat: 23, hoursAgo: 36, verified: false
  },
  {
    id: 4, title: 'Frequency', logline: 'In a world where emotions are broadcast as radio frequencies, a signal jammer falls in love.',
    genre: 'Sci-Fi', format: 'Pilot', city: 'LA', mood: 'static wash, electric blue',
    author: 'Alex Kim', dept: 'Director', vouches: 27, heat: 51, hoursAgo: 12, verified: true
  },
]

// Typewriter hook
function useTypewriter(text: string, speed: number = 30, trigger: boolean = false) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!trigger) { setDisplayed(''); setDone(false); return }
    let i = 0
    setDisplayed('')
    setDone(false)
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        setDone(true)
        clearInterval(interval)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [trigger, text, speed])

  return { displayed, done }
}

// Heat bar with sequential glow
function HeatBar({ heat }: { heat: number }) {
  const segments = 10
  const filled = Math.round((heat / 100) * segments)

  return (
    <div className="flex gap-1">
      {Array.from({ length: segments }).map((_, i) => (
        <div
          key={i}
          className={`h-2 w-3 rounded-sm transition-all duration-300 ${
            i < filled
              ? 'bg-frame-gold shadow-[0_0_6px_rgba(212,168,67,0.4)]'
              : 'bg-frame-gray/50'
          }`}
          style={{ transitionDelay: `${i * 40}ms` }}
        />
      ))}
    </div>
  )
}

// Spark card with film advance entry
function SparkCard({ spark, index }: { spark: typeof sparks[0], index: number }) {
  const [vouched, setVouched] = useState(false)
  const [blooming, setBlooming] = useState(false)
  const [visible, setVisible] = useState(false)
  const [showTypewriter, setShowTypewriter] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const { displayed, done } = useTypewriter(spark.logline, 25, showTypewriter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true)
            setTimeout(() => setShowTypewriter(true), 300)
          }, index * 150)
        }
      },
      { threshold: 0.2 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [index])

  const handleVouch = () => {
    setVouched(true)
    setBlooming(true)
    setTimeout(() => setBlooming(false), 600)
  }

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
    >
      <div className={`card-hover bg-frame-dark rounded-2xl p-6 border-2 ${
        spark.heat > 60 ? 'border-frame-gold/20 glow-gold' : 'border-frame-gray/30'
      } transition-all duration-500 sprocket-flash`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-bold hover:text-frame-gold transition cursor-pointer">{spark.title}</h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30">Spark</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-frame-light mono text-[11px]">
              <span>{spark.genre}</span><span className="text-frame-gray">·</span>
              <span>{spark.format}</span><span className="text-frame-gray">·</span>
              <span>{spark.city}</span>
            </div>
          </div>
          <div className={`text-center px-4 py-2 rounded-xl ${spark.heat > 60 ? 'bg-frame-gold/10' : 'bg-frame-gray/30'}`}>
            <div className={`text-2xl font-bold mono ${spark.heat > 60 ? 'text-frame-gold animate-flicker text-gold-glow' : 'text-frame-light'}`}>{spark.heat}</div>
            <div className="text-[9px] text-frame-light action-text tracking-wider">HEAT</div>
          </div>
        </div>

        {/* Typewriter logline */}
        <p className="text-frame-light text-sm mb-3 leading-relaxed min-h-[40px]">
          {displayed}
          {!done && <span className="inline-block w-0.5 h-4 bg-frame-gold ml-0.5 animate-pulse" />}
        </p>

        {/* Heat bar */}
        <div className="mb-4">
          <HeatBar heat={spark.heat} />
        </div>

        {spark.mood && (
          <div className="text-xs italic text-frame-gold/40 mb-4">"{spark.mood}"</div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-frame-gray rounded-full flex items-center justify-center text-xs text-frame-gold font-bold">
              {spark.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <span className="text-sm font-medium">{spark.author}</span>
              {spark.verified && <span className="text-frame-gold text-xs ml-1">✓</span>}
              <span className="text-xs text-frame-light ml-1">· {spark.dept}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-frame-light mono">
              <span className="text-frame-gold font-bold">{vouched ? spark.vouches + 1 : spark.vouches}</span> vouches
            </span>
            <button
              onClick={handleVouch}
              disabled={vouched}
              className={`vouch-bloom ${blooming ? 'blooming' : ''} px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                vouched
                  ? 'bg-frame-gold text-frame-black glow-gold'
                  : 'bg-frame-gold/10 text-frame-gold border border-frame-gold/20 hover:bg-frame-gold/20'
              }`}
            >
              {vouched ? '✓ Vouched' : 'Vouch'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FeedPage() {
  const [filter, setFilter] = useState('Hot')
  const filters = ['All', 'Hot 🔥', 'New', 'Crewing Now', 'Near Me']
  const genres = ['All', 'Drama', 'Documentary', 'Thriller', 'Sci-Fi', 'Horror', 'Comedy']

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-10">
        <div>
          <span className="action-text text-[10px] text-frame-red/50 tracking-[0.4em] block mb-1">PHASE I</span>
          <h1 className="text-4xl font-bold mb-2">Spark Feed</h1>
          <p className="text-frame-light">Ideas looking for crew. Crew looking for ideas.</p>
        </div>
        <a href="/spark" className="bg-frame-gold text-frame-black px-6 py-3 rounded-lg font-bold hover:bg-frame-gold-bright transition-all glow-gold hover:glow-gold-strong btn-press action-text tracking-wider">
          + POST A SPARK
        </a>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {filters.map((f) => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === f ? 'bg-frame-gold/15 text-frame-gold border border-frame-gold/30' : 'bg-frame-gray/30 text-frame-light border border-frame-gray/30'
            }`}>{f}</button>
        ))}
      </div>

      <div className="flex gap-2 mb-8 flex-wrap">
        {genres.map((g) => (
          <button key={g} className="px-3 py-1 rounded-full text-xs text-frame-light hover:text-frame-cream transition">{g}</button>
        ))}
      </div>

      {/* Spark cards with film advance animation */}
      <div className="space-y-4">
        {sparks.map((spark, i) => (
          <SparkCard key={spark.id} spark={spark} index={i} />
        ))}
      </div>
    </div>
  )
}
