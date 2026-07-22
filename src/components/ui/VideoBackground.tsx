import { type FC, useRef, useEffect } from 'react'

interface VideoBackgroundProps {
  src: string
  className?: string
  overlay?: boolean
}

export const VideoBackground: FC<VideoBackgroundProps> = ({ src, className = '', overlay = true }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.play().catch(() => {})
          } else {
            el.pause()
          }
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
        style={{ filter: 'contrast(1.1) brightness(0.7) saturate(0.8)' }}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-transparent to-surface/80" />
      )}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 4px)' }} />
    </div>
  )
}
