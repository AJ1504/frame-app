import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Frame — Make the film. Now.',
  description: 'The Operating System for Indie Film. Direct-to-Production Pipeline.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-frame-black text-frame-cream antialiased">
        <nav className="fixed top-0 w-full z-50 glass border-b border-frame-gray/30">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-frame-gold rounded flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(201,162,39,0.4)] transition-shadow">
                <span className="text-frame-black font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>F</span>
              </div>
              <span className="text-lg font-semibold tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>FRAME</span>
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm text-frame-light">
              <a href="/feed" className="hover:text-frame-cream transition">Feed</a>
              <a href="/discover" className="hover:text-frame-cream transition">Crew</a>
              <a href="/blueprint" className="hover:text-frame-cream transition">Blueprint</a>
              <a href="/gear" className="hover:text-frame-cream transition">Gear</a>
              <a href="/funding" className="hover:text-frame-cream transition">Funding</a>
              <a href="/tools" className="hover:text-frame-cream transition">Tools</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="/login" className="text-sm text-frame-light hover:text-frame-cream transition">Sign in</a>
              <a href="/signup" className="text-sm bg-frame-gold text-frame-black px-5 py-2 rounded-lg font-semibold hover:bg-frame-gold/90 transition-all hover:shadow-[0_0_15px_rgba(201,162,39,0.3)]">
                Join Frame
              </a>
            </div>
          </div>
        </nav>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
