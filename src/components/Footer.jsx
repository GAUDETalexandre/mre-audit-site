import React from "react";

export default function Footer() {
  return (
    <footer className="bg-mre-bleu text-white py-10 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <img src="/logo/logo_mre_compact.svg" alt="MRE Audit" className="h-10 mb-3 bg-white/0 rounded" />
          <div className="text-sm text-white/80 leading-relaxed">
            <strong className="text-white">MRE Audit</strong> — RegTech B2B française<br />
            Plateforme d'audit inter-documents de l'épargne réglementée.<br />
            <span className="text-white/60 text-xs">SASU en cours de constitution · Bourg-en-Bresse (01)</span>
          </div>
        </div>

        <div className="text-sm text-white/80">
          <h4 className="text-white font-semibold mb-3">Posture neutre verrouillée</h4>
          <p className="leading-relaxed">
            MRE produit un constat factuel ancré sur articles réglementaires —
            sans jugement, sans valeur juridique opposable. Grille interne
            (ALIGNE / TENSION / ECART_MAJEUR / ELEMENT_ABSENT). Photographie
            à l'instant T des documents transmis. Anti-hallucination verbatim.
          </p>
        </div>

        <div className="text-sm text-white/80">
          <h4 className="text-white font-semibold mb-3">Cibles institutionnelles</h4>
          <ul className="space-y-1 leading-relaxed">
            <li>· Direction conformité — banque · assurance · mutuelle</li>
            <li>· RCSI / contrôle permanent / audit interne</li>
            <li>· Gouvernance produit (POG)</li>
            <li>· Sociétés de gestion (SGP)</li>
            <li>· ACPR · AMF · médiation</li>
          </ul>
        </div>

        <div className="text-sm text-white/80">
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <a href="mailto:contact@mre-audit.fr" className="block hover:text-white">contact@mre-audit.fr</a>
          <a href="#contact" className="block hover:text-white">Demande de démonstration</a>
          <a href="#histoire" className="block hover:text-white">Fondateur — Alexandre Gaudet</a>
          <p className="mt-3 text-xs text-white/60">
            Antériorité PI : eSoleau 19 avril 2026.<br />
            Souveraineté 100 % France/UE — Scaleway · OVH · Mistral.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/20 text-xs text-white/60 flex flex-col md:flex-row justify-between gap-3">
        <span>© 2026 MRE Audit — Tous droits réservés. Marque MRE en cours de dépôt INPI.</span>
        <span>React + Vite · Hébergement Vercel (EU edge — Frankfurt)</span>
      </div>
    </footer>
  );
}
