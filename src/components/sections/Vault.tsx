import { type FC, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getAllPosts } from '../../lib/blog'

gsap.registerPlugin(ScrollTrigger)

const severityColor = (tags: string[]) => {
  const t = tags.map(s => s.toLowerCase())
  if (t.some(s => s.includes('critical'))) return 'border-red-500/50 text-red-400'
  if (t.some(s => s.includes('high'))) return 'border-orange-500/40 text-orange-400'
  if (t.some(s => s.includes('medium'))) return 'border-amber-500/30 text-amber-400'
  return 'border-zinc-600/30 text-zinc-400'
}

export const Vault: FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const posts = getAllPosts().slice(0, 3)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.vault-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
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

    return () => ctx.revert()
  }, [])

  if (posts.length === 0) return null

  return (
    <section id="vault" ref={sectionRef} className="section">
      <div className="container">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs tracking-widest text-crimson uppercase">
            {/*  ./vault */}
          </span>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">Vault</h2>
          <p className="mt-4 text-zinc-400">
            Security research, vulnerability disclosures, and technical deep-dives
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-5">
          {posts.map((post) => {
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

        {posts.length >= 3 && (
          <div className="mt-8 text-center">
            <Link
              to="/vault"
              className="inline-flex items-center gap-2 font-mono text-sm text-zinc-400 transition-colors hover:text-crimson"
            >
              Browse all case files
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
