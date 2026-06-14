import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FadeIn, AnimatedText } from '../components/AnimatedText'

gsap.registerPlugin(ScrollTrigger)

const menuItems = [
  { name: 'Tmira Pour Over', desc: 'Single origin, hand-poured to perfection. Our baristas take their time so you can take yours.', price: '₹220' },
  { name: 'Honey Oat Latte', desc: 'A golden embrace — house-made oat milk, local honey, and a double shot of our signature blend.', price: '₹280' },
  { name: 'Matcha Ceremony', desc: 'Ceremonial grade matcha whisked with steamed milk. Calm in a cup.', price: '₹260' },
  { name: 'The Breakfast Bowl', desc: 'Açaí, granola, seasonal fruits, and a drizzle of honey. The morning ritual.', price: '₹350' },
  { name: 'Cinnamon Swirl', desc: 'Freshly baked, generously swirled. The smell alone is worth the visit.', price: '₹180' },
  { name: 'Cold Brew Float', desc: 'House cold brew over vanilla bean ice cream. Dangerously good.', price: '₹320' },
]

export default function MenuShowcase() {
  const containerRef = useRef(null)
  const sliderRef = useRef(null)

  useGSAP(() => {
    // Only apply horizontal scroll on desktop
    let mm = gsap.matchMedia()

    mm.add("(min-width: 768px)", () => {
      const slider = sliderRef.current
      const container = containerRef.current
      
      const scrollWidth = slider.scrollWidth - window.innerWidth + window.innerWidth * 0.1

      gsap.to(slider, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          invalidateOnRefresh: true,
        }
      })
    })

    return () => mm.revert()
  }, { scope: containerRef })

  return (
    <section id="menu" className="bg-cream-light overflow-hidden">
      <div ref={containerRef} className="md:h-screen flex flex-col pt-20 md:pt-0 justify-center">
        
        {/* Header (Not pinned on mobile, part of flow) */}
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-10 mb-12 md:mb-16 flex-shrink-0">
          <FadeIn>
            <span className="text-editorial-label text-warm-orange mb-4 block">
              THE MENU
            </span>
          </FadeIn>
          <AnimatedText className="text-editorial-heading text-dark-brown">
            Our Signatures
          </AnimatedText>
        </div>

        {/* Horizontal Slider Area */}
        <div className="w-full relative px-6 md:px-10 pb-20 md:pb-0">
          <div 
            ref={sliderRef}
            className="flex flex-col md:flex-row gap-6 md:gap-8 horizontal-scroll-container"
          >
            {menuItems.map((item, index) => (
              <div 
                key={index}
                className="w-full md:w-[400px] flex-shrink-0 group bg-white-warm rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <div className="aspect-[4/3] md:aspect-[3/4] overflow-hidden relative">
                  <div className="absolute inset-0 bg-dark-brown/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                  <img 
                    src="/images/menu_latte.png" 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[var(--ease-editorial)]"
                  />
                </div>
                <div className="p-6 md:p-8 bg-white-warm transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="font-display text-2xl text-dark-brown leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-editorial-label text-warm-orange pt-1 flex-shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-editorial-body text-brown-medium text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
            
            {/* End Spacer for desktop */}
            <div className="hidden md:block w-[10vw] flex-shrink-0" />
          </div>
        </div>

      </div>

      <div className="pb-24 text-center max-w-lg mx-auto px-6 relative z-10">
        <FadeIn>
          <p className="text-editorial-body text-brown-medium italic">
            Our full menu awaits you at the café <span className="text-warm-orange ml-1">→</span>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
