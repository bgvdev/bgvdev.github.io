const projects = [
  {
    title: 'AI Interview Suite',
    description:
      'A mock-interview platform that reads your resume PDF and a job description, asks questions built for that role, then uses OpenRouter LLMs to grade each answer and return an overall score, feedback and a hiring recommendation.',
    tags: ['FastAPI', 'Python', 'Next.js', 'PostgreSQL', 'LLM Integration', 'OpenRouter'],
    live: 'https://aiinterviewsuite.vercel.app',
    repos: [{ label: 'Code', href: 'https://github.com/ai-interview-suite' }],
  },
  {
    title: 'TrakSpend',
    description:
      'A personal finance app for logging and filtering spending, exporting records, and seeing where the money goes through a dashboard and visual reports, backed by a containerized Laravel API.',
    tags: ['Next.js', 'TypeScript', 'Laravel', 'PostgreSQL', 'Docker'],
    live: 'https://trakspend.vercel.app',
    repos: [{ label: 'Code', href: 'https://github.com/bgvdev/expense-tracker' }],
  },
]

const linkClass =
  'inline-flex items-center gap-1.5 font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant transition-colors hover:text-primary'

export default function Projects() {
  return (
    <section
      className="relative z-10 w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-stack-lg bg-surface"
      id="projects"
    >
      <div className="max-w-container-max mx-auto w-full flex flex-col gap-stack-md">
        <div className="flex items-end justify-between border-b border-outline-variant/30 pb-4">
          <h2 className="font-headline-md text-[24px] font-bold leading-[1.3] sm:text-headline-md text-on-surface tracking-tight">
            What I've Built
          </h2>
          <span className="font-code-sm text-code-sm text-on-surface-variant hidden md:block">
            {String(projects.length).padStart(2, '0')} // {projects.length === 1 ? 'PROJECT' : 'PROJECTS'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mt-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col gap-5 p-6 md:p-8 bg-surface-container-low border border-outline-variant/50 rounded-2xl transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
            >
              <h3 className="font-headline-md text-[24px] md:text-[28px] font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-code-sm text-[11px] uppercase tracking-wider text-on-surface-variant bg-surface px-2.5 py-1 rounded-sm border border-outline-variant/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-4 border-t border-outline-variant/30 flex flex-wrap items-center gap-x-6 gap-y-2">
                <a className={`${linkClass} text-primary`} href={project.live} target="_blank" rel="noopener noreferrer">
                  Live
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </a>
                {project.repos.map((repo) => (
                  <a key={repo.href} className={linkClass} href={repo.href} target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-[16px]">code</span>
                    {repo.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
