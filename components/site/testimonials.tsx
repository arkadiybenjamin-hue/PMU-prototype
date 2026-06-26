import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Reveal } from '@/components/site/reveal'

const REVIEWS = [
  {
    quote:
      'I was nervous about permanent makeup, but Isabelle made me feel completely at ease. My brows look like I was simply born with them — full, soft, and perfectly shaped. I have never received so many compliments.',
    name: '— Charlotte, Beverly Hills CA',
  },
  {
    quote:
      'The lip blushing transformed my entire face. The color is subtle and so natural that friends keep asking if I changed my skincare. Worth every moment. The studio itself feels like a five-star retreat.',
    name: '— Vivienne, Malibu CA',
  },
  {
    quote:
      'Years of unsteady morning eyeliner are finally over. The lash enhancement is invisible yet makes my eyes look brighter and more awake. Meticulous, professional, and genuinely artistic work.',
    name: '— Adriana, Pasadena CA',
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="w-full bg-espresso py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Client Love
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-4xl italic text-ivory sm:text-5xl">
              What Our Clients Say
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.1}>
              <Card className="h-full rounded-2xl border-gold/20 bg-espresso-light p-8 shadow-none">
                <CardContent className="flex h-full flex-col p-0">
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-gold text-gold"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-5 flex-1 font-heading text-lg italic leading-relaxed text-ivory">
                    “{review.quote}”
                  </p>
                  <p className="mt-6 text-[12px] font-medium uppercase tracking-[0.1em] text-gold">
                    {review.name}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 text-center text-[14px] tracking-wide text-ivory/60">
            Rated 5 stars across Google &amp; Yelp
          </p>
        </Reveal>
      </div>
    </section>
  )
}
