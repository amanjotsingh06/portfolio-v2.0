import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBookOpen, FiCode, FiLayers, FiCpu } from 'react-icons/fi'

const stories = [
  {
    label: 'THE SPARK',
    icon: FiBookOpen,
    text: 'I started my journey exploring how websites work, fueled by a curiosity for the magic behind the screen.',
    side: 'left' as const,
    color: 'bg-purple-500',
    labelColor: 'text-purple-400',
    borderColor: 'border-slate-700',
  },
  {
    label: 'FOUNDATIONS',
    icon: FiCode,
    text: 'I learned HTML, CSS and JavaScript, building the fundamental tools to create interactive web experiences.',
    side: 'right' as const,
    color: 'bg-purple-500',
    labelColor: 'text-purple-400',
    borderColor: 'border-slate-700',
  },
  {
    label: 'MODERN STACK',
    icon: FiLayers,
    text: 'Then I moved into React, mastering component-based architecture and state management for complex apps.',
    side: 'left' as const,
    color: 'bg-electric',
    labelColor: 'text-electric-light',
    borderColor: 'border-slate-700',
  },
  {
    label: 'THE HORIZON',
    icon: FiCpu,
    text: 'Now I am exploring AI, integrating machine learning and intelligent automation into my development workflow.',
    side: 'right' as const,
    color: 'bg-purple-500',
    labelColor: 'text-purple-400',
    borderColor: 'border-slate-700',
  },
]

function TimelineCard({ story, index }: { story: (typeof stories)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const isLeft = story.side === 'left'

  const DotIcon = (
    <motion.div
      initial={{ scale: 0 }}
      animate={isInView ? { scale: 1 } : {}}
      transition={{ delay: 0.2, type: 'spring', bounce: 0.5 }}
      className={`w-8 h-8 rounded-full ${story.color} flex items-center justify-center shadow-lg flex-shrink-0 z-10`}
    >
      <story.icon className="w-3.5 h-3.5 text-white" />
    </motion.div>
  )

  return (
    <div ref={ref} className="relative flex items-center w-full mb-12 sm:mb-16 last:mb-0">
      {/* Desktop: Left column */}
      <div className={`hidden md:flex flex-1 ${isLeft ? 'justify-end items-center gap-4' : ''}`}>
        {isLeft && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`glass rounded-xl p-6 max-w-sm border ${story.borderColor} hover:border-electric/30 transition-all duration-300`}
            >
              <span className={`text-xs font-bold tracking-widest ${story.labelColor} uppercase mb-3 block`}>
                {story.label}
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                {story.text}
              </p>
            </motion.div>
            {DotIcon}
          </>
        )}
      </div>

      {/* Desktop: Right column */}
      <div className={`hidden md:flex flex-1 ${!isLeft ? 'items-center gap-4' : ''}`}>
        {!isLeft && (
          <>
            {DotIcon}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`glass rounded-xl p-6 max-w-sm border ${story.borderColor} hover:border-electric/30 transition-all duration-300`}
            >
              <span className={`text-xs font-bold tracking-widest ${story.labelColor} uppercase mb-3 block`}>
                {story.label}
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                {story.text}
              </p>
            </motion.div>
          </>
        )}
      </div>

      {/* Mobile: dot + card on right side for all items */}
      <div className="md:hidden relative flex items-center z-10 flex-shrink-0 mx-4">
        {DotIcon}
      </div>
      <div className="md:hidden flex-1">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`glass rounded-xl p-5 border ${story.borderColor} hover:border-electric/30 transition-all duration-300`}
        >
          <span className={`text-xs font-bold tracking-widest ${story.labelColor} uppercase mb-2 block`}>
            {story.label}
          </span>
          <p className="text-sm text-slate-300 leading-relaxed">
            {story.text}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default function Story() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-100px' })

  return (
    <section id="story" className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            My <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-electric/40 via-purple/30 to-transparent" />

          {stories.map((story, i) => (
            <TimelineCard key={i} story={story} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
