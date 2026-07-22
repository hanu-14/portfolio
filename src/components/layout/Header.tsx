import { type FC, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../../lib/data'

export const Header: FC = () => {
  const location = useLocation()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return
      headerRef.current.classList.toggle('scrolled', window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: 'transparent',
        backdropFilter: 'none',
      }}
    >
      <style>{`
        header.scrolled {
          background: rgba(10, 10, 15, 0.85) !important;
          backdrop-filter: blur(12px) !important;
          border-bottom: 1px solid rgba(220, 38, 38, 0.1);
        }
      `}</style>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-mono text-lg font-bold tracking-tighter text-crimson"
        >
          {'<MH />'}
        </Link>
        <div className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.href === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(link.href.replace('/#', '/'))
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`relative font-mono text-sm tracking-wider uppercase transition-colors hover:text-crimson ${
                  isActive ? 'text-crimson' : 'text-zinc-400'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-crimson" />
                )}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
