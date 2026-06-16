'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun, Sparkles } from 'lucide-react'
import { useTheme } from '@/lib/hooks'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Journey', href: '#journey' },
  { label: 'Stories', href: '#stories' },
  { label: 'Resources', href: '#resources' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const { isDark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <nav
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-300 md:px-6',
          scrolled ? 'glass shadow-lg shadow-primary/5 mx-4 lg:mx-auto' : 'bg-transparent',
        )}
      >
        <a href="#home" className="flex shrink-0 items-center gap-2 font-heading text-lg font-700">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Sparkles className="size-5" aria-hidden="true" />
          </span>
          <span className="whitespace-nowrap font-700 tracking-tight">MindBloom AI</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-500 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-muted"
          >
            {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>
          <a
            href="#cta"
            className="hidden rounded-xl bg-primary px-4 py-2.5 text-sm font-600 text-primary-foreground shadow-md shadow-primary/30 transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Get Started
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-4 mt-2 lg:hidden">
          <ul className="glass flex flex-col gap-1 rounded-2xl p-3 shadow-lg">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-500 text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-lg bg-primary px-4 py-3 text-center text-sm font-600 text-primary-foreground"
              >
                Get Started Free
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
