'use client'
import { useEffect, useState } from 'react'

export default function FrameCounter() {
  const [frame, setFrame] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(f => f >= 99999 ? 1 : f + 1)
    }, 41) // ~24fps
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
      <span className="frame-counter text-sm text-frame-gold">{String(frame).padStart(5, '0')}</span>
      <span className="mono text-[8px] text-frame-light/30 tracking-wider">FRM</span>
    </div>
  )
}
