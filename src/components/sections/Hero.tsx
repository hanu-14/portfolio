import { type FC, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GlitchText } from '../ui/GlitchText'

gsap.registerPlugin(ScrollTrigger)

export const Hero: FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-title',
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' },
      )
      gsap.fromTo(
        '.hero-subtitle',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: 'power3.out' },
      )
      gsap.fromTo(
        '.hero-cta',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 1, ease: 'power3.out' },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const titles = ['AI Engineer', 'Security Researcher', 'Infrastructure Architect']

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="container relative z-10 text-center">
        <div className="mb-4 font-mono text-sm text-crimson">
          {'>'} system.init()
        </div>
        <GlitchText
          text="Mohammed Hanan"
          className="hero-title text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
        />
        <div className="hero-subtitle mt-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {titles.map((title) => (
              <span
                key={title}
                className="font-mono text-sm tracking-widest uppercase text-zinc-400 md:text-base"
              >
                <span className="text-crimson">#</span>{title.replace(/\s+/g, '_')}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-cta mt-12">
          <a
            href="#expertise"
            className="group inline-flex items-center gap-2 rounded border border-crimson/30 px-6 py-3 font-mono text-sm uppercase tracking-widest text-crimson transition-all hover:bg-crimson/10 hover:border-crimson"
          >
            Explore
            <svg className="h-4 w-4 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
