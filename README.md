# lucas-mettetal.fr

Portfolio one-page — Lucas Mettetal, développeur en recherche d'alternance
(Full-Stack / Python / DevOps).

Stack : Vite, React, TypeScript, Tailwind CSS. Site 100% statique, aucun
backend requis.

## Développement local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # génère le dossier dist/
npm run preview # sert le build en local pour vérification
```

## Déploiement

### Vercel

1. Importer le repo sur [vercel.com/new](https://vercel.com/new).
2. Framework preset : **Vite** (détecté automatiquement).
3. Build command : `npm run build` — Output directory : `dist`.

Ou en CLI : `npx vercel --prod`.

### Cloudflare Workers (assets statiques)

Le repo contient un `wrangler.jsonc` qui sert `dist/` comme assets statiques.

Depuis le dashboard Cloudflare (flux "Deploy a Worker") :

1. Connecter le repo.
2. Build command : `npm run build`
3. Deploy command : `npx wrangler deploy` (déjà pré-rempli)

Ou en CLI : `npm run deploy` (build + `wrangler deploy`).

## À personnaliser avant mise en ligne

- Adresse email et liens LinkedIn / GitHub dans
  [src/components/Contact.tsx](src/components/Contact.tsx).
- Liens des dépôts / démos dans
  [src/components/Projects.tsx](src/components/Projects.tsx).
- Lien du profil TryHackMe dans
  [src/components/Projects.tsx](src/components/Projects.tsx).
