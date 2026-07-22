import { type FC, useEffect } from 'react'
import { gsap } from 'gsap'

export const HudOverlay: FC = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.eq-bar', {
        height: 'random(4, 28)',
        duration: 0.35,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: { each: 0.06, repeat: -1, yoyo: true },
      })

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
      {/* Full-width bottom mask bar — covers ALL bottom-edge watermarks */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface/95 via-surface/60 to-transparent" />

      {/* Top-right: system status */}
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

      {/* Left side: glitch artifact bars */}
      <div className="absolute left-0 top-1/3 space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="glitch-bar h-px bg-crimson" style={{ width: 0, opacity: 0 }} />
        ))}
      </div>

      {/* Bottom-left: equalizer bars */}
      <div className="absolute bottom-8 left-6 z-10 flex items-end gap-[3px]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="eq-bar w-[3px] rounded-t-sm bg-crimson/70"
            style={{ height: `${4 + Math.random() * 24}px` }}
          />
        ))}
      </div>

      {/* Bottom-right: corner bracket */}
      <div className="absolute bottom-8 right-6 z-10">
        <div className="mb-2 flex items-center justify-end gap-2 font-mono text-[10px] text-zinc-600">
          <span className="tracking-widest uppercase">sess_001</span>
          <span className="h-2 w-2 rounded-full border border-crimson/50" />
        </div>
        <svg width="100" height="28" viewBox="0 0 100 28" fill="none" className="ml-auto">
          <path d="M0 28V0H100" stroke="rgba(220,38,38,0.35)" strokeWidth="1" />
          <path d="M0 24V4H96" stroke="rgba(220,38,38,0.15)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Bottom-center: terminal line */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 font-mono text-[11px] text-zinc-700 tracking-wider uppercase">
        <span className="text-crimson/50">{'>'}</span> neural_link established <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-crimson/30" />
      </div>
    </div>
  )
}
