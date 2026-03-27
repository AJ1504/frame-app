'use client'
import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 16}px`
        cursorRef.current.style.top = `${e.clientY - 16}px`
      }
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], input, textarea, select, .card-hover, .viewfinder')) {
        setHovering(true)
      }
    }

    const handleOut = () => setHovering(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', handleOver)
    window.addEventListener('mouseout', handleOut)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', handleOver)
      window.removeEventListener('mouseout', handleOut)
    }
  }, [])

  return (
    <div ref={cursorRef} className={`cursor-reticle ${hovering ? 'hovering' : ''}`}>
      <div className="cursor-dot" />
    </div>
  )
}
