import { Reveal } from '@/components/site/reveal'

const POINTS = [
  'Precision Techniques',
  'Sterile & Safe Environment',
  'Custom Color Matching',
  'Long-Lasting Results',
]

export function TrustBar() {
  return (
    <section className="w-full bg-espresso py-20">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <Reveal>
          <p className="font-heading text-xl italic text-ivory sm:text-2xl">
            Every stroke is intentional. Every result, transformative.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-[12px] font-medium uppercase tracking-[0.14em] text-gold">
            {POINTS.map((point, index) => (
              <li key={point} className="flex items-center gap-3">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="size-1 rounded-full bg-gold/60"
                  />
                )}
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
