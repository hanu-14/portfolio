import type { FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPostBySlug } from '../lib/blog'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const severityColor = (tags: string[]) => {
  const t = tags.map(s => s.toLowerCase())
  if (t.some(s => s.includes('critical'))) return 'bg-red-500/10 border-red-500/30 text-red-400'
  if (t.some(s => s.includes('high'))) return 'bg-orange-500/10 border-orange-500/30 text-orange-400'
  if (t.some(s => s.includes('medium'))) return 'bg-amber-500/10 border-amber-500/30 text-amber-400'
  return 'bg-zinc-500/10 border-zinc-500/30 text-zinc-400'
}

const VaultPost: FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="mt-4 text-zinc-400">Case file not found</p>
          <Link
            to="/vault"
            className="mt-6 inline-block font-mono text-sm text-crimson transition-colors hover:text-amber"
          >
            {'<--'} Back to vault
          </Link>
        </div>
      </div>
    )
  }

  const severity = severityColor(post.tags)
  const severityLabel = post.tags.find(t => ['critical', 'high', 'medium', 'info'].includes(t.toLowerCase())) || 'case'

  return (
    <article className="pt-48 md:pt-56 pb-20">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/vault"
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-crimson"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to vault
          </Link>

          <div className="mb-8 rounded-lg border border-zinc-800/50 bg-surface-lighter/20 p-6">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className={`rounded border px-3 py-1 font-mono text-xs tracking-widest uppercase ${severity}`}>
                {severityLabel}
              </span>
              <span className="font-mono text-xs text-zinc-600">{post.date}</span>
            </div>
            <h1 className="text-2xl font-bold md:text-3xl">{post.title}</h1>
            <p className="mt-3 text-sm text-zinc-400">{post.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
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

          <div className="prose prose-invert prose-crimson max-w-none">
            <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
          </div>
        </div>
      </div>
    </article>
  )
}

export default VaultPost
