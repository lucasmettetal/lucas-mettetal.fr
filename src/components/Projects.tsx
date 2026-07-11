type Project = {
  name: string
  period: string
  description: string
  stack: string[]
  repo?: string
  demo?: string
  featured?: boolean
}

const PROJECTS: Project[] = [
  {
    name: 'Rue25.fr',
    period: 'Projet full-stack',
    description:
      "Plateforme e-commerce complète : catalogue produits, panier, paiement en ligne et back-office. Architecture React / Node.js / PostgreSQL, conteneurisée avec Docker et intégrant Stripe pour les paiements.",
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Stripe'],
    repo: 'https://github.com/lucasmettetal/rue25',
    demo: 'https://rue25.fr',
    featured: true,
  },
  {
    name: 'alternance-agents',
    period: 'Outil Python — IA locale',
    description:
      "Pipeline d'agents IA en local pour automatiser la recherche d'alternance : analyse d'offres via un LLM local (Ollama / llama3.2), interface Streamlit et intégration d'une API gouvernementale pour la collecte de données.",
    stack: ['Python', 'Ollama / llama3.2', 'Streamlit', 'API gouv.'],
    repo: 'https://github.com/lucasmettetal/alternance-agents',
    featured: true,
  },
  {
    name: 'JobBot',
    period: 'Bot Python',
    description:
      "Bot de veille automatisée sur le marché de l'emploi, connecté à l'API France Travail. Stocke et déduplique les offres dans SQLite, exécution planifiée via cron.",
    stack: ['Python', 'API France Travail', 'SQLite', 'Cron'],
    repo: 'https://github.com/lucasmettetal/jobbot',
  },
  {
    name: 'Shell Unix',
    period: 'Projet système — C',
    description:
      "Interpréteur de commandes façon sh, écrit en C : parsing, exécution de processus, gestion des variables d'environnement et des built-ins. Un classique pour comprendre le fonctionnement d'un shell Unix de l'intérieur.",
    stack: ['C', 'Linux', 'Processus / syscalls'],
    repo: 'https://github.com/lucasmettetal/simple_shell',
  },
]

export default function Projects() {
  return (
    <section id="projets" className="section border-t border-ink-800/60">
      <p className="section-label">03 — Projets</p>
      <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
        Des projets concrets, du code au déploiement
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-300">
        Une sélection de projets personnels illustrant mes compétences en développement
        full-stack, automatisation Python et systèmes.
      </p>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((project) => (
          <article
            key={project.name}
            className={`card flex flex-col p-7 transition-colors hover:border-accent/40 ${
              project.featured ? 'lg:col-span-2' : ''
            }`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-bold text-ink-100">{project.name}</h3>
              <span className="font-mono text-xs text-ink-400">{project.period}</span>
            </div>

            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-300">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-ink-600 px-3 py-1 font-mono text-xs text-ink-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-5 border-t border-ink-800 pt-5">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-ink-100 transition-colors hover:text-accent"
                >
                  Code source ↗
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-accent transition-colors hover:text-accent-dim"
                >
                  Voir le site ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 card flex flex-col items-start gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-xs text-accent">Cybersécurité — TryHackMe</p>
          <h3 className="mt-2 text-lg font-bold text-ink-100">
            Top 6% mondial — rang [0x8] HACKER
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-300">
            Résolution de challenges de sécurité offensive et défensive (réseaux, web, Linux,
            privilege escalation) sur la plateforme TryHackMe.
          </p>
        </div>
        <a
          href="https://tryhackme.com"
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-md border border-ink-600 px-5 py-2.5 text-sm font-medium text-ink-100 transition-colors hover:border-accent/50 hover:text-accent"
        >
          Voir le profil ↗
        </a>
      </div>
    </section>
  )
}
