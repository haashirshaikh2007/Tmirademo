import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const transition = {
  duration: 1.2,
  ease: [0.16, 1, 0.3, 1],
}

export function AnimatedText({ children, className = '', delay = 0, as = 'div' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const Component = motion.create(as)

  return (
    <Component
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ ...transition, delay }}
    >
      {children}
    </Component>
  )
}

export function AnimatedWords({ text, className = '', delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const words = text.split(' ')

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', rotate: 3 }}
            animate={isInView ? { y: 0, rotate: 0 } : { y: '110%', rotate: 3 }}
            transition={{
              ...transition,
              delay: delay + i * 0.08,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export function FadeIn({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const directionOffset = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: -50 },
    right: { y: 0, x: 50 },
  }

  const offset = directionOffset[direction] || directionOffset.up

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...offset }}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  )
}

export function ScaleIn({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  )
}
