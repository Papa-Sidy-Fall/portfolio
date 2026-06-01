import { portfolioProjects } from '../data';

const featuredThemes = [
  {
    card: 'bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white',
    badge: 'border-white/15 bg-white/10 text-white/80',
    chip: 'bg-white/10 text-white/80',
    button: 'bg-white text-slate-900 hover:bg-slate-100',
  },
  {
    card: 'bg-gradient-to-br from-rose-950 via-red-950 to-orange-900 text-white',
    badge: 'border-white/15 bg-white/10 text-white/80',
    chip: 'bg-white/10 text-white/80',
    button: 'bg-white text-red-950 hover:bg-rose-50',
  },
];

const gridThemes = [
  {
    card: 'border-black/5 bg-white',
    badge: 'border-teal-100 bg-teal-50 text-teal-700',
    chip: 'bg-gray-100 text-gray-700',
    button: 'bg-black text-white hover:bg-gray-800',
    icon: 'bg-teal-50 text-teal-600',
  },
  {
    card: 'border-orange-100 bg-orange-50/60',
    badge: 'border-orange-200 bg-white text-orange-700',
    chip: 'bg-white text-orange-700',
    button: 'bg-orange-500 text-white hover:bg-orange-600',
    icon: 'bg-white text-orange-600',
  },
  {
    card: 'border-indigo-100 bg-indigo-50/60',
    badge: 'border-indigo-200 bg-white text-indigo-700',
    chip: 'bg-white text-indigo-700',
    button: 'bg-indigo-600 text-white hover:bg-indigo-700',
    icon: 'bg-white text-indigo-600',
  },
  {
    card: 'border-emerald-100 bg-emerald-50/60',
    badge: 'border-emerald-200 bg-white text-emerald-700',
    chip: 'bg-white text-emerald-700',
    button: 'bg-emerald-600 text-white hover:bg-emerald-700',
    icon: 'bg-white text-emerald-600',
  },
];

export default function Projects() {
  const featuredProjects = portfolioProjects.filter((project) => project.featured);
  const otherProjects = portfolioProjects.filter((project) => !project.featured);

  return (
    <section id="projets" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
              Des projets ranges
              <br />
              <span className="text-teal-500">par impact et par usage.</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Le contenu de cette section reprend les projets cites dans ton CV: deux applications deployeees en ligne,
              puis les autres realisations reliees a leurs depots GitHub.
            </p>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
            <div className="text-3xl font-bold text-black">12 projets</div>
            <div className="mt-1 text-sm text-gray-500">2 liens de deploiement et 10 liens GitHub</div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => {
            const theme = featuredThemes[index % featuredThemes.length];
            const isLive = project.linkType === 'live';

            return (
              <article key={project.id} className={`overflow-hidden rounded-[2rem] p-8 shadow-xl ${theme.card}`}>
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <div className={`inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${theme.badge}`}>
                      {isLive ? 'Lien en ligne' : 'GitHub'}
                    </div>
                    <h3 className="mt-5 text-3xl font-bold">{project.title}</h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/65">{project.category}</p>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl">
                    <i className={project.icon}></i>
                  </div>
                </div>

                <p className="mb-6 max-w-2xl text-base leading-relaxed text-white/80">{project.description}</p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className={`rounded-full px-3 py-1 text-sm ${theme.chip}`}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 rounded-2xl px-6 py-3 font-medium transition-all ${theme.button}`}
                >
                  <span>{isLive ? 'Ouvrir le projet' : 'Voir le code source'}</span>
                  <i className="ri-arrow-right-up-line text-lg"></i>
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {otherProjects.map((project, index) => {
            const theme = gridThemes[index % gridThemes.length];

            return (
              <article
                key={project.id}
                className={`flex h-full flex-col rounded-[2rem] border p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${theme.card}`}
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <div className={`inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${theme.badge}`}>
                      GitHub
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-gray-900">{project.title}</h3>
                    <p className="mt-2 text-sm text-gray-500">{project.category}</p>
                  </div>
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${theme.icon}`}>
                    <i className={project.icon}></i>
                  </div>
                </div>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600">{project.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className={`rounded-full px-3 py-1 text-xs font-medium ${theme.chip}`}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition-colors ${theme.button}`}
                >
                  <span>Voir sur GitHub</span>
                  <i className="ri-arrow-right-up-line"></i>
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Papa-Sidy-Fall?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-black px-7 py-4 font-medium text-white transition-all hover:bg-gray-800"
          >
            <i className="ri-github-fill text-xl"></i>
            Voir tous mes depots
          </a>
        </div>
      </div>
    </section>
  );
}
