const skills = [
  'Python',
  'FastAPI',
  'Laravel',
  'PHP',
  'Next.js',
  'React',
  'TypeScript',
  'PostgreSQL',
  'MySQL',
  'Redis',
  'Kafka',
  'Docker',
]

export default function Skills() {
  return (
    <section
      className="relative z-10 w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-stack-lg bg-surface-container-lowest"
      id="skills"
    >
      <div className="max-w-container-max mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-stack-md lg:gap-stack-lg items-start">
          <div className="lg:w-1/3 flex flex-col gap-4 lg:sticky lg:top-32">
            <h2 className="font-headline-md text-[24px] sm:text-headline-md text-on-surface inline-flex items-center gap-4">
              <span className="w-12 h-px bg-primary"></span>
              Technical Arsenal
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              A stack spanning the Python, PHP, and JavaScript ecosystems — weighted toward scalable APIs, database
              performance, and event-driven services, with the frontend skills to ship the screens they feed.
            </p>
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="group relative flex flex-col items-center justify-center px-3 py-5 sm:px-4 lg:px-6 lg:py-6 bg-surface-container border border-outline-variant/50 rounded-lg hover:border-primary transition-colors hover:shadow-md cursor-default overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="font-code-sm text-code-sm text-on-surface group-hover:text-primary transition-colors font-bold tracking-wide relative z-10">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
