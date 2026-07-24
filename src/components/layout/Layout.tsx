import type { FC, ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Scanlines } from '../ui/Scanlines'
import { BackgroundVideo } from '../ui/BackgroundVideo'
import { BackgroundMusic } from '../ui/BackgroundMusic'
import { HudOverlay } from '../ui/HudOverlay'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <BackgroundVideo
        sources={[
          '/videos/shot-1.mp4',
          '/videos/shot-2.mp4',
          '/videos/shot-3.mp4',
          '/videos/shot-4.mp4',
        ]}
      />
      <BackgroundMusic src="/audio/ambient.mp3" />
      <Scanlines />
      <HudOverlay />
      <Header />
      <main className="relative z-10 min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
