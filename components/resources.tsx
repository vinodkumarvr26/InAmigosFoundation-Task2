import {
  Wind,
  Repeat,
  Flower2,
  Zap,
  Scale,
  HandHeart,
  ArrowUpRight,
} from 'lucide-react'

const RESOURCES = [
  {
    icon: Wind,
    title: 'Managing Stress',
    desc: 'Practical techniques to calm your mind in moments of pressure.',
  },
  {
    icon: Repeat,
    title: 'Building Healthy Habits',
    desc: 'Small, sustainable changes that compound into lasting wellness.',
  },
  {
    icon: Flower2,
    title: 'Mindfulness Practices',
    desc: 'Stay present and grounded with simple daily exercises.',
  },
  {
    icon: Zap,
    title: 'Productivity Strategies',
    desc: 'Work with focus and intention without burning out.',
  },
  {
    icon: Scale,
    title: 'Work-Life Balance',
    desc: 'Set boundaries that protect your energy and your time.',
  },
  {
    icon: HandHeart,
    title: 'Self-Care Essentials',
    desc: 'Nurture yourself with rituals that restore and recharge.',
  },
]

export function Resources() {
  return (
    <section id="resources" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="reveal text-sm font-600 uppercase tracking-widest text-primary">
          Resources
        </span>
        <h2 className="reveal mt-4 text-balance font-heading text-2xl font-700 leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Wellness Resources
        </h2>
        <p className="reveal mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Explore curated guides and practices to support your growth at every
          stage of your journey.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {RESOURCES.map((r, i) => (
          <a
            key={r.title}
            href="#cta"
            className="reveal group flex flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10"
            style={{ transitionDelay: `${(i % 3) * 60}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <r.icon className="size-6" aria-hidden="true" />
              </span>
              <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </div>
            <h3 className="mt-5 font-heading text-base font-700 sm:text-lg">{r.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {r.desc}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}
