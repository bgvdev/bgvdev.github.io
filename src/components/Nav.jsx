import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const sections = [
  { label: 'Skills', path: 'skills' },
  { label: 'Experience', path: 'experience' },
  { label: 'Projects', path: 'projects' },
  { label: 'Contact', path: 'contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  // The menu only exists below md; if the viewport grows past it while open,
  // close it so the desktop bar isn't shadowed by an orphaned panel.
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => event.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => mq.matches && setOpen(false)
    window.addEventListener('keydown', onKeyDown)
    mq.addEventListener('change', onChange)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      mq.removeEventListener('change', onChange)
    }
  }, [open])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-headline-md text-[24px] sm:text-headline-md text-on-surface tracking-tight">
            <a
              className="inline-flex items-center min-h-11 transition-colors uppercase text-primary font-bold"
              data-path="hero"
              href="#hero"
              onClick={() => setOpen(false)}
            >
              BHARGAV
            </a>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-stack-sm lg:gap-stack-md" data-active-classes="text-primary font-bold">
          {sections.map((section) => (
            <a
              key={section.path}
              className="inline-flex items-center min-h-11 px-1 font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors uppercase"
              data-path={section.path}
              href={`#${section.path}`}
            >
              {section.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/60 bg-surface-container text-on-surface transition-colors hover:border-primary hover:text-primary"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="material-symbols-outlined text-[22px]">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu — the only navigation below md */}
      <nav
        id="mobile-menu"
        hidden={!open}
        className="md:hidden border-t border-outline-variant/40 bg-surface/95 backdrop-blur-xl px-margin-mobile py-2"
        aria-label="Main"
      >
        {sections.map((section) => (
          <a
            key={section.path}
            className="flex items-center min-h-12 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase"
            data-path={section.path}
            href={`#${section.path}`}
            onClick={() => setOpen(false)}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
