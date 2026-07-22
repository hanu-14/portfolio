import { type FC, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Terminal } from '../ui/Terminal'
import { socialLinks } from '../../lib/data'

gsap.registerPlugin(ScrollTrigger)

export const Contact: FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-content',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
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

  return (
    <section id="contact" ref={sectionRef} className="section">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">Contact</h2>
          <p className="mt-4 text-zinc-400">
            Let&apos;s build something that matters
          </p>
        </div>

        <div className="contact-content mx-auto max-w-2xl">
          <Terminal title="contact.sh">
            <div className="space-y-3">
              <p>
                <span className="text-crimson">$</span>{' '}
                <span className="text-amber">echo</span> $CONTACT_INFO
              </p>
              <div className="space-y-2 border-l-2 border-zinc-700 pl-4">
                <p>
                  <span className="text-zinc-500">email:</span>{' '}
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="text-crimson transition-colors hover:text-amber"
                  >
                    {socialLinks.email}
                  </a>
                </p>
                <p>
                  <span className="text-zinc-500">github:</span>{' '}
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-crimson transition-colors hover:text-amber"
                  >
                    {socialLinks.github.replace('https://', '')}
                  </a>
                </p>
                <p>
                  <span className="text-zinc-500">linkedin:</span>{' '}
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-crimson transition-colors hover:text-amber"
                  >
                    {socialLinks.linkedin.replace('https://', '')}
                  </a>
                </p>
                <p>
                  <span className="text-zinc-500">pgp:</span>{' '}
                  <span className="text-zinc-500">0x... (coming soon)</span>
                </p>
              </div>
              <p className="pt-2">
                <span className="text-crimson">$</span>{' '}
                <span className="text-amber">cat</span> status.txt
              </p>
              <p className="border-l-2 border-zinc-700 pl-4 text-zinc-500">
                Open for security research collaborations and challenging engineering roles
              </p>
            </div>
          </Terminal>
        </div>
      </div>
    </section>
  )
}
