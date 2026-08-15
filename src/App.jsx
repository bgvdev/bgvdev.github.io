import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <Nav />
      <main className="w-full pt-20 bg-surface">
        {/* No overflow-hidden here: it would become the scroll container and
            break sticky children. The decorative layer below clips itself. */}
        <div className="flex flex-col w-full relative bg-surface text-on-surface pb-stack-lg">
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <svg
              className="absolute w-[200vw] h-[2048px] -top-[512px] -left-[50vw] opacity-[0.03] text-primary"
              preserveAspectRatio="none"
              viewBox="0 0 1000 1000"
            >
              <defs>
                <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
                </pattern>
              </defs>
              <rect fill="url(#grid)" height="100%" width="100%"></rect>
            </svg>
            <div className="absolute top-1/4 -right-1/4 w-[100vw] h-[100vw] bg-primary/10 rounded-full blur-[120px] mix-blend-screen opacity-50 pointer-events-none animate-pulse-slow"></div>
          </div>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
