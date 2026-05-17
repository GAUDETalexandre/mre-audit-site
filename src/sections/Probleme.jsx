import React from "react";

export default function Probleme() {
  return (
    <section id="probleme" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-mre-rouge text-xs font-bold uppercase tracking-widest">
            Le constat
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-mre-bleu mt-3">
            La cohérence documentaire de l'épargne réglementée n'est aujourd'hui
            auditée par personne — à l'échelle.
          </h2>
          <p className="text-mre-gris mt-4 max-w-3xl mx-auto text-base">
            2 107 Md€ d'assurance-vie fin 2025 (France Assureurs) · 141 Md€ de PER T3 2025 (Ministère de l'Économie, 12,7 M titulaires).
            ~ 12 000 acteurs supervisés face à ~ 1 500 ETP ACPR + AMF cumulés.
            Chaque contrat = 30-50 documents sur sa durée de vie. L'asymétrie
            est structurelle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Carte
            chiffre="29,4 M€"
            titre="sanctions AMF 2024"
            detail="42 sanctions pécuniaires + 9 compositions administratives — l'AMF est première autorité européenne en montant (rapport ESMA oct. 2025)"
          />
          <Carte
            chiffre="12 / 15"
            titre="grands groupes français"
            detail="ont plus de 50 % de supports intra-groupe sur 407 Md€ de fonds détenus (étude AMF 10 juin 2021) — point de vigilance gouvernance produit"
          />
          <Carte
            chiffre="93 M€"
            titre="sanction H2O AM (30/12/2022)"
            detail="confirmée par le Conseil d'État le 13/06/2025 (75 M€ société + 15 M€ + 3 M€ dirigeants) — illustration matérielle de l'écart entre documents commerciaux et illiquidité réelle Tennor"
          />
        </div>

        <div className="mt-14 max-w-3xl mx-auto bg-mre-beige border-l-4 border-mre-rouge p-6 rounded-r-lg">
          <p className="text-mre-ardoise text-lg italic leading-relaxed">
            « Aucune direction conformité n'a la capacité humaine d'auditer
            individuellement la cohérence inter-documents de chaque dossier
            d'épargne distribué. Les outils du marché vérifient un aspect
            (KYC, LCB-FT, classification PRIIPs) sans <strong>mettre les pièces en
            regard les unes des autres</strong>. C'est précisément ce manque que
            MRE adresse — pour les directions conformité, l'audit interne, le
            contrôle permanent et les autorités de tutelle. »
          </p>
        </div>
      </div>
    </section>
  );
}

function Carte({ chiffre, titre, detail }) {
  return (
    <div className="bg-mre-beige border border-gray-200 rounded-xl p-7 hover:shadow-lg transition-shadow">
      <div className="text-5xl font-extrabold text-mre-rouge tracking-tight">
        {chiffre}
      </div>
      <div className="mt-2 text-mre-bleu font-semibold">{titre}</div>
      <p className="mt-3 text-sm text-mre-gris leading-relaxed">{detail}</p>
    </div>
  );
}
