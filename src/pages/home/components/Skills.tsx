interface Skill {
  name: string;
  icon: string;
  level: number;
  size: 'large' | 'medium' | 'small';
}

export default function Skills() {
  const skills: Skill[] = [
    { name: 'React', icon: 'ri-reactjs-line', level: 5, size: 'large' },
    { name: 'TypeScript', icon: 'ri-code-s-slash-line', level: 5, size: 'large' },
    { name: 'Node.js', icon: 'ri-nodejs-line', level: 5, size: 'medium' },
    { name: 'PHP', icon: 'ri-terminal-box-line', level: 5, size: 'medium' },
    { name: 'Laravel', icon: 'ri-code-box-line', level: 5, size: 'medium' },
    { name: 'Angular', icon: 'ri-angular-fill', level: 4, size: 'medium' },
    { name: 'Flutter', icon: 'ri-flutter-fill', level: 5, size: 'medium' },
    { name: 'Prisma', icon: 'ri-database-2-line', level: 5, size: 'small' },
    { name: 'MySQL', icon: 'ri-database-line', level: 5, size: 'small' },
    { name: 'PostgreSQL', icon: 'ri-database-fill', level: 5, size: 'small' },
    { name: 'Docker', icon: 'ri-ship-line', level: 4, size: 'small' },
    { name: 'Kubernetes', icon: 'ri-cloud-line', level: 3, size: 'small' },
    { name: 'Git', icon: 'ri-git-branch-line', level: 5, size: 'small' },
    { name: 'Figma', icon: 'ri-pencil-ruler-2-line', level: 4, size: 'small' }
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-1';
      case 'small':
        return 'md:col-span-1 md:row-span-1';
      default:
        return '';
    }
  };

  return (
    <section id="competences" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Compétences &
            <br />
            <span className="text-teal-500">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Des bases frontend et backend solides, completees par les outils de livraison et de conception
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-fr">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`group bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col items-center justify-center ${getSizeClasses(skill.size)}`}
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <i className={`${skill.icon} text-5xl text-gray-900 group-hover:text-teal-500 transition-colors`}></i>
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{skill.name}</h3>

              {/* Level Dots */}
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i < skill.level 
                        ? 'bg-teal-500 group-hover:scale-125' 
                        : 'bg-gray-200'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Autres Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Express.js',
              'Tailwind CSS',
              'Vite',
              'HTML5',
              'CSS3',
              'JavaScript ES6+',
              'Dart',
              'UML',
              'GitHub',
              'UI/UX Design',
              'DevOps',
              'Azure DevOps',
              'i18next',
              'Recharts',
              'Cloudinary',
              'JWT',
              'Intelligence Artificielle'
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md hover:bg-teal-50 hover:text-teal-700 transition-all cursor-pointer whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16 bg-gradient-to-br from-teal-50 to-gray-50 rounded-3xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Soft Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl mx-auto mb-4 shadow-md">
                <i className="ri-lightbulb-line text-3xl text-teal-600"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Résolution de problèmes</h4>
              <p className="text-sm text-gray-600">Esprit d analyse et approche methodique</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl mx-auto mb-4 shadow-md">
                <i className="ri-team-line text-3xl text-teal-600"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Travail d'équipe</h4>
              <p className="text-sm text-gray-600">Collaboration Agile, Scrum et communication claire</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl mx-auto mb-4 shadow-md">
                <i className="ri-rocket-line text-3xl text-teal-600"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Apprentissage rapide</h4>
              <p className="text-sm text-gray-600">Autonomie, curiosite technique et progression continue</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl mx-auto mb-4 shadow-md">
                <i className="ri-time-line text-3xl text-teal-600"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Rigueur</h4>
              <p className="text-sm text-gray-600">Sens du detail, fiabilite et respect des delais</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl mx-auto mb-4 shadow-md">
                <i className="ri-refresh-line text-3xl text-teal-600"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Adaptabilité</h4>
              <p className="text-sm text-gray-600">Ouverture aux nouveaux outils, contextes et frameworks</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl mx-auto mb-4 shadow-md">
                <i className="ri-file-text-line text-3xl text-teal-600"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Documentation</h4>
              <p className="text-sm text-gray-600">Capacite a documenter et vulgariser les solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
