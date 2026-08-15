export default function Hero() {
  return (
    <section
      className="relative z-10 w-full min-h-[870px] flex items-center justify-center px-margin-mobile md:px-margin-desktop py-stack-lg border-b border-outline-variant/30"
      id="hero"
    >
      <div className="max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-12 lg:col-span-10 flex flex-col items-start justify-center gap-stack-md">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface max-w-4xl tracking-tighter mix-blend-difference">
            Building <span className="text-primary-fixed-dim">scalable</span> web apps & backend systems.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            I'm a software engineer who enjoys turning complex problems into clean, dependable systems — from
            well-designed APIs and optimized databases to cloud-native services that scale. Lately I've been exploring
            how AI can make everyday engineering faster and sharper.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <a
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-wider rounded overflow-hidden shadow-lg transition-all hover:bg-[#0041cc] dark:hover:bg-primary-fixed hover:shadow-primary/20 hover:-translate-y-1"
              href="#projects"
            >
              <span className="relative z-10 font-bold">View Projects</span>
              <span className="material-symbols-outlined relative z-10 text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-outline text-on-surface font-label-caps text-label-caps uppercase tracking-wider rounded transition-all hover:border-primary hover:text-primary hover:-translate-y-1"
              href="#contact"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
