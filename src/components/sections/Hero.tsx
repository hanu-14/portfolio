import { type FC, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GlitchText } from '../ui/GlitchText'
import { bio, socialLinks } from '../../lib/data'

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
        { y: 0, opacity: 1, duration: 0.8, delay: 1.2, ease: 'power3.out' },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Centered text block */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container relative z-10 text-center">
          <div className="mb-8 font-mono text-sm text-crimson">
            {'>'} system.init()
          </div>
          <GlitchText
            text={bio.name}
            className="hero-title text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
          />
          <div className="hero-subtitle mt-8">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {bio.titles.map((title) => (
                <span
                  key={title}
                  className="font-mono text-sm tracking-widest uppercase text-zinc-400 md:text-base"
                >
                  <span className="text-crimson">#</span>{title.replace(/\s+/g, '_')}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <p className="font-mono text-sm leading-relaxed text-zinc-500 md:text-base">
              &ldquo;{bio.tagline}&rdquo;
            </p>
          </div>
          <div className="mt-6">
            <p className="font-mono text-xs leading-relaxed text-zinc-600 md:text-sm">
              {bio.education}
            </p>
            <p className="mt-2 font-mono text-xs leading-relaxed text-zinc-600 md:text-sm">
              {bio.company}
            </p>
          </div>
        </div>
      </div>

      {/* CTA buttons — positioned ~5cm below the text block */}
      <div className="hero-cta absolute bottom-24 left-0 right-0 flex items-center justify-center gap-4">
        <a
          href="#expertise"
          className="group inline-flex items-center gap-2 rounded border border-crimson/30 px-6 py-3 font-mono text-sm uppercase tracking-widest text-crimson transition-all hover:bg-crimson/10 hover:border-crimson"
        >
          Explore
          <svg className="h-4 w-4 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
        <a
          href={`mailto:${socialLinks.email}`}
          className="group inline-flex items-center gap-2 rounded border border-zinc-700 px-6 py-3 font-mono text-sm uppercase tracking-widest text-zinc-400 transition-all hover:border-crimson/30 hover:text-crimson"
        >
          Contact
        </a>
      </div>
    </section>
  )
}
