import { type FC, useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts } from '../lib/blog'

const severityColor = (tags: string[]) => {
  const t = tags.map(s => s.toLowerCase())
  if (t.some(s => s.includes('critical'))) return 'bg-red-500/10 border-red-500/30 text-red-400'
  if (t.some(s => s.includes('high'))) return 'bg-orange-500/10 border-orange-500/30 text-orange-400'
  if (t.some(s => s.includes('medium'))) return 'bg-amber-500/10 border-amber-500/30 text-amber-400'
  return 'bg-zinc-500/10 border-zinc-500/30 text-zinc-400'
}

const VaultIndex: FC = () => {
  const posts = getAllPosts()
  const [showAll, setShowAll] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (showAll && listRef.current) {
      listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [showAll])

  const displayedPosts = showAll ? posts : posts.slice(0, 3)

  return (
    <div className="pt-36 md:pt-40 pb-24">
      <div className="container">
        {!showAll && (
          <div className="mb-16 text-center">
            <span className="font-mono text-xs tracking-widest text-crimson uppercase">
              {/*  ./vault */}
            </span>
            <h1 className="mt-2 text-4xl font-bold md:text-5xl">Vault</h1>
            <p className="mt-4 text-zinc-400">
              Classified research — vulnerability disclosures, security findings, and technical analysis
            </p>
          </div>
        )}

        {posts.length === 0 ? (
          <div className="py-20 text-center">
            <TerminalEmpty />
          </div>
        ) : (
          <div ref={listRef} className="mx-auto grid max-w-4xl gap-5">
            {displayedPosts.map((post) => {
              const severity = severityColor(post.tags)
              return (
                <Link
                  key={post.slug}
                  to={`/vault/${post.slug}`}
                  className="group flex items-start gap-4 rounded-lg border border-zinc-800/50 bg-surface-lighter/20 p-5 transition-all hover:border-zinc-700/60"
                >
                  <div className={`shrink-0 rounded border px-2.5 py-1 font-mono text-[10px] tracking-widest uppercase ${severity}`}>
                    {post.tags.find(t => ['critical', 'high', 'medium', 'info'].includes(t.toLowerCase())) || 'case'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-display text-base font-semibold transition-colors group-hover:text-crimson">
                      {post.title}
                    </h2>
                    <p className="mt-1 text-sm text-zinc-500 line-clamp-2">{post.excerpt}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-crimson/5 px-2 py-0.5 font-mono text-[10px] tracking-wider text-crimson/80 uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="hidden shrink-0 font-mono text-xs text-zinc-600 md:block">
                    {post.date}
                  </span>
                </Link>
              )
            })}
          </div>
        )}

        {posts.length > 3 && (
          <div className="mt-8 text-center">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 font-mono text-sm text-zinc-400 transition-colors hover:text-crimson border border-zinc-800 bg-surface-lighter/55 rounded-lg px-6 py-2.5 shadow-[-3px_-3px_10px_rgba(255,255,255,0.02),3px_3px_10px_rgba(0,0,0,0.6)] hover:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.01),inset_2px_2px_6px_rgba(0,0,0,0.7)] cursor-pointer"
              >
                Show all reports
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="inline-flex items-center gap-2 font-mono text-sm text-zinc-400 transition-colors hover:text-crimson border border-zinc-800 bg-surface-lighter/55 rounded-lg px-6 py-2.5 shadow-[-3px_-3px_10px_rgba(255,255,255,0.02),3px_3px_10px_rgba(0,0,0,0.6)] hover:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.01),inset_2px_2px_6px_rgba(0,0,0,0.7)] cursor-pointer"
              >
                Show less
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

const TerminalEmpty: FC = () => (
  <div className="mx-auto max-w-md rounded-lg border border-zinc-800 bg-black/60 p-6 font-mono text-sm">
    <p><span className="text-crimson">$</span> <span className="text-amber">ls</span> ./research/</p>
    <p className="mt-2 text-zinc-600">No published entries yet.</p>
    <p className="mt-1 text-zinc-600">New research being prepared for disclosure...</p>
    <p className="mt-4"><span className="text-crimson">$</span> <span className="text-amber">_</span></p>
  </div>
)

export default VaultIndex
