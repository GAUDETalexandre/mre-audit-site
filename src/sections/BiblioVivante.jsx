import React from "react";

// ── Brique 1 — la Bibliothèque : mémoire documentaire du marché ──────────────
// RÈGLE DE PUBLICATION : on décrit les FAMILLES de sources réglementaires et le
// résultat (volumes, historisation) — jamais les canaux/portails/mécaniques
// d'acquisition. Chiffres mesurés en base de production le 31/08/2026.

const CADENCES = [
  {
    couleur: "#047857",
    label: "QUOTIDIEN",
    sources: [
      "DIC PRIIPs des supports en unités de compte (initiateurs et distributeurs)",
      "Documents réglementaires des contrats d'assurance-vie",
      "Référentiels publics ESMA (FIRDS) et AMF (agréments SGP)",
      "Certification automatique d'échantillons re-vérifiés sur la pièce stockée",
    ],
    pourquoi: "La valeur et la documentation d'un support changent tous les jours — MRE suit en continu.",
  },
  {
    couleur: "#B45309",
    label: "HEBDOMADAIRE & MENSUEL",
    sources: [
      "Rapports annuels et inventaires publiés par les sociétés de gestion",
      "Annexes réglementaires de frais des assureurs (art. A. 522-1 C. assur.)",
      "Registre des intermédiaires (ACPR / Refassu)",
      "Gammes et référencements des contrats",
    ],
    pourquoi: "Les évolutions contractuelles et les inventaires suivent un rythme plus lent.",
  },
  {
    couleur: "#003a70",
    label: "VEILLE RÉGLEMENTAIRE",
    sources: [
      "Sanctions ACPR et AMF (décisions publiques)",
      "Recommandations ACPR (2024-R-01 VFM, 2024-R-03 conseil…)",
      "Doctrines AMF (DOC-2012-12 frais, DOC-2020-03 greenwashing)",
      "Règlements UE consolidés (PRIIPs, DDA, POG, SFDR, Taxonomie)",
    ],
    pourquoi: "La jurisprudence et la loi évoluent moins vite — mais rien ne doit passer.",
  },
];

export default function BiblioVivante() {
  return (
    <section id="biblio" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-mre-rouge text-xs font-bold uppercase tracking-widest">
            Brique 1 — la Bibliothèque
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-mre-bleu mt-3">
            Une mémoire documentaire du marché — vivante, historisée, traçable.
          </h2>
          <p className="text-mre-gris mt-4 max-w-3xl mx-auto text-lg">
            MRE industrialise la consultation des sources légalement obligées de
            publier (article 5 du Règlement UE 1286/2014 PRIIPs, registres publics
            ACPR / AMF / EUR-Lex / ESMA). L'objectif n'est pas de stocker des PDF :
            chaque document est <strong>structuré, daté et conservé dans toutes ses
            versions successives</strong> — ce qui permet de comparer les états du
            marché dans le temps. <strong>111 259 documents, 434 135 versions
            historisées, 33 600 supports avec DIC indexé</strong> au 31/08/2026 —
            indicateur de risque renseigné sur <strong>31 012</strong> supports,
            frais courants sur 30 392. Découverte automatique des instruments via
            le référentiel ESMA FIRDS (2 168 744 instruments référencés).
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
            <h3 className="text-2xl font-bold mb-4">Volume au 31 août 2026</h3>
            <div className="space-y-3 text-lg">
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>Documents binaires conservés (S3 Scaleway)</span>
                <strong>111 259</strong>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>Versions historisées</span>
                <strong>434 135</strong>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>Supports avec DIC indexé (métadonnées par ISIN)</span>
                <strong>33 600</strong>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>dont indicateur de risque renseigné</span>
                <strong>31 012</strong>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>Instruments référencés (ESMA FIRDS)</span>
                <strong>2 168 744</strong>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>DIC de contrats indexés</span>
                <strong>153</strong>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>Sanctions ACPR indexées</span>
                <strong>100 décisions</strong>
              </div>
              <div className="flex justify-between">
                <span>Textes réglementaires en corpus (UE + FR)</span>
                <strong>116 textes</strong>
              </div>
            </div>
          </div>

          <div className="bg-mre-beige border-l-4 border-mre-rouge rounded-r-xl p-8">
            <h3 className="text-xl font-bold text-mre-bleu mb-3">
              Pourquoi l'historique compte : le socle du « film »
            </h3>
            <p className="text-mre-ardoise leading-relaxed mb-4">
              Parce que chaque version successive est conservée (434 135 à ce jour),
              MRE peut comparer un document à son état antérieur et objectiver :
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
                <span>« Une nouvelle sanction ACPR concerne L. 521-2 »</span>
              </li>
            </ul>
            <div className="mt-5 text-xs italic text-mre-gris">
              Le temps joue pour cette bibliothèque : plus elle fonctionne, plus la
              profondeur historique devient difficile à reproduire. C'est le socle
              de la trajectoire « de la photographie au film ».
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
