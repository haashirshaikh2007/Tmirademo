import { AnimatedWords, FadeIn, ScaleIn } from '../components/AnimatedText'

export default function Location() {
  return (
    <section id="location" className="bg-cream-light py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* Left: Text */}
          <div>
            <FadeIn>
              <span className="text-editorial-label text-warm-orange mb-8 block">
                VISIT US
              </span>
            </FadeIn>
            
            <h2 className="mb-12">
              <AnimatedWords 
                text="No Reservations. Just Real Conversations." 
                className="text-editorial-heading text-dark-brown" 
              />
            </h2>
            
            <div className="space-y-10 max-w-md">
              <FadeIn delay={0.4}>
                <div>
                  <h4 className="font-display text-2xl text-dark-brown mb-3">Address</h4>
                  <p className="text-editorial-body text-brown-medium">
                    Shop no. 13, Krishna Prestige<br />
                    opp. Jay Ambe Hospital, Mira Road East<br />
                    Mira Bhayandar, Maharashtra 401107
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div>
                  <h4 className="font-display text-2xl text-dark-brown mb-3">Hours</h4>
                  <p className="text-editorial-body text-brown-medium mb-1">
                    Mon-Fri: 11:30 am - 10:30 pm
                  </p>
                  <p className="text-editorial-body text-brown-medium mb-1">
                    Saturday: 11:30 am - 11:00 pm
                  </p>
                  <p className="text-editorial-body text-brown-medium">
                    Sunday: 11:30 am - 11:30 pm
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
          
          {/* Right: Map Placeholder */}
          <div className="h-[300px] md:h-[500px] lg:h-[700px] w-full">
            <ScaleIn delay={0.3} className="w-full h-full rounded-2xl overflow-hidden relative shadow-lg">
              {/* Replace src with an actual Google Maps embed URL when available */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617540632367!2d-73.9878531!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTYuMyJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) sepia(0.3) opacity(0.8) contrast(1.1)' }} 
                allowFullScreen="" 
                loading="lazy"
                title="Café Tmira Location"
              ></iframe>
              <div className="absolute inset-0 bg-warm-orange/10 pointer-events-none mix-blend-overlay" />
            </ScaleIn>
          </div>
          
        </div>

      </div>
    </section>
  )
}
