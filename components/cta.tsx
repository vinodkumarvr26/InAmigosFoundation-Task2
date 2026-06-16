import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section id="cta" className="px-6 py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-8 py-16 text-center sm:px-12 sm:py-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
          }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute -left-16 -top-16 size-64 rounded-full bg-background/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 size-72 rounded-full bg-background/10 blur-2xl" />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="reveal text-balance font-heading text-3xl font-800 leading-tight tracking-tight text-background sm:text-4xl lg:text-5xl">
            Your Wellness Journey Starts Today.
          </h2>
          <p className="reveal mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-background/85">
            Take the first step toward emotional resilience and personal growth
            with MindBloom AI.
          </p>
          <div className="reveal mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-background px-7 py-3.5 text-base font-700 text-primary shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Get Started Free
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-background/40 px-7 py-3.5 text-base font-600 text-background transition-colors hover:bg-background/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
