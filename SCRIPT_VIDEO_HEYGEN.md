# Script vidéo HeyGen — MRE

**Cible** : incubateurs, jurys, prospects pros (CGP, RCSI, ACPR, médiateurs)
**Durée totale** : ~110 s (sweet spot attention jury)
**Format** : avatar HeyGen face caméra (intro + outro) + screencast du site et du produit (corps)
**Ton** : sobre, factuel, précis. Pas de superlatifs ni d'emphase commerciale. Le projet parle pour lui-même.
**Voix** : française, posée, masculine, débit ~150 mots/min

---

## STRUCTURE EN 5 PLANS

| Plan | Durée | Format | Contenu |
|---|---|---|---|
| 1. Intro avatar | 12 s | Avatar HeyGen | Qui je suis + problème |
| 2. Screencast constat | 22 s | Site mre-audit.fr (section Le problème) | 60 % / 12-15 / 8 h |
| 3. Screencast démo | 35 s | Rapport Mercier _synthèse.pdf | Cas concret |
| 4. Screencast techno | 25 s | Site (Bibliothèque + Extension) | Techno + vision |
| 5. Outro avatar | 16 s | Avatar HeyGen | Appel à l'action |

**Total : 110 s**

---

## PLAN 1 — INTRO AVATAR (12 s)

> **Visuel** : avatar HeyGen face caméra, fond bureau sobre. Sur-titre incrusté en bas à gauche : *"Alexandre Gaudet — Fondateur MRE"*.

**Texte (à enregistrer dans HeyGen)** :

> Je m'appelle Alexandre Gaudet. J'ai été agent général AXA Prévoyance et Patrimoine pendant quatre ans. Aujourd'hui, je présente MRE — un moteur qui révèle les écarts entre ce que les documents d'épargne disent, et ce que la loi exige.

*~32 mots — 12 s à 150 mots/min*

---

## PLAN 2 — SCREENCAST « LE CONSTAT » (22 s)

> **Visuel** : capture d'écran défilante de https://mre-audit.fr → section "Le problème" avec les 3 chiffres (60 %, 12-15, 8 h). Zoom léger sur chaque chiffre.

**Voix off** :

> 60 % des contrats d'assurance vie présentent au moins un écart documentaire — c'est le constat des superviseurs ACPR et AMF. Un dossier moyen contient douze à quinze documents. Un contrôle manuel rigoureux prend huit heures. À l'échelle d'un cabinet, c'est intenable.

*~57 mots — 22 s*

---

## PLAN 3 — SCREENCAST « LA DÉMO MERCIER » (35 s)

> **Visuel** :
> - 0-5 s : section "Démo" du site, vue d'ensemble des 6 documents source
> - 5-15 s : ouverture d'un PDF source (ex. courrier de réorientation Catherine Mercier)
> - 15-35 s : ouverture du `2026-05-07-08-54_synthese.pdf` — défilement du rapport, zoom sur 2-3 écarts (ex. *Note de conseil L.521-2 absente*, *Vulnérabilité présumée — 65 ans*)

**Voix off** :

> Voici un cas réaliste : Catherine Mercier, 66 ans, encours 78 450 euros, gestion pilotée. On donne à MRE six documents — conditions particulières, relevé annuel, courrier de réorientation, DIC PRIIPs. Trois minutes plus tard, MRE produit un rapport ACPR-ready. Note de conseil L.521-2 absente, vulnérabilité présumée à partir de 65 ans, exposition cumulée : entre 33 000 et 99 000 euros. Chaque écart est sourcé. Aucune hallucination.

*~91 mots — 35 s*

---

## PLAN 4 — SCREENCAST « TECHNO + VISION » (25 s)

> **Visuel** :
> - 0-12 s : section "Bibliothèque vivante" du site → mise en avant des 3 cadences crawlers (quotidien / hebdo / mensuel) + chiffre "2 218 ISIN sous surveillance"
> - 12-25 s : section "Extension produits" → tableau des 10 produits financiers (AV, PER, PEA, structurés, SCPI, OPCI, FIP, FCPR, FCPI, livrets)

**Voix off** :

> Deux briques. Une bibliothèque vivante : MRE va chercher chaque jour les DIC, les sanctions ACPR, les doctrines AMF — la donnée est toujours fraîche. Et une architecture extensible : l'assurance vie est la première pierre. Le moteur s'applique à dix produits financiers — PER, PEA, structurés, SCPI, FIP. Un seul moteur, dix marchés.

*~64 mots — 25 s*

---

## PLAN 5 — OUTRO AVATAR (16 s)

> **Visuel** : retour avatar HeyGen face caméra. Incrustation en bas : URL `mre-audit.fr` + email `contact@mre-audit.fr`.

**Texte** :

> MRE est opérationnel. Cent dix-huit détecteurs, zéro hallucination, note 9,8 sur 10 sur le triple regard ACPR. Si vous êtes incubateur, conformité, ou superviseur — la démo complète est sur mre-audit.fr. Merci.

*~40 mots — 16 s*

---

## NOTES D'ENREGISTREMENT HEYGEN

### Avatar
- Choisir un avatar masculin sobre (costume sombre, fond neutre)
- Privilégier les avatars HeyGen "studio" ou "professional" plutôt que les avatars stylisés
- Si possible : créer un avatar custom à partir d'une vidéo réelle d'Alexandre (1-2 min de prise vue webcam, lumière douce, fond uni)

### Voix
- Voix française masculine, posée. Tester :
  - "Antoine" (HeyGen FR)
  - "Etienne" (HeyGen FR)
- Régler le débit à 0.95–1.0× (ne pas accélérer — on cherche le calme institutionnel, pas la pub)

### Sous-titres
- **Activer les sous-titres FR** : essentiel — beaucoup de visionnages se font sans son (LinkedIn, mobile)
- Style : blanc sur fond noir semi-transparent, police sans-serif

### Screencast
- Enregistrer les sections du site **en navigateur Chrome plein écran** (F11)
- Résolution : 1920×1080
- Outil : OBS Studio (déjà installé) ou Loom
- Pour le rapport Mercier PDF : ouvrir dans Chrome + zoom 125% pour lisibilité

### Musique
- **Pas de musique** ou musique très discrète (ambient piano)
- Une vidéo institutionnelle MRE n'a pas besoin de "vibes startup"

### Export
- Format : MP4 H.264, 1080p, 30 fps
- Audio : stéréo 192 kbps
- Taille cible : < 50 Mo (LinkedIn, email)

---

## VARIANTES À PRÉVOIR APRÈS LA V1

1. **Version courte 60 s** — pour LinkedIn/teaser : intro + démo Mercier + outro
2. **Version 30 s** — pour pub réseaux : 1 phrase accroche + 1 chiffre + URL
3. **Version anglaise** — si déploiement international (incubateur EU)

---

## DÉPÔT FINAL

Une fois la vidéo générée par HeyGen :
1. Télécharger le MP4 dans `08_SITE_VITRINE/public/video/mre_pitch_v1.mp4`
2. Mettre à jour `Hero.jsx` ou créer une section dédiée pour l'embarquer dans le site
3. Pousser sur GitHub → Vercel redéploie automatiquement
4. Tester sur `mre-audit.fr` (autoplay muted + controls)

---

*Dernière mise à jour : 6 mai 2026 — Alexandre Gaudet*
