export default function Footer() {
  return (
    <footer className="w-full bg-surface py-10 border-t border-outline-variant/50">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center">
        <span className="font-body-md text-body-md text-on-surface font-bold">© 2026 Bhargav Gohel</span>
        <span className="font-body-md text-code-sm text-on-surface-variant">
          Full-stack engineer, backend-focused
        </span>
      </div>
    </footer>
  )
}
