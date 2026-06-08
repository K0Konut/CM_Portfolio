# Content Architecture Document — Portfolio Costa Maskulov

**Version :** V1 — cadrage contenu  
**Projet :** Portfolio développeur full-stack  
**Territoire :** Creative Full-Stack Playground  
**Objectif :** Définir précisément les contenus à prévoir dans le portfolio avant de passer au design system et aux maquettes.

## 1. Objectif du document

Ce document sert à organiser le contenu du portfolio.

Il permet de cadrer :

* les textes à prévoir ;
* les sections de chaque page ;
* les informations nécessaires pour chaque projet ;
* les données à stocker dans les mocks ;
* les contenus prioritaires pour la V1 ;
* la façon de présenter ton profil, ton parcours et tes compétences ;
* la future structure des données si on migre plus tard vers un backend.

L'objectif est simple :

> Ne pas créer de pages vides ou jolies uniquement visuellement, mais construire une vraie narration autour de ton profil et de tes projets.

---

## 2. Rappel du positionnement

Le portfolio doit transmettre cette idée :

> Costa est un développeur créatif, sérieux techniquement, capable de faire des interfaces modernes et originales.

La phrase manifeste validée :

> Développeur full-stack, je transforme des idées en interfaces vivantes, créatives et maintenables.

Le contenu doit donc toujours équilibrer :

* créativité ;
* technique ;
* clarté ;
* personnalité ;
* professionnalisme.

---

## 3. Ton éditorial

Le ton du portfolio doit être :

* humain ;
* clair ;
* professionnel ;
* créatif ;
* direct ;
* accessible.

On évite :

* trop corporate ;
* trop scolaire ;
* trop arrogant ;
* trop vague ;
* trop long.

### Exemple de mauvais ton

> Passionné par l'informatique depuis toujours, je suis motivé et dynamique.

Trop générique.

### Exemple de bon ton

> J'aime créer des interfaces qui ont du caractère, avec une structure propre derrière.

Plus personnel, plus direct, plus aligné avec ton territoire.

---

## 4. Architecture globale du contenu

Le site est organisé autour de 5 pages principales :

* Accueil
* Projets
* Détail projet
* À propos
* Contact

Chaque page a un rôle précis.

### Accueil

Faire comprendre ton univers rapidement.

### Projets

Prouver ton niveau avec des cas concrets.

### Détail projet

Expliquer ta démarche et tes choix techniques.

### À propos

Présenter ton parcours, ta personnalité et ta méthode.

### Contact

Faciliter la prise de contact.

---

## 5. Page Accueil — contenu détaillé

### Objectif de la page

La page d'accueil doit répondre en quelques secondes à ces questions :

* Qui es-tu ?
* Que fais-tu ?
* Pourquoi ton portfolio est différent ?
* Où voir tes projets ?
* Comment te contacter ?

### Structure de contenu

1. Hero manifeste
2. Projets mis en avant
3. Stack / compétences
4. Méthode / approche
5. Mini à propos
6. Contact CTA

### 5.1 Hero manifeste

#### Contenu nécessaire

* nom ;
* rôle ;
* phrase manifeste ;
* courte description ;
* CTA principal ;
* CTA secondaire ;
* élément graphique / badge.

#### Texte recommandé

```txt
Costa Maskulov
Développeur full-stack

Je transforme des idées en interfaces vivantes,
créatives et maintenables.
```

#### Description courte possible

> Je conçois et développe des expériences web modernes, avec une attention particulière portée à l'interface, à l'interaction et à la structure du code.

#### CTA principal

* Voir mes projets

#### CTA secondaire

* Me contacter

Dans la V1, le hero sert à orienter rapidement vers :

* la preuve : tes projets ;
* l'action : te contacter.

Le CV pourra revenir plus tard dans la page À propos ou Contact, mais pas comme CTA du hero en V1.

#### Badges possibles

* Full-stack developer
* Creative web interfaces
* Vue.js / Node.js
* Disponible pour une alternance

Ces badges présentent l'axe actuel sans afficher trop de technologies dès le hero.

### 5.2 Projets mis en avant

#### Objectif

Montrer rapidement tes meilleurs projets.

#### Nombre recommandé

* 3 projets en V1
* 4 projets maximum

Il vaut mieux afficher 3 projets solides que 8 projets peu détaillés.

#### Contenu pour chaque projet

* titre ;
* type de projet ;
* description courte ;
* stack principale ;
* statut ;
* année ;
* lien vers détail ;
* image ou visuel.

#### Exemple

```txt
KoFlix
Application de streaming fictive

Une interface de streaming au style terminal / hacking, construite avec Vue.js et Firebase.

Stack : Vue.js, Firebase, Tailwind CSS
Type : Application web
Statut : Projet personnel
Année : 2025
```

#### Microcopy de section

> Quelques projets où j'explore le développement web, l'interface et la structure technique.

Ou plus court :

> Des projets pensés comme des expériences à explorer.

### 5.3 Stack / compétences

#### Objectif

Donner une vision rapide de tes compétences.

#### Catégories recommandées

* Front-end
* Back-end
* Base de données
* Design / UI
* Outils
* Méthodes

#### Contenu possible

**Front-end**

Vue.js, React, JavaScript, TypeScript, HTML, CSS, Tailwind CSS

**Back-end**

Node.js, Express

**Base de données / services**

Firebase, MongoDB

**Design / UI**

Figma, design system, responsive design, UI créative

**Outils**

GitHub, VSCode, Trello, Codex

**Méthodes**

Agile, Design Sprint, architecture modulaire

#### Texte de section possible

> J'utilise une stack orientée web moderne, avec une attention particulière portée à la modularité, au responsive et à l'expérience utilisateur.

### 5.4 Méthode / approche

#### Objectif

Montrer ta manière de travailler.

#### Structure recommandée

1. Comprendre
2. Structurer
3. Designer
4. Développer
5. Améliorer

#### Texte possible

> Je pense mes projets comme des systèmes complets : une idée claire, une interface expressive, des composants réutilisables et une base technique capable d'évoluer.

#### Étapes détaillées

**1. Comprendre l'idée**

Identifier le besoin, le contexte et l'objectif du projet.

**2. Structurer l'expérience**

Organiser les pages, les parcours et les informations importantes.

**3. Créer une interface claire**

Construire une direction visuelle cohérente et lisible.

**4. Développer une base maintenable**

Découper le projet en composants, données et modules propres.

**5. Tester et améliorer**

Ajuster l'expérience, corriger les problèmes et améliorer les détails.

### 5.5 Mini à propos

#### Objectif

Humaniser ton profil sans remplacer la page À propos.

#### Texte possible

> Je suis Costa Maskulov, développeur full-stack en formation d'ingénierie informatique. J'aime construire des interfaces modernes, créatives et utiles, avec une vraie attention portée à la structure, au détail et à l'expérience utilisateur.

CTA :

* En savoir plus

### 5.6 Contact CTA

#### Objectif

Créer une sortie claire vers le contact.

#### Texte possible

> Tu veux discuter d'un projet, d'une alternance ou d'une opportunité ? Échangeons.

CTA :

* Me contacter
* Voir mon GitHub
* Télécharger mon CV

---

## 6. Page Projets — contenu détaillé

### Objectif de la page

La page Projets doit être la page de preuve.

Elle doit montrer :

* ce que tu as construit ;
* avec quelles technologies ;
* pourquoi ces projets sont intéressants ;
* ce que chaque projet démontre de ton niveau.

### Structure de contenu

1. Titre de page
2. Introduction
3. Filtres simples
4. Grille de projets
5. CTA final

### 6.1 Titre de page

```txt
Mes projets
```

Alternative plus expressive :

```txt
Projets, interfaces & expérimentations
```

#### Introduction possible

> Une sélection de projets web, applications et interfaces créatives où j'explore le développement full-stack, la direction d'interface et les architectures modulaires.

### 6.2 Filtres

Pour la V1, il faut rester simple.

Filtres recommandés :

* Tous
* Front-end
* Full-stack
* Creative

Plus tard, on pourra ajouter :

* Vue.js
* React
* Firebase
* Node.js
* UI/UX

### 6.3 Card projet — contenu standard

Le rôle principal de la card projet est de faire entrer dans le projet.

La card doit mener vers la page détail associée :

```txt
/projets/:slug
```

Chaque card projet doit contenir :

* titre ;
* slug ;
* description courte ;
* type ;
* stack principale ;
* année ;
* statut ;
* image ;
* tags ;
* lien vers détail projet.

#### Exemple de card

```txt
Titre : KoFlix
Type : Application web
Description : Une plateforme de streaming fictive avec une interface sombre inspirée des univers terminal / hacking.
Stack : Vue.js, Firebase, Tailwind CSS
Année : 2025
Statut : Projet personnel
Tags : Full-stack, Creative UI, Firebase
CTA : Voir le projet
Destination : /projets/koflix
```

#### CTA de la card projet

CTA principal recommandé :

* Voir le projet

Variante plus expressive :

* Explorer le projet

Pour rester clair et professionnel, la formulation retenue pour la V1 est :

> Voir le projet

Le lien GitHub ou la démo peuvent exister dans les données, mais ils ne doivent pas être le CTA principal de la card.

#### Comportement UX de la card

La card peut être entièrement cliquable tout en conservant un bouton visible à l'intérieur :

> Voir le projet

L'utilisateur peut donc accéder à la page détail :

* en cliquant sur toute la card ;
* en cliquant sur le bouton « Voir le projet ».

Ce comportement rend l'action plus confortable et plus évidente.

#### Règle de navigation validée

Ancienne logique :

```txt
Card projet → GitHub / Contact / Démo
```

Nouvelle logique :

```txt
Card projet → Page détail projet → GitHub / Démo / Projet suivant
```

La card doit mener vers la Partie 7 — Page Détail Projet. Le visiteur découvre ainsi la démarche et les choix du projet avant d'accéder aux liens externes.

### 6.4 CTA final

#### Texte possible

> Tu veux voir comment je structure un projet ou discuter d'une opportunité ?

CTA :

* Voir le projet

---

## 7. Page Détail Projet — contenu détaillé

### Objectif de la page

La page détail projet doit expliquer ton travail en profondeur.

Elle ne doit pas seulement montrer des captures. Elle doit raconter :

* le contexte ;
* le problème ;
* la solution ;
* tes choix ;
* ta stack ;
* tes difficultés ;
* ce que tu as appris.

### Structure recommandée

1. Hero projet
2. Métadonnées
3. Contexte
4. Objectifs
5. Rôle personnel
6. Fonctionnalités
7. Stack technique
8. Captures / galerie
9. Choix techniques
10. Difficultés et solutions
11. Apprentissages
12. Liens
13. Projet suivant

### 7.1 Hero projet

#### Contenu nécessaire

* nom du projet ;
* sous-titre ;
* image principale ;
* type de projet ;
* année ;
* statut.

#### Exemple

```txt
KoFlix

Une plateforme de streaming fictive avec une interface sombre inspirée des univers terminal / hacking.
```

### 7.2 Métadonnées projet

Bloc important pour les recruteurs.

```txt
Type : Application web
Rôle : Développement front-end / back-end
Stack : Vue.js, Firebase, Tailwind CSS
Année : 2025
Statut : Prototype
Liens : GitHub / Démo
```

### 7.3 Contexte

#### Question à laquelle répondre

Pourquoi ce projet existe ?

Exemple :

> KoFlix est un projet personnel imaginé pour explorer la création d'une interface de streaming moderne, avec une gestion de contenus via Firebase et une direction artistique inspirée des interfaces terminal.

### 7.4 Objectifs

#### Question

Qu'est-ce que tu voulais construire ou apprendre ?

Exemple :

> L'objectif était de créer une interface responsive et dynamique, capable d'afficher des contenus depuis une base Firebase, tout en conservant une structure claire et maintenable.

### 7.5 Rôle personnel

Contenu possible :

* conception de l'interface ;
* développement front-end ;
* développement back-end léger ;
* intégration Firebase ;
* création des composants ;
* responsive design ;
* organisation des données.

### 7.6 Fonctionnalités principales

Exemple :

* affichage d'une grille de films et séries ;
* page détail d'un contenu ;
* page admin pour ajouter des contenus ;
* connexion à Firebase ;
* header de navigation ;
* design responsive ;
* gestion des métadonnées.

### 7.7 Stack technique

Format conseillé :

1. Technologie
2. Rôle dans le projet
3. Pourquoi ce choix

Exemple :

**Vue.js**

Utilisé pour construire l'interface en composants.

**Firebase**

Utilisé pour gérer les données et préparer une logique d'administration.

**Tailwind CSS**

Utilisé pour créer rapidement une interface responsive et personnalisée.

### 7.8 Captures / galerie

Contenu à prévoir :

* capture desktop principale ;
* capture mobile ;
* zoom sur une card ou un composant ;
* capture d'une page détail ;
* capture admin si le projet en a une.

Chaque image peut avoir une légende courte.

Exemple :

> Page d'accueil de KoFlix avec grille de contenus et direction artistique sombre.

### 7.9 Choix techniques

#### Objectif

Montrer que tu réfléchis à l'architecture.

Sujets possibles :

* organisation des composants ;
* structure des routes ;
* gestion des données ;
* séparation des responsabilités ;
* responsive design ;
* gestion des mocks ;
* préparation vers un backend.

Exemple :

> J'ai séparé les données des composants visuels afin de pouvoir faire évoluer le projet plus facilement. Les contenus sont d'abord gérés sous forme de mocks, avec une structure pensée pour une future migration vers Firebase.

### 7.10 Difficultés et solutions

Format recommandé :

1. Problème
2. Solution
3. Ce que ça m'a appris

Exemple :

**Problème :**  
Structurer les données pour permettre l'ajout de nouveaux contenus facilement.

**Solution :**  
Créer un format de données stable avec des champs normalisés.

**Apprentissage :**  
Penser la structure des données dès le départ facilite la maintenance et l'évolution du projet.

### 7.11 Apprentissages

Exemple :

> Ce projet m'a permis de mieux comprendre la relation entre architecture de composants, données et interface utilisateur. Il m'a aussi aidé à travailler une direction artistique plus marquée tout en gardant une structure lisible.

### 7.12 Liens

Actions possibles :

* Voir la démo
* Voir le code
* Retour aux projets
* Projet suivant

---

## 8. Page À propos — contenu détaillé

### Objectif de la page

La page À propos doit montrer ton profil humain et professionnel.

Elle doit répondre à :

* Qui es-tu ?
* Quel est ton parcours ?
* Comment travailles-tu ?
* Qu'est-ce qui t'intéresse dans le développement ?
* Qu'est-ce que tu recherches ?

### Structure recommandée

1. Intro personnelle
2. Parcours
3. Ce que j'aime construire
4. Compétences détaillées
5. Méthode de travail
6. Outils
7. CV / contact

### 8.1 Intro personnelle

Texte possible :

> Je suis Costa Maskulov, développeur full-stack en formation d'ingénierie informatique. J'aime créer des interfaces qui ont du caractère, avec une structure propre derrière.

Version plus complète :

> Mon objectif est de construire des expériences web modernes, utiles et mémorables, en combinant développement front-end, logique back-end et sensibilité UI/UX.

### 8.2 Parcours

Contenu à prévoir :

* Bac+3 en informatique ;
* passage en Bac+4 ingénierie informatique ;
* recherche d'alternance ;
* projets personnels ;
* projets scolaires ;
* expériences techniques.

Format possible :

```txt
2024 — Projets web et électroniques
2025 — Développement Vue.js, Node.js, Firebase
2026 — Portfolio personnel et recherche d'alternance
```

À préciser plus tard avec tes vraies dates.

### 8.3 Ce que j'aime construire

Texte possible :

> J'aime les interfaces modernes, les systèmes modulaires, les animations utiles et les projets qui mélangent technique, créativité et expérience utilisateur.

### 8.4 Compétences détaillées

Catégories :

* Front-end
* Back-end
* UI / Design
* Outils
* Méthodes

Contenu :

**Front-end**

Vue.js, React, JavaScript, TypeScript, HTML, CSS, Tailwind CSS

**Back-end**

Node.js, Express, Firebase

**Base de données**

MongoDB, Firestore

**UI / Design**

Figma, design system, responsive design, prototypage

**Outils**

GitHub, VSCode, Trello, Codex

**Méthodes**

Agile, Design Sprint, architecture modulaire

### 8.5 Méthode de travail

Texte possible :

> J'aime commencer par comprendre le besoin, puis organiser les pages, les composants et les données avant de développer. Cette approche me permet de créer des projets plus clairs, plus maintenables et plus faciles à faire évoluer.

### 8.6 Outils

Cette section peut être visuelle.

* VSCode
* GitHub
* Figma
* Trello
* Firebase
* MongoDB
* Codex

### 8.7 CV / contact

CTA :

* Télécharger mon CV
* Voir mes projets
* Me contacter

---

## 9. Page Contact — contenu détaillé

### Objectif

Permettre une prise de contact rapide.

La page doit être simple, directe et humaine.

### Structure recommandée

1. Titre
2. Message court
3. Moyens de contact
4. Réseaux
5. CV

### Texte possible

> Tu veux discuter d'une alternance, d'un projet ou simplement échanger ?
>
> Je suis ouvert aux opportunités et toujours partant pour construire des interfaces utiles, créatives et bien pensées.

### Moyens de contact

* Email
* LinkedIn
* GitHub
* CV

### CTA

* M'envoyer un mail
* Voir mon LinkedIn
* Voir mon GitHub
* Télécharger mon CV

---

## 10. Modèle de données pour les projets

Ce modèle servira pour les mocks au début, puis pourra être adapté plus tard à Firebase, MongoDB ou un autre backend.

Les liens GitHub, démo et Figma restent dans le modèle complet du projet, mais seront principalement utilisés dans la page détail.

### Structure d'un projet

```ts
export type Project = {
  id: string
  slug: string
  title: string
  subtitle: string
  shortDescription: string
  longDescription: string

  type: ProjectType
  status: ProjectStatus
  year: string

  role: string[]
  stack: StackItem[]
  tags: string[]

  thumbnail: string
  coverImage: string
  gallery: ProjectImage[]

  context: string
  objectives: string[]
  features: string[]
  technicalChoices: TechnicalChoice[]
  challenges: ProjectChallenge[]
  learnings: string[]

  links: ProjectLinks

  isFeatured: boolean
  order: number
}
```

### Types associés

```ts
export type ProjectType =
  | 'front-end'
  | 'full-stack'
  | 'ui-ux'
  | 'creative'
  | 'school'
  | 'personal'

export type ProjectStatus =
  | 'finished'
  | 'in-progress'
  | 'prototype'
  | 'concept'

export type StackItem = {
  name: string
  category: 'front-end' | 'back-end' | 'database' | 'design' | 'tool'
  description?: string
}

export type ProjectImage = {
  src: string
  alt: string
  caption?: string
}

export type TechnicalChoice = {
  title: string
  description: string
}

export type ProjectChallenge = {
  problem: string
  solution: string
  learning?: string
}

export type ProjectLinks = {
  demo?: string
  github?: string
  figma?: string
}
```

### Données utilisées par une card projet

La card utilise principalement un sous-ensemble des données du projet :

```ts
export type ProjectCardData = {
  slug: string
  title: string
  shortDescription: string
  type: ProjectType
  status: ProjectStatus
  year: string
  stack: StackItem[]
  tags: string[]
  thumbnail: string
}
```

La route vers la page détail sera construite avec :

```ts
`/projets/${project.slug}`
```

### Logique projet validée

#### Page Accueil

* affiche 3 projets mis en avant ;
* chaque card mène vers la page détail projet ;
* CTA de la card : Voir le projet.

#### Page Projets

* affiche toutes les cards projets ;
* chaque card mène vers la page détail projet ;
* CTA de la card : Voir le projet.

#### Page Détail Projet

* présente le projet en profondeur ;
* affiche le contexte, les objectifs, le rôle, la stack, les choix techniques et les apprentissages ;
* contient les liens GitHub et démo s'ils sont disponibles.

**Règle validée :**

> La card projet est une porte d'entrée vers le case study, pas une sortie directe vers GitHub ou le contact.

---

## 11. Exemple de mock projet

```ts
export const projects = [
  {
    id: 'koflix',
    slug: 'koflix',
    title: 'KoFlix',
    subtitle: 'Une plateforme de streaming fictive au style terminal / hacking.',
    shortDescription:
      'Application web de streaming fictive construite avec Vue.js et Firebase.',
    longDescription:
      'KoFlix est un projet personnel imaginé pour explorer la création d'une interface de streaming moderne, avec une gestion de contenus via Firebase et une direction artistique sombre et immersive.',

    type: 'full-stack',
    status: 'prototype',
    year: '2025',

    role: [
      'Conception de l'interface',
      'Développement front-end',
      'Intégration Firebase',
      'Responsive design'
    ],

    stack: [
      {
        name: 'Vue.js',
        category: 'front-end',
        description: 'Structure de l'interface en composants.'
      },
      {
        name: 'Firebase',
        category: 'back-end',
        description: 'Gestion des données et préparation de la logique admin.'
      },
      {
        name: 'Tailwind CSS',
        category: 'front-end',
        description: 'Création rapide d'une interface responsive.'
      }
    ],

    tags: ['Full-stack', 'Creative UI', 'Firebase'],

    thumbnail: '/images/projects/koflix-thumbnail.webp',
    coverImage: '/images/projects/koflix-cover.webp',

    gallery: [
      {
        src: '/images/projects/koflix-home.webp',
        alt: 'Page d'accueil du projet KoFlix',
        caption: 'Grille principale des contenus.'
      }
    ],

    context:
      'KoFlix est né de l'envie de créer une interface de streaming fictive avec une direction artistique forte.',

    objectives: [
      'Créer une interface dynamique et responsive.',
      'Structurer les contenus avec Firebase.',
      'Construire une base maintenable et évolutive.'
    ],

    features: [
      'Grille de films et séries',
      'Page détail',
      'Page admin',
      'Gestion des contenus',
      'Responsive design'
    ],

    technicalChoices: [
      {
        title: 'Séparation des données et des composants',
        description:
          'Les contenus sont séparés de l'interface afin de faciliter l'évolution du projet.'
      }
    ],

    challenges: [
      {
        problem:
          'Structurer les données pour pouvoir ajouter facilement de nouveaux contenus.',
        solution:
          'Créer un modèle de données stable avec des champs normalisés.',
        learning:
          'Penser la structure des données dès le départ facilite la maintenance.'
      }
    ],

    learnings: [
      'Mieux organiser une application Vue.js connectée à Firebase.',
      'Construire une interface créative sans perdre la lisibilité.',
      'Préparer une base de données évolutive.'
    ],

    links: {
      demo: '',
      github: ''
    },

    isFeatured: true,
    order: 1
  }
]
```

---

## 12. Données nécessaires pour les compétences

On peut aussi préparer un mock pour les compétences.

```ts
export type Skill = {
  id: string
  name: string
  category: SkillCategory
  level?: 'base' | 'comfortable' | 'advanced'
  isFeatured?: boolean
}

export type SkillCategory =
  | 'front-end'
  | 'back-end'
  | 'database'
  | 'design'
  | 'tool'
  | 'method'
```

Exemple :

```ts
export const skills = [
  {
    id: 'vue',
    name: 'Vue.js',
    category: 'front-end',
    level: 'comfortable',
    isFeatured: true
  },
  {
    id: 'react',
    name: 'React',
    category: 'front-end',
    level: 'comfortable',
    isFeatured: true
  },
  {
    id: 'node',
    name: 'Node.js',
    category: 'back-end',
    level: 'comfortable',
    isFeatured: true
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'design',
    level: 'comfortable',
    isFeatured: true
  }
]
```

---

## 13. Données nécessaires pour le parcours

```ts
export type TimelineItem = {
  id: string
  year: string
  title: string
  description: string
  type: 'education' | 'project' | 'experience'
}
```

Exemple :

```ts
export const timeline = [
  {
    id: 'bac3',
    year: '2025',
    title: 'Bac+3 en informatique',
    description:
      'Formation orientée développement, projets web, électronique et méthodes de projet.',
    type: 'education'
  },
  {
    id: 'bac4',
    year: '2026',
    title: 'Bac+4 ingénierie informatique',
    description:
      'Poursuite vers une formation d'ingénierie informatique avec recherche d'alternance.',
    type: 'education'
  }
]
```

---

## 14. Priorité de contenu pour la V1

### Indispensable

* texte du hero ;
* 3 projets bien présentés ;
* page détail complète pour au moins 1 projet ;
* liste des compétences ;
* page À propos claire ;
* contact fonctionnel ;
* liens GitHub / LinkedIn / CV.

### Important mais secondaire

* filtres projets ;
* timeline complète ;
* galeries détaillées ;
* descriptions longues pour tous les projets ;
* animations éditoriales avancées.

### Plus tard

* blog ;
* CMS ;
* backend réel ;
* admin ;
* mode dark/light ;
* système de tags avancé ;
* recherche de projets.

---

## 15. Liste des projets à préparer

Pour avancer, il faudra choisir les projets de la V1.

D'après ce que tu as déjà fait, on peut probablement partir sur :

* KoFlix
* Portfolio graphiste / Mandolina
* Application tablatures multi-instruments
* Bot Discord
* Radar de recul électronique
* Hop'Up'Op / Design Sprint
* Portfolio personnel

Pour la V1, je recommande de mettre en avant seulement 3 projets :

1. KoFlix
2. Portfolio graphiste / Mandolina
3. Application tablatures multi-instruments

Et de garder les autres dans la page Projets ou pour plus tard.

---

## 16. Structure finale du contenu V1

### Accueil

* Hero manifeste
* 3 projets mis en avant
* Stack principale
* Méthode
* Mini à propos
* CTA contact

### Projets

* Intro
* Filtres simples
* Toutes les cards projets
* CTA contact

### Détail projet

* Hero
* Métadonnées
* Contexte
* Objectifs
* Rôle
* Fonctionnalités
* Stack
* Galerie
* Choix techniques
* Difficultés
* Apprentissages
* Liens

### À propos

* Intro
* Parcours
* Ce que j'aime construire
* Compétences
* Méthode
* Outils
* CV / contact

### Contact

* Message court
* Email
* LinkedIn
* GitHub
* CV

---

## 17. Résumé

Ce document pose la base de contenu du portfolio.

La direction est maintenant claire :

> Le site doit raconter ton profil comme une expérience créative, tout en prouvant concrètement tes compétences techniques à travers tes projets.

La prochaine étape logique sera de faire la fiche détaillée de tes projets, en commençant par les 3 projets principaux de la V1 :

* KoFlix
* Portfolio graphiste / Mandolina
* Application tablatures multi-instruments
