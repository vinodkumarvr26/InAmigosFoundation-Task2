import {
  MessageCircleHeart,
  Brain,
  Focus,
  Moon,
  NotebookPen,
  Trophy,
} from 'lucide-react'

const FEATURES = [
  {
    icon: MessageCircleHeart,
    title: 'AI Mood Check-ins',
    desc: 'Track emotions and identify wellness patterns through intelligent conversations.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Brain,
    title: 'Guided Meditation',
    desc: 'Personalized sessions for stress reduction and mindfulness.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: Focus,
    title: 'Focus Sessions',
    desc: 'Improve concentration using AI-assisted productivity techniques.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Moon,
    title: 'Sleep Companion',
    desc: 'Develop healthier sleep habits with calming routines.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: NotebookPen,
    title: 'Wellness Journaling',
    desc: 'Capture thoughts and reflect through guided prompts.',
    color: 'text-success',
    bg: 'bg-success/10',
  },
  {
    icon: Trophy,
    title: 'Growth Challenges',
    desc: 'Build confidence and positive habits through structured activities.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
]

export function Features() {
  return (
    <section id="features" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="reveal text-sm font-600 uppercase tracking-widest text-primary">
          Features
        </span>
        <h2 className="reveal mt-4 text-balance font-heading text-2xl font-700 leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          How MindBloom AI Helps You Thrive
        </h2>
        <p className="reveal mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          A complete toolkit of AI-powered experiences crafted to support your
          mind, mood, focus, and growth — every single day.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, i) => (
          <article
            key={feature.title}
            className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            style={{ transitionDelay: `${(i % 3) * 60}ms` }}
          >
            <span
              className={`flex size-14 items-center justify-center rounded-2xl ${feature.bg} ${feature.color} transition-transform group-hover:scale-110`}
            >
              <feature.icon className="size-7" aria-hidden="true" />
            </span>
            <h3 className="mt-6 font-heading text-lg font-700 sm:text-xl">{feature.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {feature.desc}
            </p>
            <div className="pointer-events-none absolute -bottom-12 -right-12 size-32 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </section>
  )
}
