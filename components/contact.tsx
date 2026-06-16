'use client'

import { useState } from 'react'
import { Send, Check, Bird, Hash, Globe } from 'lucide-react'

const SOCIALS = [
  { icon: Bird, label: 'Twitter', href: '#' },
  { icon: Hash, label: 'Instagram', href: '#' },
  { icon: Globe, label: 'LinkedIn', href: '#' },
  { icon: Send, label: 'Newsletter', href: '#' },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div className="reveal flex flex-col justify-center">
          <span className="text-sm font-600 uppercase tracking-widest text-primary">
            Contact
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-700 leading-tight tracking-tight sm:text-4xl">
            Let&apos;s Start a Conversation
          </h2>
          <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Have a question or want to learn more about how MindBloom AI can
            support you? We&apos;d love to hear from you.
          </p>

          <div className="mt-8 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex size-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                <s.icon className="size-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="reveal glass rounded-3xl p-8 shadow-xl shadow-primary/5"
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-600">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-600">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="How can we support you?"
                className="resize-none rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-600 text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
            >
              {sent ? (
                <>
                  <Check className="size-5" /> Message Sent
                </>
              ) : (
                <>
                  <Send className="size-5" /> Send Message
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
