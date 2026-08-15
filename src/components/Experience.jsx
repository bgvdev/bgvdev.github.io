import { useRef, useState } from 'react'

// Product names that should resolve to the live site when they appear in copy.
const links = {
  'auctionalgo.com': 'https://auctionalgo.com',
  'bidsquare.com': 'https://www.bidsquare.com',
  '1stopbedrooms.com': 'https://www.1stopbedrooms.com',
}

const linkPattern = new RegExp(`(${Object.keys(links).map((k) => k.replace(/\./g, '\\.')).join('|')})`)

// Splits a sentence on any known product name and links those fragments.
function withLinks(text) {
  return text.split(linkPattern).map((part, i) =>
    links[part] ? (
      <a
        key={`${part}-${i}`}
        href={links[part]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary font-medium underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors"
      >
        {part}
      </a>
    ) : (
      part
    ),
  )
}

const roles = [
  {
    company: 'JBK Technologies',
    title: 'Software Engineer',
    period: 'Aug 2024 — Present',
    location: 'Remote · Pune-based team',
    current: true,
    summary:
      'Full-stack work across three products in the property and auction space — backend-leaning, but shipping the Next.js interfaces those APIs feed.',
    highlights: [
      {
        label: 'RealtyFlow',
        text: 'Built the multi-tenant backend on FastAPI and SQLAlchemy — tenant-isolated PostgreSQL schemas behind JWT and bcrypt authentication.',
      },
      {
        label: 'AuctionAlgo',
        text: 'Worked every side of auctionalgo.com — admin and seller panels plus the Next.js storefront, building both the Laravel APIs and the UI.',
      },
      {
        label: 'Bidsquare',
        text: 'Extended the storefront and the admin and seller panels of bidsquare.com, inside an established Phalcon PHP codebase serving live bidders.',
      },
      {
        label: 'Across Projects',
        text: 'Design APIs and schemas, build the Next.js screens on top, move heavy work onto Kafka and Redis, and review teammates’ pull requests.',
      },
      {
        label: 'What I Took Away',
        text: 'Fluency in concurrency and multi-tenancy, plus real command of Next.js — owning both sides shows how backend choices decide frontend speed.',
      },
    ],
    stack: [
      'FastAPI',
      'SQLAlchemy',
      'PostgreSQL',
      'Laravel',
      'Next.js',
      'React',
      'TypeScript',
      'Phalcon',
      'Redis',
      'Kafka',
      'Docker',
    ],
  },
  {
    company: 'Cybercom Creation',
    title: 'Software Developer',
    period: 'Feb 2023 — Aug 2024',
    location: 'Ahmedabad, Gujarat',
    current: false,
    summary:
      'Grew from intern to engineer on a high-volume US e-commerce platform, where a slow query is a lost order.',
    highlights: [
      {
        label: 'Internship',
        text: 'Joined as an intern for six months — learned PHP and MySQL in depth, version control habits, and how a large production codebase fits together.',
      },
      {
        label: 'Storefront Features',
        text: 'Shipped production features and fixes for 1stopbedrooms.com, a large US furniture retailer on Magento, across catalog and customer-facing flows.',
      },
      {
        label: 'Inventory Automation',
        text: 'Owned the scheduled jobs syncing 10,000+ inventory records daily across multiple brands, keeping storefront stock accurate.',
      },
      {
        label: 'Performance & UI',
        text: 'Rewrote expensive MySQL queries and reshaped heavy tables to halve execution time, and built Vue.js components backed by GraphQL.',
      },
      {
        label: 'What I Took Away',
        text: 'Learned to read unfamiliar code before changing it, measure before optimising, and ship safely to a storefront carrying real traffic.',
      },
    ],
    stack: ['PHP', 'Magento', 'MySQL', 'Vue.js', 'GraphQL', 'jQuery'],
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef([])

  const focusTab = (index) => {
    const next = (index + roles.length) % roles.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  const onKeyDown = (event) => {
    const keys = {
      ArrowDown: active + 1,
      ArrowRight: active + 1,
      ArrowUp: active - 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: roles.length - 1,
    }
    if (event.key in keys) {
      event.preventDefault()
      focusTab(keys[event.key])
    }
  }

  const role = roles[active]

  return (
    <section
      className="relative z-10 w-full px-margin-mobile md:px-margin-desktop py-stack-lg bg-surface"
      id="experience"
    >
      <div className="max-w-container-max mx-auto w-full flex flex-col gap-stack-md">
        <div className="flex items-end justify-between border-b border-outline-variant/30 pb-4">
          <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Where I've Worked</h2>
          <span className="font-code-sm text-code-sm text-on-surface-variant hidden md:block">
            {String(roles.length).padStart(2, '0')} // {roles.length === 1 ? 'POSITION' : 'POSITIONS'}
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-stack-sm md:gap-stack-md mt-8">
          {/* Tab list */}
          <div
            role="tablist"
            aria-label="Work experience"
            onKeyDown={onKeyDown}
            className="flex md:flex-col md:w-64 lg:w-72 shrink-0 overflow-x-auto md:overflow-visible -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0"
          >
            {roles.map((item, i) => {
              const selected = i === active
              return (
                <button
                  key={item.company}
                  ref={(el) => (tabRefs.current[i] = el)}
                  id={`experience-tab-${i}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  // Only the selected panel is mounted, so a non-selected tab
                  // must not point aria-controls at an element that isn't there.
                  aria-controls={selected ? `experience-panel-${i}` : undefined}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`relative whitespace-nowrap text-left px-5 py-4 font-label-caps text-label-caps uppercase transition-colors border-b-2 md:border-b-0 md:border-l-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                    selected
                      ? 'border-primary text-primary bg-primary/5 font-bold'
                      : 'border-outline-variant/40 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                  }`}
                >
                  {item.company}
                </button>
              )
            })}
          </div>

          {/* Panel */}
          <div
            key={active}
            id={`experience-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`experience-tab-${active}`}
            tabIndex={0}
            className="flex-1 min-w-0 flex flex-col gap-6 focus-visible:outline-none animate-fade-in-up"
          >
            <header className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-headline-md text-[24px] md:text-[28px] font-bold text-on-surface tracking-tight">
                  {role.title}
                  <span className="text-primary"> @ {role.company}</span>
                </h3>
                {role.current && (
                  <span className="font-code-sm text-[11px] uppercase tracking-wider text-primary border border-primary/40 bg-primary/10 px-2.5 py-1 rounded-sm">
                    Current
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-code-sm text-code-sm text-on-surface-variant">
                <span className="inline-flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                  {role.period}
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  {role.location}
                </span>
              </div>
            </header>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {withLinks(role.summary)}
            </p>

            <ul className="flex flex-col gap-5">
              {role.highlights.map((highlight) => (
                <li key={highlight.label} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0">
                    chevron_right
                  </span>
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-code-sm text-[11px] uppercase tracking-wider text-primary font-bold">
                      {highlight.label}
                    </span>
                    <span className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {withLinks(highlight.text)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex gap-2 flex-wrap mt-2 pt-6 border-t border-outline-variant/30">
              {role.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-code-sm text-[11px] uppercase tracking-wider text-on-surface-variant bg-surface-container px-2.5 py-1 rounded-sm border border-outline-variant/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
