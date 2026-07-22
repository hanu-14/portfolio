import { type FC, useEffect, useRef } from 'react'
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
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
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

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="section">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">Projects</h2>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
