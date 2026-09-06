# Page de garde « ENGLISH » — cahier d'anglais (A4)

Page de garde à colorier, dérivée de la maquette « Copy Book Cover Contest »
(`source/copybook_cover_contest_original.png`) avec quatre modifications :

1. le titre est remplacé par **ENGLISH** (lettres creuses, en arc, comme l'original) ;
2. la page fait **exactement le format A4** : PNG 2480 × 3508 px à 300 dpi et
   PDF dont la page mesure 210 × 297 mm ;
3. tous les traits du dessin sont **allégés** (opacité 30 %, gris très clair),
   pour pouvoir être repassés / coloriés ;
4. le **cadre fin qui longeait les bords** de la page est retiré
   (option `--keep-frame` pour le conserver).

## Fichiers

| Fichier | Rôle |
|---|---|
| `ENGLISH_cover_A4.pdf` | à imprimer (page A4 exacte, impression « taille réelle / 100 % ») |
| `ENGLISH_cover_A4.png` | même image en PNG 300 dpi |
| `make_cover.py` | script de génération (Python) |
| `source/` | maquette originale |
| `fonts/` | police Fredoka (licence OFL) utilisée pour le titre |

## Régénérer

```bash
pip install pillow numpy scipy img2pdf
python3 make_cover.py                 # sortie par défaut (opacité 30 %)
python3 make_cover.py --opacity 0.2   # traits encore plus légers
python3 make_cover.py --opacity 0.5   # traits plus marqués
python3 make_cover.py --no-arc        # titre droit au lieu de l'arc
python3 make_cover.py --keep-frame    # conserve le cadre du bord de page
python3 make_cover.py --title "ANGLAIS"
```

`python3 make_cover.py --help` liste toutes les options (largeur du titre,
épaisseur du contour, bombé de l'arc, graisse/largeur de la police…).

## Impression

Imprimer le PDF en « taille réelle / 100 % » pour garder le format A4 exact.
Le dessin s'approche à environ 5 mm des bords de la feuille (statue de la
Liberté en bas, bus en haut à droite) : sur une imprimante qui ne gère pas
l'impression sans marge, choisir « ajuster à la page » pour ne rien rogner.
