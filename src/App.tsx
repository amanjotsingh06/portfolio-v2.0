import { useEffect, useState, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Vision from './components/Vision'
import Education from './components/Education'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import ParticleField from './components/ParticleField'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      <div ref={containerRef} className="relative min-h-screen bg-navy-950">
        <CustomCursor />
        <ScrollProgress />
        <ParticleField />
        <Navbar />
        <main>
          <Hero isLoaded={isLoaded} />
          <Story />
          <Skills />
          <Projects />
          <Vision />
          <Education />
          <Contact />
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App
