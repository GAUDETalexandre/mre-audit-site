import React from "react";

// 8 familles de produits couvertes — alignées sur le BP refondu (15/06/2026, §6.2)
// La colonne "revele" = ce que MRE détecte réellement, sourcé des modules détecteurs.
const FAMILLES = [
  {
    nom: "Assurance vie multisupports",
    loi: "Code des assurances · DDA · PRIIPs",
    revele: "Cohérence entre toutes les pièces ; avances et nantissement ; options de gestion par défaut ; rachats programmés ; clause bénéficiaire (y compris démembrée) ; cascade des frais sur le rendement.",
    statut: "✅ En production", couleur: "#047857",
  },
  {
    nom: "Retraite — PER, PERP, Madelin, Art. 83",
    loi: "L224 CMF · L141 CdA",
    revele: "Devoir de conseil retraite ; frais d'adhésion des contrats de groupe ; transferts et plafonds ; choix fiscal à l'entrée ; phase de rente (arrérages, taux technique, réversion, revalorisation, fiscalité réellement servie).",
    statut: "✅ En production", couleur: "#047857",
  },
  {
    nom: "Prévoyance — Madelin · collective · dépendance · individuelle · socle TNS",
    loi: "L141 CdA · CSS · loi Évin · régimes obligatoires TNS",
    revele: "Garanties réellement couvertes vs documentées ; traçabilité de la remise de notice ; adéquation au régime obligatoire TNS ; triangulation besoin ↔ souscrit sur 5 segments.",
    statut: "✅ En production", couleur: "#047857",
  },
  {
    nom: "Fonds euros / eurocroissance",
    loi: "Code des assurances · PRIIPs",
    revele: "Garantie à terme et son applicabilité réelle (âge, horizon) ; composition ; cascade brut → net → net de frais.",
    statut: "✅ En production", couleur: "#047857",
  },
  {
    nom: "SCPI en direct (pierre-papier)",
    loi: "L214 CMF · Doctrine AMF DOC-2019-04",
    revele: "Prix vs valeur de reconstitution (±10 %, L.214-94 — la métrique des corrections 2023-2024) ; mécanisme de retrait (seuil 10 %) ; distribution vs résultat courant ; fenêtres fiscales (Pinel clos 31/12/2024, Denormandie, Malraux, déficit foncier) ; les 5 commissions ; démembrement ; taux d'occupation.",
    statut: "✅ Module dédié", couleur: "#0d9488",
  },
  {
    nom: "PEA / PEA-PME (bancaire et assurance)",
    loi: "L221-30 CMF · D.221-111-1 CMF",
    revele: "Structure des pièces (compte titres + espèces) ; frais vs plafonds impératifs (tenue 0,4 %/an, transaction 0,5–1,2 %, transfert 150 € global) ; plafond de versement 150 000 € ; antériorité fiscale (date du 1er versement) ; titres non cotés ; liquidités dormantes ; transferts.",
    statut: "✅ Module dédié", couleur: "#0d9488",
  },
  {
    nom: "Produits structurés (autocall / EMTN / décrément)",
    loi: "PRIIPs · Reco AMF avril 2025",
    revele: "Niveau de barrière → seuil de perte réel ; coupon vs performance totale ; garantie à l'échéance ; marge de structuration de l'émetteur.",
    statut: "✅ Détecteurs actifs", couleur: "#0d9488",
  },
  {
    nom: "ETF",
    loi: "UCITS · MIFID II",
    revele: "Empilement des frais (enveloppe + fonds) ; réplication synthétique et risque de contrepartie.",
    statut: "✅ Couvert", couleur: "#0d9488",
  },
];

export default function Extensibilite() {
  return (
    <section id="extension" className="py-20 px-6 bg-mre-beige">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-mre-rouge text-xs font-bold uppercase tracking-widest">
            Périmètre produit
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-mre-bleu mt-3">
            8 familles de produits déjà couvertes — en profondeur.
          </h2>
          <p className="text-mre-gris mt-4 max-w-3xl mx-auto text-lg">
            MRE ne se contente pas de l'assurance vie : chaque famille dispose de
            ses propres détecteurs, sourcés sur textes primaires. Voici, pour
            chacune, <strong>ce que le moteur révèle réellement</strong>.
          </p>
        </div>

        {/* Équation universelle */}
        <div className="bg-white border-2 border-mre-bleu/20 rounded-2xl p-8 mb-12 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-mre-rouge mb-4">
            Le cadre est universel
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-2xl font-bold">
            <div className="bg-mre-bleu text-white px-6 py-3 rounded-lg">1 LOI</div>
            <div className="text-mre-rouge text-3xl">→</div>
            <div className="bg-mre-bleu text-white px-6 py-3 rounded-lg">1 jeu de DOCUMENTS</div>
            <div className="text-mre-rouge text-3xl">→</div>
            <div className="bg-mre-rouge text-white px-6 py-3 rounded-lg">1 grille d'ÉCARTS</div>
          </div>
          <p className="mt-6 text-sm text-mre-gris max-w-2xl mx-auto italic">
            L'extraction, la bibliothèque et la cartographie sont génériques ; les
            détecteurs forment une couche par produit qu'on ajoute sans réécrire le
            moteur. Le périmètre s'étend à coût marginal décroissant.
          </p>
        </div>

        {/* Tableau des 8 familles — avec la profondeur réelle */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-mre-bleu text-white">
              <tr>
                <th className="text-left p-4 text-sm font-semibold w-1/4">Famille de produit</th>
                <th className="text-left p-4 text-sm font-semibold">Ce que MRE révèle</th>
                <th className="text-left p-4 text-sm font-semibold hidden md:table-cell">Statut</th>
              </tr>
            </thead>
            <tbody>
              {FAMILLES.map((f, i) => (
                <tr key={f.nom} className={i % 2 === 0 ? "bg-mre-beige/30" : "bg-white"}>
                  <td className="p-4 align-top">
                    <div className="text-mre-ardoise font-semibold text-sm">{f.nom}</div>
                    <div className="text-[11px] text-mre-gris font-mono mt-1">{f.loi}</div>
                  </td>
                  <td className="p-4 align-top text-sm text-mre-gris leading-relaxed">{f.revele}</td>
                  <td className="p-4 align-top hidden md:table-cell">
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap"
                      style={{ backgroundColor: f.couleur + "20", color: f.couleur }}
                    >
                      {f.statut}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 max-w-3xl mx-auto text-center text-sm text-mre-gris">
          <strong className="text-mre-bleu">Extensions à venir</strong>, à coût marginal
          décroissant : PER d'entreprise (Art. 83 / 39), contrat de capitalisation,
          compte-titres ordinaire, FCPR / FPCI / FCPI. Architecture déjà en place :
          routeur produit/régime, classifier de documents, bibliothèque réglementaire
          neutre, détecteurs modulaires — « un moteur d'écart sur tout produit financier ».
        </div>
      </div>
    </section>
  );
}
