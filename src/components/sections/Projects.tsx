import { type FC, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../../lib/data'

gsap.registerPlugin(ScrollTrigger)

export const Projects: FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        { y: 60 },
        {
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        },
      )
    }, sectionRef)

    ScrollTrigger.refresh()

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="section">
      <div className="container">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
            {'>'} ./projects
          </span>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">Projects</h2>
          <p className="mt-4 text-zinc-400">
            Selected work across security, AI, and infrastructure
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card group relative overflow-hidden rounded-lg border border-zinc-800/50 bg-surface-lighter/30 p-6 transition-all hover:border-crimson/30 hover:bg-surface-lighter/60"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-crimson/60" />
                <span className="font-mono text-xs text-zinc-600">project</span>
              </div>
              <h3 className="mb-3 font-display text-lg font-semibold transition-colors group-hover:text-crimson">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-crimson/5 px-2 py-0.5 font-mono text-[10px] tracking-wider text-crimson/80 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.github && project.github !== 'undisclosable' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500 transition-colors hover:text-crimson"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.535-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.655 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  Source
                </a>
              )}
              {project.link && (
                <Link
                  to={project.link}
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500 transition-colors hover:text-crimson"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  Report
                </Link>
              )}
              {project.github === 'undisclosable' && (
                <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-amber-500">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4m0 4h.01"/>
                  </svg>
                  undisclosable
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
