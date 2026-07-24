import { type FC, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { languages, skills } from '../../lib/data'

gsap.registerPlugin(ScrollTrigger)

const categories = [...new Set(skills.map((s) => s.category))]

export const Expertise: FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skill-bar', {
        width: '0%',
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
      gsap.from('.skill-label', {
        x: -15,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
    }, sectionRef)

    ScrollTrigger.refresh()

    return () => ctx.revert()
  }, [])

  return (
    <section id="expertise" ref={sectionRef} className="section">
      <div className="container">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
            {'>'} ./capabilities
          </span>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">
            Capabilities
          </h2>
          <p className="mt-4 text-zinc-400">
            Cross-disciplinary engineer spanning AI, security, and infrastructure
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          {categories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category)
            return (
              <div key={category}>
                <div className="mb-6 flex items-center gap-3">
                  <span className="font-mono text-xs text-crimson">#</span>
                  <h3 className="font-mono text-sm tracking-widest uppercase text-zinc-300">
                    {category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="skill-label mb-1 flex items-center justify-between opacity-100">
                        <span className="font-mono text-sm text-zinc-400">{skill.name}</span>
                        <span className="font-mono text-xs text-zinc-600">{skill.level}%</span>
                      </div>
                      <div className="h-1 overflow-hidden rounded-full bg-zinc-800">
                        <div
                          className="skill-bar h-full rounded-full bg-crimson"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Languages */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-xs text-crimson">#</span>
            <h3 className="font-mono text-sm tracking-widest uppercase text-zinc-300">Languages</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center justify-between rounded-lg border border-zinc-800/50 bg-surface-lighter/20 px-4 py-3"
              >
                <span className="font-mono text-sm text-zinc-300">{lang.name}</span>
                <span
                  className={`rounded px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase ${
                    lang.proficiency === 'Learning'
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      : 'bg-crimson/10 text-crimson border border-crimson/20'
                  }`}
                >
                  {lang.proficiency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
