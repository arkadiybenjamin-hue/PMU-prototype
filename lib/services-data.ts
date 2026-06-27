import { Feather, Sparkles, PenTool, Heart, Eye, Minus } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type ServiceFaq = {
  q: string
  a: string
}

export type AftercareTip = {
  day: string
  instructions: string
}

export type Service = {
  slug: string
  name: string
  icon: LucideIcon
  tagline: string
  short: string
  long: string
  idealFor: string[]
  notIdealFor: string[]
  pricingFrom: number
  pricingNote: string
  duration: string
  longevity: string
  healingDays: string
  touchUpIncluded: boolean
  faqs: ServiceFaq[]
  aftercare: string[]
  relatedSlugs: string[]
}

export const SERVICES: Service[] = [
  {
    slug: 'microblading',
    name: 'Microblading',
    icon: Feather,
    tagline: 'Feather-light strokes for a naturally full brow.',
    short:
      'Hair-stroke technique that mimics natural brow hairs for a defined, feathery look. Ideal for sparse or uneven brows.',
    long: 'Microblading uses a fine, handheld blade to deposit pigment in delicate, hair-like strokes that blend seamlessly with your existing brows. The result is a soft, natural definition that flatters your face shape. Each stroke is placed with intention — following your natural growth direction and mapped precisely to your unique bone structure. Best suited to normal-to-dry skin, results typically last 12–18 months before a refresh is recommended.',
    idealFor: [
      'Sparse or thin brows',
      'Uneven brow shape',
      'Normal to dry skin types',
      'Those new to permanent makeup',
      'Clients seeking a very natural result',
    ],
    notIdealFor: [
      'Oily or combination skin (strokes can blur over time)',
      'Mature or very textured skin',
      'Active acne in the brow area',
      'Clients undergoing certain medical treatments',
    ],
    pricingFrom: 650,
    pricingNote: 'Includes complimentary perfecting touch-up at 6–8 weeks.',
    duration: '2.5 – 3 hours',
    longevity: '12 – 18 months',
    healingDays: '7 – 14 days surface healing; 4 – 6 weeks for full color to settle',
    touchUpIncluded: true,
    faqs: [
      {
        q: 'How is microblading different from powder brows?',
        a: 'Microblading creates individual hair-like strokes using a handheld blade, producing a softer, more natural look. Powder brows use a machine to create a misted, filled-in effect. Microblading is best for normal-to-dry skin; powder brows outperform on oily or mature skin.',
      },
      {
        q: 'Will microblading look natural on me?',
        a: 'Yes — when done correctly, microblading should look completely undetectable. Your artist will map your brows to your bone structure, match pigment to your natural hair colour, and create strokes that mimic real hair growth so no one can tell the difference.',
      },
      {
        q: 'How do I know if my skin type is suitable?',
        a: 'During your complimentary consultation, your artist will assess your skin type and condition. Generally, normal and dry skin holds microblading strokes beautifully. If you have oily skin, nano brows or powder brows may be recommended for better longevity.',
      },
      {
        q: 'What does the touch-up appointment involve?',
        a: 'The included 6–8 week touch-up is where your artist perfects the result. Once your skin has healed completely, they can refine the shape, fill any areas where pigment did not retain as expected, and make final adjustments to colour or density.',
      },
    ],
    aftercare: [
      'Keep the area dry for the first 7 days — no sweating, swimming, or steam.',
      'Apply the provided aftercare balm in a very thin layer twice daily.',
      'Do not pick, scratch, or peel any flaking skin — let it shed naturally.',
      'Avoid direct sun exposure. Apply SPF 50 once fully healed.',
      'Skip retinols, acids, and exfoliants near the brow area during healing.',
    ],
    relatedSlugs: ['nano-brows', 'powder-brows'],
  },
  {
    slug: 'powder-brows',
    name: 'Powder Brows / Ombré Brows',
    icon: Sparkles,
    tagline: 'A soft, powdered finish that wears beautifully on every skin type.',
    short:
      'A soft, powdered finish that resembles the look of filled-in brows. Longer lasting and ideal for oily or mature skin.',
    long: 'Powder and ombré brows create a soft, misted effect — lighter at the front and gradually deeper toward the tail. The technique is beautifully buildable, from a barely-there veil to a fuller, defined finish. It is exceptionally long-lasting and the preferred choice for oily or mature skin types. Unlike microblading, the machine technique does not open the skin in strokes, making it gentler on delicate or sensitive complexions and delivering consistently reliable retention.',
    idealFor: [
      'Oily or combination skin',
      'Mature or textured skin',
      'Clients who prefer a more defined, filled-in look',
      'Those who wear brow makeup daily and want to wake up ready',
      'Anyone who wants the longest-lasting brow result',
    ],
    notIdealFor: [
      'Clients who want a very hair-stroke natural result (consider nano brows)',
      'Very thin skin with visible capillaries — consultation required',
      'Active skin conditions in the brow area',
    ],
    pricingFrom: 600,
    pricingNote: 'Includes complimentary perfecting touch-up at 6–8 weeks.',
    duration: '2 – 2.5 hours',
    longevity: '18 – 24 months',
    healingDays: '7 – 14 days surface healing; 4 – 6 weeks for full color to settle',
    touchUpIncluded: true,
    faqs: [
      {
        q: 'What is the difference between powder brows and ombré brows?',
        a: 'The terms are often used interchangeably. Ombré brows specifically describe the gradient effect — lighter at the inner corner, gradually deeper toward the tail. Powder brows is a broader term for the machine-stippled technique. Both are achieved with the same method; ombré simply describes the shading distribution.',
      },
      {
        q: 'Will powder brows look natural or too "done"?',
        a: 'That depends entirely on how you want them. Your artist can create anything from the softest, most barely-there veil to a bolder, defined finish — it is completely customisable. Most clients are surprised by how natural a soft powder brow looks in person.',
      },
      {
        q: 'How long do powder brows last compared to microblading?',
        a: 'Powder brows typically last 18–24 months, compared to 12–18 months for microblading. On oily skin specifically, powder brows can outlast microblading by a significant margin because the stippling technique retains pigment more reliably in larger pores.',
      },
      {
        q: 'Can I combine powder brows with hair strokes?',
        a: 'Yes — a combo brow technique blends hair strokes at the front for a natural appearance with a powder finish through the body and tail. This is one of our most popular options. Ask about this during your consultation.',
      },
    ],
    aftercare: [
      'Keep the area dry for the first 7 days — no sweating, swimming, or steam.',
      'Apply the provided aftercare balm in a very thin layer twice daily.',
      'Do not pick, scratch, or peel any flaking skin — let it shed naturally.',
      'Avoid direct sun exposure. Apply SPF 50 once fully healed.',
      'Skip retinols, acids, and exfoliants near the brow area during healing.',
    ],
    relatedSlugs: ['microblading', 'nano-brows'],
  },
  {
    slug: 'nano-brows',
    name: 'Nano Brows',
    icon: PenTool,
    tagline: 'The most lifelike hair-stroke brow, achieved with machine precision.',
    short:
      'Ultra-fine hair strokes applied with a digital machine for exceptional precision and longevity.',
    long: 'Nano brows use a single ultra-fine needle and a digital machine to create crisp, lifelike hair strokes with remarkable control. The precision allows your artist to tailor every stroke to your natural growth pattern, delivering the most realistic result possible. Because the needle moves in a controlled, consistent motion, nano brows achieve better pigment retention than manual microblading and work across a wider range of skin types — including combination and mildly oily skin. The result looks like real hair, only better.',
    idealFor: [
      'All skin types including combination and mildly oily skin',
      'Clients who love the hair-stroke look but have oily skin',
      'Those who want maximum realism and detail',
      'Anyone who tried microblading and experienced blur or fading',
      'Clients wanting the longest-lasting hair-stroke result',
    ],
    notIdealFor: [
      'Very oily skin (powder brows may still be recommended)',
      'Active acne or skin conditions in the brow area',
      'Clients who prefer a softer, less defined result',
    ],
    pricingFrom: 750,
    pricingNote: 'Includes complimentary perfecting touch-up at 6–8 weeks.',
    duration: '2.5 – 3.5 hours',
    longevity: '18 – 24 months',
    healingDays: '7 – 14 days surface healing; 4 – 6 weeks for full color to settle',
    touchUpIncluded: true,
    faqs: [
      {
        q: 'How does nano brows differ from microblading?',
        a: 'Both create hair-like strokes, but nano brows use a digital machine with a single ultra-fine needle rather than a handheld blade. The machine delivers more consistent depth and spacing, resulting in crisper strokes, better pigment retention, and suitability for a broader range of skin types.',
      },
      {
        q: 'Is the nano brow technique less painful than microblading?',
        a: 'Most clients find the sensation very similar. A topical numbing agent is applied before and during the procedure for both techniques. Some clients find the machine vibration slightly more comfortable than the blade sensation of microblading — but individual experience varies.',
      },
      {
        q: 'Are nano brows worth the additional investment over microblading?',
        a: 'For clients with combination or mildly oily skin, absolutely — the improved retention means better results between refreshes. For dry skin clients who are good microblading candidates, the difference is subtler. Your artist will recommend the most appropriate technique during consultation.',
      },
      {
        q: 'Can nano brows be used to correct previous brow work?',
        a: 'In some cases, yes. Correction work is assessed individually — the existing pigment, healed saturation, and colour tone all affect whether nano brows can be layered over old work. A consultation with photos of your current brows is required before booking a correction appointment.',
      },
    ],
    aftercare: [
      'Keep the area dry for the first 7 days — no sweating, swimming, or steam.',
      'Apply the provided aftercare balm in a very thin layer twice daily.',
      'Do not pick, scratch, or peel any flaking skin — let it shed naturally.',
      'Avoid direct sun exposure. Apply SPF 50 once fully healed.',
      'Skip retinols, acids, and exfoliants near the brow area during healing.',
    ],
    relatedSlugs: ['microblading', 'powder-brows'],
  },
  {
    slug: 'lip-blushing',
    name: 'Lip Blushing',
    icon: Heart,
    tagline: 'Enhance your natural lip tone, shape, and symmetry — effortlessly.',
    short:
      'A subtle wash of pigment that defines, shapes, and adds color to the lips. Corrects asymmetry with zero "done" look.',
    long: 'Lip blushing enhances your natural lip tone with a soft, diffused wash of color that defines the shape and corrects subtle asymmetry. It revives faded lips and creates the illusion of fullness — all while looking entirely your own. Custom color matching ensures a flattering, never-overdone finish. The result wears as your lips, only more defined, more even, and more vibrant. Many clients find lip blushing transforms how they feel without makeup — brighter, more awake, more confident.',
    idealFor: [
      'Faded or uneven lip tone',
      'Lip asymmetry you want to correct subtly',
      'Anyone who wears lip liner or lipstick daily',
      'Clients who want natural-looking fullness without filler',
      'Post-filler clients wanting to enhance definition',
    ],
    notIdealFor: [
      'Active cold sores — an antiviral prescription is required before treatment',
      'Lips with significant scar tissue — consultation required',
      'Very dark natural lip pigmentation — results may be more subtle',
      'Clients with unrealistic colour expectations — a consultation is essential',
    ],
    pricingFrom: 575,
    pricingNote: 'Antiviral prescription required 3 days prior. Includes complimentary touch-up at 6–8 weeks.',
    duration: '2.5 – 3 hours',
    longevity: '2 – 3 years',
    healingDays: '5 – 10 days surface healing; up to 6 weeks for full color to settle',
    touchUpIncluded: true,
    faqs: [
      {
        q: 'Will lip blushing make my lips look overdone?',
        a: 'Not at all — that is exactly what the technique is designed to avoid. The goal is to enhance what is already there: to make your lips look more defined, more even, and more vibrant, as if you were simply born with great lips. Your artist will match colour to your natural tone and can go as subtle or as buildable as you prefer.',
      },
      {
        q: 'Does lip blushing hurt more than brow treatments?',
        a: 'Lips are more sensitive than brows, but numbing cream is applied before and throughout the procedure. Most clients describe the sensation as manageable — a mild pressure and warmth. The numbing is very effective on lips and most clients are pleasantly surprised.',
      },
      {
        q: 'Do I need an antiviral before my appointment?',
        a: 'Yes. Anyone who has ever had a cold sore (oral herpes) — even just once, even years ago — must take an antiviral medication starting 3 days before their appointment. This prevents the treatment from triggering an outbreak. Your GP can prescribe this; we can advise on what to ask for.',
      },
      {
        q: 'What colour will my lips look immediately after?',
        a: 'They will appear significantly darker and more intense in the first few days — this is completely normal. The colour will fade by 30–50% during healing before settling into the final, softer result. Your artist will account for this when selecting the initial pigment saturation.',
      },
    ],
    aftercare: [
      'Keep lips moisturised at all times with the provided healing balm for the first 5 days.',
      'Avoid kissing, rubbing, or stretching lips excessively during healing.',
      'No hot drinks, spicy food, or salty foods for the first 48 hours.',
      'Do not peel or pick any flaking — the colour is embedded in the skin beneath.',
      'Avoid sun exposure and tanning treatments on the lips during healing.',
    ],
    relatedSlugs: ['eyeliner-tattoo', 'lash-line-enhancement'],
  },
  {
    slug: 'eyeliner-tattoo',
    name: 'Eyeliner Tattoo',
    icon: Eye,
    tagline: 'Wake up with defined, smudge-free eyes — every single morning.',
    short:
      'Permanent definition along the lash line — from natural enhancement to a classic liner look.',
    long: 'Eyeliner tattoo delivers effortlessly defined eyes that never smudge or fade through the day. Choose anything from a soft, natural lash-line tint to a crisp, classic wing. Pigment and intensity are tailored to your eye shape and personal style for a polished, wake-up-ready result. Whether you want the subtle illusion of fuller lashes, a defined upper line, or a lifted, winged effect, your artist will design a shape that flatters your specific eye anatomy — no one-size-fits-all approach.',
    idealFor: [
      'Anyone who wears eyeliner every day',
      'Clients with allergies to conventional eye makeup',
      'Active lifestyles — gym, swimming, and sport',
      'Those who struggle with shaky hands or steady application',
      'Clients who want their eyes to look brighter and more awake without makeup',
    ],
    notIdealFor: [
      'Very sensitive or dry eyes — consultation required',
      'Contact lens wearers who cannot remove lenses for 24 hours',
      'Clients with certain eye conditions or recent eye surgery',
      'Those who frequently change their eyeliner style drastically',
    ],
    pricingFrom: 525,
    pricingNote: 'Upper lid, lower lid, or both — pricing discussed at consultation. Includes touch-up at 6–8 weeks.',
    duration: '2 – 2.5 hours',
    longevity: '3 – 5 years',
    healingDays: '5 – 7 days surface healing; 4 weeks for full colour to settle',
    touchUpIncluded: true,
    faqs: [
      {
        q: 'Will the eyeliner look too harsh or obvious?',
        a: 'The style is entirely your choice. Your artist will design the shape and discuss thickness and wing style before any pigment is applied. The most popular request is a soft, diffused line that creates depth rather than a harsh edge — most people cannot tell it is tattooed.',
      },
      {
        q: 'Does eyeliner tattoo hurt near the eyes?',
        a: 'A topical anaesthetic gel is applied to the lid before the procedure begins and reapplied as needed. Most clients find it very tolerable — a mild vibration or pressure sensation. The eye area is numbed effectively and the procedure moves quickly.',
      },
      {
        q: 'How long does eyeliner tattoo last compared to brow treatments?',
        a: 'Eyeliner tattoo is one of the longest-lasting PMU treatments — typically 3–5 years before a refresh is needed. The eyelid skin is thin and receives less UV exposure and exfoliation than other areas, contributing to excellent pigment longevity.',
      },
      {
        q: 'Can I have both upper and lower lids done?',
        a: 'Yes, both can be done in a single session. Upper lids only, lower lids only, or a combination — pricing and recommended style will be discussed at your consultation based on your eye shape and goals.',
      },
    ],
    aftercare: [
      'Avoid water on the eyes for 5 days — wash your face carefully around the eye area.',
      'Apply the provided gel in a thin layer twice daily to keep the area moist.',
      'Do not rub or touch the eye area unnecessarily during healing.',
      'Avoid mascara and eye makeup entirely for 10 days.',
      'Sleep on a clean pillowcase and avoid touching your face during sleep.',
    ],
    relatedSlugs: ['lash-line-enhancement', 'lip-blushing'],
  },
  {
    slug: 'lash-line-enhancement',
    name: 'Lash Line Enhancement',
    icon: Minus,
    tagline: 'The most natural eye treatment — invisible depth between every lash.',
    short:
      'The most natural eyeliner option. Pigment deposited between the lashes for depth and fullness without visible liner.',
    long: 'Lash line enhancement is our most subtle eye treatment. Pigment is placed precisely between the lashes to create the illusion of thicker, fuller lashes — invisible yet impactful. There is no visible liner, just brighter, more defined eyes that look naturally luminous. This technique is ideal for clients who want to wake up with beautiful eyes without any obvious sign of makeup or permanent cosmetics. It is also a popular first step for those new to permanent makeup who want to test the experience before committing to a more visible treatment.',
    idealFor: [
      'PMU-curious clients wanting a subtle first treatment',
      'Those who want fuller-looking lashes without mascara',
      'Clients who prefer zero visible liner — just natural depth',
      'Men and women who want brighter, more awake eyes',
      'Contact lens wearers comfortable with the treatment protocol',
    ],
    notIdealFor: [
      'Clients with active eye infections or conditions',
      'Those with extreme sensitivity in the eye area',
      'Clients who want a clearly visible liner — consider eyeliner tattoo',
    ],
    pricingFrom: 450,
    pricingNote: 'Upper lash line only. Lower lash line available as an add-on. Includes touch-up at 6–8 weeks.',
    duration: '1.5 – 2 hours',
    longevity: '2 – 4 years',
    healingDays: '3 – 5 days surface healing; 4 weeks for full colour to settle',
    touchUpIncluded: true,
    faqs: [
      {
        q: 'Is lash line enhancement the same as eyeliner tattoo?',
        a: 'They use the same technique but achieve different results. Lash line enhancement deposits pigment only between the lashes — no liner is visible above the lash line. It creates depth and fullness. Eyeliner tattoo extends visibly above the lash line to create a defined liner look.',
      },
      {
        q: 'Will people be able to tell I have had it done?',
        a: 'No — that is the defining feature of this treatment. The pigment is placed between the lashes, invisible unless someone is looking very closely. The result is simply that your eyes look brighter, your lashes appear thicker, and you look more awake. It reads as natural.',
      },
      {
        q: 'Can I wear contact lenses after the treatment?',
        a: 'You will need to avoid contact lenses for 24–48 hours after the procedure. Glasses should be worn during this period. After that, contact lens use can resume normally once the area has settled.',
      },
      {
        q: 'Can I upgrade to a full eyeliner look later?',
        a: 'Yes. Lash line enhancement can be built upon in a future session to create a more defined liner if you decide you want more. Many clients start here and later choose to extend upward into a classic or winged liner style.',
      },
    ],
    aftercare: [
      'Avoid water on the eyes for 3–5 days.',
      'Apply the provided gel in a thin layer twice daily.',
      'Do not rub or touch the eye area unnecessarily.',
      'Avoid mascara and eye makeup for 7 days.',
      'Sleep on a clean pillowcase during healing.',
    ],
    relatedSlugs: ['eyeliner-tattoo', 'lip-blushing'],
  },
]

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

export function getRelatedServices(slugs: string[]): Service[] {
  return SERVICES.filter((s) => slugs.includes(s.slug))
}
