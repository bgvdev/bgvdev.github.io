// Three ways to reach me, in the order I actually check them.
const channels = [
  {
    icon: 'mail',
    label: 'Email',
    value: 'gohelbhargav442@gmail.com',
    href: 'mailto:gohelbhargav442@gmail.com',
  },
  {
    icon: 'work',
    label: 'LinkedIn',
    value: 'linkedin.com/in/bhargavgohel',
    href: 'https://linkedin.com/in/bhargavgohel',
    external: true,
  },
  {
    icon: 'code',
    label: 'GitHub',
    value: 'github.com/bgvdev',
    href: 'https://github.com/bgvdev',
    external: true,
  },
]

export default function Contact() {
  return (
    <section
      className="relative z-10 w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-stack-lg lg:pt-32 bg-surface"
      id="contact"
    >
      <div className="max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-stack-lg lg:gap-24 items-center">
          {/* Left — the pitch */}
          <div className="flex flex-col items-center text-center gap-6">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-on-surface-variant">
              Get Started
            </span>
            <h2 className="font-display-lg text-[32px] sm:text-[40px] lg:text-[52px] leading-tight text-on-surface font-bold tracking-tight max-w-xl">
              Ready to build something that holds up?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
              Tell me what you're working on. I'll help you get from a rough idea to an API and interface that
              scale with it.
            </p>
            <a
              className="group mt-2 inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-on-primary rounded transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25"
              href="mailto:gohelbhargav442@gmail.com"
            >
              <span className="material-symbols-outlined text-[20px]">mail</span>
              <span className="font-body-md text-body-md font-bold">Get in Touch</span>
            </a>
          </div>

          {/* Right — the direct channels */}
          <div className="w-full">
            <h3 className="font-headline-md text-[26px] sm:text-headline-md text-on-surface font-bold tracking-tight mb-8">
              Reach Me
            </h3>
            <ul className="flex flex-col">
              {channels.map((channel, i) => (
                <li
                  key={channel.label}
                  className={i > 0 ? 'border-t border-outline-variant/50' : undefined}
                >
                  <a
                    className="group flex items-center gap-5 py-5 transition-colors"
                    href={channel.href}
                    {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span className="shrink-0 flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/60 bg-surface-container text-on-surface-variant transition-colors group-hover:border-primary group-hover:text-primary">
                      <span className="material-symbols-outlined text-[20px]">{channel.icon}</span>
                    </span>
                    <span className="flex flex-col gap-1 min-w-0">
                      <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-on-surface-variant">
                        {channel.label}
                      </span>
                      <span className="font-body-md text-body-md text-on-surface break-words transition-colors group-hover:text-primary">
                        {channel.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
