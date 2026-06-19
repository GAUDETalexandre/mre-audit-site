import React from "react";

const CADENCES = [
  {
    couleur: "#047857",
    label: "QUOTIDIEN",
    sources: [
      "DIC PRIIPs supports UC (énumération AXA Kurtosys, 1h)",
      "DIC contrats Allianz (14 KIDs, 4h)",
      "DIC contrats Predica / Crédit Agricole / LCL (4h15)",
      "SGP ISIN-direct (300 ISIN/batch, 4h30)",
      "AMF SGP (CSV agréments, 7h30)",
    ],
    pourquoi: "La valeur d'un fonds change tous les jours — MRE suit en temps quasi réel.",
  },
  {
    couleur: "#B45309",
    label: "HEBDOMADAIRE",
    sources: [
      "Multi-canaux Kneip + Amundi + BNP + Goldman (dim 5h)",
      "AXA range — 30 contrats (dim 6h)",
      "Linxea WP-JSON — 250 docs (dim 6h30)",
      "Refassu ACPR — registre intermédiaires (vendredi 7h)",
    ],
    pourquoi: "Les évolutions contractuelles et les changements d'agrément sont moins fréquents.",
  },
  {
    couleur: "#003a70",
    label: "MENSUEL",
    sources: [
      "Sanctions ACPR (1er dimanche du mois 8h)",
      "Recommandations ACPR (2024-R-01 VFM, 2024-R-03 conseil…)",
      "Doctrines AMF (DOC-2012-12 frais, DOC-2020-03 greenwashing)",
      "Règlements UE consolidés (PRIIPs, DDA, POG, SFDR, Taxonomie)",
    ],
    pourquoi: "La jurisprudence et la loi évoluent moins vite — mais MRE ne loupe rien.",
  },
];

export default function BiblioVivante() {
  return (
    <section id="biblio" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-mre-rouge text-xs font-bold uppercase tracking-widest">
            Bibliothèque vivante
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-mre-bleu mt-3">
            Une bibliothèque vivante, autonome, traçable.
          </h2>
          <p className="text-mre-gris mt-4 max-w-3xl mx-auto text-lg">
            MRE industrialise la consultation des sources légalement obligées de
            publier (Article 5 Règlement UE 1286/2014 PRIIPs, sites ACPR / AMF /
            EUR-Lex / EFAMA / ESMA FIRDS). <strong>59 134 PDF stockés, 123 299
            versions historisées, 14 394 ISIN avec DIC capturé, 1 472 641 ISIN en
            watchlist</strong> au 17 juin 2026 — indicateur de risque renseigné sur
            <strong>~ 10 950 supports</strong>, frais courants sur ~ 9 730
            (l'index s'élargit plus vite que l'enrichissement — point d'effort actuel).
            <strong>Découverte automatique via ESMA FIRDS</strong>.
            Cap couverture France ≥ 95 % à fin 2028, à coût marginal d'infrastructure (3-5 K€/an).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CADENCES.map((c) => (
            <div
              key={c.label}
              className="bg-white border-2 rounded-xl p-6 hover:shadow-xl transition-shadow"
              style={{ borderColor: c.couleur }}
            >
              <div
                className="text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1.5 rounded-md inline-block"
                style={{ backgroundColor: c.couleur + "15", color: c.couleur }}
              >
                {c.label}
              </div>
              <ul className="space-y-2 mt-4">
                {c.sources.map((s, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-mre-ardoise"
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: c.couleur }}
                    />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <div
                className="mt-5 pt-4 border-t text-xs italic"
                style={{ color: c.couleur, borderColor: c.couleur + "30" }}
              >
                {c.pourquoi}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          <div className="bg-mre-bleu text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Volume au 17 juin 2026</h3>
            <div className="space-y-3 text-lg">
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>PDF binaires stockés (S3 Scaleway)</span>
                <strong>59 134</strong>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>Versions historisées</span>
                <strong>123 299</strong>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>ISIN avec DIC capturé (métadonnées)</span>
                <strong>14 394</strong>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>dont indicateur de risque renseigné</span>
                <strong>~ 10 950</strong>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>ISIN en watchlist (post-ESMA FIRDS)</span>
                <strong>1 472 641</strong>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>DIC contrats indexés</span>
                <strong>145</strong>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>Sanctions ACPR récentes</span>
                <strong>100 décisions</strong>
              </div>
              <div className="flex justify-between">
                <span>Textes réglementaires consolidés (UE + FR)</span>
                <strong>28 textes</strong>
              </div>
            </div>
          </div>

          <div className="bg-mre-beige border-l-4 border-mre-rouge rounded-r-xl p-8">
            <h3 className="text-xl font-bold text-mre-bleu mb-3">
              Capacité court terme : détection d'évolutions
            </h3>
            <p className="text-mre-ardoise leading-relaxed mb-4">
              MRE va bientôt comparer chaque nouveau DIC PRIIPs entrant à sa
              version précédente, et alerter automatiquement :
            </p>
            <ul className="space-y-2 text-sm text-mre-gris">
              <li className="flex gap-2">
                <span className="text-mre-rouge">→</span>
                <span>« Le RIY de ce contrat a augmenté de 0,3 pt entre 2025 et 2026 »</span>
              </li>
              <li className="flex gap-2">
                <span className="text-mre-rouge">→</span>
                <span>« La classification SFDR est passée de Article 8 à Article 6 »</span>
              </li>
              <li className="flex gap-2">
                <span className="text-mre-rouge">→</span>
                <span>« Le marché cible POG a été restreint »</span>
              </li>
              <li className="flex gap-2">
                <span className="text-mre-rouge">→</span>
                <span>« Une nouvelle sanction ACPR concerne L521-2 »</span>
              </li>
            </ul>
            <div className="mt-5 text-xs italic text-mre-gris">
              C'est ce qui rend MRE proactif, et non plus seulement réactif.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
