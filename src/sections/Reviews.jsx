import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  {
    quote: "It's my hangout place. love everything about it. All the drinks and snacks are fantastic. Budget friendly as well",
    author: "Arun Dsouza",
    role: "Local Customer"
  },
  {
    quote: "Love the ginger tea here. There are many types of tea and you are going to love each of them. Vada pav and missal is good too. Must visit for some refreshments.",
    author: "Asif Khan",
    role: "Regular"
  },
  {
    quote: "The variety of tea options is amazing (Try the Mint Rabdi chai). And you can order snacks too, french fries, Grilled Masala Vada Pav(one of my Favourite). Kids love the Pasta here and they enjoy the chocolate Milkshake.",
    author: "Shreekumar Pillai",
    role: "Local Customer"
  }
]

export default function Reviews() {
  const containerRef = useRef(null)
  const reviewsRef = useRef([])

  useGSAP(() => {
    const container = containerRef.current
    const panels = reviewsRef.current

    const scrollMultiplier = 60

    // Only pin on desktop
    let mm = gsap.matchMedia()
    mm.add("(min-width: 768px)", () => {
      // Pin the container
      ScrollTrigger.create({
        trigger: container,
        pin: true,
        start: "top top",
        end: `+=${panels.length * scrollMultiplier}%`,
        scrub: true,
      })

      // Fade each panel in and out
      panels.forEach((panel, i) => {
        if (i === 0) return
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: `+=${(i - 0.5) * scrollMultiplier}%`,
            end: `+=${scrollMultiplier}%`,
            scrub: true,
          }
        })

        tl.to(panels[i - 1], { opacity: 0, y: -30, duration: 1 }, 0)
        tl.fromTo(panel, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, 0)
      })
    })

    return () => mm.revert()
  }, { scope: containerRef })

  return (
    <section className="bg-dark-brown text-cream relative">
      {/* Desktop: pinned scroll version */}
      <div ref={containerRef} className="hidden md:flex h-screen w-full relative overflow-hidden items-center justify-center">
        
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20">
          <span className="text-editorial-label text-soft-green opacity-80 tracking-widest">
            WORD OF MOUTH
          </span>
        </div>

        {reviews.map((review, i) => (
          <div 
            key={i}
            ref={el => reviewsRef.current[i] = el}
            className={`absolute inset-0 flex flex-col items-center justify-center px-20 text-center max-w-[1000px] mx-auto ${i !== 0 ? 'opacity-0' : ''}`}
          >
            <span className="text-warm-orange text-8xl font-display leading-none opacity-50 mb-6">"</span>
            <h3 className="font-display text-4xl lg:text-5xl text-cream-light leading-tight italic mb-10">
              {review.quote}
            </h3>
            <div className="flex flex-col items-center gap-2">
              <span className="text-editorial-label text-warm-orange">{review.author}</span>
              <span className="text-editorial-body text-cream/50 text-sm">{review.role}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: simple stacked layout */}
      <div className="md:hidden py-16 px-5">
        <div className="text-center mb-10">
          <span className="text-editorial-label text-soft-green opacity-80 tracking-widest">
            WORD OF MOUTH
          </span>
        </div>
        <div className="space-y-10">
          {reviews.map((review, i) => (
            <div key={`mobile-${i}`} className="text-center px-2">
              <span className="text-warm-orange text-4xl font-display leading-none opacity-50 block mb-3">"</span>
              <p className="font-display text-lg text-cream-light leading-snug italic mb-4">
                {review.quote}
              </p>
              <div className="flex flex-col items-center gap-1">
                <span className="text-editorial-label text-warm-orange text-[11px]">{review.author}</span>
                <span className="text-cream/50 text-xs">{review.role}</span>
              </div>
              {i < reviews.length - 1 && (
                <div className="w-12 h-[1px] bg-cream/15 mx-auto mt-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
