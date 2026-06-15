import { AnimatedWords, FadeIn, ScaleIn } from '../components/AnimatedText'

export default function Story() {
  return (
    <section id="story" className="bg-cream py-16 md:py-36 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              <span className="text-editorial-label text-warm-orange mb-8 block">
                OUR STORY
              </span>
            </FadeIn>
            
            <h2 className="mb-10 lg:mb-12">
              <AnimatedWords 
                text="From the Streets of Mira Road, with Warmth" 
                className="text-editorial-heading text-dark-brown" 
              />
            </h2>
            
            <div className="space-y-6 max-w-lg">
              <FadeIn delay={0.4}>
                <p className="text-editorial-body text-brown-medium">
                  Open since 2020, Tmira isn't just a tea café — it's a vibe. Built for casual catch-ups, spontaneous evenings, and long conversations, we offer a relaxing space with a drink-first, food-second approach.
                </p>
              </FadeIn>
              <FadeIn delay={0.6}>
                <p className="text-editorial-body text-brown-medium">
                  Whether you're sipping solo or laughing in a group, we're here to serve warmth in every cup.
                </p>
              </FadeIn>
            </div>
            
            <FadeIn delay={0.8}>
              <div className="w-16 h-[2px] bg-warm-orange mt-12 opacity-60" />
            </FadeIn>
          </div>
          
          {/* Right: Image */}
          <div className="order-1 lg:order-2">
            <ScaleIn delay={0.3} className="rounded-2xl overflow-hidden w-full h-[300px] md:h-[500px] lg:h-[700px] relative">
              <div className="absolute inset-0 bg-dark-brown/5 z-10" />
              <img 
                src="/images/barista_work.png" 
                alt="Barista at work" 
                className="w-full h-full object-cover parallax-img scale-[1.1]" 
              />
            </ScaleIn>
          </div>
          
        </div>

      </div>
    </section>
  )
}
