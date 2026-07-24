import { type FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '../components/sections/Hero'
import { Expertise } from '../components/sections/Expertise'
import { Projects } from '../components/sections/Projects'
import { Vault } from '../components/sections/Vault'
import { Contact } from '../components/sections/Contact'

const Home: FC = () => {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

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
