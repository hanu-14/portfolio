import type { FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPostBySlug } from '../lib/blog'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const BlogPost: FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="mt-4 text-zinc-400">Post not found</p>
          <Link
            to="/blog"
            className="mt-6 inline-block font-mono text-sm text-crimson transition-colors hover:text-amber"
          >
            {'<--'} Back to lab
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="pt-24">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-crimson"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to lab
          </Link>

          <div className="mb-8">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-crimson/5 px-2 py-0.5 font-mono text-[10px] tracking-wider text-crimson/80 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl font-bold md:text-4xl">{post.title}</h1>
            <time className="mt-3 block font-mono text-sm text-zinc-500">{post.date}</time>
          </div>

          <div className="prose prose-invert prose-crimson max-w-none">
            <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogPost
