import { type FC, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skills } from '../../lib/data'

gsap.registerPlugin(ScrollTrigger)

const categories = [...new Set(skills.map((s) => s.category))]

export const Expertise: FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-bar',
        { width: '0%' },
        {
          width: (i) => `${skills[i].level}%`,
          duration: 1.5,
          ease: 'power3.out',
          stagger: 0.05,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        },
      )
      gsap.fromTo(
        '.skill-label',
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="expertise" ref={sectionRef} data-video-index={1} className="section">
      <div className="container">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs tracking-widest text-crimson uppercase">
            {/*  ./expertise */}
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
                      <div className="skill-label mb-1 flex items-center justify-between">
                        <span className="font-mono text-sm text-zinc-400">{skill.name}</span>
                        <span className="font-mono text-xs text-zinc-600">{skill.level}%</span>
                      </div>
                      <div className="h-1 overflow-hidden rounded-full bg-zinc-800">
                        <div
                          className="skill-bar h-full rounded-full bg-crimson"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
