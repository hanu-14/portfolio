import { type FC, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface BackgroundVideoProps {
  src: string
}

export const BackgroundVideo: FC<BackgroundVideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    const play = () => el.play().catch(() => {})
    play()
    document.addEventListener('click', play, { once: true })

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          if (!containerRef.current) return
          const y = self.progress * -80
          containerRef.current.style.transform = `translateY(${y}px)`
        },
      })
    })

    return () => {
      ctx.revert()
      document.removeEventListener('click', play)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 will-change-transform">
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="auto"
          autoPlay
          className="h-full w-full object-cover"
          style={{ filter: 'contrast(1.1) brightness(0.5) saturate(0.8)' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-surface/85 via-surface/40 to-surface/90" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 4px)' }} />
    </div>
  )
}
