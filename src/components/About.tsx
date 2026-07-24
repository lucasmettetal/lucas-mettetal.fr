const TIMELINE = [
  {
    year: '2024',
    title: 'Reconversion professionnelle',
    detail: "Départ du secteur de la restauration pour se former intensivement au développement.",
  },
  {
    year: '2025 — 2026',
    title: 'Holberton School',
    detail: 'Formation intensive en développement full-stack, certification RNCP niveau 5.',
  },
  {
    year: '2026 — 2027',
    title: 'Bachelor Epitech (à venir)',
    detail: "Admis en 3e année du Bachelor Informatique (Bac+3), intégration en septembre 2026.",
  },
  {
    year: 'Aujourd\'hui',
    title: "Recherche d'alternance",
    detail: 'À la recherche d\'une alternance en développement / Python / DevOps pour la rentrée 2026.',
  },
]

export default function About() {
  return (
    <section id="apropos" className="section">
      <p className="section-label">01 — À propos</p>
      <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
        Une reconversion construite pas à pas, avec méthode
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-300">
        Après plusieurs années en restauration, j'ai choisi de me réorienter vers le
        développement logiciel. Cette transition m'a appris la rigueur, la gestion de la
        pression et le travail en équipe — des qualités que j'applique aujourd'hui à
        l'écriture de code et à la conduite de projets techniques. Je cherche une alternance
        où je peux continuer à monter en compétences sur des sujets full-stack, Python et
        DevOps.
      </p>

      <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-ink-700 bg-ink-700 sm:grid-cols-2 lg:grid-cols-4">
        {TIMELINE.map((item) => (
          <div key={item.year} className="bg-ink-950 p-6">
            <p className="font-mono text-xs text-accent">{item.year}</p>
            <p className="mt-2 font-semibold text-ink-100">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-400">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
