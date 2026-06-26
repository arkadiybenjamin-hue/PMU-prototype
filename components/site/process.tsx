import { Reveal } from '@/components/site/reveal'

const STEPS = [
  {
    number: '01',
    title: 'Reserve Your Consultation',
    description:
      'We discuss your goals, skin type, and desired outcome — and map a plan that suits your features and lifestyle.',
  },
  {
    number: '02',
    title: 'Your Appointment',
    description:
      'Your artist crafts your look with meticulous precision in our serene, sterile studio, checking in at every stage.',
  },
  {
    number: '03',
    title: 'Wake Up Beautiful',
    description:
      'Enjoy effortless beauty every morning. A complimentary touch-up is included within 6–8 weeks to perfect your result.',
  },
]

export function Process() {
  return (
    <section id="process" className="w-full bg-ivory py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Your Journey
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-4xl italic text-espresso sm:text-5xl">
              Simple. Intentional. Transformative.
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          <div
            aria-hidden="true"
            className="absolute top-8 right-[16.6%] left-[16.6%] hidden border-t border-dashed border-gold/40 md:block"
          />
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1} className="relative">
              <div className="flex flex-col">
                <span className="font-heading text-6xl font-light leading-none text-gold/25">
                  {step.number}
                </span>
                <h3 className="mt-5 font-heading text-[22px] text-espresso">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-espresso/70">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
