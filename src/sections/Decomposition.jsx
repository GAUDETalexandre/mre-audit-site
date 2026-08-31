import React from "react";

// ── Brique 2 — Décomposition / look-through ──────────────────────────────────
// RÈGLE DE PUBLICATION (verrouillée) : on n'affiche QUE
//   (a) l'inventaire (volumes de la base — comptage d'objets, pas un constat d'écart), et
//   (b) les natures CERTIFIÉES par la porte mre_certif_decomposition.mjs (échantillon
//       aléatoire RE-VÉRIFIÉ SUR LA PIÈCE stockée → verdict ✅).
// Neutralité : agrégats non-nominatifs + illustration ANONYMISÉE ; aucun fonds/gérant
// nommé négativement en public. On constate la structure, on ne juge pas.
// Inventaire mesuré en base le 31/08/2026 ; natures certifiées par la porte du 30/08/2026
// (elle tourne chaque jour).

// (a) Inventaire — volumes de la base (comptage d'objets, re-vérifiables par ISIN)
const VOLUMES = [
  {
    valeur: "82 508",
    label: "compositions reconstruites sur pièce",
    detail: "17 122 544 lignes descendues (look-through), sur donnée structurée publique",
  },
  {
    valeur: "21 519",
    label: "fonds décomposés",
    detail: "sur les 33 598 supports suivis en DIC (64 %) — le reste est dit tel quel : non couvert ou non décomposable",
  },
  {
    valeur: "20 847",
    label: "UC réellement vendues, référencées",
    detail: "1 103 contrats · 28 assureurs — référentiel bâti sur les annexes réglementaires de frais (art. A. 522-1 C. assur.)",
  },
];

// (b) Natures CERTIFIÉES sur la pièce — porte du 30/08/2026 (verdict CERTIFIÉ, 16/16).
// Libellés neutres ; un fonds peut porter plusieurs natures — les nombres ne s'additionnent pas.
const CERTIFIEES = [
  { n: "12 748", t: "Structure multicouche", d: "le support détient d'autres fonds, eux-mêmes composés — MRE descend les étages (frais et expositions empilés)" },
  { n: "10 545", t: "Composition sur pièce", d: "inventaire intégral reconstruit depuis le document du fonds, re-vérifié à l'échantillon sur la pièce stockée" },
  { n: "2 197", t: "Efficience coût / rendement", d: "rendement annuel net ≤ 0 en scénario intermédiaire PRIIPs, après les coûts du fonds" },
  { n: "1 506", t: "Liquidité du sous-jacent", d: "exposition à un segment intrinsèquement peu liquide : la liquidité quotidienne peut diverger de celle du sous-jacent en tension" },
  { n: "1 378", t: "Exposition de change", d: "exposition aux devises portée par les lignes, mesurée par transparence" },
  { n: "1 268", t: "Réplication synthétique", d: "l'exposition à l'indice passe par un swap ; l'actif détenu est un panier de substitution distinct (risque de contrepartie)" },
  { n: "680", t: "Nourricier", d: "l'essentiel de l'actif reversé dans un fonds maître unique" },
  { n: "576", t: "Captivité intra-groupe", d: "actif majoritairement logé dans des OPC du propre groupe de gestion" },
  { n: "158", t: "Durabilité déclarée / détention", d: "fonds Art. 8/9 SFDR détenant des émetteurs de secteurs controversés — écart constaté, jamais qualifié" },
  { n: "72", t: "Levier / inverse", d: "rebalancement quotidien : au-delà de la journée, la performance peut décrocher du multiple affiché" },
  { n: "59", t: "Prêt de titres — partage des revenus", d: "le fonds conserve moins de 50 % des revenus bruts du prêt de titres (transparence SFTR)" },
  { n: "49", t: "Faux-diversifié", d: "concentration réelle mesurée sous une étiquette « diversifié »" },
  { n: "33", t: "Écart de suivi", d: "écart annuel moyen significatif entre la performance du fonds et celle de son indice" },
  { n: "16", t: "Illiquidité mesurée", d: "part d'actifs peu liquides mesurée par transparence (référence : plafond OPCVM de l'art. 50 UCITS)" },
  { n: "12", t: "Étiquette ↔ risque", d: "écart entre l'étiquette affichée du support et le profil mesuré de ses lignes" },
  { n: "10", t: "Collatéral en actions", d: "collatéral reçu majoritairement en actions au regard de l'exposition affichée" },
];

export default function Decomposition() {
  return (
    <section id="decomposition" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-mre-rouge text-xs font-bold uppercase tracking-widest">
            Brique 2 — Décomposition (look-through)
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-mre-bleu mt-3">
            Ce qu'un fonds affiche — et ce qu'il détient réellement.
          </h2>
          <p className="text-mre-gris mt-4 max-w-3xl mx-auto text-lg">
            MRE reconstitue la <strong>composition réelle</strong> d'un support —
            <strong> fonds → instruments → lignes → émetteurs → expositions</strong> —
            par ISIN, sur <strong>donnée structurée strictement publique</strong> (KID
            PRIIPs, rapports annuels, transparence SFTR, référentiels ESMA) —
            <strong> jamais</strong> par reconstitution approximative. Brique développée
            <strong> séparément du moteur</strong> : elle répond seule à la question
            « qu'y a-t-il réellement derrière ce produit ? ». Elle <strong>constate,
            ne juge pas</strong>.
          </p>
        </div>

        {/* (a) Inventaire — volumes */}
        <div className="grid md:grid-cols-3 gap-6">
          {VOLUMES.map((a) => (
            <div
              key={a.label}
              className="bg-mre-beige border border-gray-200 rounded-xl p-7 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl font-extrabold text-mre-bleu tracking-tight">
                {a.valeur}
              </div>
              <div className="mt-2 text-mre-rouge font-semibold uppercase text-sm tracking-wider">
                {a.label}
              </div>
              <p className="mt-3 text-sm text-mre-gris leading-relaxed">{a.detail}</p>
            </div>
          ))}
        </div>

        {/* La rigueur — compter, c'est vérifier */}
        <div className="mt-10 max-w-4xl mx-auto bg-mre-bleu text-white rounded-xl p-7">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🔒</div>
            <div>
              <h3 className="font-bold text-lg mb-2">
                Détecté ≠ certifié : compter, c'est vérifier.
              </h3>
              <p className="text-blue-100 leading-relaxed text-sm">
                Le moteur <strong>sur-signale</strong> volontairement. Un constat n'est
                <strong> publié</strong> que s'il passe la <strong>porte de certification</strong> :
                on tire un échantillon au hasard et on <strong>ré-extrait la valeur du document
                stocké</strong> — si elle ne se reproduit pas, le constat est écarté. Cette porte
                tourne <strong>chaque jour</strong> ; les chiffres ci-dessous sont ceux qui l'ont
                franchie le 30/08/2026.
              </p>
            </div>
          </div>
        </div>

        {/* (b) Natures certifiées — 16/16 au 30/08/2026 */}
        <div className="mt-12">
          <div className="text-center mb-6">
            <span className="inline-block text-mre-bleu text-xs font-bold uppercase tracking-widest">
              16 natures d'analyse — toutes certifiées sur la pièce (30/08/2026)
            </span>
            <p className="text-xs text-mre-gris mt-2">
              Ancrages : PRIIPs (UE) 1286/2014 · ESMA Guidelines on ETFs (ESMA/2014/937) · ESRB 2019 · SFTR (UE) 2015/2365 · SFDR (UE) 2019/2088
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFIEES.map((x) => (
              <div
                key={x.t}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="text-2xl font-extrabold text-mre-bleu tracking-tight">
                  {x.n}
                </div>
                <h4 className="text-mre-bleu font-bold text-sm mt-1 mb-1.5 leading-tight">
                  {x.t}
                </h4>
                <p className="text-xs text-mre-gris leading-relaxed flex-1">{x.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Honnêteté sur les limites */}
        <div className="mt-10 max-w-4xl mx-auto bg-mre-beige border-l-4 border-mre-bleu rounded-r-xl p-6">
          <div className="text-xs font-bold uppercase tracking-widest text-mre-bleu mb-2">
            Ce que MRE dit aussi — les limites, telles quelles
          </div>
          <p className="text-sm text-mre-ardoise leading-relaxed">
            Une part de l'univers est <strong>par nature non décomposable</strong> (immobilier
            détenu en direct, fonds en euros, certains montages) : MRE l'affiche comme telle
            plutôt que de l'estimer. Et chaque axe distingue toujours <strong>trois états</strong> —
            constaté · rien à signaler · non déterminable (avec la raison) — parce que la valeur
            d'un constat tient à l'honnêteté sur ce qui n'a pas pu être établi.
          </p>
        </div>

        {/* Illustration anonymisée — affiché vs détenu */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-block text-mre-rouge text-xs font-bold uppercase tracking-widest">
              Une illustration — anonymisée
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
            <div className="bg-white p-7">
              <div className="text-xs font-bold uppercase tracking-widest text-mre-gris mb-2">
                Ce que le fonds affiche
              </div>
              <p className="text-mre-ardoise leading-relaxed">
                Un support « diversifié », profil équilibré, présenté comme une allocation
                large de marché.
              </p>
            </div>
            <div className="bg-white p-7">
              <div className="text-xs font-bold uppercase tracking-widest text-mre-rouge mb-2">
                Ce que son rapport annuel déclare
              </div>
              <p className="text-mre-ardoise leading-relaxed">
                <strong>Plus de 80 %</strong> de l'actif logé dans des fonds de son
                <strong> propre groupe</strong> — listé, ligne à ligne, dans son propre document.
              </p>
            </div>
          </div>
          <p className="mt-5 text-center text-sm text-mre-gris max-w-2xl mx-auto leading-relaxed">
            La lecture est <strong>discriminante</strong> : sur un autre fonds, le même moteur
            constate <strong>0 %</strong> de détention groupe. C'est une caractéristique
            <strong> propre à chaque fonds</strong>, jamais une catégorie d'acteur. MRE
            l'objective ; l'appréciation revient au lecteur.
          </p>
        </div>

        <p className="mt-12 text-center text-xs text-mre-gris max-w-3xl mx-auto leading-relaxed">
          <strong>Détecté</strong> = population comptée ; <strong>certifié</strong> = échantillon
          re-vérifié sur la pièce stockée (porte <span className="font-mono">mre_certif_decomposition</span>,
          exécutée quotidiennement). Seuls les chiffres certifiés sont affichés. Un fonds peut porter
          plusieurs natures : les nombres <strong>ne s'additionnent pas</strong>. Constats sur documents
          publics, re-vérifiables par ISIN ; une nature à source unique est un <strong>constat de
          projection</strong>, jamais un jugement sur les frais.
        </p>
      </div>
    </section>
  );
}
