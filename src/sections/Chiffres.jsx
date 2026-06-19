import React from "react";

const CHIFFRES = [
  { valeur: "59 134", unite: "PDF en bibliothèque", detail: "Bibliothèque vivante au 17/06/2026 · 14 394 supports avec DIC indexé (dont ~ 10 950 avec indicateur de risque, ~ 9 730 avec frais courants) · 1 472 641 ISIN en watchlist · découverte ESMA FIRDS automatique · auto-alimentation MRE → biblio des DIC clients indexés" },
  { valeur: "400+", unite: "points de contrôle", detail: "Plus de 400 points de contrôle dans le moteur (recompte du code source au 17/06/2026 : 389 détecteurs en dur dans les modules + détecteurs définis en bibliothèque) · validation runtime sur dossiers témoins. Couvre PRIIPs · DDA · POG · SFDR · Solvabilité 2 · fiscalité 125-0 A / 990 I / 757 B CGI · eurocroissance · prévoyance (Madelin, collective, dépendance, TNS) · régimes obligatoires TNS · SCPI · PEA · produits structurés · Loi Industrie Verte · Sapin 2 · contrats mixtes AV+retraite · concentration et tunnel intra-groupe · UCITS · jurisprudence ACPR." },
  { valeur: "100 / 150", unite: "groupes / SGP cartographiés", detail: "Cartographie capitalistique (compteurs du module vérifiés 11/06/2026) : 100 groupes ultimes français + étrangers actifs en France · 150 SGP actuelles + 8 SGP historiques cédées (AXA IM → BNP, Aviva → Aéma, Lyxor → Amundi, SGAM → Amundi, Sycomore → Generali…) · 59 assureurs · 96 distributeurs · qualification du conflit d'intérêt (INTRA/EX-INTRA/CONCURRENT/PARTENAIRE/EXTERNE)." },
  { valeur: "13", unite: "textes réglementaires cités", detail: "Corpus opérationnel cité par les détecteurs (distinct des versions consolidées stockées en bibliothèque) : PRIIPs · DDA · SFDR · UCITS · POG · Solvabilité 2 · Code assurances · Code mutualité · CGI · ACPR · AMF · Loi Industrie Verte · ESAP" },
  { valeur: "35 / 35", unite: "contrôles de non-régression", detail: "Vérifié 16/06/2026 — suite _test_dossiers_temoins : 35 contrôles (compteurs par qualification + codes clés) passés sur 3 dossiers témoins réels anonymisés. Moteur complet du jour : Roland PER 195 obs / AMADEO 174 obs / NOVIAL 162 obs. 38 modules de tests automatisés dans le dépôt (cartographie SGP, concentration, eurocroissance, SFDR, tunnel intra-groupe, couches narratives, routeur, cohérence dashboard/rapport…)." },
  { valeur: "< 0,30 €", unite: "coût IA / dossier complexe", detail: "Couche IA Mistral souveraine allumée à la demande · ~ 95 % du temps inactive · coût variable quasi nul → marge brute par abonné ~ 92 % (hypothèse de modèle)" },
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
