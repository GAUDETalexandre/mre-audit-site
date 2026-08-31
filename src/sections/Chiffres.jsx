import React from "react";

// Chiffres mesurés en base de production le 31/08/2026 (sauf mention datée contraire).
const CHIFFRES = [
  { valeur: "111 259", unite: "documents en bibliothèque", detail: "Bibliothèque vivante au 31/08/2026 · 434 135 versions historisées (chaque état successif conservé) · 33 600 supports avec DIC indexé (indicateur de risque renseigné sur 31 012, frais courants sur 30 392) · découverte automatique via le référentiel ESMA FIRDS (2 168 744 instruments) · auto-alimentation MRE → biblio des DIC clients indexés." },
  { valeur: "17,1 M", unite: "lignes de composition", detail: "82 508 compositions de fonds reconstruites sur pièce (look-through) · 21 519 fonds décomposés sur les 33 598 suivis · 16 natures d'analyse toutes certifiées le 30/08/2026 par échantillon re-vérifié sur la pièce stockée — la porte de certification tourne chaque jour." },
  { valeur: "20 847", unite: "UC vendues référencées", detail: "Le référentiel de l'univers réellement distribué en France : 20 847 unités de compte × 1 103 contrats × 28 assureurs (637 989 lignes UC×contrat), bâti sur les annexes réglementaires de frais (art. A. 522-1 C. assur.) publiées par les assureurs — frais et rétrocessions par ligne quand publiés." },
  { valeur: "400+", unite: "points de contrôle", detail: "Plus de 400 points de contrôle dans le moteur (recompte certifié du code source au 08/07/2026 · validation runtime sur dossiers témoins). Couvre PRIIPs · DDA · POG · SFDR · Solvabilité 2 · fiscalité 125-0 A / 990 I / 757 B CGI · eurocroissance · prévoyance (Madelin, collective, dépendance, TNS) · régimes obligatoires TNS · SCPI · PEA · produits structurés · Loi Industrie Verte · Sapin 2 · concentration et tunnel intra-groupe · UCITS · jurisprudence ACPR." },
  { valeur: "100 / 150", unite: "groupes / SGP cartographiés", detail: "Cartographie capitalistique (compteurs du module vérifiés 11/06/2026) : 100 groupes ultimes français + étrangers actifs en France · 150 SGP actuelles + 8 SGP historiques cédées (AXA IM → BNP, Aviva → Aéma, Lyxor → Amundi…) · 59 assureurs · 96 distributeurs · qualification du conflit d'intérêt (INTRA/EX-INTRA/CONCURRENT/PARTENAIRE/EXTERNE)." },
  { valeur: "129", unite: "témoins de non-régression", detail: "Batterie de 129 contrôles rejoués quotidiennement sur la production (état au 30/08/2026) : chaque acquis du moteur, de la bibliothèque et de la décomposition est verrouillé par un témoin qui sait échouer. S'y ajoute la certification quotidienne automatique des natures de décomposition." },
  { valeur: "< 0,30 €", unite: "coût IA / dossier complexe", detail: "Couche IA Mistral souveraine allumée à la demande · ~ 95 % du temps inactive · coût variable quasi nul → marge brute par abonné ~ 92 % (hypothèse de modèle)." },
  { valeur: "100 %", unite: "souveraineté France/UE", detail: "Scaleway France · OVH · modèle IA Mistral open-source Apache 2.0 · aucune dépendance cloud US pour le traitement · conforme commande publique 2026+. Anti-hallucination : patterns + verbatim cité du document source — l'IA lit, l'expert décide, le rapport cite." },
];

export default function Chiffres() {
  return (
    <section id="chiffres" className="py-20 px-6 bg-mre-bleu text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-orange-300 text-xs font-bold uppercase tracking-widest">
            Les chiffres
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Ce qu'il y a sous le capot.
          </h2>
          <p className="text-blue-200 mt-4 max-w-2xl mx-auto text-lg">
            MRE n'est pas un MVP en présentation. C'est une infrastructure déjà
            opérationnelle — bibliothèque, décomposition et moteur — mesurée en
            base de production le 31/08/2026.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CHIFFRES.map((c) => (
            <div
              key={c.unite}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                {c.valeur}
              </div>
              <div className="text-sm font-semibold text-orange-300 mt-1 uppercase tracking-wider">
                {c.unite}
              </div>
              <div className="text-xs text-blue-100 mt-3 leading-relaxed">
                {c.detail}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-3">🛡️</div>
          <p className="text-lg text-blue-100 italic">
            Aucun chiffre inventé. Aucun document non lu. Aucune référence
            réglementaire approximative. C'est ce niveau d'exigence que requiert
            un usage en direction conformité, contrôle permanent, audit interne
            et autorité de tutelle.
          </p>
          <p className="mt-6 text-sm text-blue-200">
            Antériorité PI fixée par dépôt eSoleau du 19 avril 2026.
            Souveraineté 100 % France/UE par construction (Scaleway · OVH · Mistral).
          </p>
        </div>
      </div>
    </section>
  );
}
