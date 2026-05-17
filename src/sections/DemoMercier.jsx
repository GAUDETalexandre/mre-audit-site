import React from "react";

const SOURCES = [
  { fichier: "conditions_particulieres_mercier.pdf", type: "Conditions particulières", date: "12/06/2017" },
  { fichier: "bulletin_souscription_2017.pdf", type: "Bulletin de souscription", date: "12/06/2017" },
  { fichier: "releve_annuel_2025.pdf", type: "Relevé annuel", date: "31/12/2025" },
  { fichier: "arbitrage_12_01_2026.pdf", type: "Courrier d'arbitrage", date: "12/01/2026" },
  { fichier: "dic_priips_capital_2026.pdf", type: "DIC PRIIPs", date: "01/01/2026" },
  { fichier: "versement_complementaire_2024.pdf", type: "Versement complémentaire", date: "15/03/2024" },
];

export default function DemoMercier() {
  return (
    <section id="demo" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-mre-rouge text-xs font-bold uppercase tracking-widest">
            Démo en ligne — cas fictif
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-mre-bleu mt-3">
            Cas Catherine MERCIER, 66 ans, encours 78 450 €
          </h2>
          <p className="text-mre-gris mt-4 max-w-3xl mx-auto text-lg">
            Cas <strong>100 % fictif</strong> construit avec des erreurs
            représentatives des problèmes typiquement relevés en mission de conformité
            (sanctions ACPR publiées, doctrine AMF, jurisprudence Cour de cassation).
            <strong> Simulation d'audit</strong> par le moteur MRE — pas un test
            réalisé par un tiers. Mutuelle Patrimoine Solidaire (MPS) est une entité
            entièrement fictive ; toute ressemblance avec un assureur ou un client
            réel est fortuite.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Colonne gauche : documents source */}
          <div>
            <h3 className="text-mre-bleu font-bold text-xl mb-4 flex items-center gap-2">
              <span className="bg-mre-bleu/10 text-mre-bleu text-xs font-mono px-2 py-1 rounded">
                INPUT
              </span>
              6 documents source déposés
            </h3>
            <div className="bg-mre-beige rounded-xl border border-gray-200 p-5">
              <ul className="space-y-2.5">
                {SOURCES.map((s, i) => (
                  <li
                    key={s.fichier}
                    className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <span className="bg-mre-rouge/10 text-mre-rouge w-7 h-7 rounded flex items-center justify-center text-xs font-bold">
                        PDF
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-mre-bleu">
                          {s.type}
                        </div>
                        <div className="text-xs text-mre-gris font-mono">
                          {s.fichier}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-mre-gris">{s.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Colonne droite : rapport produit */}
          <div>
            <h3 className="text-mre-bleu font-bold text-xl mb-4 flex items-center gap-2">
              <span className="bg-green-100 text-green-700 text-xs font-mono px-2 py-1 rounded">
                OUTPUT
              </span>
              Rapport MRE — 3 minutes après dépôt
            </h3>

            <div className="bg-white rounded-xl border-2 border-mre-bleu/20 p-6 shadow-lg">
              <div className="flex items-baseline justify-between mb-4">
                <h4 className="font-bold text-mre-bleu">
                  Capital Patrimoine Vie
                </h4>
                <span className="text-xs font-mono text-mre-gris">
                  119 observations · rapport régénéré 17/05/2026
                </span>
              </div>

              <Bandeau couleur="#7F1D1D" titre="EXPOSITION CRITIQUE" valeur="33 070 – 99 209 €" />

              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <Stat label="Écarts majeurs" valeur="6" couleur="#B91C1C" />
                <Stat label="Tensions" valeur="16" couleur="#B45309" />
                <Stat label="Éléments absents" valeur="32" couleur="#7F1D1D" />
              </div>

              <div className="mt-4 space-y-2 text-xs">
                <Ligne couleur="#B91C1C" code="REOR_NOTE_CONSEIL" titre="Note de conseil L521-2 absente" />
                <Ligne couleur="#B91C1C" code="DIC_C_RIY_PRESENT" titre="Aucun tableau coûts au fil du temps ni RIY chiffré" />
                <Ligne couleur="#B45309" code="VULNERABILITE_PERSONNE_AGEE" titre="Vulnérabilité — adhérente 66 ans" />
                <Ligne couleur="#B45309" code="LCBFT_KYC_ABSENT" titre="KYC LCB-FT non transmis (encours > 50 k€)" />
              </div>

              <div className="mt-5 pt-4 border-t border-gray-200 text-xs text-mre-gris">
                Sourcé sur : Code des assurances · DDA art. 28-30 · PRIIPs ·
                Reco ACPR 2018-R-01 · Cass. com. 21 juin 2017
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="/rapports/mercier_synthese.pdf"
                target="_blank"
                rel="noopener"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-mre-bleu text-white font-semibold px-4 py-3 rounded-lg hover:bg-mre-bleu/90 text-sm"
              >
                📄 Télécharger la synthèse (PDF)
              </a>
              <a
                href="/rapports/mercier_detail.pdf"
                target="_blank"
                rel="noopener"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-mre-bleu font-semibold px-4 py-3 rounded-lg border-2 border-mre-bleu/20 hover:border-mre-bleu text-sm"
              >
                📑 Détail complet (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bandeau({ couleur, titre, valeur }) {
  return (
    <div
      className="rounded-lg p-3 text-white text-center"
      style={{ backgroundColor: couleur }}
    >
      <div className="text-xs font-bold tracking-wider opacity-80">{titre}</div>
      <div className="text-lg font-extrabold mt-0.5">{valeur}</div>
    </div>
  );
}

function Stat({ label, valeur, couleur }) {
  return (
    <div className="bg-mre-beige rounded p-2">
      <div className="text-2xl font-extrabold" style={{ color: couleur }}>
        {valeur}
      </div>
      <div className="text-[10px] uppercase font-semibold text-mre-gris">
        {label}
      </div>
    </div>
  );
}

function Ligne({ couleur, code, titre }) {
  return (
    <div className="flex items-start gap-2">
      <div
        className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: couleur }}
      />
      <div className="flex-1">
        <div className="text-mre-ardoise leading-snug">{titre}</div>
        <div className="text-mre-gris font-mono text-[10px]">{code}</div>
      </div>
    </div>
  );
}
