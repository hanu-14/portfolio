import type { FC } from 'react'
import { Hero } from '../components/sections/Hero'
import { Expertise } from '../components/sections/Expertise'
import { Projects } from '../components/sections/Projects'
import { Blog } from '../components/sections/Blog'
import { Contact } from '../components/sections/Contact'

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Expertise />
      <Projects />
      <Blog />
      <Contact />
    </>
  )
}

export default Home
