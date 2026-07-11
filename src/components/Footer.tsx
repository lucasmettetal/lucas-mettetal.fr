export default function Footer() {
  return (
    <footer className="border-t border-ink-800/60">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-ink-400 sm:flex-row sm:px-8 lg:px-10">
        <p className="font-mono">
          lucas<span className="text-accent">@</span>mettetal — © {new Date().getFullYear()}
        </p>
        <p>Conçu et développé par Lucas Mettetal</p>
      </div>
    </footer>
  )
}
