export default function Contact() {
  return (
    <section
      className="relative z-10 w-full px-margin-mobile md:px-margin-desktop py-stack-lg lg:pt-32 bg-surface"
      id="contact"
    >
      <div className="max-w-container-max mx-auto w-full">
        <div className="bg-surface-container border border-outline-variant/30 rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-stack-md relative overflow-hidden shadow-2xl">
          {/* Decorative bg element */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-[60px] pointer-events-none"></div>
          <div className="flex flex-col gap-4 relative z-10 max-w-xl text-center md:text-left">
            <h2 className="font-display-lg text-[40px] md:text-display-lg text-on-surface font-bold tracking-tight">
              Let's build something.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              I'm open to new roles and interesting engineering problems. If you're working on something worth
              building, I'd love to hear about it.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <a
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-wider rounded overflow-hidden shadow-lg transition-all hover:bg-primary-fixed hover:shadow-primary/30 hover:scale-105"
              href="mailto:gohelbhargav442@gmail.com"
            >
              <span className="material-symbols-outlined relative z-10 text-[20px]">mail</span>
              <span className="relative z-10 font-bold">Get in Touch</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
