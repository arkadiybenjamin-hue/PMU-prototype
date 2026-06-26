'use client'

import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field'
import { Reveal } from '@/components/site/reveal'

const SERVICE_OPTIONS = [
  'Microblading',
  'Powder Brows / Ombré Brows',
  'Nano Brows',
  'Lip Blushing',
  'Eyeliner Tattoo',
  'Lash Line Enhancement',
  'Not sure yet',
]

const CONTACT_METHODS = [
  { value: 'phone', label: 'Phone Call' },
  { value: 'text', label: 'Text Message' },
  { value: 'email', label: 'Email' },
]

export function ConsultationForm() {
  const [firstName, setFirstName] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmittedName(firstName)
    setSubmitted(true)
  }

  return (
    <section id="consultation" className="w-full bg-linen py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Take The First Step
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-4xl italic text-espresso sm:text-5xl">
              Reserve Your Consultation
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-lg leading-relaxed text-espresso/70">
              Complimentary consultations are available in-studio and virtually.
              Fill out the form below and we&apos;ll be in touch within 24 hours.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-12 max-w-[600px] rounded-2xl border border-blush/30 bg-ivory p-8 sm:p-10">
            {submitted ? (
              <div className="flex min-h-72 flex-col items-center justify-center text-center">
                <p className="font-heading text-2xl italic text-gold sm:text-3xl">
                  Thank you, {submittedName || 'lovely'}. We&apos;ll be in touch
                  within 24 hours.
                </p>
                <p className="mt-4 text-[15px] text-espresso/60">
                  Keep an eye on your inbox and phone — your journey to
                  effortless beauty has begun.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <FieldGroup>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        autoComplete="given-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        autoComplete="family-name"
                      />
                    </Field>
                  </div>

                  <Field>
                    <FieldLabel htmlFor="email">Email Address</FieldLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                    />
                  </Field>

                  <Field>
                    <FieldLabel>Service of Interest</FieldLabel>
                    <Select>
                      <SelectTrigger className="h-10 w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {SERVICE_OPTIONS.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>

                  <FieldSet>
                    <FieldLegend variant="label">
                      Preferred Contact Method
                    </FieldLegend>
                    <RadioGroup
                      defaultValue="phone"
                      className="flex flex-col gap-3 sm:flex-row sm:gap-6"
                    >
                      {CONTACT_METHODS.map((method) => (
                        <Label
                          key={method.value}
                          className="flex items-center gap-2 text-[15px] font-normal text-espresso/80"
                        >
                          <RadioGroupItem value={method.value} />
                          {method.label}
                        </Label>
                      ))}
                    </RadioGroup>
                  </FieldSet>

                  <Field>
                    <FieldLabel htmlFor="message">
                      Message / Questions
                    </FieldLabel>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us a little about what you're looking for..."
                    />
                  </Field>

                  <Label className="flex items-start gap-3 text-[14px] font-normal leading-relaxed text-espresso/70">
                    <Checkbox
                      checked={agreed}
                      onCheckedChange={(value) => setAgreed(value === true)}
                      className="mt-0.5"
                    />
                    I agree to be contacted by Maison Lumière regarding my
                    consultation request.
                  </Label>

                  <Button
                    type="submit"
                    disabled={!agreed}
                    className="h-12 w-full bg-gold text-[13px] font-medium uppercase tracking-[0.12em] text-espresso hover:bg-gold/85"
                  >
                    Send My Request
                  </Button>

                  <p className="text-center text-[13px] text-espresso/50">
                    We respect your privacy. Your information is never shared.
                  </p>
                </FieldGroup>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
