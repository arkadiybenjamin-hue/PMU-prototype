import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, X, Clock, RefreshCw, Sparkles } from 'lucide-react'
import { SiteNav } from '@/components/site/site-nav'
import { SiteFooter } from '@/components/site/site-footer'
import { PlaceholderImage } from '@/components/site/placeholder-image'
import { SERVICES, getService, getRelatedServices } from '@/lib/services-data'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: `${service.name} · Maison Lumière`,
    description: service.short,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const related = getRelatedServices(service.relatedSlugs)
  const Icon = service.icon

  return (
    <div className="min-h-screen bg-ivory">
      <SiteNav />

      {/* Hero */}
      <section className="w-full bg-espresso pt-36 pb-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-gold/70 transition-colors hover:text-gold"
          >
            <ArrowLeft className="size-3.5" />
            All Services
          </Link>
          <div className="mt-8 grid grid-cols-1 items-end gap-10 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <Icon className="size-8 text-gold" strokeWidth={1.5} aria-hidden="true" />
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
                  Permanent Makeup · Maison Lumière
                </p>
              </div>
              <h1 className="mt-5 font-heading text-5xl font-light leading-[1.05] tracking-tight text-ivory sm:text-6xl lg:text-7xl">
                {service.name}
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-ivory/70">
                {service.tagline}
              </p>
            </div>
            <div className="flex flex-col gap-4 md:items-end md:text-right">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold/60">
                  Investment from
                </p>
                <p className="mt-1 font-heading text-5xl font-light text-ivory">
                  ${service.pricingFrom.toLocaleString()}
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ivory/50">
                  {service.pricingNote}
                </p>
              </div>
              <Link
                href="/#consultation"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-gold px-7 text-[13px] font-medium uppercase tracking-[0.12em] text-espresso transition-colors hover:bg-gold/85"
              >
                Reserve Your Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats bar */}
      <div className="w-full border-b border-blush/20 bg-espresso-light">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-6 px-6 py-5 sm:gap-10">
          <div className="flex items-center gap-2.5">
            <Clock className="size-4 text-gold" strokeWidth={1.5} />
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-gold/60">Duration</p>
              <p className="text-[14px] text-ivory/80">{service.duration}</p>
            </div>
          </div>
          <div className="h-8 w-px bg-gold/20 hidden sm:block" aria-hidden="true" />
          <div className="flex items-center gap-2.5">
            <Sparkles className="size-4 text-gold" strokeWidth={1.5} />
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-gold/60">Longevity</p>
              <p className="text-[14px] text-ivory/80">{service.longevity}</p>
            </div>
          </div>
          <div className="h-8 w-px bg-gold/20 hidden sm:block" aria-hidden="true" />
          <div className="flex items-center gap-2.5">
            <RefreshCw className="size-4 text-gold" strokeWidth={1.5} />
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-gold/60">Healing</p>
              <p className="text-[14px] text-ivory/80">{service.healingDays.split(';')[0]}</p>
            </div>
          </div>
          {service.touchUpIncluded && (
            <>
              <div className="h-8 w-px bg-gold/20 hidden sm:block" aria-hidden="true" />
              <div className="flex items-center gap-2">
                <Check className="size-4 text-gold" strokeWidth={2} />
                <p className="text-[14px] text-ivory/80">Complimentary touch-up included</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* About the service */}
      <section className="w-full bg-ivory py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_400px] lg:gap-16">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
                About This Service
              </p>
              <h2 className="mt-4 font-heading text-4xl italic text-espresso sm:text-5xl">
                What is {service.name}?
              </h2>
              <p className="mt-6 text-[17px] leading-[1.8] text-espresso/75">
                {service.long}
              </p>

              {/* Ideal for / not ideal for */}
              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
                    Ideal for
                  </p>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {service.idealFor.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-gold"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                        <span className="text-[14px] leading-relaxed text-espresso/75">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-blush">
                    Not ideal for
                  </p>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {service.notIdealFor.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <X
                          className="mt-0.5 size-4 shrink-0 text-blush"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                        <span className="text-[14px] leading-relaxed text-espresso/75">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar — before/after image + CTA */}
            <div className="flex flex-col gap-6">
              <PlaceholderImage
                label="[ Before / After ]"
                className="aspect-[4/5] w-full shadow-lg shadow-blush/20"
              />
              <div className="rounded-2xl border border-gold/30 bg-linen p-7">
                <p className="font-heading text-2xl italic text-espresso">
                  Ready to book?
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-espresso/70">
                  Complimentary consultations available in-studio and virtually.
                  We respond within 24 hours.
                </p>
                <Link
                  href="/#consultation"
                  className="mt-5 flex h-12 items-center justify-center rounded-lg bg-gold text-[13px] font-medium uppercase tracking-[0.12em] text-espresso transition-colors hover:bg-gold/85"
                >
                  Reserve Your Consultation
                </Link>
                <p className="mt-3 text-center text-[12px] text-espresso/40">
                  No commitment required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healing timeline */}
      <section className="w-full bg-linen py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            What to Expect
          </p>
          <h2 className="mt-4 font-heading text-4xl italic text-espresso sm:text-5xl">
            Healing & Aftercare
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-espresso/70">
            {service.healingDays}. We provide a full written aftercare guide and
            a healing kit at your appointment.
          </p>
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.aftercare.map((tip, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-blush/30 bg-ivory p-5"
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold/15 font-heading text-[13px] font-medium text-gold">
                  {i + 1}
                </span>
                <span className="text-[14px] leading-relaxed text-espresso/75">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full bg-ivory py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Investment
            </p>
            <h2 className="mt-4 font-heading text-4xl italic text-espresso sm:text-5xl">
              Pricing
            </h2>
            <div className="mt-8 rounded-2xl border border-gold/30 bg-linen p-8 sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-heading text-2xl text-espresso">{service.name}</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-espresso/60">
                    {service.pricingNote}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gold/70">
                    Starting from
                  </p>
                  <p className="font-heading text-4xl font-light text-espresso">
                    ${service.pricingFrom.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="mt-6 border-t border-blush/30 pt-6">
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-2.5 text-[14px] text-espresso/75">
                    <Check className="size-4 shrink-0 text-gold" strokeWidth={2.5} />
                    Initial {service.duration} appointment
                  </li>
                  <li className="flex items-center gap-2.5 text-[14px] text-espresso/75">
                    <Check className="size-4 shrink-0 text-gold" strokeWidth={2.5} />
                    Complimentary consultation (in-studio or virtual)
                  </li>
                  <li className="flex items-center gap-2.5 text-[14px] text-espresso/75">
                    <Check className="size-4 shrink-0 text-gold" strokeWidth={2.5} />
                    Complimentary perfecting touch-up at 6–8 weeks
                  </li>
                  <li className="flex items-center gap-2.5 text-[14px] text-espresso/75">
                    <Check className="size-4 shrink-0 text-gold" strokeWidth={2.5} />
                    Full aftercare guide & healing kit
                  </li>
                  <li className="flex items-center gap-2.5 text-[14px] text-espresso/75">
                    <Check className="size-4 shrink-0 text-gold" strokeWidth={2.5} />
                    24-hour post-appointment support
                  </li>
                </ul>
              </div>
              <p className="mt-6 text-[12px] leading-relaxed text-espresso/45">
                Final pricing is confirmed at consultation and may vary based on complexity,
                correction work, or combination treatments. Annual refresh appointments are
                available and priced separately.
              </p>
            </div>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/#consultation"
                className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-gold px-7 text-[13px] font-medium uppercase tracking-[0.12em] text-espresso transition-colors hover:bg-gold/85 sm:w-auto"
              >
                Reserve Your Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-espresso/30 bg-transparent px-7 text-[13px] font-medium uppercase tracking-[0.12em] text-espresso transition-colors hover:bg-espresso hover:text-ivory sm:w-auto"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-linen py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Common Questions
            </p>
            <h2 className="mt-4 font-heading text-4xl italic text-espresso sm:text-5xl">
              {service.name} FAQ
            </h2>
            <div className="mt-10 flex flex-col gap-0 divide-y divide-blush/30">
              {service.faqs.map((faq) => (
                <ServiceFaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="w-full bg-ivory py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              You May Also Be Interested In
            </p>
            <h2 className="mt-4 font-heading text-4xl italic text-espresso sm:text-5xl">
              Related Services
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => {
                const RelIcon = rel.icon
                return (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="group flex flex-col rounded-2xl border border-blush/30 bg-linen p-8 transition-colors hover:border-gold/40"
                  >
                    <RelIcon
                      className="size-6 text-gold"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <h3 className="mt-5 font-heading text-[22px] text-espresso">
                      {rel.name}
                    </h3>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-espresso/70">
                      {rel.short}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium uppercase tracking-[0.1em] text-gold transition-colors group-hover:text-espresso">
                      Learn More
                      <ArrowRight className="size-3.5" />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  )
}

function ServiceFaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="py-6">
      <p className="font-heading text-[20px] text-espresso">{q}</p>
      <p className="mt-3 text-[15px] leading-relaxed text-espresso/70">{a}</p>
    </div>
  )
}
