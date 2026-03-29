import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { FiArrowRight } from 'react-icons/fi'
import { TextShimmer } from '@/components/ui/text-shimmer'

interface HeroProps {
  isLoaded: boolean
}

export default function Hero({ isLoaded }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* Radial glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-electric/5 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-purple/5 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-cyan/5 blur-[80px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto w-full">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.8 }}
          animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <div className="relative group" data-purpose="avatar-container">
            {/* Glow behind avatar */}
            <div className="absolute inset-0 bg-[#38bdf8]/20 rounded-full blur-3xl group-hover:bg-[#38bdf8]/30 transition-all duration-700 scale-75 avatar-glow-pulse" />
            <img
              src="/avatar.png"
              alt="Amanjot Singh 3D Avatar"
              data-purpose="hero-avatar"
              className="w-48 h-48 md:w-64 md:h-64 object-contain avatar-float drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]"
            />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-xl text-slate-400 mb-2"
        >
          Hi, I'm{' '}
          <span className="text-white font-semibold">Amanjot Singh</span>
        </motion.p>

        {/* Typewriter heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 h-14 sm:h-16"
        >
          <Typewriter
            options={{
              strings: [
                'I build <span class="hero-gradient-text">intelligent</span> apps.',
                'I build <span class="hero-gradient-text">modern</span> interfaces.',
                'I build <span class="hero-gradient-text">innovative</span> solutions.',
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
              delay: 50,
            }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Aspiring <strong className="text-white">AI + Full Stack Developer</strong>. I build intelligent web experiences
          that bridge the gap between complex algorithms and human-centric
          design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-8 sm:mb-10"
        >
          <TextShimmer
            as="p"
            duration={1.6}
            spread={3}
            className="font-mono text-[11px] uppercase tracking-[0.32em] text-transparent [--base-color:#64748b] [--base-gradient-color:var(--color-cyan-light)]"
          >
            Building AI-first web experiences
          </TextShimmer>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, borderColor: 'rgba(96,165,250,0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-full font-semibold text-sm text-white border border-slate-600 hover:border-electric/50 hover:bg-electric/5 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              View My Projects
              <FiArrowRight />
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300"
          >
            Explore My Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
