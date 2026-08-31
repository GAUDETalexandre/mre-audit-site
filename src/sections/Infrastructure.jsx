import React from "react";

// ── L'infrastructure en 3 briques — hiérarchie de valeur actée le 30/08/2026 ──
// La vitrine raconte MRE dans cet ordre : 1. Bibliothèque (le socle historisé),
// 2. Décomposition (la réalité derrière le produit), 3. Moteur (l'application).
// Chiffres mesurés en base de production le 31/08/2026.

const BRIQUES = [
  {
    n: "1",
    titre: "La Bibliothèque",
    sousTitre: "La mémoire documentaire du marché",
    ancre: "#biblio",
    detail:
      "MRE collecte, structure et historise les documents réglementaires des produits d'épargne — chaque version successive est conservée. Ce n'est pas un stock de PDF : c'est une mémoire du marché qui permet de comparer ses états dans le temps.",
    chiffres: ["111 259 documents", "434 135 versions historisées", "2 168 744 instruments référencés (ESMA FIRDS)"],
    note: "Le temps joue pour elle : l'historique accumulé ne se reconstitue pas.",
  },
  {
    n: "2",
    titre: "La Décomposition",
    sousTitre: "Ce qu'il y a réellement derrière un produit",
    ancre: "#decomposition",
    detail:
      "Au-delà de l'étiquette, MRE reconstitue par transparence ce qu'un support détient : fonds → instruments → lignes → émetteurs → expositions. Une brique autonome, développée séparément du moteur en raison de sa complexité propre.",
    chiffres: ["82 508 compositions sur pièce", "17 122 544 lignes descendues", "16 natures d'analyse certifiées"],
    note: "Répond seule à une question : « qu'y a-t-il vraiment dans ce produit ? »",
  },
  {
    n: "3",
    titre: "Le Moteur",
    sousTitre: "L'application de cette connaissance",
    ancre: "#solution",
    detail:
      "Le moteur confronte documents, réglementation, produit réel et dossier client pour rechercher incohérences, tensions, concentrations et éléments absents — chaque écart sourcé verbatim, article cité.",
    chiffres: ["Plus de 400 points de contrôle", "129 témoins de non-régression quotidiens", "Certification automatique sur pièce"],
    note: "MRE constate, chiffre et documente. Il ne juge pas.",
  },
];

const TRAJECTOIRE = [
  { label: "Bibliothèque", etat: "acquis" },
  { label: "Décomposition", etat: "acquis" },
  { label: "Moteur d'audit", etat: "acquis" },
  { label: "Connexion aux flux réels", etat: "vision" },
  { label: "Suivi dynamique", etat: "vision" },
  { label: "Détection des changements", etat: "vision" },
  { label: "Concentrations & interactions", etat: "vision" },
  { label: "Anticipation", etat: "vision" },
];

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="py-20 px-6 bg-mre-bleu text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-orange-300 text-xs font-bold uppercase tracking-widest">
            L'infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            MRE n'est pas d'abord un moteur d'audit.
          </h2>
          <p className="text-blue-100 mt-4 max-w-3xl mx-auto text-lg">
            C'est une infrastructure qui construit, brique par brique, une
            représentation exploitable de la <strong>réalité des produits
            financiers</strong> — à partir de leurs documents, de leurs données et
            de leur évolution dans le temps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {BRIQUES.map((b) => (
            <a
              key={b.n}
              href={b.ancre}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors flex flex-col"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-extrabold text-orange-300/90">{b.n}</span>
                <div>
                  <h3 className="text-xl font-bold leading-tight">{b.titre}</h3>
                  <div className="text-orange-200 text-xs font-semibold uppercase tracking-wider mt-1">
                    {b.sousTitre}
                  </div>
                </div>
              </div>
              <p className="text-sm text-blue-100 leading-relaxed mt-4 flex-1">{b.detail}</p>
              <ul className="mt-4 space-y-1.5">
                {b.chiffres.map((c) => (
                  <li key={c} className="text-sm font-semibold flex items-start gap-2">
                    <span className="text-orange-300 mt-0.5">▸</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-blue-200 italic">
                {b.note}
              </div>
            </a>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-blue-200">
          Chiffres mesurés en base de production le 31/08/2026 — détail et méthode dans les
          sections dédiées ci-dessous.
        </p>

        {/* Trajectoire : de la photographie au film */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-block text-orange-300 text-xs font-bold uppercase tracking-widest">
              La trajectoire — de la photographie au film
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {TRAJECTOIRE.map((t, i) => (
              <React.Fragment key={t.label}>
                <span
                  className={
                    "text-xs md:text-sm px-3 py-1.5 rounded-full border " +
                    (t.etat === "acquis"
                      ? "bg-white/15 border-white/30 font-semibold"
                      : "bg-transparent border-white/15 text-blue-200")
                  }
                >
                  {t.label}
                </span>
                {i < TRAJECTOIRE.length - 1 && (
                  <span className="text-white/40 self-center">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-200 mb-1">
                Aujourd'hui — la photographie
              </div>
              <p className="text-blue-100">« Voici ce que contient ce produit, pièce à l'appui. »</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-200 mb-1">
                Demain — le film <span className="normal-case font-normal text-blue-300">(en construction)</span>
              </div>
              <p className="text-blue-100">
                « Voici ce qui a changé, comment les expositions évoluent, quelles
                concentrations apparaissent. »
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
