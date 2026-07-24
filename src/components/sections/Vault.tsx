import { type FC, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getAllPosts } from '../../lib/blog'

gsap.registerPlugin(ScrollTrigger)

const severityColor = (tags: string[]) => {
  const t = tags.map(s => s.toLowerCase())
  if (t.some(s => s.includes('critical'))) return 'bg-red-500/10 border-red-500/30 text-red-400'
  if (t.some(s => s.includes('high'))) return 'bg-orange-500/10 border-orange-500/30 text-orange-400'
  if (t.some(s => s.includes('medium'))) return 'bg-amber-500/10 border-amber-500/30 text-amber-400'
  return 'bg-zinc-500/10 border-zinc-500/30 text-zinc-400'
}

const INITIAL_COUNT = 3

export const Vault: FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState(false)
  const allPosts = getAllPosts()
  const visiblePosts = expanded ? allPosts : allPosts.slice(0, INITIAL_COUNT)
  const hasMore = allPosts.length > INITIAL_COUNT

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.vault-card',
        { y: 40 },
        {
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        },
      )
    }, sectionRef)

    ScrollTrigger.refresh()

    return () => ctx.revert()
  }, [expanded])

  useEffect(() => {
    if (expanded && cardsRef.current) {
      const newCards = cardsRef.current.querySelectorAll('.vault-card')
      gsap.fromTo(
        newCards,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
      )
    }
  }, [expanded])

  if (allPosts.length === 0) return null

  return (
    <section id="vault" ref={sectionRef} className="section min-h-screen flex flex-col justify-center pt-36 md:pt-40 pb-24">
      <div className="container">
        <div className="mb-36 text-center -translate-y-8">
          <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
            {'>'} ./vault
          </span>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">Vault</h2>
          <p className="mt-4 text-zinc-400">
            Security research, vulnerability disclosures, and technical deep-dives
          </p>
        </div>

        <div ref={cardsRef} className="mx-auto grid max-w-4xl gap-5">
          {visiblePosts.map((post) => {
            const severity = severityColor(post.tags)
            return (
              <Link
                key={post.slug}
                to={`/vault/${post.slug}`}
                className="vault-card group flex items-start gap-4 rounded-lg border border-zinc-800/50 bg-surface-lighter/20 p-5 transition-all hover:border-zinc-700/60"
              >
                <div className={`shrink-0 rounded border px-2.5 py-1 font-mono text-[10px] tracking-widest uppercase ${severity}`}>
                  {post.tags.find(t => ['critical', 'high', 'medium', 'info'].includes(t.toLowerCase())) || 'case'}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base font-semibold transition-colors group-hover:text-crimson">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500 line-clamp-1">{post.excerpt}</p>
                </div>
                <span className="hidden shrink-0 font-mono text-xs text-zinc-600 md:block">
                  {post.date}
                </span>
              </Link>
            )
          })}
        </div>

        {hasMore && (
          <div className="mt-8 text-center">
            {!expanded ? (
              <button
                onClick={() => setExpanded(true)}
                className="inline-flex items-center gap-2 font-mono text-sm text-zinc-400 transition-colors hover:text-crimson"
              >
                Show all ({allPosts.length})
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => {
                  setExpanded(false)
                  sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="inline-flex items-center gap-2 font-mono text-sm text-zinc-400 transition-colors hover:text-crimson"
              >
                Show less
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            )}
            <div className="mt-3">
              <Link
                to="/vault"
                className="inline-flex items-center gap-2 font-mono text-xs text-zinc-600 transition-colors hover:text-zinc-400"
              >
                Browse all case files
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
