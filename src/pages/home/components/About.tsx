import { certifications, educationHighlights, languages } from '../data';

export default function About() {
  return (
    <section id="apropos" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <h2 className="mb-6 font-['Playfair_Display'] text-5xl font-bold text-black md:text-6xl">
            Un profil construit
            <br />
            <span className="text-teal-500">pour livrer proprement.</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Mon CV met en avant un parcours full-stack oriente terrain: frontend moderne, backend structure,
            bases de donnees relationnelles, pratiques DevOps et sens du produit. J aime construire des interfaces
            claires, des architectures lisibles et des experiences utiles pour les utilisateurs finaux.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-black/5 bg-gray-50 p-8 md:p-10">
            <div className="mb-8 grid gap-6 md:grid-cols-3">
              {educationHighlights.map((item) => (
                <div key={item.title} className="rounded-3xl bg-white p-6 shadow-sm">
                  <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">{item.title}</div>
                  <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="space-y-5 text-gray-600">
              <p>
                Je travaille principalement avec <strong>JavaScript, TypeScript, PHP, React, Node.js, Laravel et Flutter</strong>,
                tout en gardant une base solide sur l organisation du code, la gestion des donnees et la qualite de livraison.
              </p>
              <p>
                Mes projets couvrent des contextes varies: banque, sante, gestion salariale, immobilier, logistique,
                marketplace, communautes et messagerie. Cette diversite m aide a comprendre vite les besoins metier et a
                proposer des solutions structurees.
              </p>
              <p>
                J accorde aussi beaucoup d importance a la communication, a la documentation et a la proprete du code, parce
                qu un bon projet doit etre maintenable autant qu il doit fonctionner.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] bg-black p-8 text-white shadow-xl">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">Certifications</div>
              <div className="space-y-3">
                {certifications.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/85">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-teal-100 bg-teal-50 p-8">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">Langues</div>
              <div className="flex flex-wrap gap-3">
                {languages.map((language) => (
                  <span
                    key={language}
                    className="rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-medium text-teal-800"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">Methodes de travail</div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  'Analyse et resolution de problemes',
                  'Collaboration Agile / Scrum',
                  'Autonomie et apprentissage rapide',
                  'Rigueur, detail et respect des delais',
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-gray-50 px-4 py-3 text-sm text-gray-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
