import { FadeIn, AnimatedText } from '../components/AnimatedText'

const images = [
  { src: '/images/hero_cafe.png', aspect: 'aspect-[3/4]', delay: 0.1 },
  { src: '/images/morning_coffee.png', aspect: 'aspect-square', delay: 0.3 },
  { src: '/images/weekend_brunch.png', aspect: 'aspect-[4/3]', delay: 0.5 },
  { src: '/images/evening_cafe.png', aspect: 'aspect-square', delay: 0.2 },
  { src: '/images/barista_work.png', aspect: 'aspect-[3/4]', delay: 0.4 },
  { src: '/images/menu_latte.png', aspect: 'aspect-[4/3]', delay: 0.6 },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-16 md:py-36">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        
        <div className="mb-10 md:mb-24 flex flex-col items-center text-center">
          <FadeIn>
            <span className="text-editorial-label text-warm-orange mb-6 block">
              THE COMMUNITY
            </span>
          </FadeIn>
          <AnimatedText className="text-editorial-heading text-dark-brown max-w-2xl">
            Moments at Tmira
          </AnimatedText>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {images.map((img, idx) => (
            <div key={idx} className="break-inside-avoid">
              <FadeIn delay={img.delay}>
                <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-pointer">
                  <div className={`w-full ${img.aspect} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-warm-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay" />
                    <img 
                      src={img.src} 
                      alt="Café moment" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[var(--ease-editorial)]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
