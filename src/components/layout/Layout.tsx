import type { FC, ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Scanlines } from '../ui/Scanlines'
import { Scene } from '../three/Scene'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Scene />
      <Scanlines />
      <Header />
      <main className="relative z-10 min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
