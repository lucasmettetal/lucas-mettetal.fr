const CATEGORIES = [
  {
    title: 'Langages',
    items: ['Python', 'JavaScript / TypeScript', 'C', 'Bash', 'SQL'],
  },
  {
    title: 'Frontend & Backend',
    items: ['React', 'Node.js', 'REST APIs', 'Streamlit'],
  },
  {
    title: 'Données & Infra',
    items: ['PostgreSQL', 'SQLite', 'Docker', 'Linux', 'Cron'],
  },
  {
    title: 'IA & Outils',
    items: ['Ollama / LLM locaux', 'Git', 'Stripe', 'CI simple'],
  },
]

export default function Skills() {
  return (
    <section id="competences" className="section border-t border-ink-800/60">
      <p className="section-label">02 — Compétences</p>
      <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
        Une stack pensée pour livrer de bout en bout
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-300">
        Du développement d'interfaces à la mise en production, en passant par le scripting
        système et l'automatisation.
      </p>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((cat) => (
          <div key={cat.title} className="card p-6 transition-colors hover:border-accent/40">
            <p className="font-mono text-sm font-semibold text-accent">{cat.title}</p>
            <ul className="mt-4 space-y-2.5">
              {cat.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink-300">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-ink-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
