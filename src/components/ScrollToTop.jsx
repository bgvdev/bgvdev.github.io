import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollTop}
      className={`group fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-outline-variant/50 bg-surface-container/80 text-on-surface shadow-lg backdrop-blur-md transition-all duration-300 hover:border-primary hover:text-on-primary hover:shadow-primary/30 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      {/* Fill sweep on hover */}
      <span className="absolute inset-0 translate-y-full bg-primary transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
      {/* Ambient glow ring */}
      <span className="absolute inset-0 rounded-full ring-1 ring-primary/0 transition-all duration-300 group-hover:ring-2 group-hover:ring-primary/40"></span>
      <span className="material-symbols-outlined relative z-10 text-[22px] transition-transform duration-300 group-hover:-translate-y-1">
        arrow_upward
      </span>
    </button>
  )
}
