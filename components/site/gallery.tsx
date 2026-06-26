import { Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/site/reveal'
import { PlaceholderImage } from '@/components/site/placeholder-image'

const TILES = Array.from({ length: 6 }, (_, i) => i)

export function Gallery() {
  return (
    <section id="gallery" className="w-full bg-linen py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Our Work
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-4xl italic text-espresso sm:text-5xl">
              The Portfolio
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-lg leading-relaxed text-espresso/70">
              Real clients. Real results. Every photo is unfiltered and
              unedited.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TILES.map((tile, index) => (
            <Reveal key={tile} delay={(index % 3) * 0.1}>
              <PlaceholderImage
                label="[ Before / After ]"
                rounded="rounded-xl"
                className="aspect-square w-full"
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <Button
              variant="outline"
              nativeButton={false}
              render={
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="h-12 border-espresso/30 bg-transparent px-7 text-[13px] font-medium uppercase tracking-[0.1em] text-espresso hover:bg-espresso hover:text-ivory"
            >
              <Camera className="size-4" />
              Follow Our Work on Instagram @maisonlumiere
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
