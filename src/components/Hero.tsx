export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto flex max-w-content flex-col gap-12 px-6 pb-20 pt-20 sm:px-8 sm:pt-28 lg:flex-row lg:items-center lg:px-10 lg:pt-32">
        <div className="flex-1">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/60 px-3 py-1 font-mono text-xs text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Disponible pour une alternance — septembre 2026
          </p>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink-100 sm:text-5xl lg:text-6xl">
            Lucas Mettetal
          </h1>
          <p className="mt-3 font-mono text-lg text-accent sm:text-xl">
            Développeur Full-Stack / Python / DevOps
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">
            En reconversion depuis la restauration, je construis aujourd'hui des applications
            robustes de bout en bout — du frontend React à l'infrastructure Docker. Certifié
            Holberton School (RNCP5), admis au Bachelor Informatique d'Epitech (rentrée septembre 2026).
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projets"
              className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5 hover:bg-accent-dim"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="rounded-md border border-ink-600 px-6 py-3 text-sm font-semibold text-ink-100 transition-colors hover:border-accent/50 hover:text-accent"
            >
              Me contacter
            </a>
          </div>
        </div>

        <div className="flex-1 lg:max-w-md">
          <div className="card overflow-hidden shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-ink-700 bg-ink-800/60 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-2 font-mono text-xs text-ink-400">~/lucas — zsh</span>
            </div>
            <div className="space-y-2 px-5 py-5 font-mono text-sm leading-relaxed">
              <p className="text-ink-400">
                <span className="text-accent">$</span> whoami
              </p>
              <p className="text-ink-100">lucas_mettetal — dev en alternance</p>
              <p className="mt-3 text-ink-400">
                <span className="text-accent">$</span> cat formation.txt
              </p>
              <p className="text-ink-100">Holberton School — RNCP5, titre certifié</p>
              <p className="text-ink-100">Epitech — Bachelor Bac+3, rentrée sept. 2026</p>
              <p className="mt-3 text-ink-400">
                <span className="text-accent">$</span> cat securite.txt
              </p>
              <p className="text-ink-100">
                TryHackMe — pratique régulière (Linux, web, réseau)
              </p>
              <p className="mt-3 flex items-center gap-1 text-ink-400">
                <span className="text-accent">$</span>
                <span className="inline-block h-4 w-2 animate-pulse bg-accent/80" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
