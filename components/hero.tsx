import Image from 'next/image'
import { ArrowRight, Activity, Sparkles, Clock } from 'lucide-react'

const FLOATING_CARDS = [
  {
    icon: Activity,
    title: '92%',
    sub: 'Users Feel Less Stressed',
    className: 'lg:left-0 lg:top-8 lg:animate-floaty',
    accent: 'text-success',
  },
  {
    icon: Sparkles,
    title: '5000+',
    sub: 'Wellness Sessions Completed',
    className: 'lg:right-0 lg:top-32 lg:animate-floaty-slow',
    accent: 'text-secondary',
  },
  {
    icon: Clock,
    title: '24/7',
    sub: 'AI Support Available',
    className: 'lg:bottom-4 lg:left-6 lg:animate-floaty-slow',
    accent: 'text-accent',
  },
]

export function Hero() {
  return (
    <section
      id="home"
      className="mesh-bg relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16"
    >
      {/* Decorative floating blobs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 size-72 rounded-full bg-primary/20 blur-3xl animate-floaty-slow" />
      <div className="pointer-events-none absolute right-0 top-10 size-80 rounded-full bg-accent/20 blur-3xl animate-floaty" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="reveal is-visible flex flex-col items-start gap-6">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-500 text-foreground sm:px-4 sm:py-2 sm:text-sm">
            <span className="size-2 rounded-full bg-success" />
            Your Personal AI Companion for Mental Wellness
          </span>

          <h1 className="text-balance font-heading text-3xl font-800 leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Breathe Better.
            <br />
            Think Clearer.
            <br />
            <span className="text-gradient">Live Happier.</span>
          </h1>

          <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-lg">
            MindBloom AI empowers students and young professionals with
            personalized AI-powered tools designed to improve emotional
            well-being, build resilience, and support personal growth.
          </p>

          <div className="flex w-full flex-col gap-3 sm:flex-row">
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-600 text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 sm:px-6 sm:py-3.5 sm:text-base"
            >
              Start Your Wellness Journey
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 sm:size-5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-600 text-foreground transition-colors hover:bg-muted sm:px-6 sm:py-3.5 sm:text-base"
            >
              Explore Features
            </a>
          </div>
        </div>

        {/* Visual with floating cards */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="relative mx-auto hidden aspect-square w-full lg:block">
            <div className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-border/60 shadow-2xl shadow-primary/10">
              <Image
                src="/wellness-hero.png"
                alt="A glowing blooming flower of light representing mental wellness and personal growth"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 512px"
                className="object-cover"
              />
            </div>

            {FLOATING_CARDS.map((card) => (
              <div
                key={card.sub}
                className={`glass absolute flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl ${card.className}`}
              >
                <span className={`flex size-9 shrink-0 items-center justify-center rounded-xl bg-card ${card.accent}`}>
                  <card.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="font-heading text-lg font-700 leading-none">{card.title}</span>
                  <span className="text-xs text-muted-foreground">{card.sub}</span>
                </span>
              </div>
            ))}
          </div>

          {/* Mobile: stacked cards */}
          <div className="flex flex-col gap-3 lg:hidden">
            {FLOATING_CARDS.map((card) => (
              <div
                key={card.sub}
                className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg"
              >
                <span className={`flex size-9 shrink-0 items-center justify-center rounded-xl bg-card ${card.accent}`}>
                  <card.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="font-heading text-base font-700 leading-none">{card.title}</span>
                  <span className="text-xs text-muted-foreground">{card.sub}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
