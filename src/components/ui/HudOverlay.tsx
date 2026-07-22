import { type FC, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export const HudOverlay: FC = () => {
  const barsRef = useRef<HTMLDivElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const cornerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.eq-bar', {
        height: 'random(4, 24)',
        duration: 0.4,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: { each: 0.08, repeat: -1, yoyo: true },
      })

      gsap.to('.hud-dot', {
        opacity: 0.3,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.15,
      })

      if (terminalRef.current) {
        gsap.to(terminalRef.current, {
          opacity: 0.6,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-30">
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

      {/* Bottom-left: equalizer bars — covers the Gemini logo area */}
      <div ref={barsRef} className="absolute bottom-8 left-8 flex items-end gap-[3px]">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="eq-bar w-[3px] rounded-t-sm bg-crimson/60"
            style={{ height: `${4 + Math.random() * 20}px` }}
          />
        ))}
      </div>

      {/* Bottom-right: corner bracket + terminal readout — covers Gemini logo */}
      <div ref={cornerRef} className="absolute bottom-8 right-8">
        <div className="mb-2 flex items-center justify-end gap-2 font-mono text-[10px] text-zinc-600">
          <span className="tracking-widest uppercase">sess_001</span>
          <span className="h-2 w-2 rounded-full border border-crimson/50" />
        </div>
        <svg width="80" height="24" viewBox="0 0 80 24" fill="none" className="ml-auto">
          <path d="M0 24V0H80" stroke="rgba(220,38,38,0.3)" strokeWidth="1" />
          <path d="M0 20V4H76" stroke="rgba(220,38,38,0.15)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Bottom-center: terminal line */}
      <div ref={terminalRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[11px] text-zinc-700 tracking-wider uppercase">
        <span className="text-crimson/50">{'>'}</span> neural_link established <span className="inline-block w-2 h-4 bg-crimson/30 ml-1 animate-pulse" />
      </div>
    </div>
  )
}
