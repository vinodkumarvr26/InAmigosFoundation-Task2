import Image from 'next/image'
import { Quote, Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      'MindBloom AI helped me manage academic stress and improve focus during exams.',
    name: 'Aisha Rahman',
    role: 'University Student',
    avatar: '/avatar-1.png',
  },
  {
    quote:
      'Daily check-ins encouraged me to prioritize self-care while balancing work responsibilities.',
    name: 'Daniel Okafor',
    role: 'Young Professional',
    avatar: '/avatar-2.png',
  },
  {
    quote:
      'The guided activities helped me build confidence and healthier routines.',
    name: 'Sofia Mendes',
    role: 'Recent Graduate',
    avatar: '/avatar-3.png',
  },
]

export function Testimonials() {
  return (
    <section id="stories" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="reveal text-sm font-600 uppercase tracking-widest text-primary">
          Success Stories
        </span>
        <h2 className="reveal mt-4 text-balance font-heading text-2xl font-700 leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Real Stories of Growth
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={t.name}
            className="reveal flex flex-col rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <Quote className="size-9 text-primary/30" aria-hidden="true" />
            <blockquote className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-foreground sm:text-base">
              “{t.quote}”
            </blockquote>
            <div className="mt-5 flex gap-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star
                  key={s}
                  className="size-4 fill-chart-5 text-chart-5"
                  aria-hidden="true"
                />
              ))}
            </div>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-5">
              <Image
                src={t.avatar}
                alt={`Portrait of ${t.name}`}
                width={48}
                height={48}
                className="size-12 rounded-full object-cover"
              />
              <span className="flex flex-col">
                <span className="font-600 text-foreground">{t.name}</span>
                <span className="text-sm text-muted-foreground">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
