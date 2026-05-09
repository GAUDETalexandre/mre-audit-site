import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-mre-beige to-blue-50 py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texte */}
        <div className="fade-up">
          <span className="inline-block bg-mre-bleu/10 text-mre-bleu text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
            RegTech B2B française · Conformité documentaire institutionnelle
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-mre-bleu leading-tight tracking-tight">
            L'audit <span className="text-mre-rouge">inter-documents</span>
            <br />
            de l'épargne réglementée.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-mre-gris leading-relaxed">
            MRE est la plateforme d'audit qui révèle les écarts factuels et
            opposables entre les pièces d'un dossier d'épargne et le référentiel
            réglementaire <strong>(PRIIPs · DDA · POG · SFDR · UCITS · Solvabilité&nbsp;2 ·
            ACPR · AMF)</strong>. Conçue pour les <strong className="text-mre-bleu">directions
            conformité, RCSI, contrôle permanent, audit interne, gouvernance produit
            et autorités de tutelle</strong>. 46 détecteurs en production, chaque
            écart sourcé verbatim — article cité, considérant UE, sanction de
            précédent.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 bg-mre-bleu text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-mre-bleu/90 transition-colors shadow-md"
            >
              Voir un rapport d'écart →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-mre-bleu font-semibold px-6 py-3.5 rounded-lg border-2 border-mre-bleu/20 hover:border-mre-bleu transition-colors"
            >
              Demander une démonstration institutionnelle
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-mre-gris">
            <span className="flex items-center gap-2">
              <span className="text-green-600 font-bold">●</span> 78 032 PDF en bibliothèque vivante
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-600 font-bold">●</span> 65+ tests verts
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-600 font-bold">●</span> Anti-hallucination verbatim
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-600 font-bold">●</span> Souveraineté 100 % France/UE
            </span>
          </div>
        </div>

        {/* Visuel — illustration du concept "écarts révélés" */}
        <div className="fade-up">
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
            <div className="text-xs font-mono text-mre-gris mb-4">
              MRE_DIAG · synthèse d'écart
            </div>
            <div className="space-y-3">
              <DetecteurLine
                couleur="rouge"
                titre="Note de conseil L521-2 absente"
                detail="Cass. com. 21 juin 2017"
                niveau="ÉCART MAJEUR"
              />
              <DetecteurLine
                couleur="rouge"
                titre="Concentration intra-groupe 99 %"
                detail="Étude AMF 10 juin 2021"
                niveau="ÉCART MAJEUR"
              />
              <DetecteurLine
                couleur="orange"
                titre="Vulnérabilité présumée — 75 ans"
                detail="Reco ACPR 2018-R-01"
                niveau="TENSION"
              />
              <DetecteurLine
                couleur="orange"
                titre="KYC LCB-FT non transmis"
                detail="L561-5 CMF · encours > 50 k€"
                niveau="TENSION"
              />
              <DetecteurLine
                couleur="vert"
                titre="DIC daté du 2026-02-05 (3 mois)"
                detail="Règlement (UE) 1286/2014 art. 10"
                niveau="ALIGNÉ"
              />
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between text-xs">
              <span className="text-mre-gris">Exposition cumulée</span>
              <span className="font-bold text-mre-rouge">
                CRITIQUE · 33 070 – 99 209 €
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DetecteurLine({ couleur, titre, detail, niveau }) {
  const couleurs = {
    rouge: { bg: "#FEE2E2", border: "#B91C1C", txt: "#7F1D1D" },
    orange: { bg: "#FEF3C7", border: "#B45309", txt: "#78350F" },
    vert: { bg: "#D1FAE5", border: "#047857", txt: "#064E3B" },
  };
  const c = couleurs[couleur];
  return (
    <div
      className="flex items-start gap-3 p-3 rounded-lg border-l-4"
      style={{ backgroundColor: c.bg, borderLeftColor: c.border }}
    >
      <div className="flex-1">
        <div className="text-sm font-semibold" style={{ color: c.txt }}>
          {titre}
        </div>
        <div className="text-xs text-mre-gris mt-0.5">{detail}</div>
      </div>
      <span
        className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded"
        style={{ backgroundColor: c.border, color: "white" }}
      >
        {niveau}
      </span>
    </div>
  );
}
