import React from "react";

const CHIFFRES = [
  { valeur: "46 677+", unite: "PDF en bibliothèque", detail: "Bibliothèque vivante au 27/05/2026 · 9 012 ISIN avec DIC capturé · 306 320 ISIN en watchlist · qualification fonctionnelle 51,5 % couverture utile (×14 vs base) · découverte ESMA FIRDS automatique · auto-alimentation MRE → biblio des DIC clients indexés" },
  { valeur: "274", unite: "détecteurs en production", detail: "Chiffre vérifié 17/05/2026 par lecture exhaustive du code source · 105 codes biblio + 169 codes hardcodés dans 16 modules · Validation empirique 15 dossiers — convergence parfaite. Couvre PRIIPs · DDA · POG · SFDR · Solvabilité 2 · fiscalité 125-0 A / 990 I / 757 B CGI · eurocroissance · Loi Industrie Verte · structurés · Sapin 2 · contrats mixtes AV+retraite · concentration et tunnel intra-groupe · UCITS · jurisprudence ACPR · reliquats post-fusion." },
  { valeur: "25 / 53", unite: "groupes / SGP cartographiés", detail: "Cartographie capitalistique P6 (27/05/2026) : 25 groupes ultimes français + étrangers actifs en France · 53 SGP actuelles + 5 SGP historiques cédées (AXA IM → BNP, Aviva → Aéma, Lyxor → Amundi, SGAM → Amundi, Sycomore → Generali) · SIREN/LEI/dates M&A · 6 codes de qualification du conflit d'intérêt (INTRA/EX-INTRA/CONCURRENT/PARTENAIRE/EXTERNE)." },
  { valeur: "13", unite: "textes réglementaires", detail: "PRIIPs · DDA · SFDR · UCITS · POG · Solvabilité 2 · Code assurances · Code mutualité · CGI · ACPR · AMF · Loi Industrie Verte · ESAP" },
  { valeur: "16", unite: "modules de tests sentinelles", detail: "Vérifié 27/05/2026 — _test_cartographie_sgp (49) · _test_concentration (37) · _test_couches_narratives · _test_routeur · _test_loi_industrie_verte · _test_sfdr · _test_eurocroissance (17) · _test_tunnel_intra_groupe · _test_detecteurs_differences_dic · _test_detecteurs_fonds_problematiques · _test_articles_urls · _test_biblio_isins_detenus · _test_extraction_amadeo_noms · _test_dossiers_temoins_live · _test_object_object_dans_rapports · _test_dashboard_genere_complet. Non-régression baseline 35/35 sur 3 dossiers témoins (Roland PER 160 obs / AMADEO 152 / NOVIAL 134)." },
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
