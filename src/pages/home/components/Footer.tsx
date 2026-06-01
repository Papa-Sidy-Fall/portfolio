export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">PSF</span>
              </div>
              <span className="font-bold text-xl">Papa Sidy Fall</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Developpeur Full-Stack Web & Mobile passionne, avec une approche axee produit, qualite technique et experiences utiles.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://github.com/Papa-Sidy-Fall"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-teal-500 transition-all cursor-pointer"
              >
                <i className="ri-github-fill text-lg"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/papa-sidy-fall-8a1047223/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-teal-500 transition-all cursor-pointer"
              >
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a 
                href="mailto:papasidyfall03@gmail.com"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-teal-500 transition-all cursor-pointer"
              >
                <i className="ri-mail-line text-lg"></i>
              </a>
              <a 
                href="tel:+221775943708"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-teal-500 transition-all cursor-pointer"
              >
                <i className="ri-phone-line text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('apropos')}
                  className="text-gray-400 hover:text-teal-500 transition-colors cursor-pointer whitespace-nowrap"
                >
                  À propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projets')}
                  className="text-gray-400 hover:text-teal-500 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Projets
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('competences')}
                  className="text-gray-400 hover:text-teal-500 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Compétences
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-teal-500 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <i className="ri-mail-line mt-1"></i>
                <a href="mailto:papasidyfall03@gmail.com" className="hover:text-teal-500 transition-colors cursor-pointer">
                  papasidyfall03@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-phone-line mt-1"></i>
                <a href="tel:+221775943708" className="hover:text-teal-500 transition-colors cursor-pointer">
                  +221 77 594 37 08
                </a>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-line mt-1"></i>
                <span>Dakar, Senegal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {year} Papa Sidy Fall. Tous droits reserves.
          </p>
          <div className="text-gray-500 text-sm whitespace-nowrap">
            Portfolio web & mobile
          </div>
        </div>
      </div>
    </footer>
  );
}
