'use client'

import { useCountUp } from '@/lib/hooks'

const STATS = [
  { value: 5000, suffix: '+', label: 'Users Supported' },
  { value: 12000, suffix: '+', label: 'Guided Sessions Completed' },
  { value: 92, suffix: '%', label: 'Reported Stress Reduction' },
  { value: 150, suffix: '+', label: 'Growth Challenges Completed' },
]

function StatItem({
  value,
  suffix,
  label,
}: {
  value: number
  suffix: string
  label: string
}) {
  const { value: count, ref } = useCountUp(value)
  return (
    <div className="reveal flex flex-col items-center text-center">
      <span
        ref={ref}
        className="font-heading text-3xl font-800 tracking-tight text-background sm:text-5xl lg:text-6xl"
      >
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="mt-3 text-xs font-500 text-background/70 sm:text-sm">{label}</span>
    </div>
  )
}

export function Stats() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-[#0f172a]" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(at 20% 30%, rgba(99,102,241,0.4) 0px, transparent 50%), radial-gradient(at 80% 70%, rgba(6,182,212,0.35) 0px, transparent 50%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="reveal text-balance font-heading text-2xl font-700 tracking-tight text-background sm:text-4xl">
            Trusted by Thousands on Their Wellness Journey
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-10 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
