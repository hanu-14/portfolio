import { type FC, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getAllPosts } from '../../lib/blog'

gsap.registerPlugin(ScrollTrigger)

export const Blog: FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const posts = getAllPosts().slice(0, 3)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.blog-card',
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
    <section id="lab" ref={sectionRef} className="section">
      <div className="container">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs tracking-widest text-crimson uppercase">
            {/*  ./lab */}
          </span>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">Security Lab</h2>
          <p className="mt-4 text-zinc-400">
            Research notes, vulnerability disclosures, and technical deep-dives
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="blog-card group flex items-start justify-between gap-4 rounded-lg border border-zinc-800/50 p-6 transition-all hover:border-crimson/30"
            >
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-crimson">
                  {post.title}
                </h3>
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

        {posts.length >= 3 && (
          <div className="mt-8 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-mono text-sm text-zinc-400 transition-colors hover:text-crimson"
            >
              View all posts
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
