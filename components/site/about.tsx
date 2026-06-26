import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/site/reveal'
import { PlaceholderImage } from '@/components/site/placeholder-image'

const CREDENTIALS = [
  'Certified PMU Artist',
  'OSHA Bloodborne Certified',
  '10+ Years Experience',
]

export function About() {
  return (
    <section id="about" className="w-full bg-linen py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-14">
        <Reveal>
          <PlaceholderImage
            label="[ Artist Portrait ]"
            className="aspect-[4/5] w-full shadow-lg shadow-blush/20"
          />
        </Reveal>

        <div className="flex flex-col">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Meet Your Artist
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-4xl italic text-espresso sm:text-5xl">
              Isabelle Moreau
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-2 font-heading text-xl italic text-blush">
              Master Permanent Makeup Artist
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-col gap-4 text-[16px] leading-relaxed text-espresso/75">
              <p>
                For over a decade, I have devoted myself to the quiet art of
                permanent makeup — a craft where patience, precision, and an eye
                for natural beauty matter above all else.
              </p>
              <p>
                Trained in both European and contemporary techniques and
                certified across the disciplines I practice, I treat every face
                as singular. No two brows, lips, or eyes are the same, and your
                treatment plan is built entirely around you.
              </p>
              <p>
                My philosophy is simple: enhancement, never imitation. The goal
                is for you to look like the most rested, refined version of
                yourself — so natural that no one can quite tell what changed.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {CREDENTIALS.map((credential) => (
                <li
                  key={credential}
                  className="rounded-lg border border-gold/40 bg-ivory px-4 py-2 text-[12px] font-medium uppercase tracking-[0.08em] text-espresso/80"
                >
                  {credential}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9">
              <Button
                nativeButton={false}
                render={<a href="#consultation" />}
                className="h-12 bg-gold px-7 text-[13px] font-medium uppercase tracking-[0.12em] text-espresso hover:bg-gold/85"
              >
                Reserve Your Consultation
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
