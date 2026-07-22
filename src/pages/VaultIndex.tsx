import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts } from '../lib/blog'

const severityColor = (tags: string[]) => {
  const t = tags.map(s => s.toLowerCase())
  if (t.some(s => s.includes('critical'))) return 'border-red-500/50 text-red-400'
  if (t.some(s => s.includes('high'))) return 'border-orange-500/40 text-orange-400'
  if (t.some(s => s.includes('medium'))) return 'border-amber-500/30 text-amber-400'
  return 'border-zinc-600/30 text-zinc-400'
}

const VaultIndex: FC = () => {
  const posts = getAllPosts()

  return (
    <div className="pt-24">
      <div className="container">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs tracking-widest text-crimson uppercase">
            {/*  ./vault */}
          </span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Vault</h1>
          <p className="mt-4 text-zinc-400">
            Classified research — vulnerability disclosures, security findings, and technical analysis
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="py-20 text-center">
            <TerminalEmpty />
          </div>
        ) : (
          <div className="mx-auto grid max-w-4xl gap-5">
            {posts.map((post) => {
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
