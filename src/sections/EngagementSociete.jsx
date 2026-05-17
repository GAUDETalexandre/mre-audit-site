import React from "react";

const ENGAGEMENTS = [
  {
    label: "01 — Frugale",
    titre: "IA souveraine allumée à la demande",
    detail:
      "La couche IA Mistral n'est active que sur les cas dégradés (signature manuscrite, OCR tableau défaillant). Le reste du temps, l'instance GPU est éteinte. Empreinte carbone réduite par construction, coût marginal inférieur à 0,30 € par dossier complexe.",
    cadre: "Sobriété énergétique · alignement DPEF (art. L. 225-102-1 Code commerce)",
    couleur: "#047857",
    bg: "#ECFDF5",
  },
  {
    label: "02 — Souveraine",
    titre: "Modèle français · hébergement français",
    detail:
      "Modèle Mistral Small 3.2-24B open-source Apache 2.0, hébergé sur GPU H100 Scaleway zone fr-par-2 (Paris). Tunnel SSH chiffré, token Bearer 32 octets par client. Aucune donnée client ne quitte l'infrastructure française. Conforme RGPD, secret professionnel L. 511-33 CMF.",
    cadre: "Conformité commande publique 2026+ · pas d'API cloud étranger",
    couleur: "#003a70",
    bg: "#EFF6FF",
  },
  {
    label: "03 — Inclusive",
    titre: "Entreprise Adaptée dès la première embauche",
    detail:
      "Le fondateur est reconnu travailleur handicapé (RQTH). MRE Audit sera enregistré au statut Travailleur Indépendant Handicapé (TIH) dès la création SASU. Dès la première embauche, MRE deviendra Entreprise Adaptée (cadre L. 5213-13 à L. 5213-19 Code travail), avec un minimum de 55 % de salariés en situation de handicap dans l'effectif.",
    cadre: "Achat solidaire art. 13 loi du 31 juillet 2014 · répond à l'OETH 6 % du client B2B",
    couleur: "#B91C1C",
    bg: "#FEF2F2",
  },
];

export default function EngagementSociete() {
  return (
    <section id="engagement" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-mre-rouge text-xs font-bold uppercase tracking-widest">
            Notre engagement
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-mre-bleu mt-3">
            Tech d'excellence × inclusion × sobriété.
          </h2>
          <p className="text-mre-gris mt-4 max-w-3xl mx-auto text-lg">
            MRE est porté par trois piliers structurants — un produit B2B haut de gamme,
            une infrastructure technique frugale et souveraine, un modèle social
            inclusif. Pour les clients banques, assureurs et mutuelles, c'est une
            <strong> triple proposition de valeur</strong> : outil de conformité,
            réponse à l'obligation d'emploi de travailleurs handicapés (achat solidaire),
            et infrastructure IA alignée avec leur Déclaration de Performance
            Extra-Financière.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ENGAGEMENTS.map((e) => (
            <div
              key={e.label}
              className="rounded-xl p-6 border-2"
              style={{ borderColor: e.couleur, backgroundColor: e.bg }}
            >
              <div
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: e.couleur }}
              >
                {e.label}
              </div>
              <h3 className="text-lg font-bold mb-3 leading-tight" style={{ color: e.couleur }}>
                {e.titre}
              </h3>
              <p className="text-sm text-mre-ardoise leading-relaxed mb-4">
                {e.detail}
              </p>
              <div
                className="pt-3 border-t text-xs italic"
                style={{ borderColor: e.couleur + "40", color: e.couleur }}
              >
                {e.cadre}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-mre-bleu text-white rounded-xl p-8 text-center">
          <p className="text-lg italic leading-relaxed">
            « L'IA ne sait pas ce qu'est un fonds eurocroissance, une concentration
            intra-groupe ou un FGAP non couvert. Mes quinze ans de terrain en gestion
            de patrimoine ont guidé chacun des 247 détecteurs MRE. L'IA m'a aidé à
            écrire le code, à industrialiser les tests, à produire la documentation —
            mais chaque seuil, chaque article cité, chaque qualification résulte
            d'une décision humaine experte. »
          </p>
          <p className="mt-4 text-sm text-blue-200">
            — Alexandre Gaudet, fondateur · RQTH 2026
          </p>
        </div>
      </div>
    </section>
  );
}
