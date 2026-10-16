import React from "react";

// Espace vidéo : ajouter une vidéo = déposer le .mp4 (H.264, faststart) et son image
// d'aperçu dans public/videos/, puis une entrée ici. La plus récente en premier.
const VIDEOS = [
  {
    fichier: "/videos/mre_presentation.mp4",
    apercu: "/videos/mre_presentation.jpg",
    titre: "MRE, présenté par son fondateur",
    detail: "Alexandre Gaudet explique ce que fait MRE : rassembler les documents officiels, lire les placements étage par étage, et rendre l'information exploitable pour celui qui épargne.",
    duree: "1 min 54",
    date: "Octobre 2026",
  },
];

export default function Videos() {
  return (
    <section id="videos" className="py-20 px-6 bg-mre-beige">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-mre-rouge text-xs font-bold uppercase tracking-widest">
            Vidéos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-mre-bleu mt-3">
            MRE en images
          </h2>
        </div>

        <div className={`grid gap-10 ${VIDEOS.length > 1 ? "md:grid-cols-2" : "max-w-4xl mx-auto"}`}>
          {VIDEOS.map((v) => (
            <article key={v.fichier} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
              <video
                className="w-full aspect-video bg-black"
                src={v.fichier}
                poster={v.apercu}
                controls
                preload="metadata"
                playsInline
              />
              <div className="p-6">
                <div className="text-xs text-mre-gris uppercase tracking-wider">
                  {v.date} · {v.duree}
                </div>
                <h3 className="text-xl font-bold text-mre-bleu mt-1">{v.titre}</h3>
                <p className="text-mre-gris mt-2 leading-relaxed">{v.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
