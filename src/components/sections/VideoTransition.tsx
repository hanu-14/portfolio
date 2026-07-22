import type { FC } from 'react'
import { VideoBackground } from '../ui/VideoBackground'

interface VideoTransitionProps {
  src: string
}

export const VideoTransition: FC<VideoTransitionProps> = ({ src }) => (
  <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
    <VideoBackground src={src} overlay={false} />
    <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface" />
  </section>
)
