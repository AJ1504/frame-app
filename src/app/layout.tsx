import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Frame — The Creative Network for Film',
  description: 'Idea → Team → Structure → Funding → Production. For the people who make films nobody told them they could make.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-frame-black text-frame-cream antialiased">
        <nav className="fixed top-0 w-full z-50 bg-frame-black/90 backdrop-blur-md border-b border-frame-gray/30">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-frame-gold rounded-sm flex items-center justify-center">
                <span className="text-frame-black font-bold text-lg font-display">F</span>
              </div>
              <span className="text-xl font-display tracking-wide">FRAME</span>
            </a>
            <div className="hidden md:flex items-center gap-8 text-sm text-frame-light">
              <a href="/ideas" className="hover:text-frame-cream transition">Ideas</a>
              <a href="/discover" className="hover:text-frame-cream transition">Discover</a>
              <a href="/funding" className="hover:text-frame-cream transition">Funding</a>
              <a href="/tools" className="hover:text-frame-cream transition">Tools</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="/login" className="text-sm text-frame-light hover:text-frame-cream transition">Sign in</a>
              <a href="/signup" className="text-sm bg-frame-gold text-frame-black px-4 py-2 rounded font-medium hover:bg-frame-gold/90 transition">
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
