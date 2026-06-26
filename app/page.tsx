import { SiteNav } from '@/components/site/site-nav'
import { Hero } from '@/components/site/hero'
import { TrustBar } from '@/components/site/trust-bar'
import { Services } from '@/components/site/services'
import { About } from '@/components/site/about'
import { Process } from '@/components/site/process'
import { Gallery } from '@/components/site/gallery'
import { Testimonials } from '@/components/site/testimonials'
import { Faq } from '@/components/site/faq'
import { ConsultationForm } from '@/components/site/consultation-form'
import { SiteFooter } from '@/components/site/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteNav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Process />
        <Gallery />
        <Testimonials />
        <Faq />
        <ConsultationForm />
      </main>
      <SiteFooter />
    </div>
  )
}
