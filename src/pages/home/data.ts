export type ProjectLinkType = 'live' | 'github';

export interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  link: string;
  linkType: ProjectLinkType;
  icon: string;
  featured?: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: 'ASC SONATEL',
    category: 'Plateforme communautaire, sportive et administrative',
    description:
      "Plateforme web qui centralise la vie du club avec actualités, activités sportives et culturelles, boutique, espace membre, administration, échanges sociaux et live.",
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Prisma', 'PostgreSQL'],
    link: 'https://ascsonatel.com/',
    linkType: 'live',
    icon: 'ri-team-line',
    featured: true,
  },
  {
    id: 2,
    title: 'Don de Sang',
    category: 'Application de gestion et coordination du don de sang',
    description:
      "Application web de gestion du don de sang au Senegal pour les donneurs, les hopitaux et le CNTS avec rendez-vous, urgences, campagnes, stocks et messagerie.",
    technologies: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    link: 'https://frontdondesang.vercel.app',
    linkType: 'live',
    icon: 'ri-heart-3-line',
    featured: true,
  },
  {
    id: 3,
    title: 'Gestion Salariale',
    category: 'Application web full-stack',
    description:
      'Gestion des employes, presences, paiements et generation de bulletins de salaire dans une interface de suivi metier complete.',
    technologies: ['Node.js', 'TypeScript', 'React', 'Prisma', 'PostgreSQL'],
    link: 'https://github.com/Papa-Sidy-Fall/Gestion-salariale',
    linkType: 'github',
    icon: 'ri-wallet-3-line',
  },
  {
    id: 4,
    title: 'OmPay',
    category: 'Paiement mobile',
    description:
      "Systeme de paiement mobile avec gestion de comptes, verification OTP par SMS, depots, transferts, paiements marchands et historique des transactions.",
    technologies: ['Flutter', 'Laravel', 'PHP', 'MySQL'],
    link: 'https://github.com/Papa-Sidy-Fall/ompay-api-avec-dart',
    linkType: 'github',
    icon: 'ri-smartphone-line',
  },
  {
    id: 5,
    title: 'Location de Maison',
    category: 'Plateforme immobiliere',
    description:
      'Plateforme de location de maisons avec recherche, publication d annonces, demandes de visite, messagerie et tableau de bord pour les utilisateurs.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Prisma', 'MySQL'],
    link: 'https://github.com/Papa-Sidy-Fall/frontendLocationDeMaison',
    linkType: 'github',
    icon: 'ri-home-5-line',
  },
  {
    id: 6,
    title: 'Photol Diaye',
    category: 'Marketplace web',
    description:
      'Marketplace permettant aux vendeurs de publier des produits avec images, et aux clients de consulter, liker, promouvoir et discuter via chat integre.',
    technologies: ['Angular', 'Node.js', 'Express', 'Prisma', 'MySQL'],
    link: 'https://github.com/Papa-Sidy-Fall/photol-diaye',
    linkType: 'github',
    icon: 'ri-store-2-line',
  },
  {
    id: 7,
    title: 'Gestion des Taches',
    category: 'Application full-stack de productivite',
    description:
      'Application de gestion des taches avec authentification, upload d images et d audios, notifications temps reel et workflow automatique.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Prisma', 'MySQL'],
    link: 'https://github.com/Papa-Sidy-Fall/projet-todo-avecAPIFRONT',
    linkType: 'github',
    icon: 'ri-checkbox-multiple-line',
  },
  {
    id: 8,
    title: 'GP du Monde',
    category: 'Gestion de cargaisons',
    description:
      'Plateforme logistique pour la creation, le suivi et la gestion de cargaisons maritimes, aeriennes et routieres avec monitoring des colis et clients.',
    technologies: ['PHP', 'TypeScript', 'JavaScript', 'MySQL'],
    link: 'https://github.com/Papa-Sidy-Fall/GP-du-Monde',
    linkType: 'github',
    icon: 'ri-truck-line',
  },
  {
    id: 9,
    title: 'SunuWhats',
    category: 'Messagerie instantanee',
    description:
      "Application de messagerie inspiree de WhatsApp avec gestion de contacts et groupes, echanges texte, audio, images et videos.",
    technologies: ['JavaScript', 'Vite', 'Tailwind CSS', 'JSON Server'],
    link: 'https://github.com/Papa-Sidy-Fall/SunuWhats',
    linkType: 'github',
    icon: 'ri-chat-3-line',
  },
  {
    id: 10,
    title: 'MAXITSA',
    category: 'Plateforme bancaire web',
    description:
      'Application bancaire pour la gestion de comptes, la consultation des transactions avec filtres et la recherche de comptes par numero de telephone.',
    technologies: ['PHP', 'PostgreSQL'],
    link: 'https://github.com/Papa-Sidy-Fall/MAXITSA',
    linkType: 'github',
    icon: 'ri-bank-line',
  },
  {
    id: 11,
    title: 'API Bancaire',
    category: 'API REST Laravel',
    description:
      'API REST pour la gestion de comptes bancaires avec authentification, filtrage, pagination, cache et gestion des comptes epargne ou cheque.',
    technologies: ['Laravel', 'PHP 8.1', 'MySQL'],
    link: 'https://github.com/Papa-Sidy-Fall/api-bancaire',
    linkType: 'github',
    icon: 'ri-code-box-line',
  },
  {
    id: 12,
    title: 'Gestion des Apprenants',
    category: 'Plateforme de suivi',
    description:
      "Plateforme de gestion d apprenants avec authentification multi-roles, suivi, tri et controle d acces pour admin, formateur et apprenant.",
    technologies: ['PHP', 'MySQL'],
    link: 'https://github.com/Papa-Sidy-Fall/ges_apprenant',
    linkType: 'github',
    icon: 'ri-graduation-cap-line',
  },
];

export const profileMetrics = [
  { value: '12+', label: 'projets presentes' },
  { value: '15+', label: 'technologies pratiquees' },
  { value: 'M2', label: 'full-stack en cours' },
];

export const educationHighlights = [
  {
    title: 'Master 2 Full-Stack',
    description: "2025-2026, Conception et Developpement d Applications Web et Mobile Full-Stack a l Universite Numerique Cheikh Amidou Kane.",
  },
  {
    title: 'ODC Sonatel',
    description: 'Alumni Orange Digital Center / Sonatel Academie en developpement web et mobile full-stack.',
  },
  {
    title: 'Licence Informatique',
    description: "Developpement d Application Web, Mobile et Gaming a l Universite Numerique Cheikh Amidou Kane.",
  },
];

export const certifications = [
  'Getting Started with Azure DevOps Boards',
  'Bonnes pratiques DevOps et integration continue',
  'UX/UI Design et rigueur produit',
];

export const languages = ['Francais courant', 'Anglais intermediaire', 'Wolof langue maternelle'];
