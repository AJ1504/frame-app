import type { Metadata } from 'next'
import './globals.css'
import Cursor from '@/components/Cursor'
import FrameCounter from '@/components/FrameCounter'

export const metadata: Metadata = {
  title: 'Frame — Make the film. Now.',
  description: 'The Operating System for Indie Film.',
}

const navLinks = [
  { href: '/feed', label: 'Spark Feed' },
  { href: '/discover', label: 'Crew' },
  { href: '/blueprint', label: 'Blueprint' },
  { href: '/gear', label: 'Gear' },
  { href: '/discover-producer', label: 'Projects' },
  { href: '/funding', label: 'Funding' },
  { href: '/tools', label: 'Tools' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-frame-black text-frame-cream antialiased">
        <Cursor />
        <FrameCounter />
        <div className="film-grain" />

        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-frame-gray/20">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-frame-gold rounded-lg flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(212,168,67,0.4)] transition-shadow duration-500">
                <span className="text-frame-black font-black text-base">F</span>
              </div>
              <span className="display text-lg tracking-[0.2em] hidden sm:block">FRAME</span>
            </a>
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="px-3 py-1.5 text-sm text-frame-light hover:text-frame-cream transition-colors relative group">
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-frame-gold group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a href="/login" className="text-sm text-frame-light hover:text-frame-cream transition hidden sm:block">Sign in</a>
              <a href="/signup" className="text-sm bg-frame-gold text-frame-black px-5 py-2 rounded-lg font-bold hover:bg-frame-gold-bright transition-all hover:shadow-[0_0_15px_rgba(212,168,67,0.3)] btn-press">
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
