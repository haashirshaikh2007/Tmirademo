import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FadeIn, AnimatedText } from '../components/AnimatedText'

gsap.registerPlugin(ScrollTrigger)

const menuItems = [
  { name: 'Mint Rabdi Chai', desc: 'Our signature twist on a classic. Rich, creamy, and unforgettable.', price: '₹120', image: '/images/mint_rabdi_chai.png' },
  { name: 'Ginger Tea', desc: 'The traditional favorite that hits the spot every single time.', price: '₹60', image: '/images/ginger_tea.png' },
  { name: 'Chocolate Milkshake', desc: 'A rich, thick favorite for the kids and the kids at heart.', price: '₹180', image: '/images/chocolate_milkshake.png' },
  { name: 'Grilled Masala Vada Pav', desc: 'A crowd favorite — buttery, spiced, and perfectly grilled.', price: '₹90', image: '/images/vada_pav.png' },
  { name: 'Classic French Fries', desc: 'Crispy, golden, and perfect for sharing over long conversations.', price: '₹150', image: '/images/french_fries.png' },
  { name: 'Café Pasta', desc: 'A comforting bowl of pasta to go with your evening chillouts.', price: '₹220', image: '/images/cafe_pasta.png' },
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
      <div ref={containerRef} className="md:h-screen flex flex-col pt-16 md:pt-0 justify-center">
        
        {/* Header (Not pinned on mobile, part of flow) */}
        <div className="max-w-[1400px] w-full mx-auto px-5 md:px-10 mb-8 md:mb-16 flex-shrink-0">
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
        <div className="w-full relative px-5 md:px-10 pb-12 md:pb-0">
          <div 
            ref={sliderRef}
            className="grid grid-cols-2 md:flex md:flex-row gap-4 md:gap-8 horizontal-scroll-container"
          >
            {menuItems.map((item, index) => (
              <div 
                key={index}
                className="w-full md:w-[400px] flex-shrink-0 group bg-white-warm rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <div className="aspect-square md:aspect-[3/4] overflow-hidden relative">
                  <div className="absolute inset-0 bg-dark-brown/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[var(--ease-editorial)]"
                  />
                </div>
                <div className="p-4 md:p-8 bg-white-warm transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex justify-between items-start gap-2 md:gap-4 mb-1 md:mb-3">
                    <h3 className="font-display text-base md:text-2xl text-dark-brown leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-editorial-label text-warm-orange pt-0.5 md:pt-1 flex-shrink-0 text-[10px] md:text-xs">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-editorial-body text-brown-medium text-xs md:text-base leading-relaxed hidden md:block">
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

      <div className="pb-16 md:pb-24 pt-4 md:pt-0 text-center max-w-lg mx-auto px-5 relative z-10">
        <FadeIn>
          <p className="text-editorial-body text-brown-medium italic">
            From traditional chai to modern milkshakes. We pour passion, not alcohol. Small, curated bites that go great with your drink <span className="text-warm-orange ml-1">→</span>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
