import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/site/reveal'
import { PlaceholderImage } from '@/components/site/placeholder-image'

const STATS = [
  '500+ Clients Served',
  '5★ Average Rating',
  'Licensed & Insured',
]

export function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen w-full bg-ivory pt-28 pb-16 md:pt-32"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-10">
        <div className="flex flex-col">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Permanent Makeup Studio · Beverly Hills, CA
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-heading text-5xl font-light leading-[1.05] tracking-tight text-espresso sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Beauty, Defined
              <br />
              With Precision.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-espresso/70">
              Bespoke permanent makeup services for women who demand the finest.
              Wake up effortlessly beautiful, every day.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button
                nativeButton={false}
                render={<a href="#consultation" />}
                className="h-12 bg-gold px-7 text-[13px] font-medium uppercase tracking-[0.12em] text-espresso hover:bg-gold/85"
              >
                Reserve Your Consultation
              </Button>
              <Button
                variant="outline"
                nativeButton={false}
                render={<a href="#services" />}
                className="h-12 border-espresso/30 bg-transparent px-7 text-[13px] font-medium uppercase tracking-[0.12em] text-espresso hover:bg-espresso hover:text-ivory"
              >
                View Our Services
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-12">
              <div className="h-px w-20 bg-gold" />
              <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-[13px] font-medium tracking-wide text-espresso/60">
                {STATS.map((stat) => (
                  <li key={stat}>{stat}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="md:translate-x-4">
          <PlaceholderImage
            label="[ Portfolio Image ]"
            className="aspect-[4/5] w-full shadow-xl shadow-blush/20"
          />
        </Reveal>
      </div>
    </section>
  )
}
