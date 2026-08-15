export default function Hero() {
  return (
    <section
      className="relative z-10 w-full min-h-[870px] flex items-center justify-center px-margin-mobile md:px-margin-desktop py-stack-lg border-b border-outline-variant/30"
      id="hero"
    >
      <div className="max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-12 lg:col-span-10 flex flex-col items-start justify-center gap-stack-md">
          <div className="inline-flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/50 shadow-sm backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-widest">
              Available for new opportunities
            </span>
          </div>
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
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-wider rounded overflow-hidden shadow-lg transition-all hover:bg-primary-fixed hover:shadow-primary/20 hover:-translate-y-1"
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
          <div className="flex items-center gap-6 mt-12 pt-12 border-t border-outline-variant/30 w-full opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <span className="font-code-sm text-code-sm text-on-surface-variant uppercase">Building at</span>
            <div className="flex items-center gap-8">
              <span className="font-headline-md text-headline-md font-black tracking-tighter text-on-surface">JBK</span>
              <span className="font-display-lg text-headline-md font-bold italic tracking-widest text-on-surface">
                AUCTIONALGO
              </span>
              <span className="font-code-sm text-headline-md font-bold tracking-tight text-on-surface">BIDSQUARE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
