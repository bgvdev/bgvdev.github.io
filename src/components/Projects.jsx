const projects = [
  {
    title: 'AuctionAlgo',
    description:
      'A real-time online auction platform where I built out backend APIs and bidding workflows, using Redis and Kafka to keep high-concurrency events fast and reliable.',
    tags: ['Laravel', 'Next.js', 'PostgreSQL', 'Kafka'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC0f-ersgarJG-FDtHkKBfKqkZM5qPhzdtnI9JLjk_tdUhLwTlZ25TCDZbZngpk4x4jvu8uZtSDaGN2UNNSZAmsVOkUYd7Yu7toyUe0Ima2l18-sRi_tAUAgkvdBlcsKplMl5SydUsOerLm0ivcCM0G61cy8GNlhj3maZRqUIa455-RSbGih41dUac-D2Bsty69WDBueqUdsdaGGHXI3gJInnC8ndpDDkgVpN1wv0tZja6VQxSg1sBPPQ',
    alt: 'Abstract 3D rendering of a complex network graph with glowing blue nodes on a dark background, representing a distributed auction system.',
    live: true,
    link: 'https://auctionalgo.com',
  },
  {
    title: 'TrakSpend',
    description:
      'A full-stack expense tracker I built end to end — a Next.js 15 frontend backed by a Laravel REST API with token auth, PostgreSQL storage, and a Dockerized dev setup.',
    tags: ['Next.js', 'TypeScript', 'Laravel', 'PostgreSQL'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCsbtSPcNZbE7oJlMqTKYcCsHtYfhAR6ONNNkX5YkfxP0bLQgA0Ai4nFsz9yvsfEe4P5qR-Cjsu_OQbdK9qagnfkKmaKbxIeLLOfGIWRt_nrgPqx837Gw9sOSDkrAAaoBRcPGjcYXf5VPpM4EEnjMABNAWEubzr1ogjhQgT3SkoNl6VJvoO3pW5HCl2e9DNMzK_e6zxgqQhko3UDb14md8sg4efZedtvjtnv1XJSzormcfvJpBckdDNww',
    alt: 'Clean dashboard interface with charts and cards on a dark surface, representing a personal expense tracking app.',
    live: true,
    link: 'https://trakspend.vercel.app',
  },
  {
    title: 'RealtyFlow',
    description:
      'A multi-tenant SaaS backend built on FastAPI and SQLAlchemy, with thoughtfully designed PostgreSQL schemas, secure JWT auth, and a container-first deployment workflow.',
    tags: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Docker'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB3naWUmf2ohvpk1hO1c6h4VQdoM74awwr2PJPzxoC1uDwVqr1onFPHjAIc5BpxYsMIccwA9TPsM_NxFO-CgMdyLRiDPIwUjh8kJn39rgYKdjYJwDFO7n1T4joRSBLP3T_uiA3TE-TOEoybjZbb20YOq-E9nA1jpT-v8IkTj4aHEcZnMDwO2Ox89irTyCZKI7c6FGVgikb07mFozwSEnCKmOXGLZJsxJVXkadYaUtm0koKGExM-95hAvw',
    alt: 'Minimalist architectural blueprint rendered in 3D with sharp electric-blue lines on a dark background, representing backend system architecture.',
    live: false,
    link: 'https://github.com/bgvdev',
  },
]

const offsets = ['', 'lg:translate-y-8', 'lg:translate-y-16']

export default function Projects() {
  return (
    <section
      className="relative z-10 w-full px-margin-mobile md:px-margin-desktop py-stack-lg bg-surface"
      id="projects"
    >
      <div className="max-w-container-max mx-auto w-full flex flex-col gap-stack-md">
        <div className="flex items-end justify-between border-b border-outline-variant/30 pb-4">
          <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Selected Works</h2>
          <span className="font-code-sm text-code-sm text-on-surface-variant hidden md:block">03 // 2026</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mt-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group flex flex-col bg-surface-container-low border border-outline-variant/50 rounded-xl overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 ${offsets[i]}`}
            >
              <div className="relative w-full h-64 overflow-hidden bg-surface-dim">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                  data-alt={project.alt}
                  style={{ backgroundImage: `url('${project.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent opacity-80"></div>
                {project.live ? (
                  <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur text-primary font-code-sm text-[12px] px-3 py-1 rounded-full border border-primary/30 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">public</span> Live
                  </div>
                ) : (
                  <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur text-on-surface-variant font-code-sm text-[12px] px-3 py-1 rounded-full border border-outline-variant/50 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">lock</span> Private Repo
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow bg-surface-container-low relative z-10">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-code-sm text-[11px] uppercase tracking-wider text-on-surface-variant bg-surface px-2 py-1 rounded-sm border border-outline-variant/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-headline-md text-[24px] font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow line-clamp-3">
                  {project.description}
                </p>
                <a
                  className="inline-flex items-center gap-2 mt-6 font-label-caps text-label-caps text-on-surface uppercase hover:text-primary transition-colors w-fit"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.live ? 'View Project' : 'View Code'}{' '}
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
