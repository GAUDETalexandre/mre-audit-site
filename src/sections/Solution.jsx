import React from "react";

const ETAPES = [
  {
    n: "01",
    titre: "Vous déposez les PDFs",
    detail: "Conditions particulières, relevé annuel, courrier d'arbitrage, DIC, déclaration d'adéquation. MRE accepte tous les types de documents standard du dossier d'assurance vie.",
  },
  {
    n: "02",
    titre: "Le moteur extrait et croise",
    detail: "Cascade reconstruction 4 niveaux : initiateur PRIIP → distributeur → contrat → supports UC. OCR automatique pour les scans signés en agence.",
  },
  {
    n: "03",
    titre: "9 couches d'audit en parallèle",
    detail: "Plus de 400 points de contrôle dans le moteur (recompte du code source au 17/06/2026). Chaque écart sourcé : article CdA / DDA / PRIIPs / SFDR / UCITS cité, considérant UE intégral, sanction ACPR/AMF de précédent (H2O AM AMF 93 M€ confirmé Conseil d'État 13/06/2025, Generali Vie ACPR 10 M€ 2020, Mutex 8 M€ 2022, Abeille Vie 3,5 M€ 2023, CARCO 500 K€ 2025, Cardif Assurance Vie 2,5 M€ LCB-FT 2021).",
  },
  {
    n: "04",
    titre: "Détection fonds problématiques",
    detail: "Couche M unique sur le marché : illiquidité type H2O AM (side-pocket, PE > 20 % en UCITS, délai paiement > 7j), concentration type fonds IA (top 10 > 80 %, secteur > 70 %, géo > 90 %, benchmark ad-hoc).",
  },
  {
    n: "05",
    titre: "Couche IA souveraine — à la demande",
    detail: "Quand l'OCR bute sur un cas dégradé (signature manuscrite, tableau OCR défaillant), MRE escalade vers Mistral Small 3.2-24B via les Generative APIs Scaleway (France, UE). Active ~ 5 % du temps · < 0,30 € / dossier · aucune donnée hors UE. L'IA lit, l'expert décide, le rapport cite.",
  },
  {
    n: "06",
    titre: "Notifications matérielles automatiques",
    detail: "Cron quotidien détecte les changements matériels (downgrade SFDR, fusion initiateur, hausse frais, side-pocket apparu). Mail quotidien enrichi à 8h (SCPI + flash réglementaire) + digest réglementaire hebdomadaire (sanctions, recommandations, doctrines, textes) + tableau de suivi 4 statuts pour audit ACPR.",
  },
  {
    n: "07",
    titre: "Rapport ACPR-ready",
    detail: "Synthèse 1 page + détail complet. Self-check intégré 8 axes vérifie la cohérence avec les documents source. Certification 49/49 conformes sur dossier témoin réel. Aucun chiffre inventé.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-20 px-6 bg-mre-beige">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-mre-bleu text-xs font-bold uppercase tracking-widest">
            La solution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-mre-bleu mt-3">
            Un moteur d'audit inter-documents, pensé pour les fonctions de contrôle.
          </h2>
          <p className="text-mre-gris mt-4 max-w-3xl mx-auto text-lg">
            MRE industrialise la mise en regard des pièces du dossier client avec
            le référentiel réglementaire. Conçu pour les <strong>directions
            conformité, RCSI, contrôle permanent, audit interne, gouvernance produit
            et autorités de tutelle</strong>. De 8 heures d'audit manuel par
            juriste senior à 3 minutes de diagnostic sourcé verbatim, traçable et
            opposable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ETAPES.map((e) => (
            <div
              key={e.n}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="text-mre-rouge font-mono font-bold text-sm mb-2">
                {e.n}
              </div>
              <h3 className="text-mre-bleu font-bold text-lg mb-3 leading-tight">
                {e.titre}
              </h3>
              <p className="text-sm text-mre-gris leading-relaxed">{e.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Pilier
            icone="📚"
            titre="Sourçage strict"
            detail="Chaque écart cite l'article + le considérant exact UE + une sanction ACPR de précédent quand elle existe."
          />
          <Pilier
            icone="🛡️"
            titre="Anti-hallucination"
            detail="Si un document manque, MRE l'écrit explicitement (ELEMENT_ABSENT) — il n'invente jamais une valeur."
          />
          <Pilier
            icone="✅"
            titre="Self-check intégré"
            detail="8 axes auto-vérifiés avant publication : identité, dates, encours, cohérence inter-documents, etc."
          />
        </div>
      </div>
    </section>
  );
}

function Pilier({ icone, titre, detail }) {
  return (
    <div className="text-center px-4">
      <div className="text-4xl mb-3">{icone}</div>
      <h4 className="text-mre-bleu font-bold mb-2">{titre}</h4>
      <p className="text-sm text-mre-gris leading-relaxed">{detail}</p>
    </div>
  );
}
