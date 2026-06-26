'use client'

import {
  Feather,
  Sparkles,
  PenTool,
  Heart,
  Eye,
  Minus,
  ArrowRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
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

type Service = {
  name: string
  icon: LucideIcon
  short: string
  long: string
}

const SERVICES: Service[] = [
  {
    name: 'Microblading',
    icon: Feather,
    short:
      'Hair-stroke technique that mimics natural brow hairs for a defined, feathery look. Ideal for sparse or uneven brows.',
    long: 'Microblading uses a fine, handheld blade to deposit pigment in delicate, hair-like strokes that blend seamlessly with your existing brows. The result is a soft, natural definition that flatters your face shape. Best suited to normal-to-dry skin, results typically last 12–18 months before a refresh is recommended.',
  },
  {
    name: 'Powder Brows / Ombré Brows',
    icon: Sparkles,
    short:
      'A soft, powdered finish that resembles the look of filled-in brows. Longer lasting and ideal for oily or mature skin.',
    long: 'Powder and ombré brows create a soft, misted effect — lighter at the front and gradually deeper toward the tail. The technique is beautifully buildable, from a barely-there veil to a fuller, defined finish. It is exceptionally long-lasting and the preferred choice for oily or mature skin types.',
  },
  {
    name: 'Nano Brows',
    icon: PenTool,
    short:
      'Ultra-fine hair strokes applied with a digital machine for exceptional precision and longevity.',
    long: 'Nano brows use a single ultra-fine needle and a digital machine to create crisp, lifelike hair strokes with remarkable control. The precision allows your artist to tailor every stroke to your natural growth pattern, delivering the most realistic result possible with excellent retention across most skin types.',
  },
  {
    name: 'Lip Blushing',
    icon: Heart,
    short:
      'A subtle wash of pigment that defines, shapes, and adds color to the lips. Corrects asymmetry with zero "done" look.',
    long: 'Lip blushing enhances your natural lip tone with a soft, diffused wash of color that defines the shape and corrects subtle asymmetry. It revives faded lips and creates the illusion of fullness — all while looking entirely your own. Custom color matching ensures a flattering, never-overdone finish.',
  },
  {
    name: 'Eyeliner Tattoo',
    icon: Eye,
    short:
      'Permanent definition along the lash line — from natural enhancement to a classic liner look.',
    long: 'Eyeliner tattoo delivers effortlessly defined eyes that never smudge or fade through the day. Choose anything from a soft, natural lash-line tint to a crisp, classic wing. Pigment and intensity are tailored to your eye shape and personal style for a polished, wake-up-ready result.',
  },
  {
    name: 'Lash Line Enhancement',
    icon: Minus,
    short:
      'The most natural eyeliner option. Pigment deposited between the lashes for depth and fullness without visible liner.',
    long: 'Lash line enhancement is our most subtle eye treatment. Pigment is placed precisely between the lashes to create the illusion of thicker, fuller lashes — invisible yet impactful. There is no visible liner, just brighter, more defined eyes that look naturally luminous.',
  },
]

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
                    <Dialog>
                      <DialogTrigger
                        render={<button type="button" />}
                        className="mt-6 inline-flex w-fit items-center gap-1.5 text-[13px] font-medium uppercase tracking-[0.1em] text-gold transition-colors hover:text-espresso"
                      >
                        Learn More
                        <ArrowRight className="size-3.5" />
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
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
