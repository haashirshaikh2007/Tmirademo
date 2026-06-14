import { motion } from 'motion/react'
import { AnimatedWords, FadeIn, ScaleIn } from '../components/AnimatedText'

export default function Hero() {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row bg-cream">
      {/* Left Content */}
      <div className="w-full md:w-[60%] pt-32 md:pt-0 px-6 md:px-10 lg:px-20 flex flex-col justify-center order-2 md:order-1 relative z-10 pb-32 md:pb-0">
        <div className="max-w-xl">
          <FadeIn delay={0.2}>
            <span className="text-editorial-label text-warm-orange mb-8 block">
              EST. 2024
            </span>
          </FadeIn>
          
          <h1 className="mb-6 flex flex-col items-start">
            <AnimatedWords text="Your" className="text-editorial-hero text-dark-brown -ml-2" delay={0.4} />
            <AnimatedWords text="Neighborhood" className="text-editorial-hero text-dark-brown -ml-2" delay={0.6} />
            <AnimatedWords text="Café" className="text-editorial-hero font-display italic text-warm-orange -ml-2" delay={0.8} />
          </h1>

          <FadeIn delay={1.2}>
            <p className="text-editorial-body text-brown-medium max-w-sm mt-4">
              Coffee · Community · Conversations
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[40%] h-[50vh] md:h-screen p-4 md:p-6 order-1 md:order-2">
        <ScaleIn delay={0.6} className="w-full h-full rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-warm-orange/20 to-transparent z-10 mix-blend-overlay" />
          <img 
            src="/images/hero_cafe.png" 
            alt="Warm café interior" 
            className="w-full h-full object-cover"
          />
        </ScaleIn>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToExperience}
        className="absolute bottom-6 left-6 md:left-20 z-20 flex flex-col items-center gap-2 group cursor-pointer bg-cream/80 backdrop-blur-sm p-2 rounded-full"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-widest text-brown-medium group-hover:text-warm-orange transition-colors">
          Scroll
        </span>
        <motion.div 
          className="w-[1px] h-12 bg-brown-medium/30 relative overflow-hidden"
        >
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-warm-orange"
            animate={{ 
              y: ['-100%', '200%']
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
              ease: 'linear'
            }}
          />
        </motion.div>
      </button>
    </section>
  )
}
