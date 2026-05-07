/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Palette MRE — cohérente avec rapports PDF
        mre: {
          bleu: "#003a70",      // Couleur principale (institutionnel)
          rouge: "#B91C1C",     // Accent (écart, alerte)
          gris: "#374151",      // Sous-titres
          beige: "#F9FAFB",     // Fonds clairs
          ardoise: "#1F2937",   // Texte sombre
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["'Source Code Pro'", "Consolas", "Monaco", "monospace"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
