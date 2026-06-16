import { Compass, Sprout, LineChart, PartyPopper } from 'lucide-react'

const STEPS = [
  {
    icon: Compass,
    step: 'Step 1',
    title: 'Understand Yourself',
    desc: 'Begin with AI-guided check-ins that help you recognize your emotions and patterns.',
  },
  {
    icon: Sprout,
    step: 'Step 2',
    title: 'Build Healthy Habits',
    desc: 'Adopt personalized routines for mindfulness, focus, and restful sleep.',
  },
  {
    icon: LineChart,
    step: 'Step 3',
    title: 'Track Progress',
    desc: 'Visualize your growth with insights that keep you motivated and consistent.',
  },
  {
    icon: PartyPopper,
    step: 'Step 4',
    title: 'Celebrate Growth',
    desc: 'Reach milestones, build confidence, and celebrate every step forward.',
  },
]

export function Journey() {
  return (
    <section id="journey" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="reveal text-sm font-600 uppercase tracking-widest text-primary">
          Your Wellness Journey
        </span>
        <h2 className="reveal mt-4 text-balance font-heading text-2xl font-700 leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          A Clear Path to a Calmer Mind
        </h2>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl">
        {/* Connector line (desktop) */}
        <div
          className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-primary via-secondary to-accent lg:block"
          aria-hidden="true"
        />
        <ol className="grid gap-10 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className="reveal relative flex flex-col items-center text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="relative z-10 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                <s.icon className="size-6" aria-hidden="true" />
              </span>
              <span className="mt-5 text-xs font-700 uppercase tracking-widest text-accent">
                {s.step}
              </span>
              <h3 className="mt-2 font-heading text-base font-700 sm:text-lg">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
