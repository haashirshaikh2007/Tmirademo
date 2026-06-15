import { AnimatedText, FadeIn } from '../components/AnimatedText'

const experiences = [
  {
    id: 'morning',
    image: '/images/morning_coffee.png',
    label: 'MORNING',
    title: 'The Quiet Start',
    desc: 'Sunlight through the windows, the aroma of fresh pour-over, and the gentle hum of a day beginning.'
  },
  {
    id: 'evening',
    image: '/images/evening_cafe.png',
    label: 'EVENING',
    title: 'The Golden Hours',
    desc: 'When the lights turn warm and conversations flow like the coffee — slow, rich, and endless.'
  },
  {
    id: 'weekend',
    image: '/images/weekend_brunch.png',
    label: 'WEEKEND',
    title: 'The Long Table',
    desc: 'Brunch that becomes lunch, friends that become family, and mornings without a clock.'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="bg-cream-light py-16 md:py-36">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        
        {/* Header */}
        <div className="mb-10 md:mb-24 flex flex-col items-center text-center">
          <FadeIn>
            <span className="text-editorial-label text-warm-orange mb-6 block">
              THE EXPERIENCE
            </span>
          </FadeIn>
          <AnimatedText className="text-editorial-heading text-dark-brown max-w-3xl">
            Every hour has its charm
          </AnimatedText>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {experiences.map((exp, index) => (
            <FadeIn key={exp.id} delay={0.2 + index * 0.15}>
              <div className="group bg-white-warm rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out h-full flex flex-col">
                
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-warm-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay" />
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[var(--ease-editorial)]"
                  />
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <span className="text-editorial-label text-soft-green mb-4 block">
                    {exp.label}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-dark-brown mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-editorial-body text-brown-medium">
                    {exp.desc}
                  </p>
                </div>
                
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
