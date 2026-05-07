import React from "react";

const ETAPES = [
  { annee: "2012", titre: "Allianz", detail: "Démarrage chez Allianz France. Six années de terrain — contrats, devoir de conseil, réalité des dossiers d'agence." },
  { annee: "2016", titre: "CGPC validé", detail: "Obtention du Certificat de Gestion de Patrimoine Certifié — diplôme de référence du conseil patrimonial, exigeant et technique." },
  { annee: "2018", titre: "Agent général A2P", detail: "Création de ma propre structure : agent général AXA Prévoyance et Patrimoine. Quatre années à porter mon agence et tenir le devoir de conseil au quotidien." },
  { annee: "2022", titre: "RQTH", detail: "Fermeture de l'entreprise pour raison de santé. Reconnaissance Travailleur Handicapé. Une rupture qui m'a permis de regarder le métier autrement." },
  { annee: "2024-2026", titre: "Construction de MRE", detail: "Conception et développement du moteur. Vingt-deux mille lignes de code écrites main. Mai 2026 : premières analyses sur dossiers réels, note 9,8/10 ACPR triple casquette." },
];

export default function MonHistoire() {
  return (
    <section id="histoire" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-mre-rouge text-xs font-bold uppercase tracking-widest">
            Mon histoire
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-mre-bleu mt-3">
            J'ai été conseiller. C'est pour ça que j'ai construit MRE.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Colonne gauche : photo + identité */}
          <div className="lg:sticky lg:top-24">
            <div className="relative max-w-sm mx-auto">
              {/* Cadres décoratifs en arrière-plan : bleu + rouge MRE décalés */}
              <div className="absolute -inset-3 bg-mre-bleu/10 rounded-2xl -z-10 rotate-2"></div>
              <div className="absolute -inset-2 bg-mre-rouge/5 rounded-2xl -z-10 -rotate-1"></div>

              {/* Photo cadrée dans un ratio portrait fixe avec object-cover */}
              {/* WebP en priorité (109 KB) avec fallback JPG (137 KB) — chargement quasi instantané */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200 bg-mre-bleu">
                <picture>
                  <source srcSet="/photos/alexandre_gaudet.webp" type="image/webp" />
                  <img
                    src="/photos/alexandre_gaudet.jpg"
                    alt="Alexandre Gaudet, fondateur de MRE"
                    loading="eager"
                    className="w-full h-full object-cover object-top"
                  />
                </picture>
                {/* Léger overlay dégradé en bas pour adoucir la transition */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
              </div>

              {/* Badge fondateur — repositionné plus discrètement */}
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-mre-bleu text-white px-4 py-3 rounded-lg shadow-lg border-2 border-white">
                <div className="text-[10px] uppercase tracking-widest opacity-80">
                  Fondateur
                </div>
                <div className="font-bold text-base leading-tight">Alexandre Gaudet</div>
                <div className="text-[11px] text-blue-100 mt-0.5">CGPC · ex-A2P AXA</div>
              </div>
            </div>

            <div className="mt-8 max-w-md mx-auto">
              <div className="bg-mre-beige border-l-4 border-mre-rouge rounded-r-lg p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-mre-rouge mb-2">
                  Parcours en bref
                </div>
                <ul className="space-y-1.5 text-sm text-mre-ardoise">
                  <li>• 10 ans dans l'assurance vie (2012-2022)</li>
                  <li>• 6 ans Allianz · 4 ans agent général A2P AXA</li>
                  <li>• Diplôme CGPC 2016</li>
                  <li>• Reconnu Travailleur Handicapé (RQTH)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Colonne droite : timeline + récit */}
          <div>
            <div className="space-y-8">
              {ETAPES.map((e, i) => (
                <div key={e.annee} className="relative pl-8">
                  <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-mre-rouge" />
                  {i < ETAPES.length - 1 && (
                    <div className="absolute left-1.5 top-5 bottom-0 w-px bg-gray-200" />
                  )}
                  <div className="text-mre-rouge font-mono font-bold text-sm">
                    {e.annee}
                  </div>
                  <h3 className="text-mre-bleu font-bold text-lg mt-1">
                    {e.titre}
                  </h3>
                  <p className="text-mre-gris text-sm mt-2 leading-relaxed">
                    {e.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-gradient-to-br from-mre-bleu to-blue-900 text-white rounded-xl p-7">
              <div className="text-3xl mb-3">"</div>
              <p className="text-lg leading-relaxed italic">
                MRE n'est pas un outil <strong>contre</strong> les conseillers
                — j'en ai été un. C'est un outil <strong>pour</strong> les
                conseillers, les RCSI, les médiateurs, l'ACPR : qui révèle
                les écarts entre ce que les documents disent et ce que la
                loi exige, sans inventer, sans juger, en 3 minutes.
              </p>
              <p className="mt-4 text-sm text-blue-200">
                C'est ce parcours technique et humain qui m'a permis de
                penser MRE comme un outil de <strong>pilotage</strong> du
                conseil, pas un outil de jugement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
