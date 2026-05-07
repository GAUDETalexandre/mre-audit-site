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
    titre: "218 détecteurs en parallèle",
    detail: "Chaque écart est sourcé : article CdA / DDA / PRIIPs cité, considérant UE intégral, sanction ACPR de précédent (CARCO 2023-03, Mutex 2022…).",
  },
  {
    n: "04",
    titre: "Rapport ACPR-ready",
    detail: "Synthèse 1 page + détail complet. Self-check intégré 8 axes vérifie automatiquement la cohérence avec les documents source. Aucun chiffre inventé.",
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
            De 8 heures d'audit manuel à 3 minutes de diagnostic sourcé.
          </h2>
          <p className="text-mre-gris mt-4 max-w-3xl mx-auto text-lg">
            MRE est un moteur d'extraction → cascade → diagnostic, conçu pour
            l'audit documentaire ACPR / RCSI / médiateur.
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
