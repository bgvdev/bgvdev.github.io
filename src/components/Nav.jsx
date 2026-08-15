import ThemeToggle from './ThemeToggle'

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-container-max mx-auto px-margin-desktop flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-headline-md text-headline-md text-on-surface tracking-tight">
            <a
              className="transition-colors uppercase text-primary font-bold"
              data-path="hero"
              href="#hero"
            >
              BHARGAV
            </a>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-stack-md" data-active-classes="text-primary font-bold">
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors uppercase"
            data-path="skills"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors uppercase"
            data-path="experience"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors uppercase"
            data-path="projects"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors uppercase"
            data-path="contact"
            href="#contact"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
