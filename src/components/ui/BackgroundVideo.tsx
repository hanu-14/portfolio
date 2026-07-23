import { type FC, useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface BackgroundVideoProps {
  sources: string[]
}

export const BackgroundVideo: FC<BackgroundVideoProps> = ({ sources }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const indexRef = useRef(0)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    const play = () => el.play().catch(() => {})
    play()
    document.addEventListener('click', play, { once: true })

    const sections = document.querySelectorAll('[data-video-index]')
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        let bestIndex = indexRef.current
        let bestRatio = 0
        for (const entry of entries) {
          const idx = Number(entry.target.getAttribute('data-video-index'))
          if (entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio
            bestIndex = idx
          }
        }
        if (bestIndex !== indexRef.current) {
          indexRef.current = bestIndex
          setActiveIndex(bestIndex)
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((s) => observer.observe(s))

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
      observer.disconnect()
      document.removeEventListener('click', play)
    }
  }, [])

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const src = sources[activeIndex] ?? sources[0]
    if (el.src.endsWith(src)) return
    el.src = src
    el.load()
    el.play().catch(() => {})
  }, [activeIndex, sources])

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 will-change-transform">
        <video
          ref={videoRef}
          src={sources[0]}
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
