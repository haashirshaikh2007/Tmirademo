import { AnimatedWords, FadeIn, ScaleIn } from '../components/AnimatedText'

export default function Story() {
  return (
    <section id="story" className="bg-cream py-24 md:py-36 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              <span className="text-editorial-label text-warm-orange mb-8 block">
                OUR STORY
              </span>
            </FadeIn>
            
            <h2 className="mb-10 lg:mb-12">
              <AnimatedWords 
                text="We didn't set out to build a brand." 
                className="text-editorial-heading text-dark-brown" 
              />
            </h2>
            
            <div className="space-y-6 max-w-lg">
              <FadeIn delay={0.4}>
                <p className="text-editorial-body text-brown-medium">
                  We set out to build a feeling. A place where the music is just right, the coffee is always honest, and the door is always open.
                </p>
              </FadeIn>
              <FadeIn delay={0.6}>
                <p className="text-editorial-body text-brown-medium">
                  Tmira started as a simple idea — what if a café could feel like a friend's living room? Three years later, that idea hasn't changed. Only the number of friends has.
                </p>
              </FadeIn>
            </div>
            
            <FadeIn delay={0.8}>
              <div className="w-16 h-[2px] bg-warm-orange mt-12 opacity-60" />
            </FadeIn>
          </div>
          
          {/* Right: Image */}
          <div className="order-1 lg:order-2">
            <ScaleIn delay={0.3} className="rounded-2xl overflow-hidden w-full h-[500px] lg:h-[700px] relative">
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
