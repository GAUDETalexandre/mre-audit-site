import React from "react";

const PRODUITS = [
  { nom: "Assurance vie multisupports", loi: "Code des assurances + DDA + PRIIPs", statut: "✅ V1 livrée", couleur: "#047857", phase: "Live" },
  { nom: "PER (post-PACTE)", loi: "L224 CMF + DDA + PRIIPs", statut: "✅ V1 livrée", couleur: "#047857", phase: "Live" },
  { nom: "PER d'entreprise (Art. 83 / 39)", loi: "L137-11-1 CSS", statut: "🔜 Phase 1", couleur: "#B45309", phase: "Phase 1" },
  { nom: "Contrats Madelin", loi: "L141 CdA + L132-12", statut: "🔜 Phase 1", couleur: "#B45309", phase: "Phase 1" },
  { nom: "Capitalisation (990 I bis)", loi: "Code des assurances", statut: "🔜 Phase 1", couleur: "#B45309", phase: "Phase 1" },
  { nom: "PEA / PEA-PME", loi: "L221 CMF + MIFID II", statut: "🔜 Phase 2", couleur: "#003a70", phase: "Phase 2" },
  { nom: "Produits structurés", loi: "PRIIPs + Reco AMF avril 2025", statut: "🔜 Phase 2", couleur: "#003a70", phase: "Phase 2" },
  { nom: "Compte-titres ordinaire", loi: "L211 CMF + MIFID II", statut: "🔜 Phase 2", couleur: "#003a70", phase: "Phase 2" },
  { nom: "SCPI / OPCI / SCI", loi: "L214 CMF + Doctrine AMF", statut: "🔜 Phase 3", couleur: "#7C3AED", phase: "Phase 3" },
  { nom: "FCPR / FPCI / FCPI", loi: "L214-26 CMF", statut: "🔜 Phase 3", couleur: "#7C3AED", phase: "Phase 3" },
];

export default function Extensibilite() {
  return (
    <section id="extension" className="py-20 px-6 bg-mre-beige">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-mre-rouge text-xs font-bold uppercase tracking-widest">
            Extension produits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-mre-bleu mt-3">
            L'assurance vie est notre première pierre.
          </h2>
          <p className="text-mre-gris mt-4 max-w-3xl mx-auto text-lg">
            MRE est conçu <strong>extensible</strong> dès le départ. Le cadre
            méthodologique est universel pour tous les produits financiers.
          </p>
        </div>

        {/* Équation universelle */}
        <div className="bg-white border-2 border-mre-bleu/20 rounded-2xl p-8 mb-12 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-mre-rouge mb-4">
            Le cadre est universel
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-2xl font-bold">
            <div className="bg-mre-bleu text-white px-6 py-3 rounded-lg">
              1 LOI
            </div>
            <div className="text-mre-rouge text-3xl">→</div>
            <div className="bg-mre-bleu text-white px-6 py-3 rounded-lg">
              1 jeu de DOCUMENTS
            </div>
            <div className="text-mre-rouge text-3xl">→</div>
            <div className="bg-mre-rouge text-white px-6 py-3 rounded-lg">
              1 grille d'ÉCARTS
            </div>
          </div>
          <p className="mt-6 text-sm text-mre-gris max-w-2xl mx-auto italic">
            Cette équation se vérifie sur tout produit financier régulé. Une
            fois le moteur construit pour l'assurance vie, le reste est
            principalement de la déclinaison sectorielle.
          </p>
        </div>

        {/* Tableau des produits */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-mre-bleu text-white">
              <tr>
                <th className="text-left p-4 text-sm font-semibold">Produit financier</th>
                <th className="text-left p-4 text-sm font-semibold hidden md:table-cell">Loi cadre</th>
                <th className="text-left p-4 text-sm font-semibold">Statut MRE</th>
              </tr>
            </thead>
            <tbody>
              {PRODUITS.map((p, i) => (
                <tr key={p.nom} className={i % 2 === 0 ? "bg-mre-beige/30" : "bg-white"}>
                  <td className="p-4 text-mre-ardoise font-medium">{p.nom}</td>
                  <td className="p-4 text-sm text-mre-gris hidden md:table-cell font-mono">
                    {p.loi}
                  </td>
                  <td className="p-4">
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: p.couleur + "20",
                        color: p.couleur,
                      }}
                    >
                      {p.statut}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center text-sm text-mre-gris max-w-3xl mx-auto">
          Architecture extensible déjà en place : routeur produit/régime,
          classifier 16 types de documents, bibliothèque réglementaire
          neutre, détecteurs modulaires. Ajouter un nouveau produit = ajouter
          une matrice + activer les détecteurs concernés.
        </div>
      </div>
    </section>
  );
}
