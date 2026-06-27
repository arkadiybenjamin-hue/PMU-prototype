import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteNav } from '@/components/site/site-nav'
import { SiteFooter } from '@/components/site/site-footer'
import { SERVICES } from '@/lib/services-data'
import { ServiceQuiz } from '@/components/site/service-quiz'

export const metadata: Metadata = {
  title: 'Services · Maison Lumière',
  description:
    'Explore our full range of bespoke permanent makeup services — microblading, powder brows, nano brows, lip blushing, eyeliner tattoo, and lash line enhancement.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteNav />

      {/* Hero */}
      <section className="w-full bg-espresso pt-36 pb-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Maison Lumière · Beverly Hills, CA
          </p>
          <h1 className="mt-5 font-heading text-5xl font-light leading-[1.05] tracking-tight text-ivory sm:text-6xl lg:text-7xl">
            Our Services
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/70">
            Each treatment is tailored to your unique features, skin tone, and
            lifestyle. Explore every service below, or use the guide to find your
            perfect match.
          </p>
        </div>
      </section>

      {/* Service grid */}
      <section className="w-full bg-ivory py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col rounded-2xl border border-blush/30 bg-linen p-8 transition-colors hover:border-gold/40"
                >
                  <Icon
                    className="size-7 text-gold"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h2 className="mt-5 font-heading text-[22px] text-espresso">
                    {service.name}
                  </h2>
                  <p className="mt-1 text-[13px] font-medium italic text-blush">
                    {service.tagline}
                  </p>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-espresso/70">
                    {service.short}
                  </p>

                  <div className="mt-6 flex items-end justify-between gap-4 border-t border-blush/30 pt-5">
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-espresso/40">
                        From
                      </p>
                      <p className="font-heading text-2xl font-light text-espresso">
                        ${service.pricingFrom.toLocaleString()}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.1em] text-gold transition-colors group-hover:text-espresso">
                      View Details
                      <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quiz */}
      <ServiceQuiz />

      {/* CTA */}
      <section className="w-full bg-espresso py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-heading text-xl italic text-ivory sm:text-2xl">
            Not sure where to start?
          </p>
          <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-ivory/70">
            Every client journey begins with a complimentary consultation — in-studio or
            virtually. We will help you choose the right treatment and answer every question.
          </p>
          <Link
            href="/#consultation"
            className="mt-8 inline-flex h-12 items-center rounded-lg bg-gold px-8 text-[13px] font-medium uppercase tracking-[0.12em] text-espresso transition-colors hover:bg-gold/85"
          >
            Reserve Your Consultation
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
