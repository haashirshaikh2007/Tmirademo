import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  {
    quote: "It feels like a secret you want to share with everyone, yet keep entirely to yourself.",
    author: "Elena M.",
    role: "Local Architect"
  },
  {
    quote: "The only place in the city where time actually seems to slow down. And the pour-over is flawless.",
    author: "David K.",
    role: "Writer"
  },
  {
    quote: "Tmira isn't just a coffee shop. It's the living room this neighborhood always needed.",
    author: "Sarah & Tom",
    role: "Daily Regulars"
  }
]

export default function Reviews() {
  const containerRef = useRef(null)
  const reviewsRef = useRef([])

  useGSAP(() => {
    const container = containerRef.current
    const panels = reviewsRef.current

    // Pin the container
    ScrollTrigger.create({
      trigger: container,
      pin: true,
      start: "top top",
      end: `+=${panels.length * 100}%`,
      scrub: true,
    })

    // Fade each panel in and out
    panels.forEach((panel, i) => {
      if (i === 0) return // First one is already visible
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: `+=${(i - 0.5) * 100}%`,
          end: `+=${100}%`,
          scrub: true,
        }
      })

      // Fade out previous
      tl.to(panels[i - 1], { opacity: 0, y: -50, duration: 1 }, 0)
      // Fade in current
      tl.fromTo(panel, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 0)
    })
  }, { scope: containerRef })

  return (
    <section className="bg-dark-brown text-cream relative">
      <div ref={containerRef} className="h-screen w-full relative overflow-hidden flex items-center justify-center">
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20">
          <span className="text-editorial-label text-soft-green opacity-80 tracking-widest">
            WORD OF MOUTH
          </span>
        </div>

        {reviews.map((review, i) => (
          <div 
            key={i}
            ref={el => reviewsRef.current[i] = el}
            className={`absolute inset-0 flex flex-col items-center justify-center px-6 md:px-20 text-center max-w-[1000px] mx-auto ${i !== 0 ? 'opacity-0' : ''}`}
          >
            <span className="text-warm-orange text-6xl md:text-8xl font-display leading-none opacity-50 mb-6">"</span>
            <h3 className="font-display text-3xl md:text-5xl lg:text-6xl text-cream-light leading-tight italic mb-10">
              {review.quote}
            </h3>
            <div className="flex flex-col items-center gap-2">
              <span className="text-editorial-label text-warm-orange">{review.author}</span>
              <span className="text-editorial-body text-cream/50 text-sm">{review.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
