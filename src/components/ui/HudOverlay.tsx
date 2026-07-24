import { type FC, useEffect } from 'react'
import { gsap } from 'gsap'

export const HudOverlay: FC = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hud-dot', {
        opacity: 0.2,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.12,
      })

      gsap.to('.glitch-bar', {
        width: 'random(20, 120)',
        left: 'random(0, 90)',
        opacity: 0.04,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'none',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-30">
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface/95 via-surface/60 to-transparent" />

      <div className="absolute right-6 top-24 flex flex-col items-end gap-1 font-mono text-[10px] text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500 hud-dot" />
          <span>SYS: ONLINE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500 hud-dot" />
          <span>NET: SECURE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-crimson hud-dot" />
          <span>AI: ACTIVE</span>
        </div>
      </div>

      <div className="absolute left-0 top-1/3 space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="glitch-bar h-px bg-crimson" style={{ width: 0, opacity: 0 }} />
        ))}
      </div>

      <div className="absolute bottom-8 right-6 z-10">
        <svg width="100" height="28" viewBox="0 0 100 28" fill="none" className="ml-auto">
          <path d="M0 28V0H100" stroke="rgba(220,38,38,0.35)" strokeWidth="1" />
          <path d="M0 24V4H96" stroke="rgba(220,38,38,0.15)" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  )
}
