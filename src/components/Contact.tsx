import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { FiArrowRight, FiArrowUp, FiGithub, FiLinkedin } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

const socialLinks = [
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
]

export default function Contact() {
  const titleRef = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-100px' })

  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formRef.current || sending) return

    setSending(true)
    setStatus('idle')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    } finally {
      setSending(false)
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <>
      <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-6 overflow-hidden">
        {/* Gradient divider at top */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-400 via-electric to-fuchsia-500" />

        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-100 sm:w-200 h-50 sm:h-100 bg-electric/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Section title */}
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 40 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-10 sm:mb-14 text-center"
          >
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
              Let's build something{' '}
              <span className="bg-linear-to-r from-cyan-400 to-electric bg-clip-text text-transparent">amazing</span>{' '}
              together.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-4 max-w-lg mx-auto leading-relaxed">
              Open for collaborations, opportunities, or just a tech chat. Drop a message below.
            </p>
          </motion.div>

          {/* Content: Form + Social Icons */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1 w-full"
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="relative rounded-2xl border border-slate-700/60 bg-navy-900/60 backdrop-blur-xl p-6 sm:p-8 space-y-6"
              >
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-navy-950/80 border border-slate-600/50 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-navy-950/80 border border-slate-600/50 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    className="w-full bg-navy-950/80 border border-slate-600/50 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 resize-none focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-300"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full relative group py-3.5 sm:py-4 rounded-lg font-bold text-sm tracking-[0.2em] uppercase text-cyan-400 border-2 border-cyan-400/40 bg-transparent hover:bg-cyan-400/5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  {/* Glow effect on hover */}
                  <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_20px_rgba(34,211,238,0.3),inset_0_0_20px_rgba(34,211,238,0.05)]" />
                  <span className="relative flex items-center justify-center gap-2">
                    {sending ? 'Sending...' : 'Submit'}
                    {!sending && <FiArrowRight className="w-4 h-4" />}
                  </span>
                </button>

                {/* Status messages */}
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-emerald-400 font-medium"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-red-400 font-medium"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Social Icons — Right side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-row lg:flex-col gap-4 lg:gap-5 lg:pt-8 mx-auto lg:mx-0"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 sm:px-8 lg:px-6 py-6 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-electric" />
            <span className="text-xs text-slate-500 font-mono">© Amanjot Singh</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[10px] tracking-[0.15em] uppercase text-slate-500 hover:text-white transition-colors flex items-center gap-1"
            >
              Back to Top
              <FiArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}
