import React, { useState } from "react";

export default function Contact() {
  const [envoye, setEnvoye] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    // V1 : on récupère les valeurs et on prépare un mailto.
    // V2 : on connectera un endpoint Vercel (formspree, getform, etc.)
    const f = e.target;
    const sujet = encodeURIComponent(`MRE — Contact ${f.organisation.value || ""}`);
    const corps = encodeURIComponent(
`Bonjour Alexandre,

Nom        : ${f.nom.value}
Email      : ${f.email.value}
Organisation : ${f.organisation.value}
Type       : ${f.typeOrg.value}

Message :
${f.message.value}

— Envoyé depuis le formulaire mre-audit.fr`
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
            Vous voulez voir MRE sur un dossier réel ?
          </h2>
          <p className="text-mre-gris mt-4 text-lg">
            Démonstration sur rendez-vous · Comité d'incubateur · Partenariat
            ACPR / médiateur / RCSI · Presse
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          {envoye ? (
            <div className="text-center py-10">
              <div className="text-6xl mb-4">✉️</div>
              <h3 className="text-2xl font-bold text-mre-bleu">Votre client mail s'est ouvert</h3>
              <p className="text-mre-gris mt-3">
                Vérifiez votre logiciel de messagerie — un email pré-rempli
                attend votre validation.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Champ label="Nom complet" name="nom" type="text" required />
                <Champ label="Email" name="email" type="email" required />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Champ label="Organisation" name="organisation" type="text" />
                <div>
                  <label className="block text-sm font-semibold text-mre-bleu mb-2">
                    Type d'organisation
                  </label>
                  <select
                    name="typeOrg"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-mre-bleu focus:ring-2 focus:ring-mre-bleu/20 outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>— Sélectionnez —</option>
                    <option>Incubateur / accélérateur</option>
                    <option>Cabinet CGP</option>
                    <option>RCSI / Conformité assureur</option>
                    <option>ACPR / AMF</option>
                    <option>Médiation</option>
                    <option>Audit interne</option>
                    <option>Presse / média</option>
                    <option>Autre</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-mre-bleu mb-2">
                  Votre message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-mre-bleu focus:ring-2 focus:ring-mre-bleu/20 outline-none resize-y"
                  placeholder="Pourquoi souhaitez-vous échanger avec MRE ?"
                ></textarea>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-mre-bleu text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-mre-bleu/90 transition-colors"
                >
                  Envoyer le message →
                </button>
                <a
                  href="mailto:contact@mre-audit.fr"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-mre-bleu font-semibold px-6 py-3.5 rounded-lg border-2 border-mre-bleu/20 hover:border-mre-bleu transition-colors"
                >
                  ✉️ Email direct
                </a>
              </div>
              <p className="text-xs text-mre-gris pt-3">
                En soumettant ce formulaire, vous acceptez que MRE traite vos
                données (RGPD) uniquement pour répondre à votre demande.
                Aucune transmission à des tiers.
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
