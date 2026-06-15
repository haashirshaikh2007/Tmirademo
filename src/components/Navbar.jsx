import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit', href: '#location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[var(--ease-editorial)] ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_rgba(44,24,16,0.08)] py-0'
            : 'bg-cream/80 backdrop-blur-sm py-2'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center hover:opacity-80 transition-opacity duration-500"
          >
            <img src={logo} alt="Tmira Logo" className="h-10 md:h-12 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-editorial-label text-brown-medium hover:text-warm-orange transition-colors duration-500 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-warm-orange transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-6 h-[1.5px] bg-dark-brown origin-center"
              animate={mobileOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4 }}
            />
            <motion.span
              className="block w-6 h-[1.5px] bg-dark-brown"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-[1.5px] bg-dark-brown origin-center"
              animate={mobileOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-display text-3xl text-dark-brown hover:text-warm-orange transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
