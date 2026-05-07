import React from "react";

const CHIFFRES = [
  { valeur: "218", unite: "détecteurs", detail: "Couvrant Code des assurances, DDA, PRIIPs, SFDR, POG, LCB-FT, doctrine AMF" },
  { valeur: "1,9", unite: "Mo de texte juridique", detail: "Considérants UE, sanctions ACPR, doctrines AMF — intégral en français" },
  { valeur: "70", unite: "sanctions ACPR", detail: "Citées comme précédent jurisprudentiel sur chaque écart pertinent" },
  { valeur: "9,8", unite: "/ 10 au benchmark ACPR", detail: "Triple casquette : ACPR · Audit interne · Conformité assureur" },
  { valeur: "100", unite: "/ 100 self-check", detail: "8 axes auto-vérifiés avant publication — anti-hallucination" },
  { valeur: "3", unite: "minutes par dossier", detail: "Vs ~8 h en audit manuel par un juriste" },
  { valeur: "22 500", unite: "lignes de code", detail: "Écrites main, sans no-code, sans framework propriétaire" },
  { valeur: "24/7", unite: "bibliothèque vivante", detail: "Crawlers tournent quotidiennement, hebdo, mensuel selon données" },
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
            réglementaire approximative. C'est ce qui rend MRE crédible pour un
            usage ACPR, RCSI, médiateur — et pour la création.
          </p>
        </div>
      </div>
    </section>
  );
}
