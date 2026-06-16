import { Heart, Eye, Target } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <span className="reveal text-sm font-600 uppercase tracking-widest text-primary">
          About MindBloom AI
        </span>
        <h2 className="reveal mt-4 text-balance font-heading text-2xl font-700 leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Mental Wellness Meets{' '}
          <span className="text-gradient">Artificial Intelligence</span>
        </h2>
        <p className="reveal mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          MindBloom AI combines evidence-based wellness practices with
          artificial intelligence to provide personalized emotional support,
          stress management resources, productivity tools, and self-care
          experiences.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
        <div className="reveal glass rounded-3xl p-8">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Target className="size-6" aria-hidden="true" />
          </span>
          <h3 className="mt-5 font-heading text-lg font-700 sm:text-xl">Our Mission</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            To make mental wellness support accessible, stigma-free, and
            available whenever people need it.
          </p>
        </div>
        <div className="reveal glass rounded-3xl p-8">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <Eye className="size-6" aria-hidden="true" />
          </span>
          <h3 className="mt-5 font-heading text-lg font-700 sm:text-xl">Our Vision</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            To create a world where emotional well-being is supported through
            technology, empathy, and innovation.
          </p>
        </div>
      </div>

      <div className="reveal mx-auto mt-6 flex max-w-5xl items-center gap-4 rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-8">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-success/15 text-success">
          <Heart className="size-6" aria-hidden="true" />
        </span>
        <p className="text-pretty leading-relaxed text-foreground">
          Every interaction is designed to feel warm, welcoming, and genuinely
          supportive — like a companion that truly understands you.
        </p>
      </div>
    </section>
  )
}
