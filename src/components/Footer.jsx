const links = [
  { label: 'GitHub', href: 'https://github.com/bgvdev' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/bhargavgohel' },
  { label: 'Email', href: 'mailto:gohelbhargav442@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low py-stack-lg border-t border-outline-variant">
      <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-stack-md">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="font-headline-md text-body-lg text-on-surface">Bhargav Gohel</span>
          <span className="text-on-surface-variant text-body-md">
            Software Engineer — building scalable, maintainable systems.
          </span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="text-on-surface-variant font-code-sm text-code-sm uppercase tracking-widest text-center md:text-right">
            © 2026 BHARGAV GOHEL // ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  )
}
