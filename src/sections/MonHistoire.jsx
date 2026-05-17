import React from "react";

const ETAPES = [
  { annee: "2012", titre: "Allianz", detail: "Démarrage chez Allianz France. Six années de terrain — contrats, devoir de conseil, réalité des dossiers d'agence." },
  { annee: "2016", titre: "CGPC validé", detail: "Obtention du Certificat de Gestion de Patrimoine Certifié — diplôme de référence du conseil patrimonial, exigeant et technique." },
  { annee: "2018", titre: "Agent général A2P", detail: "Création de ma propre structure : agent général AXA Prévoyance et Patrimoine. Quatre années à porter mon agence et tenir le devoir de conseil au quotidien." },
  { annee: "2022", titre: "Rupture santé", detail: "Fermeture de l'entreprise pour raison de santé. Une rupture qui m'a permis de regarder le métier autrement et de prendre le recul nécessaire pour identifier ce qui manquait au marché." },
  { annee: "2026", titre: "RQTH", detail: "Reconnaissance de la Qualité de Travailleur Handicapé obtenue en 2026. Ouvre l'éligibilité au statut TIH (Travailleur Indépendant Handicapé) puis Entreprise Adaptée dès la première embauche." },
  { annee: "13 avril 2026", titre: "Démarrage de MRE", detail: "Lancement officiel du projet. Conception itérative de l'architecture du moteur et de la bibliothèque vivante. Quinze années de terrain incorporées dans la logique métier du produit." },
  { annee: "Mai 2026", titre: "Sprint de construction", detail: "Quatre semaines de construction intensive. Le projet est le fruit de ma connaissance métier de quinze ans, adossée à une IA générative comme outil d'exécution (écriture du code, des tests, de la documentation). Chaque détecteur, chaque seuil, chaque référence réglementaire résulte d'une décision humaine experte. L'IA accélère ; l'expert décide ; le rapport cite. C'est cette méthode qui a permis d'obtenir des résultats probants en peu de temps." },
  { annee: "Demain", titre: "TIH + Entreprise Adaptée", detail: "MRE Audit sera enregistré au statut Travailleur Indépendant Handicapé dès la création SASU. Engagement Entreprise Adaptée dès la première embauche (cadre L. 5213-13 à L. 5213-19-1 Code du travail, ≥ 55 % salariés en situation de handicap). 100 % à horizon 24 mois." },
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
                MRE est un outil de <strong>contrôle interne et de pilotage
                réglementaire</strong>, pas un outil de jugement. Il est conçu
                pour les fonctions de conformité, d'audit et de tutelle :
                révéler les écarts factuels entre les documents transmis et le
                référentiel applicable, sans inventer, sans juger, et en
                pointant à chaque ligne l'article et le verbatim source.
              </p>
              <p className="mt-4 text-sm text-blue-200">
                Cette posture neutre est verrouillée dans le code par 4 valeurs
                non-jugeantes (ALIGNE / TENSION / ECART_MAJEUR / ELEMENT_ABSENT)
                et un self-check anti-hallucination 8 axes. C'est ce qui rend
                MRE défendable en contradictoire devant l'ACPR, en médiation, ou
                en audit interne.
              </p>
            </div>

            <div className="mt-6 bg-mre-beige border-l-4 border-mre-bleu rounded-r-xl p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-mre-bleu mb-2">
                Validation triple casquette — mai 2026
              </div>
              <p className="text-sm text-mre-ardoise leading-relaxed">
                Évaluation indépendante du moteur sur dossiers réels selon la
                grille d'un <strong>contrôleur ACPR + ingénieur RegTech senior +
                conseiller patrimonial expérimenté</strong> : note moyenne
                <strong> 9,8 / 10</strong> sur les axes neutralité, traçabilité,
                couverture réglementaire, anti-hallucination. Antériorité PI
                fixée par dépôt eSoleau du 19 avril 2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
