# Component Inventory — Portfolio Costa Maskulov

**Version :** V1 — inventaire des composants  
**Projet :** Portfolio développeur full-stack  
**Territoire :** Creative Full-Stack Playground

## 1. Objectif du document

Ce document liste tous les composants nécessaires pour construire le portfolio.

Il sert à cadrer :

* les composants à créer dans Figma ;
* les composants à développer en Vue.js ;
* le rôle de chaque composant ;
* les pages où ils sont utilisés ;
* les variants nécessaires ;
* les états interactifs ;
* la priorité pour la V1.

Ce document ne détaille pas encore les tailles exactes, couleurs, paddings ou animations. Cela viendra dans l'étape suivante : Component Specs.

---

## 2. Rappel des décisions importantes

| Décision | Valeur |
| --- | --- |
| Territoire | Creative Full-Stack Playground |
| Niveau visuel | Créatif assumé mais maîtrisé |
| Direction | Mini studio digital personnel |
| Typographie display | HUMANE |
| Typographie texte / UI | Satoshi |
| Typographie highlight | Fraunces Italic |
| CTA hero | Voir mes projets / Me contacter |
| Badge stack hero | Vue.js / Node.js |
| Custom cursor | Non |
| ProjectCard | Cliquable vers la page détail projet |
| CTA ProjectCard | Voir le projet |

Couleurs principales :

```txt
#4B3CFF
#C7FF00
#FF6BD6
#101113
#F5F1E8
#17105B
```

---

## 3. Familles de composants

Le design system peut être organisé en 8 familles :

1. Structure
2. Navigation
3. Typographie / éditorial
4. Actions
5. Projets
6. Stack / data
7. Décoratif / identité
8. Motion / comportement

---

## 4. Priorité des composants

On utilise 3 niveaux de priorité.

### P1 — Indispensable V1

Composant nécessaire pour construire le portfolio.

### P2 — Important mais non bloquant

Composant utile pour enrichir l'expérience, mais pas vital.

### P3 — Plus tard

Composant à garder pour une version future.

---

## 5. Composants structurels

### 5.1 PageWrapper

| Élément | Détail |
| --- | --- |
| Rôle | Structure globale d'une page |
| Utilisé dans | Toutes les pages |
| Contenu | Header, contenu principal, footer |
| Variants | Default, page sombre, page claire |
| États | Aucun |
| Priorité | P1 |

### 5.2 Section

| Élément | Détail |
| --- | --- |
| Rôle | Encadrer une section de page |
| Utilisé dans | Accueil, Projets, À propos, Contact, Détail projet |
| Contenu | Titre, intro, contenu, CTA éventuel |
| Variants | Light, Dark, Brand Violet, Deep |
| États | Aucun |
| Priorité | P1 |

### 5.3 Container

| Élément | Détail |
| --- | --- |
| Rôle | Gérer la largeur du contenu |
| Utilisé dans | Toutes les pages |
| Contenu | Contenu libre |
| Variants | Small, Medium, Large, Full |
| États | Aucun |
| Priorité | P1 |

### 5.4 Grid

| Élément | Détail |
| --- | --- |
| Rôle | Organiser les cards, blocs et contenus |
| Utilisé dans | Projets, compétences, galerie |
| Contenu | Cards, tags, images, blocs |
| Variants | 1 colonne, 2 colonnes, 3 colonnes, auto-fit |
| États | Responsive |
| Priorité | P1 |

---

## 6. Composants de navigation

### 6.1 Header

| Élément | Détail |
| --- | --- |
| Rôle | Navigation principale du site |
| Utilisé dans | Toutes les pages |
| Contenu | Nom/logo, liens, CTA contact éventuel |
| Variants | Desktop, mobile |
| États | Default, scroll, mobile open |
| Priorité | P1 |

Contenu :

* Costa Maskulov
* Accueil
* Projets
* À propos
* Contact

### 6.2 MobileMenu

| Élément | Détail |
| --- | --- |
| Rôle | Navigation sur mobile |
| Utilisé dans | Header mobile |
| Contenu | Liens de navigation |
| Variants | Overlay, drawer |
| États | Open, closed |
| Priorité | P1 |

### 6.3 Footer

| Élément | Détail |
| --- | --- |
| Rôle | Fin de page, liens secondaires |
| Utilisé dans | Toutes les pages |
| Contenu | Nom, liens, réseaux, mention courte |
| Variants | Simple, avec CTA |
| États | Aucun |
| Priorité | P1 |

Contenu possible :

* Costa Maskulov
* Développeur full-stack
* GitHub
* LinkedIn
* Email

### 6.4 Breadcrumb

| Élément | Détail |
| --- | --- |
| Rôle | Aider à se repérer dans une page détail |
| Utilisé dans | Page Détail Projet |
| Contenu | Projets / Nom du projet |
| Variants | Simple |
| États | Hover, focus |
| Priorité | P2 |

---

## 7. Composants typographiques / éditoriaux

### 7.1 HeroTitle

| Élément | Détail |
| --- | --- |
| Rôle | Titre principal du hero |
| Utilisé dans | Accueil |
| Contenu | Nom, rôle, phrase forte |
| Typo | HUMANE + Satoshi |
| Variants | Home, page title |
| États | Animation d'entrée |
| Priorité | P1 |

### 7.2 SectionTitle

| Élément | Détail |
| --- | --- |
| Rôle | Titre de section |
| Utilisé dans | Toutes les pages |
| Contenu | Titre + texte d'intro optionnel |
| Variants | Default, large, centered, with label |
| États | Scroll reveal |
| Priorité | P1 |

### 7.3 IntroText

| Élément | Détail |
| --- | --- |
| Rôle | Texte d'introduction d'une section ou page |
| Utilisé dans | Accueil, Projets, À propos, Contact |
| Contenu | Paragraphe court |
| Typo | Satoshi |
| Variants | Default, large |
| États | Aucun |
| Priorité | P1 |

### 7.4 HighlightText

| Élément | Détail |
| --- | --- |
| Rôle | Mettre en avant un mot ou une phrase |
| Utilisé dans | Hero, À propos, sections éditoriales |
| Contenu | Mot ou fragment de phrase |
| Typo | Fraunces Italic |
| Variants | Lime, Pink, Cream, Violet |
| États | Aucun |
| Priorité | P1 |

### 7.5 ManifestoBlock

| Élément | Détail |
| --- | --- |
| Rôle | Bloc de texte fort qui résume ta vision |
| Utilisé dans | Accueil, À propos |
| Contenu | Phrase manifeste ou texte éditorial court |
| Variants | Light, dark, violet |
| États | Scroll reveal |
| Priorité | P2 |

---

## 8. Composants d'action

### 8.1 Button

| Élément | Détail |
| --- | --- |
| Rôle | Déclencher une action ou une navigation |
| Utilisé dans | Toutes les pages |
| Contenu | Label, icône optionnelle |
| Variants | Primary, Secondary, Ghost, Icon |
| États | Default, hover, active, focus, disabled |
| Priorité | P1 |

Variants V1 :

| Variant | Direction |
| --- | --- |
| Primary | Fond lime `#C7FF00`, texte noir `#101113` |
| Secondary | Transparent ou crème, bordure visible |
| Ghost | Lien discret avec hover |

### 8.2 TextLink

| Élément | Détail |
| --- | --- |
| Rôle | Lien texte simple |
| Utilisé dans | Footer, page détail, page contact |
| Contenu | Texte + icône externe optionnelle |
| Variants | Default, external |
| États | Default, hover, focus |
| Priorité | P1 |

### 8.3 ContactCTA

| Élément | Détail |
| --- | --- |
| Rôle | Inviter à prendre contact |
| Utilisé dans | Accueil, Projets, À propos, Contact |
| Contenu | Titre, texte, boutons |
| Variants | Compact, full section |
| États | Aucun, hover sur boutons |
| Priorité | P1 |

Contenu possible :

> Tu veux discuter d'un projet, d'une alternance ou d'une opportunité ? Échangeons.

### 8.4 ExternalLinkButton

| Élément | Détail |
| --- | --- |
| Rôle | Lien vers GitHub, démo, LinkedIn |
| Utilisé dans | Détail projet, Contact |
| Contenu | Label + icône |
| Variants | GitHub, Demo, LinkedIn, Email |
| États | Default, hover, focus |
| Priorité | P1 |

---

## 9. Composants projet

### 9.1 ProjectCard

| Élément | Détail |
| --- | --- |
| Rôle | Présenter un projet et mener vers sa page détail |
| Utilisé dans | Accueil, Page Projets |
| Contenu | Image, titre, description, stack, tags, année, statut, CTA |
| Variants | Featured, default, compact |
| États | Default, hover, focus, active |
| Priorité | P1 |

CTA :

> Voir le projet

Destination :

```txt
/projets/:slug
```

Contenu minimum :

* titre ;
* description courte ;
* type ;
* stack principale ;
* année ;
* statut ;
* image ;
* CTA Voir le projet.

### 9.2 ProjectGrid

| Élément | Détail |
| --- | --- |
| Rôle | Afficher plusieurs projets |
| Utilisé dans | Accueil, Page Projets |
| Contenu | Liste de ProjectCard |
| Variants | Featured grid, all projects grid |
| États | Responsive |
| Priorité | P1 |

### 9.3 ProjectHero

| Élément | Détail |
| --- | --- |
| Rôle | Introduire une page projet |
| Utilisé dans | Page Détail Projet |
| Contenu | Titre, sous-titre, image principale, statut, année |
| Variants | Default |
| États | Animation d'entrée |
| Priorité | P1 |

### 9.4 ProjectMeta

| Élément | Détail |
| --- | --- |
| Rôle | Résumer les informations clés d'un projet |
| Utilisé dans | Page Détail Projet |
| Contenu | Type, rôle, stack, année, statut, liens |
| Variants | Horizontal, grid |
| États | Aucun |
| Priorité | P1 |

Contenu :

* type ;
* rôle ;
* stack ;
* année ;
* statut ;
* liens.

### 9.5 ProjectSection

| Élément | Détail |
| --- | --- |
| Rôle | Structurer les sections d'une page détail projet |
| Utilisé dans | Page Détail Projet |
| Contenu | Titre, texte, liste, images |
| Variants | Text, list, split, media |
| États | Scroll reveal |
| Priorité | P1 |

Sections possibles :

* contexte ;
* objectifs ;
* rôle personnel ;
* fonctionnalités ;
* stack technique ;
* choix techniques ;
* difficultés ;
* apprentissages.

### 9.6 ProjectGallery

| Élément | Détail |
| --- | --- |
| Rôle | Afficher les captures du projet |
| Utilisé dans | Page Détail Projet |
| Contenu | Images, légendes |
| Variants | Grid, single image, carousel plus tard |
| États | Hover image optionnel |
| Priorité | P1 |

Pour la V1, je recommande :

* galerie simple en grille ;
* pas de carousel complexe.

### 9.7 ProjectStack

| Élément | Détail |
| --- | --- |
| Rôle | Expliquer la stack utilisée dans un projet |
| Utilisé dans | Page Détail Projet |
| Contenu | Technologie, rôle, description |
| Variants | List, cards |
| États | Aucun |
| Priorité | P1 |

### 9.8 ProjectChallengeBlock

| Élément | Détail |
| --- | --- |
| Rôle | Présenter problème, solution, apprentissage |
| Utilisé dans | Page Détail Projet |
| Contenu | Problème, solution, apprentissage |
| Variants | Default |
| États | Aucun |
| Priorité | P1 |

Format :

1. Problème
2. Solution
3. Ce que ça m'a appris

### 9.9 ProjectNavigation

| Élément | Détail |
| --- | --- |
| Rôle | Naviguer entre les projets |
| Utilisé dans | Bas de Page Détail Projet |
| Contenu | Projet précédent, retour projets, projet suivant |
| Variants | Simple |
| États | Hover, focus |
| Priorité | P2 |

---

## 10. Composants stack / data

### 10.1 StackTag

| Élément | Détail |
| --- | --- |
| Rôle | Afficher une technologie |
| Utilisé dans | Hero, ProjectCard, ProjectMeta, Stack section |
| Contenu | Nom de technologie |
| Variants | Default, small, selected |
| États | Default, hover si interactif |
| Priorité | P1 |

Exemples :

* Vue.js
* Node.js
* Firebase
* MongoDB
* Tailwind CSS

### 10.2 SkillPill

| Élément | Détail |
| --- | --- |
| Rôle | Afficher une compétence |
| Utilisé dans | Accueil, À propos |
| Contenu | Nom, catégorie optionnelle |
| Variants | Front-end, back-end, design, tool, method |
| États | Default, hover |
| Priorité | P1 |

### 10.3 StatusBadge

| Élément | Détail |
| --- | --- |
| Rôle | Afficher l'état d'un projet |
| Utilisé dans | ProjectCard, ProjectMeta |
| Contenu | Prototype, terminé, en cours, personnel |
| Variants | Prototype, finished, in-progress, personal |
| États | Aucun |
| Priorité | P1 |

### 10.4 CategoryFilter

| Élément | Détail |
| --- | --- |
| Rôle | Filtrer les projets |
| Utilisé dans | Page Projets |
| Contenu | Tous, Front-end, Full-stack, Creative |
| Variants | Default, selected |
| États | Default, hover, selected, focus |
| Priorité | P2 |

Pour la V1, c'est utile mais pas obligatoire. On peut faire la page Projets sans filtre au début.

### 10.5 TimelineItem

| Élément | Détail |
| --- | --- |
| Rôle | Présenter une étape du parcours |
| Utilisé dans | Page À propos |
| Contenu | Année, titre, description |
| Variants | Education, project, experience |
| États | Scroll reveal |
| Priorité | P2 |

---

## 11. Composants décoratifs / identité

### 11.1 Sticker

| Élément | Détail |
| --- | --- |
| Rôle | Ajouter une touche playful et mémorable |
| Utilisé dans | Hero, ProjectCard, sections spéciales |
| Contenu | Texte court ou pictogramme |
| Variants | Pink, Lime, Violet, Cream |
| États | Floating léger optionnel |
| Priorité | P2 |

Exemples :

* Creative Web
* Full-stack
* Vue.js / Node.js
* Open to work

### 11.2 Doodle

| Élément | Détail |
| --- | --- |
| Rôle | Ajouter des traits graphiques ou formes dessinées |
| Utilisé dans | Hero, transitions de section, détails visuels |
| Contenu | SVG / forme décorative |
| Variants | Line, arrow, circle, underline |
| États | Aucun ou animation légère |
| Priorité | P2 |

Couleur recommandée :

```txt
#17105B
```

### 11.3 Marquee

| Élément | Détail |
| --- | --- |
| Rôle | Donner du rythme avec une bande textuelle ou stack |
| Utilisé dans | Accueil, Stack section |
| Contenu | Mots-clés, stack, phrase répétée |
| Variants | Text, stack |
| États | Motion continue, pause au hover optionnelle |
| Priorité | P2 |

Exemple :

> Creative Full-Stack Playground · Vue.js · Node.js · Interfaces vivantes ·

### 11.4 FloatingShape

| Élément | Détail |
| --- | --- |
| Rôle | Ajouter des formes graphiques en arrière-plan |
| Utilisé dans | Hero, sections fortes |
| Contenu | Forme SVG ou bloc abstrait |
| Variants | Circle, blob, star, rectangle |
| États | Animation légère |
| Priorité | P3 |

---

## 12. Composants motion / comportement

### 12.1 ScrollReveal

| Élément | Détail |
| --- | --- |
| Rôle | Faire apparaître les éléments au scroll |
| Utilisé dans | Sections, cards, textes, tags |
| Contenu | Slot / wrapper |
| Variants | Fade up, fade, stagger |
| États | Visible, hidden |
| Priorité | P1 |

### 12.2 HoverReveal

| Élément | Détail |
| --- | --- |
| Rôle | Révéler un effet au hover |
| Utilisé dans | ProjectCard, Button, liens |
| Contenu | Élément animé |
| Variants | Color rise, shadow offset, image shift |
| États | Default, hover |
| Priorité | P1 |

### 12.3 PageTransition

| Élément | Détail |
| --- | --- |
| Rôle | Transition douce entre les pages |
| Utilisé dans | Router Vue |
| Contenu | Page |
| Variants | Fade, slide léger |
| États | Enter, leave |
| Priorité | P2 |

### 12.4 AnimatedTitle

| Élément | Détail |
| --- | --- |
| Rôle | Donner de l'impact aux grands titres |
| Utilisé dans | Hero, titres de page |
| Contenu | Texte |
| Variants | Reveal, split line |
| États | Initial, visible |
| Priorité | P2 |

---

## 13. Inventaire par page

### Page Accueil

Composants nécessaires :

* PageWrapper
* Header
* Section
* Container
* HeroTitle
* HighlightText
* Button
* Sticker
* Doodle
* ProjectGrid
* ProjectCard
* StackTag
* SkillPill
* ManifestoBlock
* ContactCTA
* Footer
* ScrollReveal
* HoverReveal

Priorité V1 :

* HeroTitle
* Button
* ProjectCard
* ProjectGrid
* SkillPill
* ContactCTA
* Header
* Footer

### Page Projets

Composants nécessaires :

* PageWrapper
* Header
* Section
* Container
* SectionTitle
* IntroText
* CategoryFilter
* ProjectGrid
* ProjectCard
* ContactCTA
* Footer
* ScrollReveal
* HoverReveal

Priorité V1 :

* SectionTitle
* ProjectGrid
* ProjectCard
* ContactCTA

Le filtre peut être P2.

### Page Détail Projet

Composants nécessaires :

* PageWrapper
* Header
* ProjectHero
* ProjectMeta
* ProjectSection
* ProjectStack
* ProjectGallery
* ProjectChallengeBlock
* ExternalLinkButton
* ProjectNavigation
* ContactCTA
* Footer
* ScrollReveal

Priorité V1 :

* ProjectHero
* ProjectMeta
* ProjectSection
* ProjectStack
* ProjectGallery
* ProjectChallengeBlock
* ExternalLinkButton

### Page À propos

Composants nécessaires :

* PageWrapper
* Header
* Section
* Container
* SectionTitle
* IntroText
* HighlightText
* TimelineItem
* SkillPill
* ManifestoBlock
* ContactCTA
* Footer
* ScrollReveal

Priorité V1 :

* SectionTitle
* IntroText
* SkillPill
* ContactCTA

Timeline peut être P2.

### Page Contact

Composants nécessaires :

* PageWrapper
* Header
* Section
* Container
* SectionTitle
* IntroText
* ContactCTA
* ExternalLinkButton
* TextLink
* Footer

Priorité V1 :

* SectionTitle
* IntroText
* ContactCTA
* ExternalLinkButton

---

## 14. Inventaire P1 — indispensable V1

Voici les composants à créer en priorité absolue :

* PageWrapper
* Section
* Container
* Grid
* Header
* MobileMenu
* Footer
* HeroTitle
* SectionTitle
* IntroText
* HighlightText
* Button
* TextLink
* ContactCTA
* ExternalLinkButton
* ProjectCard
* ProjectGrid
* ProjectHero
* ProjectMeta
* ProjectSection
* ProjectGallery
* ProjectStack
* ProjectChallengeBlock
* StackTag
* SkillPill
* StatusBadge
* ScrollReveal
* HoverReveal

Ce sont les composants nécessaires pour construire une V1 complète et cohérente.

---

## 15. Inventaire P2 — important mais secondaire

* Breadcrumb
* ManifestoBlock
* CategoryFilter
* ProjectNavigation
* TimelineItem
* Sticker
* Doodle
* Marquee
* PageTransition
* AnimatedTitle

Ces composants ajoutent beaucoup de personnalité, mais ne doivent pas bloquer la V1.

---

## 16. Inventaire P3 — plus tard

* FloatingShape
* Carousel avancé
* ThemeSwitch
* AdvancedGallery
* CMSPreviewCard
* BlogCard
* CustomCursor

**Important :** CustomCursor reste exclu de la V1.

---

## 17. Composants à designer dans Figma en premier

Pour commencer efficacement le design kit Figma, je recommande cet ordre :

1. Couleurs / styles texte / tokens
2. Button
3. StackTag
4. StatusBadge
5. SectionTitle
6. ProjectCard
7. ContactCTA
8. Header
9. Footer
10. ProjectMeta
11. ProjectHero
12. ProjectSection

Pourquoi cet ordre ?

Parce que ProjectCard dépend déjà des boutons, tags, badges, typos et couleurs.

---

## 18. Composants à développer en Vue.js en premier

Côté code, je recommande cet ordre :

1. `BaseButton.vue`
2. `StackTag.vue`
3. `StatusBadge.vue`
4. `SectionTitle.vue`
5. `ProjectCard.vue`
6. `ProjectGrid.vue`
7. `Header.vue`
8. `Footer.vue`
9. `ContactCTA.vue`
10. `ProjectMeta.vue`
11. `ProjectHero.vue`
12. `ProjectSection.vue`

---

## 19. Convention de nommage proposée

### Côté Figma

```txt
Button / Primary
Button / Secondary
Button / Ghost

Tag / Stack
Tag / Filter

Badge / Status
Badge / Label

Card / Project / Default
Card / Project / Featured

Section / Title
Section / ContactCTA

Project / Hero
Project / Meta
Project / Gallery
```

### Côté Vue.js

```txt
BaseButton.vue
BaseTextLink.vue
BaseSection.vue
BaseContainer.vue

AppHeader.vue
AppFooter.vue

SectionTitle.vue
HeroTitle.vue
HighlightText.vue

ProjectCard.vue
ProjectGrid.vue
ProjectHero.vue
ProjectMeta.vue
ProjectSection.vue
ProjectGallery.vue
ProjectStack.vue
ProjectChallengeBlock.vue

StackTag.vue
SkillPill.vue
StatusBadge.vue

ContactCTA.vue
```

---

## 20. Résumé final

Pour la V1, le cœur du design system repose sur ces composants :

* Button
* Tag
* Badge
* ProjectCard
* ProjectHero
* ProjectMeta
* SectionTitle
* ContactCTA
* Header
* Footer
* ScrollReveal

Le composant le plus important est :

> ProjectCard

Parce qu'il porte une grande partie de l'identité du portfolio :

* créativité ;
* projet ;
* interaction ;
* navigation ;
* preuve technique.

Le deuxième composant le plus important est :

> ProjectHero

Parce qu'il transforme chaque projet en vraie page de case study.
