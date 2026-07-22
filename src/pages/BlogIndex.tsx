import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts } from '../lib/blog'

const BlogIndex: FC = () => {
  const posts = getAllPosts()

  return (
    <div className="pt-24">
      <div className="container">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs tracking-widest text-crimson uppercase">
            {/*  ./lab */}
          </span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Security Lab</h1>
          <p className="mt-4 text-zinc-400">
            Vulnerability research, technical deep-dives, and security findings
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="py-20 text-center">
            <TerminalEmpty />
          </div>
        ) : (
          <div className="mx-auto grid max-w-4xl gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex items-start justify-between gap-4 rounded-lg border border-zinc-800/50 p-6 transition-all hover:border-crimson/30"
              >
                <div className="flex-1">
                  <h2 className="font-display text-lg font-semibold transition-colors group-hover:text-crimson">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-zinc-400">{post.excerpt}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
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
            ))}
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

export default BlogIndex
