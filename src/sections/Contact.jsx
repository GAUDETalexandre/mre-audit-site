import React, { useState } from "react";

export default function Contact() {
  const [envoye, setEnvoye] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const f = e.target;
    const demandePack = f.demandePack?.checked
      ? "OUI — demande accès au pack institutionnel (BP / Étude / Cas client / Pitch deck)"
      : "Non";
    const sujet = encodeURIComponent(
      `MRE — Demande ${f.demandePack?.checked ? "PACK INSTITUTIONNEL" : "Contact"} · ${f.organisation.value || ""}`
    );
    const corps = encodeURIComponent(
`Bonjour Alexandre,

Demande qualifiée reçue depuis mre-audit.fr — à instruire sous 48 h ouvrées.

— Identité —
Nom complet  : ${f.nom.value}
Fonction     : ${f.fonction?.value || "(non renseigné)"}
Email pro    : ${f.email.value}
Organisation : ${f.organisation.value}
Secteur      : ${f.typeOrg.value}
LinkedIn     : ${f.linkedin?.value || "(non renseigné)"}

— Demande —
Pack institutionnel : ${demandePack}
Finalité de la demande : ${f.finalite?.value || "(non renseigné)"}

— Message libre —
${f.message.value}

— Engagement de confidentialité —
${f.confidentialite?.checked ? "Confirmé par le demandeur." : "NON COCHÉ — à confirmer avant envoi du pack."}

Envoyé depuis le formulaire mre-audit.fr le ${new Date().toLocaleString("fr-FR")}.`
    );
    window.location.href = `mailto:contact@mre-audit.fr?subject=${sujet}&body=${corps}`;
    setEnvoye(true);
  }

  return (
    <section id="contact" className="py-20 px-6 bg-mre-beige">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-mre-rouge text-xs font-bold uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-mre-bleu mt-3">
            Démonstration institutionnelle sur dossier anonymisé.
          </h2>
          <p className="text-mre-gris mt-4 text-lg">
            Direction conformité · RCSI · Contrôle permanent · Audit interne ·
            Gouvernance produit · ACPR / AMF · Comité d'incubation et fonds
            d'amorçage RegTech.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          {envoye ? (
            <div className="text-center py-10">
              <div className="text-6xl mb-4">✉️</div>
              <h3 className="text-2xl font-bold text-mre-bleu">Votre client mail s'est ouvert</h3>
              <p className="text-mre-gris mt-3">
                Vérifiez votre logiciel de messagerie — un email pré-rempli
                attend votre validation. Une réponse personnalisée vous sera
                adressée sous 48 h ouvrées.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Champ label="Nom complet" name="nom" type="text" required />
                <Champ label="Email professionnel" name="email" type="email" required />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Champ label="Fonction / titre" name="fonction" type="text" required />
                <Champ label="Organisation" name="organisation" type="text" required />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-mre-bleu mb-2">
                    Type d'organisation <span className="text-mre-rouge">*</span>
                  </label>
                  <select
                    name="typeOrg"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-mre-bleu focus:ring-2 focus:ring-mre-bleu/20 outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>— Sélectionnez —</option>
                    <option>Direction conformité — banque</option>
                    <option>Direction conformité — assurance / mutuelle</option>
                    <option>RCSI / Contrôle permanent</option>
                    <option>Audit interne</option>
                    <option>Gouvernance produit (POG)</option>
                    <option>Société de gestion (SGP)</option>
                    <option>ACPR / AMF</option>
                    <option>Incubateur / fonds d'amorçage RegTech</option>
                    <option>Banque / financeur</option>
                    <option>Presse / média spécialisé</option>
                    <option>Autre</option>
                  </select>
                </div>
                <Champ label="Profil LinkedIn (URL)" name="linkedin" type="url" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-mre-bleu mb-2">
                  Finalité de la demande <span className="text-mre-rouge">*</span>
                </label>
                <input
                  type="text"
                  name="finalite"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-mre-bleu focus:ring-2 focus:ring-mre-bleu/20 outline-none"
                  placeholder="Ex. instruction comité d'incubation, audit interne, due diligence pré-investissement…"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-mre-bleu mb-2">
                  Votre message <span className="text-mre-rouge">*</span>
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-mre-bleu focus:ring-2 focus:ring-mre-bleu/20 outline-none resize-y"
                  placeholder="Présentez le contexte et l'objet précis de votre demande…"
                ></textarea>
              </div>

              <div className="bg-mre-beige border-l-4 border-mre-bleu rounded-r-lg p-4 space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="demandePack"
                    className="mt-1 w-4 h-4 accent-mre-bleu"
                  />
                  <span className="text-sm text-mre-ardoise">
                    <strong>Je souhaite recevoir le pack institutionnel</strong>
                    {" "}(Business Plan, Pitch deck, Note couche IA souveraine,
                    Certification 49/49 (dossier témoin), Étude de marché, Cas client anonymisé)
                    après qualification de ma demande.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="confidentialite"
                    required
                    className="mt-1 w-4 h-4 accent-mre-bleu"
                  />
                  <span className="text-sm text-mre-ardoise">
                    <strong>Engagement de confidentialité</strong> — je
                    m'engage à ne pas diffuser les documents transmis à des
                    tiers, à les utiliser exclusivement pour la finalité
                    déclarée et à les détruire à l'issue du processus.{" "}
                    <span className="text-mre-rouge">*</span>
                  </span>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-mre-bleu text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-mre-bleu/90 transition-colors"
                >
                  Soumettre la demande qualifiée →
                </button>
                <a
                  href="mailto:contact@mre-audit.fr"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-mre-bleu font-semibold px-6 py-3.5 rounded-lg border-2 border-mre-bleu/20 hover:border-mre-bleu transition-colors"
                >
                  ✉️ Email direct
                </a>
              </div>
              <p className="text-xs text-mre-gris pt-3">
                Les informations transmises sont traitées par MRE Audit (SASU
                en cours de constitution) en qualité de responsable de
                traitement, base légale art. 6.1.f RGPD (intérêt légitime à
                qualifier les demandes institutionnelles), conservées 12 mois
                glissants. Aucune transmission à des tiers. Droit d'accès et
                d'effacement : contact@mre-audit.fr.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Champ({ label, name, type, required }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-mre-bleu mb-2">
        {label}{required && <span className="text-mre-rouge"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-mre-bleu focus:ring-2 focus:ring-mre-bleu/20 outline-none"
      />
    </div>
  );
}
