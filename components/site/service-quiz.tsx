'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, RotateCcw } from 'lucide-react'
import { SERVICES } from '@/lib/services-data'

type Question = {
  id: string
  text: string
  options: { label: string; value: string }[]
}

const QUESTIONS: Question[] = [
  {
    id: 'area',
    text: 'Which area would you like to enhance?',
    options: [
      { label: 'My brows', value: 'brows' },
      { label: 'My lips', value: 'lips' },
      { label: 'My eyes', value: 'eyes' },
    ],
  },
  {
    id: 'skin',
    text: 'How would you describe your skin type?',
    options: [
      { label: 'Dry or normal', value: 'dry' },
      { label: 'Combination or mildly oily', value: 'combo' },
      { label: 'Oily or mature', value: 'oily' },
    ],
  },
  {
    id: 'look',
    text: 'What kind of result are you hoping for?',
    options: [
      { label: 'As natural as possible — no one should know', value: 'natural' },
      { label: 'Defined and polished, but still subtle', value: 'defined' },
      { label: 'Bold and fully made-up looking', value: 'bold' },
    ],
  },
]

function getRecommendation(answers: Record<string, string>): string | null {
  const { area, skin, look } = answers

  if (area === 'brows') {
    if (skin === 'oily') return 'powder-brows'
    if (look === 'natural' && skin === 'dry') return 'microblading'
    if (look === 'natural' || skin === 'combo') return 'nano-brows'
    if (look === 'bold') return 'powder-brows'
    return 'nano-brows'
  }

  if (area === 'lips') return 'lip-blushing'

  if (area === 'eyes') {
    if (look === 'natural') return 'lash-line-enhancement'
    return 'eyeliner-tattoo'
  }

  return null
}

export function ServiceQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<string | null>(null)

  const currentQuestion = QUESTIONS[step]
  const isComplete = result !== null
  const recommendedService = result ? SERVICES.find((s) => s.slug === result) : null

  function handleAnswer(value: string) {
    const newAnswers = { ...answers, [currentQuestion.id]: value }
    setAnswers(newAnswers)

    if (step < QUESTIONS.length - 1) {
      // Skip skin question for non-brow areas — not relevant
      const nextStep = step + 1
      const nextQ = QUESTIONS[nextStep]
      if (nextQ.id === 'skin' && newAnswers.area !== 'brows') {
        const skippedAnswers = { ...newAnswers, skin: 'dry' }
        setAnswers(skippedAnswers)
        if (nextStep + 1 < QUESTIONS.length) {
          setStep(nextStep + 1)
        } else {
          setResult(getRecommendation(skippedAnswers))
        }
      } else {
        setStep(nextStep)
      }
    } else {
      setResult(getRecommendation(newAnswers))
    }
  }

  function reset() {
    setStep(0)
    setAnswers({})
    setResult(null)
  }

  return (
    <section className="w-full bg-linen py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Not Sure Where to Start?
          </p>
          <h2 className="mt-4 font-heading text-4xl italic text-espresso sm:text-5xl">
            Find Your Perfect Service
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-espresso/70">
            Answer three quick questions and we will recommend the treatment best suited
            to your skin type, lifestyle, and goals.
          </p>

          <div className="mt-10 rounded-2xl border border-blush/30 bg-ivory p-8 sm:p-10">
            {!isComplete ? (
              <div>
                {/* Progress dots */}
                <div className="mb-8 flex items-center gap-2">
                  {QUESTIONS.map((q, i) => {
                    // Skip skin question dot for non-brow areas
                    if (q.id === 'skin' && answers.area && answers.area !== 'brows') return null
                    const questionIndex = QUESTIONS.findIndex((qq) => qq.id === q.id)
                    const isAnswered = questionIndex < step
                    const isCurrent = questionIndex === step
                    return (
                      <div
                        key={q.id}
                        className={[
                          'h-1.5 flex-1 rounded-full transition-colors',
                          isCurrent
                            ? 'bg-gold'
                            : isAnswered
                              ? 'bg-gold/60'
                              : 'bg-espresso/10',
                        ].join(' ')}
                      />
                    )
                  })}
                </div>

                <p className="font-heading text-[26px] text-espresso">
                  {currentQuestion.text}
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  {currentQuestion.options.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleAnswer(opt.value)}
                      className="flex w-full items-center justify-between rounded-xl border border-blush/40 bg-linen px-5 py-4 text-left text-[15px] font-medium text-espresso/80 transition-all hover:border-gold hover:bg-ivory hover:text-espresso"
                    >
                      {opt.label}
                      <ArrowRight className="size-4 shrink-0 text-gold" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                {recommendedService ? (
                  <>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
                      We Recommend
                    </p>
                    <div className="mt-3 flex items-start gap-4">
                      {(() => {
                        const Icon = recommendedService.icon
                        return <Icon className="mt-1 size-7 shrink-0 text-gold" strokeWidth={1.5} />
                      })()}
                      <div>
                        <h3 className="font-heading text-3xl text-espresso">
                          {recommendedService.name}
                        </h3>
                        <p className="mt-1 text-[14px] italic text-blush">
                          {recommendedService.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-[15px] leading-relaxed text-espresso/70">
                      {recommendedService.short}
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href={`/services/${recommendedService.slug}`}
                        className="inline-flex h-12 flex-1 items-center justify-center rounded-lg bg-gold text-[13px] font-medium uppercase tracking-[0.12em] text-espresso transition-colors hover:bg-gold/85"
                      >
                        View {recommendedService.name}
                        <ArrowRight className="ml-2 size-4" />
                      </Link>
                      <Link
                        href="/#consultation"
                        className="inline-flex h-12 flex-1 items-center justify-center rounded-lg border border-espresso/30 bg-transparent text-[13px] font-medium uppercase tracking-[0.12em] text-espresso transition-colors hover:bg-espresso hover:text-ivory"
                      >
                        Book a Consultation
                      </Link>
                    </div>
                    <button
                      type="button"
                      onClick={reset}
                      className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.1em] text-espresso/40 transition-colors hover:text-espresso/70"
                    >
                      <RotateCcw className="size-3" />
                      Start over
                    </button>
                  </>
                ) : (
                  <div className="text-center">
                    <p className="font-heading text-2xl italic text-espresso">
                      A consultation will help us find your perfect match.
                    </p>
                    <Link
                      href="/#consultation"
                      className="mt-6 inline-flex h-12 items-center rounded-lg bg-gold px-7 text-[13px] font-medium uppercase tracking-[0.12em] text-espresso transition-colors hover:bg-gold/85"
                    >
                      Reserve Your Consultation
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
