import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Reveal } from '@/components/site/reveal'

const FAQS = [
  {
    q: 'How long does permanent makeup last?',
    a: 'Most treatments last between 1 and 3 years depending on the technique, your skin type, lifestyle, and sun exposure. Brow treatments typically last 12–18 months, while lip blushing and eyeliner can last longer. A periodic refresh keeps your results looking their best.',
  },
  {
    q: 'Does it hurt?',
    a: 'Comfort is a priority. We apply a topical numbing agent before and during your appointment, so most clients describe the sensation as mild — a light scratching or pressure. Many find the experience far more relaxing than they anticipated.',
  },
  {
    q: 'How do I prepare for my appointment?',
    a: 'Avoid caffeine, alcohol, and blood-thinning medications for 24–48 hours beforehand, and skip retinols or exfoliating actives near the treatment area for a week. Arrive with clean skin. You will receive a detailed prep guide after booking your consultation.',
  },
  {
    q: 'What is the healing process like?',
    a: 'Healing takes about 7–14 days on the surface, with full color settling over 4–6 weeks. You may notice the pigment appear darker initially before softening to its true tone. We provide complete aftercare instructions and products to support a smooth recovery.',
  },
  {
    q: 'Are touch-ups included?',
    a: 'Yes. A complimentary perfecting touch-up is included within 6–8 weeks of your initial appointment. This session allows us to refine the shape and color once your skin has fully healed.',
  },
  {
    q: 'Is permanent makeup safe?',
    a: 'When performed by a licensed, certified artist in a sterile environment, permanent makeup is very safe. We use single-use, sterile needles, medical-grade pigments, and follow OSHA bloodborne pathogen protocols at every step.',
  },
  {
    q: 'Who is NOT a good candidate?',
    a: 'We do not treat clients who are pregnant or nursing, have certain skin conditions in the treatment area, or are undergoing specific medical treatments. Your consultation includes a full health review to ensure permanent makeup is right for you.',
  },
  {
    q: 'How do I book a consultation?',
    a: 'Simply complete the consultation form at the bottom of this page. Complimentary consultations are available both in-studio and virtually, and we will be in touch within 24 hours to find a time that suits you.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="w-full bg-ivory py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Questions &amp; Answers
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-4xl italic text-espresso sm:text-5xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 max-w-[760px]">
            <Accordion className="w-full">
              {FAQS.map((faq, index) => (
                <AccordionItem
                  key={faq.q}
                  value={index}
                  className="border-b border-blush/30"
                >
                  <AccordionTrigger className="py-5 font-heading text-lg font-normal text-espresso hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-relaxed text-espresso/70">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
