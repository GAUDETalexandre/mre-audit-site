import React from "react";

// ── Décomposition / look-through — le cœur du moat MRE ────────────────────────
// RÈGLE DE PUBLICATION (verrouillée) : on n'affiche QUE
//   (a) l'inventaire (volumes de la base — comptage d'objets, pas un constat d'écart), et
//   (b) les natures CERTIFIÉES par la porte mre_certif_decomposition.mjs (échantillon
//       aléatoire RE-VÉRIFIÉ SUR LA PIÈCE stockée → verdict ✅).
// Les natures seulement DÉTECTÉES (comptage brut) ne sont pas publiées comme chiffre :
// elles sont décrites en CAPACITÉ, jusqu'à re-certification.
// Neutralité : agrégats non-nominatifs + illustration ANONYMISÉE ; aucun fonds/gérant
// nommé négativement en public. On constate la structure, on ne juge pas.
// Chiffres au 01/07/2026 — sources : base mre_biblio (inventaire) + porte de certif (axe ETF).

// (a) Inventaire — volumes de la base (comptage d'objets, re-vérifiables par ISIN)
const VOLUMES = [
  {
    valeur: "2 382",
    label: "fonds radiographiés",
    detail: "composition réelle reconstituée par transparence (look-through)",
  },
  {
    valeur: "1 679",
    label: "compositions sur rapports annuels",
    detail: "à source vivante, sur 15 sociétés de gestion",
  },
  {
    valeur: "20 399",
    label: "DIC PRIIPs en base",
    detail: "dont 20 393 avec la pièce source stockée — re-vérifiables par ISIN",
  },
];

// (b) Natures CERTIFIÉES sur la pièce — axe ETF, certifié le 01/07/2026.
// Ancrages : ESMA Guidelines on ETFs (ESMA/2014/937) · ESRB 2019 · SFTR (UE) 2015/2365.
const CERTIFIEES = [
  {
    n: "621",
    t: "Liquidité du sous-jacent",
    d: "exposition à un segment intrinsèquement peu liquide (haut rendement, dette émergente, prêts, dette subordonnée) : la liquidité quotidienne peut diverger de celle du sous-jacent en période de tension",
    src: "KID PRIIPs · ESRB 2019",
  },
  {
    n: "420",
    t: "Réplication synthétique",
    d: "l'exposition à l'indice passe par un swap ; l'actif réellement détenu est un panier de substitution distinct de l'indice (risque de contrepartie)",
    src: "KID PRIIPs",
  },
  {
    n: "57",
    t: "Prêt de titres — partage des revenus",
    d: "le fonds prête ses titres mais conserve moins de 50 % des revenus bruts, le reste en frais opérationnels (rappel ESMA : ces revenus, nets des coûts, doivent revenir à l'OPCVM)",
    src: "Rapport annuel — transparence SFTR",
  },
  {
    n: "53",
    t: "Levier / inverse",
    d: "rebalancement quotidien : sur un horizon supérieur à la journée, la performance peut décrocher du multiple affiché de l'indice (effet de composition) — structure inadaptée à la détention longue",
    src: "KID PRIIPs",
  },
  {
    n: "2",
    t: "Écart de suivi (tracking)",
    d: "écart annuel moyen ≥ 1,5 pt entre la performance du fonds et celle de son indice de référence",
    src: "KID — « Performances passées »",
  },
];

// Natures de COMPOSITION — décrites en capacité (comptage à re-certifier avant chiffre public).
const CAPACITES = [
  "Efficience — rendement annuel net ≤ 0 en scénario intermédiaire PRIIPs, après les coûts du fonds",
  "Captivité intra-groupe — actif majoritairement logé dans des OPC du propre groupe",
  "Nourricier — l'essentiel de l'actif reversé dans un fonds maître unique",
  "Faux-diversifié — concentration réelle sous une étiquette « diversifié »",
  "Durabilité (SFDR) — fonds Art. 8/9 détenant des émetteurs de secteurs controversés",
];

export default function Decomposition() {
  return (
    <section id="decomposition" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-mre-rouge text-xs font-bold uppercase tracking-widest">
            Décomposition — look-through
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-mre-bleu mt-3">
            Ce qu'un fonds affiche — et ce qu'il détient réellement.
          </h2>
          <p className="text-mre-gris mt-4 max-w-3xl mx-auto text-lg">
            Au-delà du dossier, MRE reconstitue la <strong>composition réelle</strong> d'un
            support — <strong>par transparence (look-through)</strong>, par ISIN, sur
            <strong> donnée structurée strictement publique</strong> (KID PRIIPs, rapports
            annuels, holdings, transparence SFTR, FIRDS) — <strong>jamais</strong> par
            reconstitution approximative de PDF. Il <strong>constate, ne juge pas</strong>.
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
                stocké</strong> — si elle ne se reproduit pas, le constat est écarté. Les chiffres
                ci-dessous sont ceux qui ont franchi cette porte.
              </p>
            </div>
          </div>
        </div>

        {/* (b) Natures certifiées — axe ETF 01/07/2026 */}
        <div className="mt-12">
          <div className="text-center mb-6">
            <span className="inline-block text-mre-bleu text-xs font-bold uppercase tracking-widest">
              Natures certifiées sur la pièce — axe ETF (01/07/2026)
            </span>
            <p className="text-xs text-mre-gris mt-2">
              Ancrages : ESMA Guidelines on ETFs (ESMA/2014/937) · ESRB 2019 · Règlement SFTR (UE) 2015/2365
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {CERTIFIEES.map((x) => (
              <div
                key={x.t}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="text-3xl font-extrabold text-mre-bleu tracking-tight">
                  {x.n}
                </div>
                <h4 className="text-mre-bleu font-bold text-sm mt-2 mb-2 leading-tight">
                  {x.t}
                </h4>
                <p className="text-xs text-mre-gris leading-relaxed flex-1">{x.d}</p>
                <div className="mt-3 pt-2 border-t border-gray-100 text-[10px] font-mono text-mre-gris/80">
                  {x.src}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Natures de composition — en capacité (sans chiffre tant que non re-certifié) */}
        <div className="mt-12 max-w-4xl mx-auto bg-mre-beige border-l-4 border-mre-bleu rounded-r-xl p-6">
          <div className="text-xs font-bold uppercase tracking-widest text-mre-bleu mb-3">
            Ce que la décomposition de composition révèle aussi
          </div>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-mre-ardoise">
            {CAPACITES.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="text-mre-rouge mt-0.5">→</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-mre-gris italic">
            Natures re-certifiées en continu par la décomposition quotidienne ; leur volume
            n'est affiché qu'une fois re-vérifié sur la pièce.
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
          re-vérifié sur la pièce stockée (porte <span className="font-mono">mre_certif_decomposition</span>).
          Seuls les chiffres certifiés sont affichés. Un fonds peut porter plusieurs natures : les
          nombres <strong>ne s'additionnent pas</strong>. Constats sur documents publics,
          re-vérifiables par ISIN ; une nature à source unique est un <strong>constat de
          projection</strong>, jamais un jugement sur les frais.
        </p>
      </div>
    </section>
  );
}
