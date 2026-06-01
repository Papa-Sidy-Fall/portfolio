import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = [
      'Bonjour Papa Sidy Fall,',
      '',
      `Nom: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      formData.message,
    ].join('\n');

    const mailto = `mailto:papasidyfall03@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    window.setTimeout(() => {
      setSubmitStatus('idle');
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
            Parlons
            <br />
            Ensemble
          </h2>
          <p className="text-xl text-gray-600">Pour une mission, un poste, un produit ou une collaboration technique</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <div className="rounded-[2rem] bg-black p-8 text-white shadow-xl">
              <h3 className="mb-6 text-2xl font-bold">Coordonnees</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <i className="ri-mail-line text-2xl text-teal-300"></i>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-[0.18em] text-white/50">Email</div>
                    <a href="mailto:papasidyfall03@gmail.com" className="mt-1 block text-base text-white/90 transition-colors hover:text-white">
                      papasidyfall03@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <i className="ri-phone-line text-2xl text-teal-300"></i>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-[0.18em] text-white/50">Telephone</div>
                    <a href="tel:+221775943708" className="mt-1 block text-base text-white/90 transition-colors hover:text-white">
                      +221 77 594 37 08
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <i className="ri-map-pin-line text-2xl text-teal-300"></i>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-[0.18em] text-white/50">Localisation</div>
                    <div className="mt-1 text-base text-white/90">Dakar, Senegal</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-gray-50 p-8">
              <h4 className="mb-4 text-xl font-bold text-gray-900">Profils</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Papa-Sidy-Fall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-medium text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:text-black"
                >
                  <i className="ri-github-fill text-xl"></i>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/papa-sidy-fall-8a1047223/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-medium text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:text-black"
                >
                  <i className="ri-linkedin-fill text-xl"></i>
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-teal-100 bg-teal-50 p-8">
              <h4 className="mb-3 text-xl font-bold text-teal-900">Ce formulaire ouvre ton email</h4>
              <p className="text-sm leading-relaxed text-teal-800">
                Le message est prepare automatiquement dans ton application mail pour eviter un faux envoi sans backend.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-xl">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Envoyer un message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-teal-500 focus:bg-white"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-teal-500 focus:bg-white"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-teal-500 focus:bg-white"
                  placeholder="Sujet du message"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  maxLength={600}
                  className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-teal-500 focus:bg-white"
                  placeholder="Decris ton besoin, ton projet ou ton contexte."
                ></textarea>
                <p className="mt-2 text-xs text-gray-500">{formData.message.length}/600 caracteres</p>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-7 py-4 font-medium text-white transition-all hover:bg-gray-800"
              >
                <span>Ouvrir mon email</span>
                <i className="ri-send-plane-line"></i>
              </button>

              {submitStatus === 'success' && (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
                  Ton application mail vient d etre preparee avec le message.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
