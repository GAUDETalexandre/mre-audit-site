import React from "react";

const CHIFFRES = [
  { valeur: "41 631", unite: "PDF en bibliothèque", detail: "Bibliothèque vivante au 12/05/2026 · 79 108 versions historisées · 16 319 ISIN watchlist · découverte ESMA FIRDS automatique" },
  { valeur: "152", unite: "détecteurs en production", detail: "23 domaines métier (PRIIPs · DDA · POG · SFDR · Solvabilité 2 · fiscalité · eurocroissance · Loi Industrie Verte · structurés · Sapin 2)" },
  { valeur: "13", unite: "textes réglementaires", detail: "PRIIPs · DDA · SFDR · UCITS · POG · Solvabilité 2 · Code assurances · Code mutualité · CGI · ACPR · AMF · Loi Industrie Verte · ESAP" },
  { valeur: "49 / 49", unite: "certification AMADEO", detail: "100 % des vérifications-clés conformes sur le dossier témoin AMADEO Excellence Vie · 13 PDFs croisés contre 13 textes" },
  { valeur: "334", unite: "tests sentinelles verts", detail: "Non-régression automatisée à chaque évolution · anti-hallucination, témoins négatifs, anti-faux-positifs" },
  { valeur: "< 0,30 €", unite: "coût IA / dossier complexe", detail: "Couche IA Mistral souveraine allumée à la demande · 95 % du temps éteinte · marge brute > 99 %" },
  { valeur: "100 %", unite: "souveraineté France/UE", detail: "Scaleway France · OVH · modèle IA Mistral open-source Apache 2.0 · aucune dépendance cloud US · conforme commande publique 2026+" },
  { valeur: "0", unite: "hallucination", detail: "Patterns + verbatim cité du document source · règle de gouvernance verrouillée dans le code · l'IA lit, l'expert décide, le rapport cite" },
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
            MRE n'est pas un MVP en présentation. C'est un moteur déjà
            opérationnel sur des dossiers réels.
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
