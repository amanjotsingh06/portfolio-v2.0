import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Education() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-100px' })
  const cardRef = useRef(null)
  const cardInView = useInView(cardRef, { once: true, margin: '-80px' })

  return (
    <section id="education" className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-6 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-electric/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Education Path
          </h2>
        </motion.div>

        {/* Timeline card */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 60 }}
          animate={cardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Timeline connector */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={cardInView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-0.5 h-10 bg-linear-to-b from-electric/40 to-electric origin-top"
          />

          {/* Dot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={cardInView ? { scale: 1 } : {}}
            transition={{ delay: 0.5, type: 'spring', bounce: 0.5 }}
            className="w-3 h-3 rounded-full bg-electric shadow-lg shadow-electric/30 mb-4"
          />

          {/* Card */}
          <div className="glass rounded-xl p-6 sm:p-8 border border-slate-700/50 hover:border-electric/30 transition-all duration-500 max-w-md w-full text-center">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase mb-3 block">
              Current Journey
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
              BCA
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Guru Gobind Singh Indraprastha University (GGSIPU) <br></br>
              (2024 - Present) <br></br>
              CGPA: 8.2
            </p>
            <div className="w-12 h-px bg-slate-700 mx-auto mb-4" />
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Focusing on Data Structures, Web Technologies, and Artificial Intelligence foundations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
