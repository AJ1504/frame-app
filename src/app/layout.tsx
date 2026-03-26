import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Frame — Make the film. Now.',
  description: 'The Operating System for Indie Film. Direct-to-Production Pipeline.',
}

const navLinks = [
  { href: '/feed', label: 'Spark Feed', role: 'creative' },
  { href: '/discover', label: 'Crew', role: 'creative' },
  { href: '/blueprint', label: 'Blueprint', role: 'creative' },
  { href: '/gear', label: 'Gear', role: 'creative' },
  { href: '/discover-producer', label: 'Projects', role: 'producer' },
  { href: '/funding', label: 'Funding', role: 'both' },
  { href: '/tools', label: 'Tools', role: 'both' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-frame-black text-frame-cream antialiased">
        {/* Film grain overlay */}
        <div className="film-grain" />

        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-frame-gray/20">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-frame-gold rounded flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(201,162,39,0.4)] transition-shadow duration-500">
                <span className="text-frame-black font-bold text-sm" style={{ fontFamily: 'DM Serif Display, serif' }}>F</span>
              </div>
              <span className="text-base font-bold tracking-wider hidden sm:block" style={{ fontFamily: 'DM Serif Display, serif' }}>FRAME</span>
            </a>

            {/* Center links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-sm text-frame-light hover:text-frame-cream transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-frame-gold group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <a href="/login" className="text-sm text-frame-light hover:text-frame-cream transition hidden sm:block">Sign in</a>
              <a href="/signup" className="text-sm bg-frame-gold text-frame-black px-4 py-2 rounded-lg font-semibold hover:bg-frame-gold/90 transition-all hover:shadow-[0_0_15px_rgba(201,162,39,0.3)] btn-press">
                Join Frame
              </a>
            </div>
          </div>
        </nav>

        {/* CONTENT */}
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}
