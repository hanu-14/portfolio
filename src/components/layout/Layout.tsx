import type { FC, ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Scanlines } from '../ui/Scanlines'
import { Scene } from '../three/Scene'
import { BackgroundVideo } from '../ui/BackgroundVideo'
import { HudOverlay } from '../ui/HudOverlay'
import { BackgroundMusic } from '../ui/BackgroundMusic'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <BackgroundVideo src="/videos/shot-1.mp4" />
      <Scene />
      <Scanlines />
      <HudOverlay />
      <BackgroundMusic src="/audio/ambient.mp3" />
      <Header />
      <main className="relative z-10 min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
