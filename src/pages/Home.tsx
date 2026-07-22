import type { FC } from 'react'
import { Hero } from '../components/sections/Hero'
import { Expertise } from '../components/sections/Expertise'
import { Projects } from '../components/sections/Projects'
import { Vault } from '../components/sections/Vault'
import { Contact } from '../components/sections/Contact'

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Expertise />
      <Projects />
      <Vault />
      <Contact />
    </>
  )
}

export default Home
