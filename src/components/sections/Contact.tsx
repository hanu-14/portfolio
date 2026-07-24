import { type FC, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { socialLinks } from '../../lib/data'

gsap.registerPlugin(ScrollTrigger)

export const Contact: FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-glass',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        },
      )
    }, sectionRef)

    ScrollTrigger.refresh()

    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="section relative overflow-hidden flex items-center justify-center">
      <div className="container relative z-10 flex items-center justify-center">
        <div className="contact-glass w-full max-w-4xl rounded-3xl border border-white/[0.06] bg-white/[0.02] p-10 shadow-[0_8px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl md:p-14">

          <div className="mb-10 text-center">
            <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
              {'>'} ./contact
            </span>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">Get In Touch</h2>
            <p className="mt-3 text-zinc-400">
              Open for security research collaborations and challenging engineering roles
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="mb-5 font-mono text-xs tracking-widest text-zinc-500 uppercase">Contact Info</p>
              <div className="space-y-4">
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-all hover:border-crimson/30 hover:bg-crimson/5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-crimson/10 text-crimson">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">Email</p>
                    <p className="mt-0.5 font-mono text-sm text-zinc-200 transition-colors group-hover:text-crimson">{socialLinks.email}</p>
                  </div>
                </a>

                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-all hover:border-crimson/30 hover:bg-crimson/5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-crimson/10 text-crimson">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">X / Twitter</p>
                    <p className="mt-0.5 font-mono text-sm text-zinc-200 transition-colors group-hover:text-crimson">@Mohamme17131907</p>
                  </div>
                </a>

                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-all hover:border-crimson/30 hover:bg-crimson/5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-crimson/10 text-crimson">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">LinkedIn</p>
                    <p className="mt-0.5 font-mono text-sm text-zinc-200 transition-colors group-hover:text-crimson">mohammed-hanan-m-t-p</p>
                  </div>
                </a>

                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-all hover:border-crimson/30 hover:bg-crimson/5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-crimson/10 text-crimson">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">GitHub</p>
                    <p className="mt-0.5 font-mono text-sm text-zinc-200 transition-colors group-hover:text-crimson">hanu-14</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <p className="mb-5 font-mono text-xs tracking-widest text-zinc-500 uppercase">Bug Bounty</p>
              <div className="space-y-4">
                <a
                  href={socialLinks.hackerone}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-all hover:border-crimson/30 hover:bg-crimson/5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-crimson/10 text-crimson">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.053 5.56-5.023c.24-.213-.054-.334-.373-.121L8.32 13.617l-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">HackerOne</p>
                    <p className="mt-0.5 font-mono text-sm text-zinc-200 transition-colors group-hover:text-crimson">hanu14</p>
                  </div>
                </a>

                <a
                  href={socialLinks.bugcrowd}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-all hover:border-crimson/30 hover:bg-crimson/5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-crimson/10 text-crimson">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.996 0C5.372 0 0 5.372 0 11.996s5.372 11.996 11.996 11.996 11.996-5.372 11.996-11.996S18.62 0 11.996 0zm5.792 17.166H6.212c-.464 0-.84-.376-.84-.84V7.674c0-.464.376-.84.84-.84h11.576c.464 0 .84.376.84.84v8.652c0 .464-.376.84-.84.84z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">Bugcrowd</p>
                    <p className="mt-0.5 font-mono text-sm text-zinc-200 transition-colors group-hover:text-crimson">hanu14</p>
                  </div>
                </a>

                <a
                  href={socialLinks.intigriti}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-all hover:border-crimson/30 hover:bg-crimson/5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-crimson/10 text-crimson">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">Intigriti</p>
                    <p className="mt-0.5 font-mono text-sm text-zinc-200 transition-colors group-hover:text-crimson">hanu14</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/918089408002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-all hover:border-crimson/30 hover:bg-crimson/5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-crimson/10 text-crimson">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">WhatsApp</p>
                    <p className="mt-0.5 font-mono text-sm text-zinc-200 transition-colors group-hover:text-crimson">+91 80894 08002</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
