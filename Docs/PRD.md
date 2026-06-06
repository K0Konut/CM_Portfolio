# PRD — Portfolio Costa Maskulov

## 1. Vision du projet

Le projet consiste à créer un portfolio personnel pour **Costa Maskulov**, développeur full-stack, avec une direction artistique forte.

Le portfolio doit servir à présenter :

* mon profil de développeur
* mes projets techniques
* mes compétences
* ma personnalité visuelle
* un moyen simple de me contacter

Le site doit être créatif, moderne, dynamique et mémorable, sans tomber dans un design trop générique.

---

## 2. Objectifs principaux

Le portfolio doit permettre de :

* présenter clairement qui je suis
* montrer mes projets de manière visuelle et interactive
* mettre en avant mes compétences techniques
* donner une impression professionnelle mais créative
* être facilement maintenable grâce à une architecture modulaire
* pouvoir évoluer avec de nouveaux projets, de nouvelles pages et de nouveaux composants

---

## 3. Cible utilisateur

Le site est destiné principalement à :

* des recruteurs
* des entreprises recherchant une alternance ou un développeur junior
* des développeurs ou designers qui consultent mon travail
* des écoles ou intervenants qui veulent voir mon niveau
* des contacts professionnels

L’utilisateur doit comprendre rapidement :

```txt
Qui je suis
Ce que je sais faire
Quels projets j’ai réalisés
Comment me contacter
```

---

## 4. Identité du portfolio

### Nom du produit

```txt
Costa Maskulov — Portfolio
```

### Positionnement

Portfolio personnel d’un développeur full-stack, conçu pour présenter son profil, ses compétences, ses projets et son univers personnel.

### Ton du site

Le ton doit être :

* professionnel
* direct
* personnel
* accessible
* pas trop institutionnel

Exemple de phrase d’accroche :

```txt
Développeur full-stack qui aime construire des interfaces propres, dynamiques et utiles.
```

Autre possibilité :

```txt
Je conçois et développe des projets web pensés pour être utiles, lisibles et évolutifs.
```

---

## 5. Direction artistique

La direction artistique, le territoire de marque et les principes UX sont définis dans le document [Brand & UX Direction](./Brand-UX-Direction.md).

Ce document fixe le cadre dans lequel seront définis :

* la palette de couleurs
* les typographies
* les composants graphiques
* les animations
* le style exact des sections
* le design system

Les choix visuels détaillés, comme la palette de couleurs et les typographies finales, pourront être complétés pendant la conception du design system.

---

## 6. Architecture du projet

Le projet sera développé avec :

```txt
Vue.js
Vite
TypeScript
```

Architecture modulaire prévue :

```txt
src/
 ├─ Shell/
 │   └─ routing, layout global
 │
 ├─ DS/
 │   └─ design system, composants UI, tokens
 │
 ├─ HE/
 │   └─ header
 │
 ├─ FT/
 │   └─ footer
 │
 ├─ DemAcc/
 │   └─ page d’accueil
 │
 ├─ DemProj/
 │   └─ page projets
 │
 ├─ DemProjDetails/
 │   └─ page détail d’un projet
 │
 ├─ DemAbou/
 │   └─ page à propos
 │
 ├─ DemCont/
 │   └─ page contact
 │
 └─ shared/
     └─ utils, types, data, mocks
```

---

## 7. Pages principales

## 7.1 Page Accueil

Objectif : présenter rapidement mon profil et donner envie de découvrir le reste du portfolio.

Contenu attendu :

* mon nom
* mon rôle : développeur full-stack
* une phrase d’accroche courte
* une présentation rapide de mon profil
* un accès vers mes projets
* un accès vers la page à propos
* un accès vers le contact
* une mise en avant de quelques projets importants
* une mise en avant rapide de mes principales compétences

Critères d’acceptation :

```txt
L’utilisateur comprend rapidement qui je suis.
L’utilisateur peut accéder facilement aux projets.
L’utilisateur peut accéder facilement au contact.
La page ne doit pas être surchargée en contenu.
```

---

## 7.2 Page Projets

Objectif : afficher une liste claire de tous mes projets.

Cette page ne doit pas contenir tous les détails de chaque projet.
Elle sert surtout de point d’entrée pour parcourir les projets et accéder aux pages détaillées.

Chaque projet dans la liste doit afficher au minimum :

* le titre du projet
* une courte description
* une catégorie ou un type de projet
* quelques technologies principales
* un aperçu rapide du projet
* un lien vers la page détail du projet

Exemples de projets possibles :

```txt
Koflix — application de streaming Vue/Firebase
Portfolio Mandolina — portfolio artistique Vue.js
Bot Discord
Radar de recul électronique
Application de tablatures multi-instruments
```

Critères d’acceptation :

```txt
L’utilisateur peut voir rapidement tous les projets disponibles.
Chaque projet est identifiable facilement.
Chaque projet possède un lien vers sa page détaillée.
La page reste lisible même avec beaucoup de projets.
```

---

## 7.3 Page Détail Projet

Objectif : présenter un projet en profondeur.

Cette page doit permettre de comprendre précisément :

* le contexte du projet
* le problème à résoudre
* les objectifs du projet
* mon rôle dans le projet
* les fonctionnalités principales
* la stack technique complète
* les choix techniques
* les difficultés rencontrées
* les solutions mises en place
* les améliorations possibles
* les images ou captures du projet
* les liens utiles

Chaque page détail projet peut contenir :

```txt
Titre du projet
Description courte
Description complète
Contexte
Objectifs
Fonctionnalités
Stack complète
Rôle personnel
Captures d’écran
Lien GitHub
Lien démo
Date ou période
Statut du projet
```

Critères d’acceptation :

```txt
L’utilisateur comprend le projet en profondeur.
La stack technique est clairement visible.
Le rôle personnel est bien expliqué.
Les liens externes sont accessibles si disponibles.
Les images ou captures aident à comprendre le projet.
```

---

## 7.4 Page À propos

Objectif : expliquer mon parcours, mon profil et ma manière de travailler.

Contenu attendu :

* courte présentation personnelle
* formation actuelle
* recherche d’alternance
* compétences principales
* outils utilisés
* méthodes de travail
* expériences ou projets marquants
* objectifs professionnels

Critères d’acceptation :

```txt
Le visiteur comprend mon parcours.
La page reste humaine et pas uniquement technique.
La page donne confiance sur mon profil.
```

---

## 7.5 Page Contact

Objectif : permettre une prise de contact rapide.

Contenu attendu :

* email
* LinkedIn
* GitHub
* bouton pour télécharger le CV
* éventuellement un formulaire de contact

Critères d’acceptation :

```txt
Le contact doit être accessible en moins de 2 clics.
Les liens doivent être visibles et fonctionnels.
Les informations de contact doivent être simples à trouver.
```

---

## 8. Design System

Cette partie sera traitée plus tard dans un document séparé.

Le design system ne sera pas détaillé dans cette première version du PRD.

À définir plus tard :

```txt
Palette de couleurs
Typographies
Composants UI
Boutons
Cartes
Badges
États interactifs
Animations
Règles responsive
Tokens CSS
```

---

## 9. Fonctionnalités attendues

## MVP

La première version doit contenir :

* page d’accueil
* page projets
* page détail projet
* page à propos
* page contact
* navigation fonctionnelle
* responsive desktop/tablette/mobile
* données projets centralisées dans un fichier mock
* structure modulaire propre

## Version avancée

Après le MVP :

* backend pour gérer les projets
* page détail plus enrichie
* filtres par technologie
* filtres par type de projet
* recherche de projet
* formulaire de contact fonctionnel
* téléchargement du CV
* intégration Firebase ou autre backend
* panneau admin pour modifier les projets

---

## 10. Contraintes techniques

Le projet doit respecter :

```txt
Vue.js avec Composition API
Vite comme bundler
TypeScript si possible
Architecture modulaire
Composants réutilisables
Données centralisées
Code maintenable
Responsive design
Accessibilité minimum
Performance correcte
```

À éviter :

```txt
Composants trop gros
CSS non organisé
Données écrites directement dans les composants
Logique métier mélangée avec l’affichage
Architecture difficile à faire évoluer
Pages trop chargées
Navigation confuse
```

---

## 11. Données projet

Pour commencer, les projets seront gérés avec des mocks.

Les données pourront être stockées dans un fichier dédié :

```txt
src/shared/mocks/projects.mock.ts
```

ou :

```txt
src/shared/data/projects.ts
```

Exemple de structure :

```ts
export const projects = [
  {
    id: "koflix",
    slug: "koflix",
    title: "Koflix",
    shortDescription: "Application de streaming développée avec Vue.js et Firebase.",
    fullDescription: "Koflix est une application web permettant d’afficher une liste de films et séries avec une interface inspirée d’un univers terminal/hacking.",
    category: "Web App",
    status: "En cours",
    period: "2025",
    stack: ["Vue.js", "Firebase", "TailwindCSS"],
    mainTechnologies: ["Vue.js", "Firebase"],
    features: [
      "Affichage d’une grille de films",
      "Gestion des métadonnées",
      "Interface responsive",
      "Page admin pour ajouter du contenu"
    ],
    role: "Développement front-end, structure du projet, intégration Firebase.",
    images: [
      "/projects/koflix/preview-1.png",
      "/projects/koflix/preview-2.png"
    ],
    githubUrl: "",
    demoUrl: "",
    featured: true
  }
]
```

À terme, ces mocks seront remplacés par un vrai backend.

Backend possible plus tard :

```txt
Firebase
Supabase
Node.js / Express
MongoDB
Autre solution à définir
```

---

## 12. Expérience utilisateur

Le site doit être :

* simple à comprendre
* rapide à parcourir
* agréable à explorer
* clair dans sa navigation
* accessible pour un recruteur pressé
* assez complet pour une personne qui veut analyser mes projets en détail

Le but est de garder un équilibre entre :

```txt
clarté + personnalité + professionnalisme
```

---

## 13. Animations

Cette partie sera traitée plus tard.

Pour le moment, le PRD ne définit pas précisément les animations.

À définir dans une étape suivante :

```txt
animations au scroll
transitions entre pages
micro-interactions
animations des cartes projet
apparition des sections
effets visuels spécifiques
```

---

## 14. Responsive

Le site doit être compatible avec :

```txt
Desktop
Laptop
Tablette
Mobile
```

Sur mobile :

* navigation simplifiée
* contenu lisible
* cartes empilées
* sections bien espacées
* textes adaptés aux petits écrans
* aucun scroll horizontal
* boutons et liens facilement cliquables

Critères d’acceptation :

```txt
Le site reste utilisable sur mobile.
Les projets restent lisibles sur petit écran.
Le contact reste facilement accessible.
La navigation ne bloque pas l’expérience utilisateur.
```

---

## 15. Accessibilité

Minimum attendu :

* textes lisibles
* contrastes suffisants
* navigation clavier correcte
* alt sur les images importantes
* boutons avec vrais labels
* structure HTML propre
* titres hiérarchisés
* liens explicites
* formulaires correctement labellisés si formulaire il y a

Critères d’acceptation :

```txt
Le site peut être parcouru au clavier.
Les images importantes ont une alternative textuelle.
Les titres suivent une hiérarchie logique.
Les boutons et liens ont un intitulé compréhensible.
```

---

## 16. Critères de réussite

Le portfolio est réussi si :

```txt
Le visiteur comprend rapidement mon profil.
Les projets sont bien structurés.
Les compétences sont clairement mises en avant.
La navigation est simple.
Le contact est facile à trouver.
Le site est responsive.
Le code est modulaire et facile à maintenir.
Les données projets peuvent évoluer facilement.
Le portfolio peut accueillir de nouvelles pages et de nouveaux projets.
```

---

## 17. Priorisation

## Priorité 1 — Cadrage et structure

```txt
Définir les pages principales
Définir les contenus attendus
Définir la structure des données projet
Définir l’architecture du projet
Préparer les mocks de projets
Créer le routing principal
```

## Priorité 2 — MVP fonctionnel

```txt
Créer la page Accueil
Créer la page Projets
Créer la page Détail Projet
Créer la page À propos
Créer la page Contact
Brancher les données mocks
Créer une navigation fonctionnelle
Rendre le site responsive
```

## Priorité 3 — Enrichissement contenu

```txt
Ajouter tous les projets importants
Compléter les descriptions longues
Ajouter les stacks complètes
Ajouter les images des projets
Ajouter les liens GitHub et démo
Ajouter le CV téléchargeable
Améliorer le contenu de la page À propos
```

## Priorité 4 — Design et expérience

Cette partie sera traitée après le cadrage du contenu.

```txt
Définir la direction artistique complète
Créer le design system
Définir les composants UI
Ajouter les animations
Ajouter les transitions
Travailler les interactions
```

## Priorité 5 — Évolution technique

```txt
Remplacer les mocks par un backend
Ajouter un panneau admin
Ajouter des filtres projets
Ajouter une recherche
Ajouter un formulaire de contact fonctionnel
Optimiser les performances
```

---
