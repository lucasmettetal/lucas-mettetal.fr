const CONTACTS = [
  { label: 'Email', value: 'lucas8237014@gmail.com', href: 'mailto:lucas8237014@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/lucas-mettetal-a079a8388', href: 'https://www.linkedin.com/in/lucas-mettetal-a079a8388' },
  { label: 'GitHub', value: 'github.com/lucasmettetal', href: 'https://github.com/lucasmettetal' },
]

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-ink-800/60">
      <p className="section-label">04 — Contact</p>
      <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
            Discutons de votre besoin en alternance
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-300">
            Disponible pour une alternance en développement, Python ou DevOps à partir de
            septembre 2026. N'hésitez pas à me contacter, je réponds rapidement.
          </p>
        </div>

        <a
          href="mailto:lucas8237014@gmail.com"
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-md bg-accent px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5 hover:bg-accent-dim"
        >
          Envoyer un email
        </a>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-ink-700 bg-ink-700 sm:grid-cols-3">
        {CONTACTS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
            className="group bg-ink-950 p-6 transition-colors hover:bg-ink-900"
          >
            <p className="font-mono text-xs text-accent">{c.label}</p>
            <p className="mt-2 text-sm font-medium text-ink-100 group-hover:text-accent">
              {c.value}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}
