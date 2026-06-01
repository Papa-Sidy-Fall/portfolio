import { useEffect, useState } from 'react';
import profileImage from '../../../assets-papa-sidy-fall.jpg';
import { profileMetrics } from '../data';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setIsMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'apropos', label: 'A propos' },
    { id: 'projets', label: 'Projets' },
    { id: 'competences', label: 'Competences' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.20),_transparent_35%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_48%,_#ecfeff_100%)]">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-black/5 bg-white/90 py-4 backdrop-blur-xl' : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            <button onClick={() => scrollToSection('hero')} className="flex items-center gap-3 text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-xl font-bold text-white">
                PSF
              </div>
              <div>
                <div className="text-lg font-bold text-black">Papa Sidy Fall</div>
                <div className="text-sm text-gray-500">Developpeur Full-Stack Web & Mobile</div>
              </div>
            </button>

            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-gray-600 transition-colors hover:text-black"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://github.com/Papa-Sidy-Fall"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition-all hover:bg-gray-800"
              >
                Voir GitHub
              </a>
            </div>

            <button
              type="button"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((value) => !value)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white text-black md:hidden"
            >
              <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
            </button>
          </div>

          {isMenuOpen && (
            <div className="mt-4 rounded-3xl border border-black/5 bg-white p-4 shadow-xl md:hidden">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-black"
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="https://github.com/Papa-Sidy-Fall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 rounded-2xl bg-black px-4 py-3 text-center text-sm font-medium text-white"
                >
                  Voir GitHub
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div id="hero" className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pb-20 pt-36 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-medium text-teal-700 shadow-sm backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-teal-500"></span>
            Disponible pour collaborations, freelance et opportunites
          </div>

          <h1 className="mb-6 font-['Playfair_Display'] text-5xl font-black leading-tight text-black md:text-7xl">
            Des produits web et mobile
            <br />
            <span className="text-teal-500">penses pour les vrais usages.</span>
          </h1>

          <p className="mb-4 max-w-2xl text-xl text-gray-700">
            Je suis <strong>Papa Sidy Fall</strong>, developpeur full-stack web et mobile base au Senegal.
          </p>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-500">
            Je conçois des applications robustes avec React, Node.js, Laravel, Flutter et des bases de donnees relationnelles,
            avec une attention forte sur la structure, l experience utilisateur et la qualite technique.
          </p>

          <div className="mb-10 flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('projets')}
              className="rounded-2xl bg-black px-8 py-4 font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-gray-800"
            >
              Voir mes projets
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="rounded-2xl border-2 border-black px-8 py-4 font-medium text-black transition-all hover:bg-black hover:text-white"
            >
              Me contacter
            </button>
            <a
              href="https://www.linkedin.com/in/papa-sidy-fall-8a1047223/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-gray-200 bg-white px-8 py-4 font-medium text-gray-700 transition-all hover:border-teal-200 hover:text-teal-700"
            >
              LinkedIn
            </a>
          </div>

          <div className="mb-10 flex flex-wrap gap-3">
            {['React', 'TypeScript', 'Node.js', 'Laravel', 'Flutter', 'PostgreSQL'].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {profileMetrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-black/5 bg-white/90 p-5 shadow-sm">
                <div className="mb-2 text-3xl font-bold text-black">{metric.value}</div>
                <div className="text-sm text-gray-500">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full bg-teal-200/70 blur-3xl lg:block"></div>
          <div className="absolute -bottom-6 right-0 hidden h-40 w-40 rounded-full bg-amber-200/60 blur-3xl lg:block"></div>

          <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white p-4 shadow-2xl">
            <div className="overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-gray-100 via-white to-teal-50">
              <img src={profileImage} alt="Papa Sidy Fall" className="h-[580px] w-full object-cover object-top" />
            </div>

            <div className="absolute left-8 top-8 rounded-2xl bg-black px-4 py-3 text-white shadow-lg">
              <div className="text-xs uppercase tracking-[0.25em] text-white/60">Focus</div>
              <div className="mt-1 text-sm font-semibold">Applications metier, plateformes web, mobile</div>
            </div>

            <div className="absolute bottom-5 right-5 max-w-[185px] rounded-2xl border border-white/50 bg-white/88 p-3 shadow-xl backdrop-blur">
              <div className="mb-1.5 flex items-center gap-2 text-xs font-medium text-teal-700">
                <i className="ri-award-line text-base"></i>
                ODC Sonatel / Master 2
              </div>
              <p className="text-xs leading-relaxed text-gray-600">
                Profil full-stack forme a la conception, au DevOps, a l UX/UI et a l integration continue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
