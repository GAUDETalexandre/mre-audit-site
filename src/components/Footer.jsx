import React from "react";

export default function Footer() {
  return (
    <footer className="bg-mre-bleu text-white py-10 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <img src="/logo/logo_mre_compact.svg" alt="MRE" className="h-10 mb-3 bg-white/0 rounded" />
          <div className="text-sm text-white/80 leading-relaxed">
            <strong className="text-white">MRE</strong> — Regtech &amp; Fintech<br />
            Moteur Révélateur d'Écart pour produits financiers.
          </div>
        </div>

        <div className="text-sm text-white/80">
          <h4 className="text-white font-semibold mb-3">Posture</h4>
          <p className="leading-relaxed">
            MRE produit un constat factuel ancré sur articles réglementaires —
            sans jugement, sans valeur juridique. La grille (ALIGNE / TENSION /
            ECART_MAJEUR / ELEMENT_ABSENT) est interne. Le rapport est une photo
            à l'instant T des documents transmis.
          </p>
        </div>

        <div className="text-sm text-white/80">
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <a href="#contact" className="block hover:text-white">Demande de démonstration</a>
          <a href="#histoire" className="block hover:text-white">À propos d'Alexandre Gaudet</a>
          <p className="mt-3 text-xs text-white/60">
            © 2026 MRE — Tous droits réservés. Marque non encore déposée.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/20 text-xs text-white/60 text-center">
        Site v1 · Construit avec React + Vite · Hébergé sur Vercel
      </div>
    </footer>
  );
}
