import { FadeIn } from './AnimatedText'

const footerLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'Google Maps', href: '#' },
]

const hours = [
  { day: 'Monday – Friday', time: '7:00 AM – 10:00 PM' },
  { day: 'Saturday – Sunday', time: '8:00 AM – 11:00 PM' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-brown text-cream py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Top section */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-24">
            {/* Brand */}
            <div>
              <h3 className="font-display text-4xl md:text-5xl font-medium mb-4 text-cream-light">
                Tmira
              </h3>
              <p className="text-editorial-body text-cream/70 max-w-xs">
                Your neighborhood café where every cup tells a story and every visit feels like home.
              </p>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-editorial-label text-warm-orange mb-6">Hours</h4>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-baseline gap-4">
                    <span className="text-editorial-body text-cream/70">{h.day}</span>
                    <span className="text-editorial-body text-cream/90">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-editorial-label text-warm-orange mb-6">Connect</h4>
              <div className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-editorial-body text-cream/70 hover:text-warm-orange transition-colors duration-500 w-fit"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Divider */}
        <div className="w-full h-[1px] bg-cream/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-cream/40">
            © {new Date().getFullYear()} Café Tmira. All rights reserved.
          </p>
          <p className="text-sm text-cream/40">
            Crafted with warmth ☕
          </p>
        </div>
      </div>
    </footer>
  )
}
