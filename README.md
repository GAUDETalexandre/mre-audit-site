# MRE — Site vitrine

Site vitrine de **MRE (Moteur Révélateur d'Écart)** — outil d'audit
documentaire pour produits financiers.

## Stack

- **Vite 5** + **React 18** + **Tailwind CSS 3**
- Déploiement : **Vercel** (gratuit)
- Domaine cible : `mre-audit.fr`

## Démarrage local

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Build de production

```bash
npm run build
npm run preview     # vérifie le build
```

## Structure

```
src/
  ├── App.jsx                # Layout principal
  ├── main.jsx               # Entrée React
  ├── index.css              # Tailwind + styles globaux
  ├── components/
  │   ├── Header.jsx         # Navigation sticky
  │   └── Footer.jsx         # Pied de page
  └── sections/
      ├── Hero.jsx           # Accroche + démo visuelle
      ├── Probleme.jsx       # Le constat marché (chiffres ACPR)
      ├── Solution.jsx       # 4 étapes + 3 piliers
      ├── DemoMercier.jsx    # Cas fictif Catherine MERCIER
      ├── BiblioVivante.jsx  # 3 cadences crawler + volume
      ├── Extensibilite.jsx  # 10 produits financiers extensibles
      ├── Chiffres.jsx       # 8 chiffres clés (fond bleu)
      ├── MonHistoire.jsx    # Bio Alexandre Gaudet + photo
      └── Contact.jsx        # Formulaire mailto
```

## Assets

- `public/logo/` — Logos SVG (V1, V2, V3, V4 + compact)
- `public/photos/` — Photo fondateur

## Déploiement Vercel

Voir `01_MEMOIRE_PROJET/reference_deploiement_vercel.md`.

---

© 2026 MRE — Alexandre Gaudet
