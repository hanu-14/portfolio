import { type FC, useRef, useEffect, useState } from 'react'

interface BackgroundVideoProps {
  sources: string[]
  poster?: string
}

const videoDescriptions: Record<string, { label: string; description: string; vttPath: string }> = {
  '/videos/shot-1.mp4': {
    label: 'Cyberpunk cityscape with neon lights and data streams flowing through digital landscape',
    description: 'Animated background loop showing a cyberpunk-style futuristic cityscape with neon lights and data streams flowing through the digital landscape.',
    vttPath: '/vtt/shot-1-description.vtt',
  },
  '/videos/shot-2.mp4': {
    label: 'Wireframe 3D model rotating with glowing nodes and particle effects',
    description: 'Animated background loop displaying a wireframe 3D model rotating with glowing nodes and particle effects, representing network connectivity and technology.',
    vttPath: '/vtt/shot-2-description.vtt',
  },
  '/videos/shot-3.mp4': {
    label: 'Abstract geometric shapes and holographic interface elements floating in dark space',
    description: 'Animated background loop featuring abstract geometric shapes and holographic interface elements floating in a dark space with subtle glow effects.',
    vttPath: '/vtt/shot-3-description.vtt',
  },
  '/videos/shot-4.mp4': {
    label: 'Matrix-style digital rain effect with cascading code characters',
    description: 'Animated background loop showing a matrix-style digital rain effect with cascading code characters in green against a dark background.',
    vttPath: '/vtt/shot-4-description.vtt',
  },
}

export const BackgroundVideo: FC<BackgroundVideoProps> = ({ sources, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [showFallback, setShowFallback] = useState(false)

  const currentSrc = sources[activeIndex] ?? sources[0] ?? ''
  const currentDesc = (currentSrc ? videoDescriptions[currentSrc] : null) ?? videoDescriptions[sources[0]] ?? {
    label: 'Background Video',
    description: 'Tech visual background loop.',
    vttPath: ''
  }

  const playCurrent = (el: HTMLVideoElement) => {
    el.play()
      .then(() => setShowFallback(false))
      .catch(() => setShowFallback(true))
  }

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    playCurrent(el)

    const handleInteraction = () => playCurrent(el)
    document.addEventListener('click', handleInteraction, { once: true })
    document.addEventListener('touchstart', handleInteraction, { once: true })

    return () => {
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
    }
  }, [])

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    const onEnded = () => {
      const nextIndex = (activeIndex + 1) % sources.length
      setActiveIndex(nextIndex)
    }

    el.addEventListener('ended', onEnded)
    return () => el.removeEventListener('ended', onEnded)
  }, [activeIndex, sources.length])

  useEffect(() => {
    const el = videoRef.current
    if (!el || !currentSrc) return
    if (el.src.endsWith(currentSrc)) return
    el.src = currentSrc
    el.load()
    playCurrent(el)
  }, [currentSrc])

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden" role="presentation" aria-hidden="true">
      {showFallback && poster ? (
        <img src={poster} alt="" className="h-full w-full object-cover" />
      ) : (
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          style={{ filter: 'contrast(1.1) brightness(0.5) saturate(0.8)' }}
          aria-label={currentDesc.label}
        >
          <track kind="descriptions" src={currentDesc.vttPath} srcLang="en" label="Video description" />
        </video>
      )}
      <div className="sr-only" role="status" aria-live="polite">{currentDesc.description}</div>
      <div className="absolute inset-0 bg-gradient-to-b from-surface/85 via-surface/40 to-surface/90" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 4px)' }} />
    </div>
  )
}
