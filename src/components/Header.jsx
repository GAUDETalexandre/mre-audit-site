import React, { useState, useEffect } from "react";

const NAV = [
  { id: "probleme", label: "Constat" },
  { id: "solution", label: "Solution" },
  { id: "demo", label: "Démo" },
  { id: "biblio", label: "Bibliothèque vivante" },
  { id: "extension", label: "Extension produits" },
  { id: "pack", label: "Pack institutionnel" },
  { id: "histoire", label: "Fondateur" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="MRE — accueil">
          <img
            src="/logo/logo_mre_v3_combine.svg"
            alt="MRE — Regtech &amp; Fintech"
            className="h-12 md:h-14"
          />
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-sm font-medium text-mre-gris hover:text-mre-bleu transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-mre-bleu text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-mre-bleu/90 transition-colors"
          >
            Contacter
          </a>
        </nav>

        {/* Burger mobile */}
        <button
          className="md:hidden p-2 text-mre-bleu"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-sm font-medium text-mre-gris py-2"
              onClick={() => setMenuOpen(false)}
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
