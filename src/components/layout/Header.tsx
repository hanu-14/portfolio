import { type FC, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../../lib/data'

const HOME_SECTION_IDS = ['expertise', 'projects', 'vault', 'contact'] as const

export const Header: FC = () => {
  const { pathname } = useLocation()
  const headerRef = useRef<HTMLElement>(null)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return
      headerRef.current.classList.toggle('scrolled', window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(null)
      return
    }
    const els = HOME_SECTION_IDS.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  const isHomeSection = (href: string) => href !== '/' && href !== '/vault'

  const handleNav = (e: React.MouseEvent, href: string) => {
    setMenuOpen(false)
    if (isHomeSection(href) && pathname === '/') {
      e.preventDefault()
      const id = href.replace('/', '')
      setActiveSection(id)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' && !activeSection
    if (href === '/vault') return pathname.startsWith('/vault')
    if (pathname === '/') return activeSection === href.replace('/', '')
    return pathname === href
  }

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
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className={`relative font-mono text-sm tracking-wider uppercase transition-colors hover:text-crimson ${
                isActive(link.href) ? 'text-crimson' : 'text-zinc-400'
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-crimson" />
              )}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded border border-zinc-800 bg-surface-lighter/30 text-zinc-400 hover:text-crimson md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`border-t border-zinc-800/50 bg-surface/95 px-6 py-6 transition-all duration-300 backdrop-blur-md md:hidden ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className={`relative font-mono text-sm tracking-wider uppercase transition-colors hover:text-crimson py-2 ${
                isActive(link.href) ? 'text-crimson' : 'text-zinc-400'
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute left-0 bottom-1.5 w-4 h-px bg-crimson" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
