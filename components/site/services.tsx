'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Reveal } from '@/components/site/reveal'
import { SERVICES } from '@/lib/services-data'

export function Services() {
  return (
    <section id="services" className="w-full bg-ivory py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              What We Offer
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-4xl italic text-espresso sm:text-5xl">
              Our Services
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-lg leading-relaxed text-espresso/70">
              Each service is tailored to your unique features, skin tone, and
              lifestyle. We believe permanent makeup should enhance your natural
              beauty — never mask it.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.name} delay={(index % 3) * 0.1} as="div">
                <Card className="h-full rounded-2xl border-blush/30 bg-linen p-8 shadow-none transition-colors hover:border-gold/40">
                  <CardContent className="flex h-full flex-col p-0">
                    <Icon
                      className="size-7 text-gold"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <h3 className="mt-5 font-heading text-[22px] text-espresso">
                      {service.name}
                    </h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-espresso/70">
                      {service.short}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-blush/30 pt-5">
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-espresso/40">
                          From
                        </p>
                        <p className="font-heading text-xl font-light text-espresso">
                          ${service.pricingFrom.toLocaleString()}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Dialog>
                          <DialogTrigger
                            render={<button type="button" />}
                            className="text-[12px] font-medium uppercase tracking-[0.1em] text-espresso/40 transition-colors hover:text-espresso"
                          >
                            Quick View
                          </DialogTrigger>
                          <DialogContent className="bg-ivory sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle className="font-heading text-2xl italic font-normal text-espresso">
                                {service.name}
                              </DialogTitle>
                              <DialogDescription className="pt-2 text-[15px] leading-relaxed text-espresso/70">
                                {service.long}
                              </DialogDescription>
                            </DialogHeader>
                            <Link
                              href={`/services/${service.slug}`}
                              className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-gold text-[13px] font-medium uppercase tracking-[0.12em] text-espresso transition-colors hover:bg-gold/85"
                            >
                              Full Details & Pricing
                            </Link>
                          </DialogContent>
                        </Dialog>

                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1.5 text-[13px] font-medium uppercase tracking-[0.1em] text-gold transition-colors hover:text-espresso"
                        >
                          Details
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="inline-flex h-12 items-center rounded-lg border border-espresso/30 bg-transparent px-7 text-[13px] font-medium uppercase tracking-[0.12em] text-espresso transition-colors hover:bg-espresso hover:text-ivory"
            >
              View All Services & Pricing
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
