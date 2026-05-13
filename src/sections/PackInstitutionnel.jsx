import React from "react";

const DOCUMENTS = [
  {
    titre: "Business Plan v5",
    sous: "Édition institutionnelle 12 mai 2026",
    detail:
      "29 pages — Synthèse exécutive · Le constat et l'asymétrie ACPR/AMF · Les 2 innovations couplées (bibliothèque vivante + moteur révélateur d'écart) · 13 textes réglementaires couverts · TAM/SAM/SOM · Matrice fonctionnelle MRE vs marché · Le créneau non-occupé · Pricing 3 paliers · Unit economics (marge brute > 99 %) · Équipe + méthode IA-assistée · Engagement Entreprise Adaptée · Roadmap 24 mois.",
    icone: "📊",
    couleur: "#003a70",
  },
  {
    titre: "Pitch deck v5",
    sous: "13 slides A4 paysage · 12 mai 2026",
    detail:
      "Format pitch institutionnel — problème · pourquoi maintenant · solution · différenciation · couche IA souveraine · marché · modèle économique · traction (49/49 certif AMADEO) · roadmap · équipe + méthode · engagement société · demande Le Swave. Disponible sur demande qualifiée au format PDF / PPTX.",
    icone: "🎯",
    couleur: "#B45309",
  },
  {
    titre: "Note couche IA souveraine",
    sous: "Preuve technique 11 mai 2026",
    detail:
      "Architecture validée bout-en-bout — Mistral Small 3.2-24B FP8 sur GPU H100 Scaleway fr-par-2. Tunnel SSH chiffré, token Bearer 32 octets par client. Allumée à la demande (~ 5 % du temps), coût marginal < 0,30 € par dossier complexe. Aucun appel cloud étranger.",
    icone: "🤖",
    couleur: "#1e3a8a",
  },
  {
    titre: "Certification AMADEO 49/49",
    sous: "Preuve qualité audit 11 mai 2026",
    detail:
      "Dossier témoin réel anonymisé (Roland Gaudet AMADEO Excellence Vie) — 13 PDFs croisés contre 13 textes réglementaires. 49 vérifications-clés certifiées 100 % conformes. Score MRE : 8 ECART_MAJEUR · 17 TENSION · 22 ALIGNÉ · 53 INFO · 126 observations totales.",
    icone: "✅",
    couleur: "#047857",
  },
  {
    titre: "Étude de marché",
    sous: "Édition institutionnelle",
    detail:
      "20+ pages — Cadre macro épargne FR · Volumétrie documentaire · Matrice exhaustive sanctions ACPR/AMF · Cartographie concurrence (Big 4, RegTech FR/UE/UK/US) · Cibles nominatives 122 grands comptes · Méthodologie TAM/SAM/SOM rigoureuse · Dynamiques 2026-2030 · Personas institutionnels.",
    icone: "📈",
    couleur: "#B91C1C",
  },
  {
    titre: "Cas client anonymisé",
    sous: "Démonstration sur dossier réel",
    detail:
      "Dossier patrimonial type — 26 zones d'analyse · 3 minutes vs 8 heures audit manuel · 19 % alignement réglementaire constaté · Détail des écarts majeurs détectés et articles cités · Calcul ROI client documenté.",
    icone: "🔍",
    couleur: "#92400E",
  },
];

export default function PackInstitutionnel() {
  return (
    <section id="pack" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-mre-rouge text-xs font-bold uppercase tracking-widest">
            Pack institutionnel
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-mre-bleu mt-3">
            Documentation institutionnelle disponible sur demande qualifiée.
          </h2>
          <p className="text-mre-gris mt-4 max-w-3xl mx-auto text-lg">
            Quatre documents structurants au standard d'un dossier d'agrément
            ACPR — destinés aux comités d'incubation, fonds d'amorçage RegTech,
            directions conformité et autorités de tutelle. Transmis sous
            engagement de confidentialité après qualification de la demande.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {DOCUMENTS.map((d) => (
            <div
              key={d.titre}
              className="bg-white border-2 border-gray-200 rounded-xl p-7 transition-all"
              style={{ borderTopColor: d.couleur, borderTopWidth: "4px" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{d.icone}</span>
                    <div>
                      <h3 className="text-mre-bleu font-bold text-xl leading-tight">
                        {d.titre}
                      </h3>
                      <div className="text-xs uppercase tracking-wider text-mre-gris font-semibold mt-1">
                        {d.sous}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-mre-gris leading-relaxed mt-3">
                    {d.detail}
                  </p>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-mono text-mre-gris">
                  Confidentiel — sur demande qualifiée
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-mre-bleu bg-mre-bleu/10 px-3 py-1.5 rounded">
                  🔒 NDA
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-mre-bleu to-blue-900 text-white rounded-xl p-8">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🛡️</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-3">
                Demander le pack institutionnel
              </h3>
              <p className="text-blue-100 leading-relaxed mb-4">
                Pour des raisons de confidentialité stratégique (chiffres
                financiers, cibles nominatives, méthodologie propriétaire), le
                pack n'est pas en accès libre. Une demande qualifiée auprès du
                fondateur est requise. Réponse sous 48 h ouvrées avec envoi
                personnalisé après vérification.
              </p>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 mb-5">
                <div className="text-xs uppercase tracking-wider text-blue-200 font-semibold mb-2">
                  Informations à fournir
                </div>
                <ul className="text-sm text-blue-50 space-y-1">
                  <li>· Nom complet et fonction</li>
                  <li>· Organisation et secteur</li>
                  <li>· Profil LinkedIn (vérification)</li>
                  <li>· Finalité de la demande (incubation, comité d'investissement, audit conformité, etc.)</li>
                  <li>· Engagement de confidentialité explicite</li>
                </ul>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-mre-rouge text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-800 transition-colors shadow-lg"
              >
                Soumettre une demande qualifiée →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-4xl mx-auto text-xs text-mre-gris italic text-center">
          Conformément à la posture neutre du projet MRE et au standard
          institutionnel, aucun document stratégique n'est diffusé en accès
          libre. Cette discipline protège les informations sensibles
          (concurrents, prospects, méthodologie propriétaire) et constitue un
          gage de sérieux pour les acteurs réglementés que MRE adresse.
        </div>
      </div>
    </section>
  );
}
