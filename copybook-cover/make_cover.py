#!/usr/bin/env python3
"""
Page de garde de cahier d'anglais — génération au format A4 exact.

À partir de la maquette originale « COPY BOOK COVER CONTEST »
(source/copybook_cover_contest_original.png), le script :

 1. efface l'ancien titre (composantes connexes entièrement contenues dans la
    zone du titre ; Big Ben, Tower Bridge et les petits traits décoratifs qui
    encadrent le titre sont conservés) ;
 2. met la page à l'échelle A4 300 dpi (2480 x 3508 px) et normalise le fond
    en blanc pur ;
 3. dessine le nouveau titre « ENGLISH » en lettres creuses (contour), sur un
    léger arc comme l'original, police Fredoka Bold (licence OFL, dossier fonts/) ;
 4. allège tous les traits du dessin (opacité réduite, 30 % par défaut) ;
 5. exporte un PNG 300 dpi et un PDF dont la page fait exactement 210 x 297 mm.

Dépendances : pillow, numpy, scipy, img2pdf   (pip install pillow numpy scipy img2pdf)

Exemples :
    python3 make_cover.py                       # sortie par défaut, opacité 30 %
    python3 make_cover.py --opacity 0.2         # traits encore plus légers
    python3 make_cover.py --title "ENGLISH" --no-arc
"""

from __future__ import annotations

import argparse
import io
import math
from pathlib import Path

import img2pdf
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont
from scipy import ndimage

HERE = Path(__file__).resolve().parent

# Format A4 à 300 dpi : 210 mm x 297 mm  ->  2480 x 3508 px
DPI = 300
A4_MM = (210.0, 297.0)
A4_PX = (round(A4_MM[0] / 25.4 * DPI), round(A4_MM[1] / 25.4 * DPI))  # (2480, 3508)

# Zone de l'ancien titre « COPY BOOK / COVER CONTEST », en pixels de l'image source
# (1055 x 1491). Tout ce qui est *entièrement* contenu dans ce rectangle est effacé.
TITLE_BOX_SRC = (148, 168, 950, 487)  # x0, y0, x1, y1
# Point de référence du nouveau titre (centre des traits décoratifs gauche/droite).
TITLE_CENTER_SRC = (538, 322)
# Largeur visée du mot, en pixels source (entre les traits décoratifs : 150 .. 926).
TITLE_WIDTH_SRC = 740
# Flèche de l'arc (hauteur du bombé) en pixels source, mesurée sur l'original.
ARC_SAGITTA_SRC = 45
# Seuil « encre » pour la détection des composantes connexes.
INK_THRESHOLD = 160


def erase_title(gray: np.ndarray, box: tuple[int, int, int, int]) -> np.ndarray:
    """Efface les composantes connexes entièrement contenues dans `box`.

    Les éléments qui débordent du rectangle (Big Ben, Tower Bridge, traits
    décoratifs, bus…) sont conservés avec un halo de 3 px pour garder leur
    anti-crénelage ; tout le reste du rectangle est mis à blanc.
    """
    x0, y0, x1, y1 = box
    ink = gray < INK_THRESHOLD
    labels, count = ndimage.label(ink, structure=np.ones((3, 3), dtype=int))
    objects = ndimage.find_objects(labels)

    inside = np.zeros(count + 1, dtype=bool)
    for idx, sl in enumerate(objects, start=1):
        if sl is None:
            continue
        ys, xs = sl
        inside[idx] = (ys.start >= y0 and ys.stop <= y1 and xs.start >= x0 and xs.stop <= x1)

    keep_ink = ink & ~inside[labels]
    keep = ndimage.binary_dilation(keep_ink, iterations=3)

    rect = np.zeros_like(ink)
    rect[y0:y1, x0:x1] = True
    erase = rect & ~keep

    out = gray.copy()
    out[erase] = 255
    return out


def fit_to_a4(gray_img: Image.Image) -> tuple[Image.Image, float, tuple[int, int]]:
    """Met l'image à l'échelle dans une page A4 300 dpi, centrée sur fond blanc."""
    w, h = gray_img.size
    scale = min(A4_PX[0] / w, A4_PX[1] / h)
    new_size = (round(w * scale), round(h * scale))
    scaled = gray_img.resize(new_size, Image.Resampling.LANCZOS)
    # Léger renforcement des contours après agrandissement.
    scaled = scaled.filter(ImageFilter.UnsharpMask(radius=2, percent=60, threshold=2))
    page = Image.new("L", A4_PX, 255)
    offset = ((A4_PX[0] - new_size[0]) // 2, (A4_PX[1] - new_size[1]) // 2)
    page.paste(scaled, offset)
    return page, scale, offset


def normalize_background(gray: np.ndarray, closing: int = 21, blur: float = 10.0, white_point: int = 238) -> np.ndarray:
    """Ramène le fond (papier gris, granuleux, légèrement vignetté) au blanc pur.

    Le fond est estimé par une fermeture morphologique (qui « gomme » les traits
    fins) suivie d'un flou ; l'image est divisée par ce fond (correction de champ
    plat), puis tout ce qui est plus clair que `white_point` devient blanc.
    """
    arr = gray.astype(np.float32)
    background = ndimage.grey_closing(arr, size=(closing, closing))
    background = ndimage.gaussian_filter(background, sigma=blur)
    background = np.maximum(background, 1.0)
    flat = arr / background * 255.0
    flat = flat * (255.0 / white_point)
    return np.clip(np.round(flat), 0, 255).astype(np.uint8)


def load_font(path: Path, size: int, weight: str | None, width: float | None) -> ImageFont.FreeTypeFont:
    font = ImageFont.truetype(str(path), size)
    axes = getattr(font, "get_variation_axes", None)
    if axes is not None:
        try:
            names = [a["name"] for a in font.get_variation_axes()]
        except OSError:
            names = []
        if names:
            values = []
            for a in font.get_variation_axes():
                name = a["name"]
                if name in (b"Weight", "Weight") and weight is not None:
                    values.append({"Bold": 700, "SemiBold": 600, "Medium": 500, "Regular": 400}[weight])
                elif name in (b"Width", "Width") and width is not None:
                    values.append(width)
                else:
                    values.append(a["default"])
            font.set_variation_by_axes(values)
    return font


def draw_hollow_title(
    page: Image.Image,
    text: str,
    center: tuple[float, float],
    target_width: float,
    stroke_width: int,
    font_path: Path,
    font_weight: str | None,
    font_width: float | None,
    sagitta: float,
    letter_gap: float,
) -> None:
    """Dessine `text` en lettres creuses (intérieur blanc, contour noir) sur un arc.

    L'arc est un cercle dont le centre est sous le texte ; `sagitta` est la
    hauteur du bombé entre les extrémités et le sommet (0 = texte droit).
    """
    # 1. Taille de police telle que la largeur totale ≈ target_width.
    probe = load_font(font_path, 100, font_weight, font_width)
    advances = [probe.getlength(ch) for ch in text]
    gap = letter_gap + 2 * stroke_width  # le contour élargit chaque lettre de stroke_width de chaque côté
    width_at_100 = sum(advances) + gap * (len(text) - 1) + 2 * stroke_width
    size = int(round(100 * target_width / width_at_100))
    font = load_font(font_path, size, font_weight, font_width)
    advances = [font.getlength(ch) for ch in text]
    total = sum(advances) + gap * (len(text) - 1)

    # 2. Positions curvilignes des centres de lettres le long de la ligne de base.
    positions = []
    cursor = 0.0
    for adv in advances:
        positions.append(cursor + adv / 2)
        cursor += adv + gap
    positions = [p - total / 2 for p in positions]  # centrées sur 0

    ascent, descent = font.getmetrics()
    cap_top = font.getbbox("E")[1]  # ordonnée du haut des capitales (depuis le haut de la boîte)
    cap_height = ascent - cap_top

    cx, cy = center
    if sagitta <= 0:
        radius = None
        baseline_apex = cy + cap_height / 2  # bloc de capitales centré verticalement sur cy
    else:
        half_chord = total / 2
        radius = (half_chord ** 2 + sagitta ** 2) / (2 * sagitta)
        # Centre vertical du bloc (capitales + bombé) sur cy.
        baseline_apex = cy - sagitta / 2 + cap_height / 2

    # 3. Rendu lettre par lettre, chaque tuile étant tournée pour suivre l'arc.
    for ch, s in zip(text, positions):
        if radius is None:
            theta = 0.0
            px, py = cx + s, baseline_apex
        else:
            theta = s / radius  # angle (rad) depuis le sommet, négatif à gauche
            px = cx + radius * math.sin(theta)
            py = baseline_apex + radius * (1 - math.cos(theta))

        tile_size = int(size * 2.2)
        tile = Image.new("LA", (tile_size, tile_size), (255, 0))
        d = ImageDraw.Draw(tile)
        d.text(
            (tile_size / 2, tile_size / 2),
            ch,
            font=font,
            anchor="ms",  # milieu de la ligne de base au centre de la tuile
            fill=(255, 255),
            stroke_width=stroke_width,
            stroke_fill=(0, 255),
        )
        if theta:
            tile = tile.rotate(-math.degrees(theta), resample=Image.Resampling.BICUBIC, expand=False)
        gray_tile, alpha = tile.split()
        page.paste(gray_tile, (round(px - tile_size / 2), round(py - tile_size / 2)), mask=alpha)


def lighten(gray: np.ndarray, opacity: float) -> np.ndarray:
    """Réduit l'opacité des traits : 1.0 = inchangé, 0.3 = traits très légers."""
    arr = 255.0 - (255.0 - gray.astype(np.float32)) * opacity
    return np.clip(np.round(arr), 0, 255).astype(np.uint8)


def save_pdf_a4(png_bytes: bytes, pdf_path: Path) -> None:
    """PDF dont la page mesure exactement 210 x 297 mm, image ajustée à la page."""
    pagesize = (img2pdf.mm_to_pt(A4_MM[0]), img2pdf.mm_to_pt(A4_MM[1]))
    layout = img2pdf.get_layout_fun(pagesize=pagesize)
    pdf_path.write_bytes(img2pdf.convert(png_bytes, layout_fun=layout))


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--source", type=Path, default=HERE / "source" / "copybook_cover_contest_original.png")
    parser.add_argument("--out-dir", type=Path, default=HERE)
    parser.add_argument("--name", default="ENGLISH_cover_A4", help="nom de base des fichiers de sortie")
    parser.add_argument("--title", default="ENGLISH")
    parser.add_argument("--opacity", type=float, default=0.30, help="opacité des traits (0-1), 0.30 par défaut")
    parser.add_argument("--font", type=Path, default=HERE / "fonts" / "Fredoka[wdth,wght].ttf")
    parser.add_argument("--font-weight", default="Bold", choices=["Regular", "Medium", "SemiBold", "Bold"])
    parser.add_argument("--font-width", type=float, default=100.0, help="axe largeur de Fredoka (75-125)")
    parser.add_argument("--title-width", type=float, default=TITLE_WIDTH_SRC, help="largeur du titre (px source)")
    parser.add_argument("--stroke", type=float, default=2.2, help="épaisseur du contour du titre (px source)")
    parser.add_argument("--letter-gap", type=float, default=3.0, help="espace entre lettres, hors contour (px source)")
    parser.add_argument("--arc-sagitta", type=float, default=ARC_SAGITTA_SRC, help="bombé de l'arc (px source)")
    parser.add_argument("--no-arc", action="store_true", help="titre droit au lieu de l'arc")
    parser.add_argument("--preview", type=Path, default=None, help="écrit aussi un aperçu réduit (PNG)")
    args = parser.parse_args()

    # 1. Source en niveaux de gris, effacement de l'ancien titre, fond blanc.
    src = np.asarray(Image.open(args.source).convert("L"))
    src = erase_title(src, TITLE_BOX_SRC)
    src = normalize_background(src)

    # 2. Mise à l'échelle A4.
    page, scale, offset = fit_to_a4(Image.fromarray(src))

    # 3. Nouveau titre.
    center = (TITLE_CENTER_SRC[0] * scale + offset[0], TITLE_CENTER_SRC[1] * scale + offset[1])
    draw_hollow_title(
        page,
        args.title,
        center=center,
        target_width=args.title_width * scale,
        stroke_width=max(1, round(args.stroke * scale)),
        font_path=args.font,
        font_weight=args.font_weight,
        font_width=args.font_width,
        sagitta=0.0 if args.no_arc else args.arc_sagitta * scale,
        letter_gap=args.letter_gap * scale,
    )

    # 4. Traits allégés.
    final = Image.fromarray(lighten(np.asarray(page), args.opacity))

    # 5. Export PNG 300 dpi + PDF A4.
    args.out_dir.mkdir(parents=True, exist_ok=True)
    png_path = args.out_dir / f"{args.name}.png"
    pdf_path = args.out_dir / f"{args.name}.pdf"
    buf = io.BytesIO()
    final.save(buf, format="PNG", dpi=(DPI, DPI), optimize=True)
    png_path.write_bytes(buf.getvalue())
    save_pdf_a4(buf.getvalue(), pdf_path)
    if args.preview:
        preview = final.resize((A4_PX[0] // 3, A4_PX[1] // 3), Image.Resampling.LANCZOS)
        preview.save(args.preview)

    print(f"PNG : {png_path}  ({final.size[0]} x {final.size[1]} px @ {DPI} dpi)")
    print(f"PDF : {pdf_path}  (page {A4_MM[0]:.0f} x {A4_MM[1]:.0f} mm)")


if __name__ == "__main__":
    main()
