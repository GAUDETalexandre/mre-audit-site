import React from "react";

// "L'approche avant la signature" — mode ex ante.
// Pédagogie reprise du deck client : page de présentation → contexte → mécanisme → retournement.
// Doctrine respectée : MRE révèle, ne juge pas ; ne dit jamais « signez / ne signez pas ».
// Sources primaires uniquement (arrêt Hédreul, L.521-2/4 CdA, Reco ACPR 2024-R-03, Médiation 2024).

const ETAPES = [
  {
    n: "01",
    titre: "Analyser la proposition avant la signature",
    detail:
      "Conditions, DIC, projet de déclaration d'adéquation, supports envisagés : MRE met les pièces en regard pendant qu'il est encore temps de lever un écart — pas après coup.",
  },
  {
    n: "02",
    titre: "Révéler les points à clarifier, sourcés",
    detail:
      "Frais réellement supportés, adéquation au profil, fraîcheur du DIC, garanties effectivement couvertes. Chaque point est adossé à un texte précis et nomme la pièce qui le lèverait.",
  },
  {
    n: "03",
    titre: "Produire une trace de diligence horodatée",
    detail:
      "Au moment de l'acte, MRE génère une preuve datée de la vérification menée. La charge de la preuve du conseil pèse sur le professionnel : cette trace la documente.",
  },
];

export default function ExAnte() {
  return (
    <section id="ex-ante" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* ── Page de présentation (bandeau couverture, façon slide) ── */}
        <div className="relative overflow-hidden rounded-3xl bg-mre-bleu text-white px-8 py-14 md:px-16 md:py-20 mb-16">
          {/* halo radial discret, charte couverture MRE */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(circle at 78% 18%, rgba(255,255,255,0.10), transparent 55%)",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              L'approche MRE · mode ex ante
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
              Et si on éliminait les écarts
              <span className="text-white"> avant </span>
              la signature ?
            </h2>
            <p className="mt-6 text-lg text-white/85 leading-relaxed">
              Un audit, c'est constater après coup. Le mode <strong>ex ante</strong> de
              MRE inverse le moment : il révèle les points à clarifier pendant que la
              proposition est encore sur la table — quand il est encore temps d'agir.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-sm">
              <span className="font-mono text-white/60">avant</span>
              <span className="text-white/40">·</span>
              <span className="font-semibold">on lève l'écart</span>
              <span className="text-white/40">→</span>
              <span className="font-mono text-white/60">après</span>
              <span className="text-white/40">·</span>
              <span className="text-white/70">on le subit</span>
            </div>
          </div>
        </div>

        {/* ── Le contexte ── */}
        <div className="text-center mb-12">
          <span className="inline-block text-mre-rouge text-xs font-bold uppercase tracking-widest">
            Le contexte
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-mre-bleu mt-3">
            La preuve du conseil pèse sur le professionnel — et l'écart se découvre
            souvent trop tard.
          </h3>
          <p className="text-mre-gris mt-4 max-w-3xl mx-auto text-base leading-relaxed">
            Quand on conseille un contrat d'épargne, c'est au professionnel
            d'apporter la preuve qu'il a bien conseillé (arrêt Hédreul, Cass. 1re civ.
            25/02/1997 · art. L. 521-2 et L. 521-4 du Code des assurances). Le risque
            n'est pas théorique : il se matérialise lorsqu'un tiers — client,
            médiateur, contrôleur — trouve l'écart après la signature.
          </p>
        </div>

        {/* Ex post vs Ex ante — comparaison visuelle */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          <div className="rounded-2xl border border-gray-200 bg-mre-beige p-7">
            <div className="text-xs font-bold uppercase tracking-widest text-mre-gris">
              Ex post — l'audit classique
            </div>
            <p className="mt-3 text-mre-ardoise font-semibold">
              On constate l'écart après coup.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-mre-gris leading-relaxed">
              <li>• Le contrat est déjà signé, les fonds investis.</li>
              <li>• L'écart est révélé par un tiers — au pire moment.</li>
              <li>• Reste à se défendre, preuves à reconstituer.</li>
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-mre-bleu/30 bg-white p-7 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-widest text-mre-rouge">
              Ex ante — l'approche MRE
            </div>
            <p className="mt-3 text-mre-ardoise font-semibold">
              On lève l'écart avant qu'il existe.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-mre-gris leading-relaxed">
              <li>• La proposition est analysée avant la signature.</li>
              <li>• Les points à clarifier sont posés, sourcés, à temps.</li>
              <li>• La diligence est tracée et horodatée au moment de l'acte.</li>
            </ul>
          </div>
        </div>

        {/* ── Le mécanisme ── */}
        <div className="text-center mb-10">
          <span className="inline-block text-mre-rouge text-xs font-bold uppercase tracking-widest">
            Le mécanisme
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-mre-bleu mt-3">
            Trois temps, avant que l'encre ne sèche.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ETAPES.map((e) => (
            <div
              key={e.n}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="text-mre-rouge font-mono font-bold text-sm mb-2">
                {e.n}
              </div>
              <h4 className="text-mre-bleu font-bold text-lg mb-3 leading-tight">
                {e.titre}
              </h4>
              <p className="text-sm text-mre-gris leading-relaxed">{e.detail}</p>
            </div>
          ))}
        </div>

        {/* ── L'exemple : la fiche avant signature (générée par le moteur) ── */}
        <div className="text-center mt-20 mb-10">
          <span className="inline-block text-mre-rouge text-xs font-bold uppercase tracking-widest">
            L'exemple — généré par le moteur
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-mre-bleu mt-3">
            Une vraie fiche pré-signature, sur un arbitrage.
          </h3>
          <p className="text-mre-gris mt-4 max-w-3xl mx-auto text-base leading-relaxed">
            Sortie <strong>réelle du moteur MRE</strong> sur une réorientation
            (cas <strong>100 % fictif</strong>). MRE répartit chaque point selon son{" "}
            <strong>débiteur</strong> : ce qui relève de <strong>votre conseil</strong>{" "}
            (et que vous pouvez lever avant de faire signer) vs ce qui relève du{" "}
            <strong>produit / de la compagnie</strong> (à connaître, pas à corriger).
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl border-2 border-mre-bleu/20 shadow-lg overflow-hidden">
          {/* En-tête de la fiche */}
          <div className="bg-mre-bleu text-white px-6 py-5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] bg-white/15 rounded px-2.5 py-1">
                Fiche pré-signature · arbitrage
              </span>
              <span className="text-[11px] font-mono text-white/70">
                Réorientation 8 200 € sur 78 450 € d'encours
              </span>
            </div>
            <div className="mt-3 font-bold text-lg leading-tight">
              Cas fictif — projet d'arbitrage analysé avant signature
            </div>
            <div className="text-xs text-white/70 mt-1">
              Pièces : conditions · relevé annuel · projet de réorientation · DIC PRIIPs
            </div>
          </div>

          {/* Répartition par sphère de responsabilité (imputabilité moteur) */}
          <div className="px-6 pt-5">
            <div className="text-[11px] font-bold uppercase tracking-widest text-mre-gris mb-2">
              Répartition des écarts par responsabilité
            </div>
            {/* barre de proportion */}
            <div className="flex h-3 rounded-full overflow-hidden">
              <div className="bg-mre-bleu" style={{ width: "27%" }} title="Dans votre main" />
              <div className="bg-mre-gris/50" style={{ width: "73%" }} title="Côté compagnie" />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3 text-center">
              <FicheStat valeur="17" label="Dans votre main" couleur="#003a70" />
              <FicheStat valeur="45" label="Côté compagnie" couleur="#5b6472" />
              <FicheStat valeur="0" label="Partagé" couleur="#9aa3af" />
            </div>
            <div className="text-center text-[11px] text-mre-gris pb-1">
              62 écarts au total · la responsabilité est <strong>située</strong>, jamais
              imputée à l'aveugle.
            </div>
          </div>

          {/* Deux colonnes : conseiller vs compagnie */}
          <div className="grid md:grid-cols-2 gap-px bg-gray-100 border-t border-gray-100 mt-4">
            {/* Dans votre main */}
            <div className="bg-white p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-mre-bleu mb-3">
                Dans votre main — à sécuriser avant signature
              </div>
              <FichePoint q="ÉCART MAJEUR" couleur="#B91C1C" titre="Note de conseil de l'arbitrage (L. 521-2) absente" code="REOR_NOTE_CONSEIL" />
              <FichePoint q="Absent" couleur="#7F1D1D" titre="Allocation avant / après l'arbitrage incomplète" code="REOR_ALLOCATION_AVANT · APRÈS" />
              <FichePoint q="Absent" couleur="#7F1D1D" titre="Capital non garanti au-delà du seuil du profil" code="PROFIL_CAPITAL_NON_GARANTI_EXCESSIF" />
              <FichePoint q="Vigilance" couleur="#B45309" titre="Vulnérabilité présumée — adhérent âgé" code="VULNERABILITE_PERSONNE_AGEE" />
              <FichePoint q="Absent" couleur="#7F1D1D" titre="Trace du test d'adéquation non transmise (DDA art. 30 / L. 522-5)" code="KYC_PIECE_ADEQUATION_ABSENTE" />
            </div>
            {/* Côté compagnie */}
            <div className="bg-white p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-mre-gris mb-3">
                Côté produit / compagnie — pour information
              </div>
              <FichePoint q="ÉCART MAJEUR" couleur="#B91C1C" titre="Tableau des coûts au fil du temps / RIY manquant" code="DIC_C_RIY_PRESENT" />
              <FichePoint q="ÉCART MAJEUR" couleur="#B91C1C" titre="Composition (ventilation) des coûts absente" code="DIC_C_FRAIS_VENTILES" />
              <FichePoint q="ÉCART MAJEUR" couleur="#B91C1C" titre="Présentation cumulée des frais absente du relevé (A. 522-1)" code="FRAIS_PRESENTATION_CUMULEE_A522_1" />
              <FichePoint q="ÉCART MAJEUR" couleur="#B91C1C" titre="Format réglementaire du DIC à vérifier" code="PRIIPS_FORMAT" />
            </div>
          </div>

          {/* Pied de fiche — trace + doctrine */}
          <div className="bg-mre-beige px-6 py-5 border-t border-gray-200">
            <div className="text-[11px] font-mono text-mre-gris">
              Généré par le moteur MRE · self-check 8 axes : 100/100 · cas 100 % fictif ·
              trace de diligence horodatée au moment de l'acte
            </div>
            <p className="mt-2 text-xs text-mre-gris leading-relaxed">
              MRE <strong>situe</strong> chaque point par rapport au texte et à son
              débiteur (votre conseil / le produit) ; il ne note pas, ne dit ni
              « signez » ni « ne signez pas ».{" "}
              <strong className="text-mre-bleu">Le professionnel décide.</strong>
            </p>
            <a
              href="/rapports/mercier_presignature.html"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-mre-bleu hover:underline"
            >
              📄 Ouvrir la fiche complète générée par le moteur
            </a>
          </div>
        </div>

        {/* ── Le retournement ── */}
        <div className="mt-16 max-w-4xl mx-auto rounded-2xl bg-mre-beige border-l-4 border-mre-rouge p-8">
          <div className="text-xs font-bold uppercase tracking-widest text-mre-rouge mb-3">
            Le retournement
          </div>
          <p className="text-mre-ardoise text-lg leading-relaxed">
            Un risque que l'on <strong>subit</strong> — le litige découvert après —
            devient un bouclier que l'on <strong>maîtrise</strong> : la preuve qu'on a
            été diligent, au bon moment.
          </p>
          <p className="mt-4 text-mre-gris leading-relaxed">
            MRE ne dit jamais « signez » ou « ne signez pas ». Il révèle, point par
            point et sourcé ; le professionnel décide.{" "}
            <strong className="text-mre-bleu">
              Pas pour inquiéter — pour sécuriser.
            </strong>
          </p>
        </div>

        <p className="mt-8 text-center text-xs text-mre-gris max-w-3xl mx-auto leading-relaxed">
          Sources : arrêt Hédreul (Cass. 1re civ. 25/02/1997, n° 94-19.685) · art.
          L. 521-2 / L. 521-4 du Code des assurances · Recommandation ACPR 2024-R-03
          (devoir de conseil, échéance 31/12/2025) · Médiation de l'Assurance :
          36 540 saisines en 2024 (+19 %).
        </p>
      </div>
    </section>
  );
}

function FicheStat({ valeur, label, couleur }) {
  return (
    <div className="text-center py-2">
      <div className="text-2xl font-extrabold leading-none" style={{ color: couleur }}>
        {valeur}
      </div>
      <div className="text-[10px] uppercase font-semibold tracking-wider text-mre-gris mt-1">
        {label}
      </div>
    </div>
  );
}

function FichePoint({ q, couleur, titre, code }) {
  return (
    <div className="py-2.5 border-b border-gray-100 last:border-0">
      <div className="flex items-start gap-2">
        <span
          className="mt-0.5 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0"
          style={{ backgroundColor: couleur + "1A", color: couleur }}
        >
          {q}
        </span>
        <div className="min-w-0">
          <div className="text-sm text-mre-ardoise leading-snug">{titre}</div>
          <div className="text-[10px] font-mono text-mre-gris/70 mt-0.5">{code}</div>
        </div>
      </div>
    </div>
  );
}
