const projects = [
  {
    title: 'TrakSpend',
    description:
      'A full-stack expense tracker I built end to end — a Next.js 15 frontend backed by a Laravel REST API with token-based auth, PostgreSQL storage, and a Dockerized development setup. Designed for a clean, fast experience from sign-in to insight.',
    tags: ['Next.js', 'TypeScript', 'Laravel', 'PostgreSQL', 'Docker'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCsbtSPcNZbE7oJlMqTKYcCsHtYfhAR6ONNNkX5YkfxP0bLQgA0Ai4nFsz9yvsfEe4P5qR-Cjsu_OQbdK9qagnfkKmaKbxIeLLOfGIWRt_nrgPqx837Gw9sOSDkrAAaoBRcPGjcYXf5VPpM4EEnjMABNAWEubzr1ogjhQgT3SkoNl6VJvoO3pW5HCl2e9DNMzK_e6zxgqQhko3UDb14md8sg4efZedtvjtnv1XJSzormcfvJpBckdDNww',
    alt: 'Clean dashboard interface with charts and cards on a dark surface, representing a personal expense tracking app.',
    live: true,
    link: 'https://trakspend.vercel.app',
  },
]

export default function Projects() {
  return (
    <section
      className="relative z-10 w-full px-margin-mobile md:px-margin-desktop py-stack-lg bg-surface"
      id="projects"
    >
      <div className="max-w-container-max mx-auto w-full flex flex-col gap-stack-md">
        <div className="flex items-end justify-between border-b border-outline-variant/30 pb-4">
          <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">What I've Built</h2>
          <span className="font-code-sm text-code-sm text-on-surface-variant hidden md:block">
            {String(projects.length).padStart(2, '0')} // {projects.length === 1 ? 'PROJECT' : 'PROJECTS'}
          </span>
        </div>

        <div className="flex flex-col gap-gutter mt-8">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="group grid grid-cols-1 lg:grid-cols-2 bg-surface-container-low border border-outline-variant/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Media panel */}
              <div
                className={`relative min-h-[280px] lg:min-h-[460px] overflow-hidden bg-surface-dim ${
                  i % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Seam blend: fade toward the content panel */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/20 to-transparent lg:from-transparent lg:via-transparent lg:to-surface-container-low ${
                    i % 2 === 1 ? 'lg:bg-gradient-to-l' : 'lg:bg-gradient-to-r'
                  }`}
                ></div>
              </div>

              {/* Content panel */}
              <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
                <span className="inline-flex items-center gap-3 font-code-sm text-code-sm uppercase tracking-widest text-primary">
                  <span className="w-8 h-px bg-primary"></span>
                  Featured Project
                </span>
                <h3 className="font-headline-md text-[32px] md:text-[40px] font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
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
                <div className="mt-2">
                  <a
                    className="group/btn relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-wider rounded overflow-hidden shadow-lg transition-all hover:bg-[#0041cc] dark:hover:bg-primary-fixed hover:shadow-primary/20 hover:-translate-y-1 w-fit"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10 font-bold">{project.live ? 'Visit Site' : 'View Code'}</span>
                    <span className="material-symbols-outlined relative z-10 text-[18px] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform">
                      {project.live ? 'arrow_outward' : 'arrow_forward'}
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
