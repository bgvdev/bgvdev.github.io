import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', dark)
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch (e) {}
  }, [dark])

  return (
    <button
      type="button"
      onClick={() => setDark((v) => !v)}
      aria-label="Toggle color theme"
      aria-pressed={dark}
      className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/60 bg-surface-container text-on-surface transition-all hover:border-primary hover:text-primary"
    >
      <span className="material-symbols-outlined text-[18px] transition-transform duration-500 group-hover:rotate-45">
        {dark ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  )
}
