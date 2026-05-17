import React from "react";

const CHIFFRES = [
  { valeur: "46 677", unite: "PDF en bibliothèque", detail: "Bibliothèque vivante au 17/05/2026 · 85 334 versions historisées · 6 750 ISIN avec DIC capturé · 306 320 ISIN en watchlist · découverte ESMA FIRDS automatique" },
  { valeur: "274", unite: "détecteurs en production", detail: "Chiffre vérifié au 17/05/2026 par lecture exhaustive du code source des 45 fichiers `mre_*.mjs` + JSON biblio (105 codes obligations + 169 codes hardcodés dans 16 modules). Validation empirique runtime sur 15 dossiers — convergence parfaite avec 181 codes émis. Couvre PRIIPs · DDA · POG · SFDR · Solvabilité 2 · fiscalité 125-0 A / 990 I / 757 B CGI · eurocroissance · Loi Industrie Verte · structurés · Sapin 2 · contrats mixtes AV+retraite · concentration et tunnel intra-groupe · UCITS · jurisprudence ACPR." },
  { valeur: "13", unite: "textes réglementaires", detail: "PRIIPs · DDA · SFDR · UCITS · POG · Solvabilité 2 · Code assurances · Code mutualité · CGI · ACPR · AMF · Loi Industrie Verte · ESAP" },
  { valeur: "49 / 49", unite: "vérifications-clés AMADEO conformes", detail: "100 % des vérifications-clés du rapport AMADEO Excellence Vie conformes le 11/05/2026 · 13 PDFs croisés contre 13 textes réglementaires" },
  { valeur: "335", unite: "tests sentinelles verts", detail: "Vérifié 17/05/2026 sur 14 modules de tests unitaires (routeur, classifier, couches narratives, cascade, concentration, LIV, SFDR, eurocroissance, tunnel intra-groupe, fonds problématiques, etc.) · anti-hallucination, témoins négatifs, anti-faux-positifs" },
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
