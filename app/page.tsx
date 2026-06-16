'use client'

import { useScrollReveal } from '@/lib/hooks'
import { Navbar } from '@/components/navbar'
import { ScrollProgress } from '@/components/scroll-progress'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Features } from '@/components/features'
import { Journey } from '@/components/journey'
import { Stats } from '@/components/stats'
import { Testimonials } from '@/components/testimonials'
import { Resources } from '@/components/resources'
import { FAQ } from '@/components/faq'
import { CTA } from '@/components/cta'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  useScrollReveal()

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Journey />
        <Stats />
        <Testimonials />
        <Resources />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
