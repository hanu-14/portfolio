import type { FC } from 'react'
import { Hero } from '../components/sections/Hero'
import { VideoTransition } from '../components/sections/VideoTransition'
import { Expertise } from '../components/sections/Expertise'
import { Projects } from '../components/sections/Projects'
import { Blog } from '../components/sections/Blog'
import { Contact } from '../components/sections/Contact'

const Home: FC = () => {
  return (
    <>
      <Hero />
      <VideoTransition src="/videos/shot-2.mp4" />
      <Expertise />
      <VideoTransition src="/videos/shot-3.mp4" />
      <Projects />
      <Blog />
      <Contact />
    </>
  )
}

export default Home
