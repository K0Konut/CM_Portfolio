import type { Project } from '@/shared/types/project'

export const projects: Project[] = [
  {
    id: 'koflix',
    slug: 'koflix',
    title: 'KoFlix',
    subtitle: 'Une plateforme de streaming fictive au style terminal / hacking.',
    shortDescription:
      'Application web de streaming fictive construite avec Vue.js et Firebase.',
    longDescription:
      'KoFlix explore une interface de streaming sombre, structuree comme un case study court.',
    type: 'full-stack',
    status: 'prototype',
    year: '2025',
    role: [
      "Conception de l'interface",
      'Developpement front-end',
      'Integration Firebase',
      'Responsive design',
    ],
    stack: [
      { name: 'Vue.js', category: 'front-end' },
      { name: 'Firebase', category: 'back-end' },
      { name: 'Tailwind CSS', category: 'front-end' },
    ],
    tags: ['Full-stack', 'Creative UI', 'Firebase'],
    thumbnail: '',
    coverImage: '',
    context:
      "KoFlix est ne de l'envie de creer une interface de streaming fictive avec une direction artistique forte, inspiree des interfaces terminal.",
    objectives: [
      'Creer une interface dynamique et responsive.',
      'Structurer les contenus avec Firebase.',
      'Construire une base maintenable et evolutive.',
    ],
    features: [
      'Grille de films et series',
      'Page detail',
      'Page admin',
      'Gestion des contenus',
      'Responsive design',
    ],
    links: {
      demo: '#',
      github: '#',
    },
    isFeatured: true,
    order: 1,
  },
  {
    id: 'mandolina',
    slug: 'mandolina',
    title: 'Mandolina',
    subtitle: 'Portfolio artistique pense pour un univers visuel clair.',
    shortDescription:
      'Portfolio artistique pense pour presenter un univers visuel clair, sensible et professionnel.',
    longDescription:
      'Mandolina met en avant une direction visuelle editoriale et une structure simple.',
    type: 'front-end',
    status: 'finished',
    year: '2026',
    role: ['Interface', 'Integration responsive', 'Direction UI'],
    stack: [
      { name: 'Vue.js', category: 'front-end' },
      { name: 'TypeScript', category: 'front-end' },
      { name: 'Figma', category: 'design' },
    ],
    tags: ['Front-end', 'UI'],
    thumbnail: '',
    coverImage: '',
    context: 'Un portfolio artistique concu pour garder une lecture calme et professionnelle.',
    objectives: ['Presenter les contenus clairement.', 'Construire une interface responsive.'],
    features: ['Pages editoriales', 'Responsive design', 'Navigation simple'],
    links: {
      demo: '#',
      github: '#',
    },
    isFeatured: true,
    order: 2,
  },
  {
    id: 'tablatures',
    slug: 'tablatures',
    title: 'Tablatures',
    subtitle: 'Application multi-instruments pour organiser des tablatures.',
    shortDescription:
      'Application multi-instruments pensee pour organiser et consulter des tablatures simplement.',
    longDescription:
      'Tablatures structure une experience utilitaire autour de contenus musicaux.',
    type: 'creative',
    status: 'finished',
    year: '2025',
    role: ['Conception UI', 'Integration front-end', 'Organisation des donnees'],
    stack: [
      { name: 'Vue.js', category: 'front-end' },
      { name: 'TypeScript', category: 'front-end' },
      { name: 'Figma', category: 'design' },
    ],
    tags: ['Creative', 'Front-end'],
    thumbnail: '',
    coverImage: '',
    context: 'Une application personnelle pour rendre la consultation de tablatures plus claire.',
    objectives: ['Organiser les contenus.', 'Creer une interface lisible.'],
    features: ['Liste de morceaux', 'Consultation rapide', 'Interface responsive'],
    links: {
      demo: '#',
      github: '#',
    },
    isFeatured: true,
    order: 3,
  },
]

export const featuredProjects = projects
  .filter((project) => project.isFeatured)
  .sort((a, b) => a.order - b.order)

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
