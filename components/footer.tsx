import { Sparkles } from 'lucide-react'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Resources', href: '#resources' },
  { label: 'Testimonials', href: '#stories' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 text-center">
          <a href="#home" className="flex items-center gap-2 font-heading text-xl font-700">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Sparkles className="size-5" aria-hidden="true" />
            </span>
            MindBloom AI
          </a>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            Your personal AI companion for mental wellness and growth — helping
            you breathe better, think clearer, and live happier.
          </p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-500 text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © 2026 MindBloom AI. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
