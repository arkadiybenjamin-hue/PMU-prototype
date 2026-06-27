import { Camera, AtSign, MapPin, Phone, Mail } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/#about' },
  { label: 'Process', href: '/#process' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Book a Consultation', href: '/#consultation' },
]

export function SiteFooter() {
  return (
    <footer className="w-full bg-espresso">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="font-heading text-[22px] font-light text-gold">
              Maison Lumière
            </p>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-ivory/70">
              Bespoke permanent makeup, crafted with intention. Wake up
              effortlessly beautiful, every day.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-ivory/70 transition-colors hover:text-gold"
              >
                <Camera className="size-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-ivory/70 transition-colors hover:text-gold"
              >
                <AtSign className="size-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              Explore
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              Visit &amp; Contact
            </p>
            <ul className="mt-5 flex flex-col gap-4 text-[15px] text-ivory/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>
                  240 Rodeo Drive, Suite 12
                  <br />
                  Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-gold" />
                <a
                  href="tel:+13105551234"
                  className="transition-colors hover:text-ivory"
                >
                  (310) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-gold" />
                <a
                  href="mailto:hello@maisonlumiere.com"
                  className="transition-colors hover:text-ivory"
                >
                  hello@maisonlumiere.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-gold/20 pt-6 text-center">
          <p className="text-[12px] tracking-wide text-ivory/40">
            © 2025 Maison Lumière. All rights reserved. · Website designed with
            intention.
          </p>
        </div>
      </div>
    </footer>
  )
}
