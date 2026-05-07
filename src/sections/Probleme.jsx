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
            Aujourd'hui, la conformité documentaire est l'angle mort de l'épargne française.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Carte
            chiffre="60 %"
            titre="des dossiers contrôlés"
            detail="ont une note de conseil L521-2 défaillante (priorité ACPR 2024-R-03)"
          />
          <Carte
            chiffre="12 / 15"
            titre="groupes français"
            detail="ont plus de 50 % de supports intra-groupe en gestion pilotée (étude AMF 10 juin 2021)"
          />
          <Carte
            chiffre="8 h"
            titre="par dossier"
            detail="temps moyen d'audit manuel par un juriste — non scalable"
          />
        </div>

        <div className="mt-14 max-w-3xl mx-auto bg-mre-beige border-l-4 border-mre-rouge p-6 rounded-r-lg">
          <p className="text-mre-ardoise text-lg italic leading-relaxed">
            « Le devoir de conseil est un pilier juridique. Mais sans outil capable
            de le contrôler à l'échelle, c'est une promesse vide pour les 38
            millions de Français qui ont un contrat d'assurance vie. »
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
