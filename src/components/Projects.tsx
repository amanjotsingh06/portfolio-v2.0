import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink, FiLinkedin, FiMail } from 'react-icons/fi'

const projects = [
  {
    title: 'Hand Cricket Game',
    description: 'Game logic with toss animations, real-time scoreboard and a dynamic day/night mode toggle.',
    tech: [
      { name: 'NextJs', color: 'text-cyan-400 border-cyan-400/40' },
      { name: 'ReactJs', color: 'text-fuchsia-400 border-fuchsia-400/40' },
      { name: 'Tailwind CSS', color: 'text-slate-300 border-slate-500/40' },
    ],
    gradient: 'from-cyan to-electric',
    github: 'https://github.com/amanjotsingh06/handcricket',
    demo: 'https://handcricket-five.vercel.app/',
    image: 'handcricket.png',
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative shrink-0 w-full max-w-sm mx-auto sm:max-w-none"
    >
      <div className="relative glass rounded-2xl overflow-hidden h-full flex flex-col border border-slate-700/50 hover:border-electric/30 transition-all duration-500">
        {/* Project image */}
        <div className="relative h-44 sm:h-48 bg-navy-800 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            onError={(e) => {
              // Fallback: show gradient with code lines if image fails
              const el = e.currentTarget
              el.style.display = 'none'
              el.parentElement!.classList.add(`bg-gradient-to-br`, 'from-navy-800', 'to-navy-900')
            }}
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-navy-950/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-heading text-lg font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1 line-clamp-3">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span
                key={t.name}
                className={`px-2.5 py-0.5 text-[10px] font-medium rounded-full border ${t.color}`}
              >
                {t.name}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <motion.a
              href={project.demo}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-navy-950 bg-cyan-400 hover:bg-cyan-300 transition-all"
            >
              <FiExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </motion.a>
            <motion.a
              href={project.github}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white border border-slate-600 hover:border-slate-400 transition-all"
            >
              <FiGithub className="w-3.5 h-3.5" />
              GitHub
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-6 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-125 h-125 bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center sm:mb-14 sm:text-left"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase mb-3">
            <span className="bg-linear-to-r from-cyan-400 via-electric to-fuchsia-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto sm:mx-0">
            Exploring the intersection of clean code and futuristic design. Scroll to explore my latest work.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-5 justify-items-center sm:grid-cols-2 sm:justify-items-stretch sm:gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Swipe to explore indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mt-12 sm:mt-16"
        >
          <div className="h-px w-16 bg-slate-700" />
          <span className="text-[10px] tracking-[0.25em] uppercase text-slate-500 font-medium">
            Swipe to Explore
          </span>
          <div className="h-px w-16 bg-slate-700" />
        </motion.div>
      </div>
    </section>
  )
} export const socials = [
  {
    icon: FiGithub,
    label: 'GitHub',
    href: 'https://github.com/amanjotsingh06',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/amanjot-singh06',
  },
  {
    icon: FiMail,
    label: 'Email',
    href: 'mailto:amanjot.singh06.dev@gmail.com',
  },
];

