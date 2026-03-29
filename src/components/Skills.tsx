import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import type { CSSProperties } from 'react'
import type { IconType } from 'react-icons'
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { SiC, SiJavascript, SiTailwindcss, SiTensorflow } from 'react-icons/si'

type TechItem = {
  name: string
  icon: IconType
  color: string
}

type OrbitGroup = {
  name: string
  subtitle: string
  size: string
  duration: number
  angleOffset: number
  accentColor: string
  ringTint: string
  items: TechItem[]
}

const orbitGroups: OrbitGroup[] = [
  {
    name: 'Inner Orbit',
    subtitle: 'Frontend core',
    size: '46%',
    duration: 18,
    angleOffset: -45,
    accentColor: '#22d3ee',
    ringTint: 'rgba(34, 211, 238, 0.2)',
    items: [
      { name: 'HTML', icon: FaHtml5, color: '#fb923c' },
      { name: 'CSS', icon: FaCss3Alt, color: '#38bdf8' },
      { name: 'JavaScript', icon: SiJavascript, color: '#facc15' },
      { name: 'React', icon: FaReact, color: '#22d3ee' },
    ],
  },
  {
    name: 'Outer Orbit',
    subtitle: 'Languages',
    size: '69%',
    duration: 26,
    angleOffset: -20,
    accentColor: '#60a5fa',
    ringTint: 'rgba(96, 165, 250, 0.18)',
    items: [
      { name: 'Python', icon: FaPython, color: '#60a5fa' },
      { name: 'Java', icon: FaJava, color: '#f97316' },
      { name: 'C', icon: SiC, color: '#c084fc' },
    ],
  },
  {
    name: 'Tool Orbit',
    subtitle: 'Workflow + AI',
    size: '92%',
    duration: 34,
    angleOffset: 18,
    accentColor: '#a78bfa',
    ringTint: 'rgba(167, 139, 250, 0.18)',
    items: [
      { name: 'Git', icon: FaGitAlt, color: '#f97316' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#22d3ee' },
      { name: 'Node.js', icon: FaNodeJs, color: '#4ade80' },
      { name: 'AI / ML', icon: SiTensorflow, color: '#fb7185' },
    ],
  },
]

const backgroundParticles = [
  { top: '12%', left: '18%', size: 5, delay: 0 },
  { top: '20%', left: '78%', size: 4, delay: 0.8 },
  { top: '32%', left: '10%', size: 3, delay: 1.4 },
  { top: '38%', left: '88%', size: 5, delay: 1.9 },
  { top: '56%', left: '16%', size: 4, delay: 1.1 },
  { top: '62%', left: '82%', size: 3, delay: 2.2 },
  { top: '74%', left: '26%', size: 4, delay: 0.5 },
  { top: '82%', left: '70%', size: 5, delay: 1.7 },
]

function OrbitNode({
  angle,
  duration,
  prefersReducedMotion,
  item,
}: {
  angle: number
  duration: number
  prefersReducedMotion: boolean
  item: TechItem
}) {
  const Icon = item.icon
  const counterSpinStyle: CSSProperties = prefersReducedMotion
    ? { animation: 'none' }
    : { animationDuration: `${duration}s` }

  return (
    <div className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          tabIndex={0}
          role="img"
          aria-label={item.name}
          whileHover={prefersReducedMotion ? { scale: 1.05 } : { scale: 1.08, y: -4 }}
          whileFocus={prefersReducedMotion ? { scale: 1.05 } : { scale: 1.08, y: -4 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          className="group relative outline-none"
        >
          <div className="tech-orbit-counterspin relative" style={counterSpinStyle}>
            <div className="relative">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 scale-110 rounded-full blur-xl opacity-0 transition duration-300 group-hover:opacity-45 group-focus-visible:opacity-45"
                style={{ backgroundColor: item.color }}
              />
              <div
                className="glass-strong relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-navy-900/85 sm:h-14 sm:w-14"
                style={{
                  boxShadow: `0 0 0 1px ${item.color}22, 0 0 24px ${item.color}18`,
                }}
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: item.color }} />
              </div>
            </div>

            <span className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-[calc(100%+0.8rem)] rounded-full border border-white/10 bg-navy-900/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-200 opacity-0 shadow-lg shadow-black/30 transition-all duration-300 group-hover:-translate-y-[calc(100%+1rem)] group-hover:opacity-100 group-focus-visible:-translate-y-[calc(100%+1rem)] group-focus-visible:opacity-100">
              {item.name}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function OrbitTrack({
  group,
  inView,
  index,
  prefersReducedMotion,
}: {
  group: OrbitGroup
  inView: boolean
  index: number
  prefersReducedMotion: boolean
}) {
  const orbitStyle: CSSProperties = prefersReducedMotion
    ? { animation: 'none' }
    : { animationDuration: `${group.duration}s` }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.12 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ width: group.size, height: group.size }}
    >
      <div className="absolute inset-0 rounded-full border border-white/10 bg-white/1.5" />
      <div className="absolute inset-2 rounded-full border border-white/5" />
      <div
        className="tech-orbit-ring-glow absolute inset-0 rounded-full"
        style={{
          boxShadow: `inset 0 0 32px ${group.ringTint}, 0 0 32px ${group.ringTint}`,
        }}
      />

      <div className="tech-orbit-spin absolute inset-0" style={orbitStyle}>
        {group.items.map((item, itemIndex) => (
          <OrbitNode
            key={`${group.name}-${item.name}`}
            angle={group.angleOffset + (360 / group.items.length) * itemIndex}
            duration={group.duration}
            prefersReducedMotion={prefersReducedMotion}
            item={item}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-100px' })
  const contentInView = useInView(contentRef, { once: true, margin: '-80px' })
  const prefersReducedMotion = Boolean(useReducedMotion())

  return (
    <section id="skills" className="relative overflow-hidden px-4 py-24 sm:px-8 sm:py-32 lg:px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-linear-to-b from-electric/6 via-electric/3 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/6 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-112 w-md rounded-full bg-purple/8 blur-[170px]" />

      <div className="mx-auto max-w-5xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center sm:mb-14"
        >
          <h2 className="mb-3 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Technical Expertise
          </h2>
          <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-electric" />
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            A focused view of the languages, frameworks, and tools I use to build modern web products with clean
            interfaces and AI-ready workflows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:mb-10"
        >
          {orbitGroups.map((group) => (
            <div
              key={group.name}
              className="glass rounded-full border border-white/10 px-4 py-2.5 text-left shadow-[0_12px_30px_rgba(2,6,23,0.25)]"
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: group.accentColor }}
                />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-200">{group.name}</p>
                  <p className="text-xs text-slate-400">{group.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={contentInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-strong relative overflow-hidden rounded-4xl border border-white/10 px-4 py-8 shadow-[0_0_80px_rgba(15,23,42,0.4)] sm:px-8 sm:py-10"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-90"
            style={{
              background:
                'radial-gradient(circle at top, rgba(96, 165, 250, 0.15), transparent 38%), radial-gradient(circle at 85% 18%, rgba(34, 211, 238, 0.12), transparent 26%), radial-gradient(circle at bottom right, rgba(167, 139, 250, 0.14), transparent 34%)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 28%, transparent 72%, rgba(255, 255, 255, 0.02))',
            }}
          />

          {backgroundParticles.map((particle, index) => (
            <motion.span
              key={`${particle.top}-${particle.left}`}
              className="pointer-events-none absolute rounded-full bg-cyan/80"
              style={{
                top: particle.top,
                left: particle.left,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                boxShadow: '0 0 16px rgba(103, 232, 249, 0.65)',
              }}
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      opacity: [0.2, 0.9, 0.2],
                      scale: [0.9, 1.3, 0.9],
                      y: [0, -8, 0],
                    }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      duration: 3.8 + index * 0.35,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: particle.delay,
                      ease: 'easeInOut',
                    }
              }
            />
          ))}

          <div className="relative mx-auto aspect-square w-full max-w-2xl">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[88%] w-px -translate-x-1/2 -translate-y-1/2 bg-linear-to-b from-transparent via-white/12 to-transparent" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[88%] -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-transparent via-white/12 to-transparent" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/12 blur-3xl" />

            {orbitGroups.map((group, index) => (
              <OrbitTrack
                key={group.name}
                group={group}
                inView={contentInView}
                index={index}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={contentInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-1/2 aspect-square w-[28%] min-w-24 max-w-42 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="absolute inset-0 rounded-full bg-cyan/18 blur-2xl" />
              <div className="glass-strong relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-white/10 p-2 shadow-[0_0_50px_rgba(34,211,238,0.18)]">
                <div className="absolute inset-2.5 rounded-full border border-white/10" />
                <img
                  src="/avatar.png"
                  alt="Amanjot Singh"
                  className="relative z-10 h-full w-full rounded-full object-cover object-top"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle, transparent 45%, rgba(2, 6, 23, 0.32) 100%)',
                  }}
                />
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10 mt-8 text-center text-sm leading-relaxed text-slate-400"
          >
            Hover any orbit node to inspect the stack. The motion stays intentionally light to keep the experience
            smooth and polished.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
