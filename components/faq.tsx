'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    q: 'How does MindBloom AI work?',
    a: 'MindBloom AI uses evidence-based wellness practices combined with intelligent conversations to understand how you feel and offer personalized support, guided activities, and insights tailored to your needs.',
  },
  {
    q: 'Is my information private?',
    a: 'Absolutely. Your privacy is our top priority. Your conversations and personal data are kept secure and confidential, and you remain in full control of your information at all times.',
  },
  {
    q: 'Can students use the platform?',
    a: 'Yes! MindBloom AI is designed specifically with students and young professionals in mind, helping you manage academic stress, improve focus, and build healthy routines.',
  },
  {
    q: 'Are the wellness activities personalized?',
    a: 'Every meditation, focus session, journaling prompt, and growth challenge adapts to your mood, goals, and progress so the experience always feels relevant to you.',
  },
  {
    q: 'How often should I use MindBloom AI?',
    a: 'Even a few minutes a day can make a meaningful difference. We recommend daily check-ins, but you can use MindBloom AI whenever you need support — it is available 24/7.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="reveal text-sm font-600 uppercase tracking-widest text-primary">
          FAQ
        </span>
        <h2 className="reveal mt-4 text-balance font-heading text-2xl font-700 leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Questions, Answered
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {FAQS.map((faq, i) => {
          const isOpen = open === i
          return (
            <div
              key={faq.q}
              className="reveal overflow-hidden rounded-2xl border border-border bg-card"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-heading text-sm font-600 sm:text-lg">
                  {faq.q}
                </span>
                <span
                  className={cn(
                    'flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300',
                    isOpen && 'rotate-45',
                  )}
                >
                  <Plus className="size-5" aria-hidden="true" />
                </span>
              </button>
              <div
                className={cn(
                  'grid transition-all duration-300 ease-out',
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
