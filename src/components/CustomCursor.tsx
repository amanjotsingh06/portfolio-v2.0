import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const checkPointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        getComputedStyle(target).cursor === 'pointer'
      setIsPointer(isClickable)
    }

    const leave = () => setIsVisible(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', checkPointer)
    window.addEventListener('mouseleave', leave)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', checkPointer)
      window.removeEventListener('mouseleave', leave)
    }
  }, [])

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-9999 pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - (isPointer ? 20 : 8),
          y: position.y - (isPointer ? 20 : 8),
          width: isPointer ? 40 : 16,
          height: isPointer ? 40 : 16,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.5 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: isPointer
              ? 'radial-gradient(circle, rgba(96,165,250,0.4), rgba(139,92,246,0.2))'
              : 'white',
            border: isPointer ? '1.5px solid rgba(96,165,250,0.6)' : 'none',
          }}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 z-9998 pointer-events-none"
        animate={{
          x: position.x - 24,
          y: position.y - 24,
          opacity: isVisible ? 0.15 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.8 }}
      >
        <div className="w-12 h-12 rounded-full bg-electric blur-md" />
      </motion.div>
    </>
  )
}
