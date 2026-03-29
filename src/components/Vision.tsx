import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Vision() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-100px' })
  const cardRef = useRef(null)
  const cardInView = useInView(cardRef, { once: true, margin: '-50px' })

  return (
    <section id="vision" className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 sm:w-175 h-100 sm:h-175 rounded-full bg-purple/5 blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-cyan-400">Future Vision</span>
          </h2>
        </motion.div>

        {/* Single centered quote card */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={cardInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="glass rounded-xl p-8 sm:p-10 border border-cyan-400/20 text-center transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light italic">
              "My goal is to become a top{' '}
              <span className="text-white font-semibold underline decoration-cyan-400/50 underline-offset-2 not-italic">
                AI powered full stack developer
              </span>
              , bridging the gap between intelligent algorithms and seamless user experiences."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
