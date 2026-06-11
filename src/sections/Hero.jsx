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
            et autorités de tutelle</strong>. <strong>Plus de 330 détecteurs</strong> en production sur 23 grands domaines réglementaires (chiffre vérifié 05/06/2026, recompte exhaustif du code source), enrichi d'une <strong>cartographie capitalistique 100 groupes / 150 SGP</strong> (cessions M&A tracées, conflits d'intérêts qualifiés),
            chaque écart sourcé verbatim — article cité, considérant UE, sanction de précédent.
          </p>

          {/* 3 piliers MRE (ajouté 13 mai 2026) */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="bg-mre-bleu/5 border-l-4 border-mre-bleu px-3 py-2 rounded-r">
              <div className="text-[10px] font-bold uppercase tracking-wider text-mre-rouge">01 — Frugale</div>
              <div className="text-xs font-semibold text-mre-bleu mt-0.5">IA à la demande</div>
              <div className="text-[11px] text-mre-gris mt-0.5">Éteinte 95 % du temps · &lt; 0,30 € / dossier complexe</div>
            </div>
            <div className="bg-mre-bleu/5 border-l-4 border-mre-bleu px-3 py-2 rounded-r">
              <div className="text-[10px] font-bold uppercase tracking-wider text-mre-rouge">02 — Souveraine</div>
              <div className="text-xs font-semibold text-mre-bleu mt-0.5">Mistral · Scaleway FR</div>
              <div className="text-[11px] text-mre-gris mt-0.5">Open-source Apache 2.0 · aucun appel hors UE</div>
            </div>
            <div className="bg-mre-bleu/5 border-l-4 border-mre-bleu px-3 py-2 rounded-r">
              <div className="text-[10px] font-bold uppercase tracking-wider text-mre-rouge">03 — Inclusive</div>
              <div className="text-xs font-semibold text-mre-bleu mt-0.5">Entreprise Adaptée</div>
              <div className="text-[11px] text-mre-gris mt-0.5">Fondateur RQTH + TIH · ≥ 55 % salariés TH</div>
            </div>
          </div>

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
              <span className="text-green-600 font-bold">●</span> 53 659 PDF en bibliothèque vivante · 11 920 ISIN avec DIC capturé (au 11/06/2026)
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-600 font-bold">●</span> 38 modules de tests · non-régression 35/35 vérifiée 11/06/2026
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-600 font-bold">●</span> AMADEO 49/49 vérifications-clés conformes (11/05)
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-600 font-bold">●</span> IA souveraine Mistral
            </span>
          </div>
        </div>

        {/* Visuel — illustration du concept "écarts révélés" */}
        <div className="fade-up">
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
            <div className="text-xs font-mono text-mre-gris mb-4">
              MRE_DIAG · synthèse d'écart — extraits réels du cas fictif Mercier (rapport du 11/06/2026)
            </div>
            <div className="space-y-3">
              <DetecteurLine
                couleur="rouge"
                titre="Note de conseil L521-2 absente"
                detail="L. 521-2 CdA · DDA art. 20 · Cass. 2e civ. 30/11/2023 n° 22-15.077"
                niveau="ÉCART MAJEUR"
              />
              <DetecteurLine
                couleur="rouge"
                titre="Tableau coûts au fil du temps / RIY manquant"
                detail="Règlement (UE) 1286/2014 art. 8 §3 f) + Annexe VII"
                niveau="ÉCART MAJEUR"
              />
              <DetecteurLine
                couleur="rouge"
                titre="Présentation cumulée des frais absente du relevé"
                detail="A. 522-1 CdA (arrêté du 20 juin 2024, vigueur 01/01/2025)"
                niveau="ÉCART MAJEUR"
              />
              <DetecteurLine
                couleur="orange"
                titre="Vulnérabilité présumée — adhérente 66 ans"
                detail="Rapport ACPR-AMF déc. 2018 + DDA art. 30"
                niveau="TENSION"
              />
              <DetecteurLine
                couleur="vert"
                titre="Capital garanti 32 % ≥ seuil 30 % (profil équilibré)"
                detail="EIOPA POG BoS-16/071 · DDA art. 30 · L. 522-5 CdA"
                niveau="ALIGNÉ"
              />
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between text-xs">
              <span className="text-mre-gris">139 observations sur le périmètre</span>
              <span className="font-bold text-mre-rouge">
                6 écarts majeurs · 14 tensions · 43 éléments absents
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
