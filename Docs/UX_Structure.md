# UX Structure Document — Portfolio Costa Maskulov

**Version :** V1 — cadrage structurel  
**Projet :** Portfolio personnel développeur full-stack  
**Territoire :** Creative Full-Stack Playground

## 1. Objectif du document

Ce document sert à définir la structure UX du portfolio avant de passer au design system complet.

Il permet de cadrer :

* les pages du site ;
* le rôle de chaque page ;
* les sections principales ;
* les contenus à prévoir ;
* les composants nécessaires ;
* les interactions attendues ;
* le niveau de motion ;
* la priorité pour une première version du site.

Le but est d'éviter de créer des composants ou des maquettes « au feeling ». Chaque élément devra servir ton positionnement :

> Développeur full-stack créatif, sérieux techniquement, capable de faire des interfaces modernes, originales et maintenables.

---

## 2. Rappel du territoire de marque

### Creative Full-Stack Playground

Le portfolio doit être perçu comme un espace digital vivant, créatif et professionnel.

Il ne doit pas être seulement un CV en ligne. Il doit être une preuve directe de ce que tu sais faire :

* penser une interface ;
* structurer une expérience ;
* créer une direction artistique forte ;
* développer proprement ;
* présenter des projets de manière claire ;
* donner envie de te contacter.

La promesse du site :

> Je transforme des idées en interfaces vivantes, créatives et maintenables.

---

## 3. Impression recherchée

Le visiteur doit repartir avec cette impression :

> Costa est un développeur créatif, sérieux techniquement, capable de faire des interfaces modernes et originales.

Le site doit donner une impression proche d'un studio digital créatif personnel, mais sans perdre le côté professionnel attendu par un recruteur, une entreprise ou une école.

Le bon équilibre :

* créatif, mais pas illisible ;
* animé, mais pas fatigant ;
* original, mais pas confus ;
* technique, mais pas froid ;
* professionnel, mais pas corporate.

---

## 4. Niveau d'expérience visuelle

Le niveau choisi est :

### Niveau 2 — Créatif assumé mais maîtrisé

Cela signifie :

* une DA forte ;
* des layouts dynamiques ;
* des cards projets originales ;
* des animations visibles ;
* des interactions modernes ;
* des éléments graphiques expressifs ;
* mais une structure simple ;
* une navigation claire ;
* une lecture rapide ;
* une présentation professionnelle.

**Règle générale :**

> Le portfolio doit surprendre sans désorienter.

---

## 5. Architecture globale du site

Pour la V1, le site peut être structuré autour de 5 pages principales :

* Accueil
* Projets
* Détail projet
* À propos
* Contact

On peut aussi avoir une page ou un bouton CV plus tard, mais pour la V1, le CV peut être intégré dans la page À propos ou Contact.

---

## 6. Navigation principale

### Pages dans le header

La navigation doit rester simple :

* Accueil
* Projets
* À propos
* Contact

Éventuellement :

* CV

Mais je recommande plutôt de mettre le CV en bouton secondaire, pas forcément comme page principale.

Exemple :

```txt
Accueil | Projets | À propos | Contact | Télécharger mon CV
```

### Rôle du header

Le header doit permettre au visiteur de se repérer rapidement.

Il peut être créatif visuellement, mais il doit rester évident.

Éléments possibles :

* logo ou nom : Costa Maskulov ;
* navigation principale ;
* bouton contact ;
* bouton CV ;
* menu responsive sur mobile.

### Comportement du header

Pour ton style, je vois bien un header :

* fixe ou semi-fixe ;
* compact ;
* avec des interactions au hover ;
* potentiellement avec un effet de border, sticker ou capsule ;
* lisible sur toutes les sections.

À éviter :

* menu trop caché ;
* navigation trop expérimentale ;
* header qui prend trop de place ;
* animation qui gêne le scroll.

---

## 7. Page Accueil

### Rôle de la page

La page d'accueil doit immédiatement présenter ton univers.

Elle doit répondre rapidement à 4 questions :

* Qui es-tu ?
* Que fais-tu ?
* Quel type d'expérience proposes-tu ?
* Où peut-on voir tes projets ?

**Objectif :**

Donner envie de découvrir ton travail et faire comprendre que ton portfolio est lui-même une démonstration de ton savoir-faire.

### Structure recommandée de la page Accueil

1. Hero manifeste
2. Section projets mis en avant
3. Section stack / compétences
4. Section méthode ou approche
5. Mini section à propos
6. Contact CTA

### 7.1 Hero manifeste

#### Objectif

Faire comprendre immédiatement ton positionnement.

#### Contenu

* ton nom ;
* ton rôle ;
* ta phrase manifeste ;
* un CTA vers les projets ;
* un CTA vers le contact ou CV ;
* un élément graphique fort.

#### Texte possible

```txt
Costa Maskulov
Développeur full-stack

Je transforme des idées en interfaces vivantes,
créatives et maintenables.
```

CTA possibles :

* Voir mes projets
* Me contacter
* Télécharger mon CV

#### UX attendue

Le hero doit être impactant, mais clair.

Il peut contenir :

* gros titre ;
* mot animé ;
* badge « Full-stack developer » ;
* sticker « Creative Web » ;
* bloc stack rapide ;
* élément visuel flottant ;
* mini card projet en aperçu.

#### Motion possible

* apparition progressive du titre ;
* sticker qui entre légèrement en décalé ;
* CTA avec hover expressif ;
* élément graphique flottant léger.

À éviter :

* animation trop longue au chargement ;
* intro obligatoire ;
* loader inutile ;
* texte qui met trop de temps à apparaître.

### 7.2 Projets mis en avant

#### Objectif

Montrer rapidement ton travail.

#### Contenu

Afficher 3 à 4 projets principaux.

Chaque projet doit montrer :

* titre ;
* type de projet ;
* courte description ;
* stack principale ;
* statut ;
* visuel ;
* lien vers page détail.

#### Exemple de contenu

```txt
KoFlix
Application de streaming fictive avec Vue.js et Firebase.

Stack : Vue, Firebase, Tailwind
Type : Front-end / Full-stack
Statut : Projet personnel
```

#### UX attendue

Les cards projets doivent être visuelles, interactives et mémorables.

Le visiteur doit avoir envie de cliquer.

#### Motion possible

* hover avec couleur qui monte ;
* image qui se décale ;
* sticker qui apparaît ;
* tag qui bouge légèrement ;
* card qui se soulève.

**Règle :**

> L'animation doit rendre la card plus engageante, pas cacher l'information principale.

### 7.3 Stack / compétences

#### Objectif

Montrer tes compétences techniques rapidement.

#### Contenu

**Front-end**

Vue.js, React, JavaScript, TypeScript, HTML, CSS, Tailwind

**Back-end**

Node.js, Express, Firebase, MongoDB

**Outils**

GitHub, VSCode, Trello, Figma, Codex

**Méthodes**

Agile, Design Sprint, architecture modulaire

#### UX attendue

Cette section ne doit pas ressembler à une liste froide.

Elle peut être présentée sous forme de :

* pills ;
* tags ;
* grille ;
* wall de stack ;
* cartes par catégorie ;
* bandeau animé type marquee.

#### Motion possible

* tags qui apparaissent progressivement ;
* légère animation au hover ;
* marquee contrôlée ;
* changement d'état au hover.

À éviter :

* logos partout sans hiérarchie ;
* trop de technos affichées au même niveau ;
* section trop longue.

### 7.4 Méthode / approche

#### Objectif

Montrer que tu ne fais pas juste « coder », mais que tu réfléchis à la structure et à l'expérience.

#### Contenu possible

1. Comprendre l'idée
2. Structurer l'expérience
3. Créer une interface claire
4. Développer une base maintenable
5. Tester, ajuster, améliorer

#### Texte possible

> Je pense mes projets comme des expériences complètes : une idée claire, une interface vivante, une structure propre et un code capable d'évoluer.

#### UX attendue

Cette section peut être plus éditoriale, presque comme un mini manifeste.

Elle sert à renforcer ton image de développeur sérieux et créatif.

#### Motion possible

* étapes qui apparaissent au scroll ;
* numéros graphiques ;
* petits blocs animés ;
* ligne ou chemin visuel.

### 7.5 Mini section À propos

#### Objectif

Donner un aperçu humain sans tout raconter.

#### Contenu

* courte présentation ;
* ton niveau ;
* ce que tu recherches ;
* lien vers la page À propos.

#### Texte possible

> Je suis Costa, développeur full-stack en formation d'ingénierie informatique. J'aime construire des interfaces modernes, créatives et utiles, avec une attention particulière portée à la structure, au détail et à l'expérience utilisateur.

CTA :

* En savoir plus

### 7.6 Contact CTA

#### Objectif

Finir la page avec une invitation claire.

#### Contenu

> Tu veux discuter d'un projet, d'une alternance ou d'une opportunité ? Contactons-nous.

Actions :

* email ;
* LinkedIn ;
* GitHub ;
* CV.

#### UX attendue

Le contact doit être visible, simple et humain.

À éviter :

* formulaire trop lourd ;
* contact caché ;
* texte trop corporate.

---

## 8. Page Projets

### Rôle de la page

La page Projets est la page de preuve.

Elle doit montrer concrètement ce que tu sais faire.

**Objectif :**

Présenter tes projets de manière claire, visuelle et filtrable, tout en gardant une expérience créative.

### Structure recommandée

1. Header de page
2. Introduction courte
3. Filtres ou catégories
4. Grille de projets
5. Contact / CTA final

### 8.1 Header de page

#### Contenu

```txt
Mes projets
Des interfaces, des expérimentations et des applications construites avec une attention particulière à l'expérience et à la structure.
```

#### UX attendue

Le header peut être visuellement fort, mais plus compact que le hero de la page d'accueil.

### 8.2 Filtres

Les filtres ne sont pas obligatoires en V1, mais ils peuvent être très utiles si tu as plusieurs projets.

Filtres possibles :

* Tous
* Front-end
* Full-stack
* UI/UX
* Firebase
* Vue.js
* React
* Expérimentation

Pour la V1, je recommande :

* Tous
* Front-end
* Full-stack
* Creative

Simple et efficace.

### 8.3 Grille de projets

Chaque card doit contenir :

* titre du projet ;
* type de projet ;
* courte description ;
* stack principale ;
* année ;
* statut ;
* visuel ;
* lien détail.

Exemple :

```txt
KoFlix
Plateforme de streaming fictive
Vue.js · Firebase · Tailwind
2025
Projet personnel
```

#### UX attendue

La grille doit être claire et agréable à parcourir.

Layout possible :

* grille 2 colonnes desktop ;
* 1 colonne mobile ;
* cards de tailles légèrement différentes pour donner du rythme ;
* mise en avant d'un projet principal.

#### Motion possible

* apparition des cards au scroll ;
* hover reveal ;
* filtre avec transition fluide ;
* image qui bouge légèrement.

---

## 9. Page Détail Projet

### Rôle de la page

La page détail projet doit montrer ta démarche.

Elle doit prouver que tu sais :

* comprendre un besoin ;
* structurer une solution ;
* choisir une stack ;
* développer ;
* expliquer tes choix ;
* apprendre et améliorer.

### Structure recommandée

1. Project Hero
2. Project Meta
3. Contexte
4. Objectifs
5. Rôle personnel
6. Fonctionnalités principales
7. Stack technique
8. Captures / galerie
9. Choix techniques
10. Difficultés et solutions
11. Ce que j'ai appris
12. Liens
13. Projet suivant

### 9.1 Project Hero

#### Contenu

* nom du projet ;
* phrase courte ;
* image principale ;
* type de projet ;
* année ;
* statut.

Exemple :

```txt
KoFlix
Une plateforme de streaming fictive avec une interface sombre inspirée des univers terminal / hacking.
```

#### UX attendue

Le hero projet doit être immersif.

Il doit donner envie de comprendre le projet.

### 9.2 Project Meta

#### Contenu

Bloc résumé rapide :

```txt
Type : Application web
Rôle : Développement front-end / back-end
Stack : Vue.js, Firebase, Tailwind
Année : 2025
Statut : Prototype
Liens : GitHub / Démo
```

Ce bloc est très important pour les recruteurs.

Il permet de scanner rapidement le projet.

### 9.3 Contexte

#### Question à laquelle répondre

Pourquoi ce projet existe ?

Exemple :

> KoFlix est un projet personnel imaginé pour explorer la création d'une interface de streaming moderne, avec une gestion de contenus via Firebase et une direction artistique inspirée des interfaces terminal.

### 9.4 Objectifs

#### Question à laquelle répondre

Qu'est-ce que tu voulais construire ou apprendre ?

Exemple :

> L'objectif était de construire une interface dynamique, responsive et maintenable, avec une structure permettant d'ajouter facilement de nouveaux films ou séries.

### 9.5 Rôle personnel

#### Question à laquelle répondre

Qu'as-tu fait toi-même ?

Contenu possible :

* conception de l'interface ;
* développement front-end ;
* intégration Firebase ;
* structure des données ;
* responsive design ;
* création des composants.

### 9.6 Fonctionnalités principales

Exemple :

* affichage d'une grille de films et séries ;
* page détail d'un contenu ;
* ajout de contenus via Firebase ;
* page admin ;
* header de navigation ;
* design responsive.

### 9.7 Stack technique

La stack ne doit pas être juste une liste.

Il faut expliquer rapidement pourquoi tu as utilisé ces outils.

Exemple :

* Vue.js pour structurer l'interface en composants.
* Firebase pour gérer rapidement les données et l'authentification.
* Tailwind CSS pour construire une interface responsive et personnalisable.

### 9.8 Galerie / captures

#### Contenu

* captures desktop ;
* captures mobile ;
* extraits d'interface ;
* détails de composants ;
* éventuellement GIF ou vidéo courte.

#### UX attendue

La galerie doit mettre en valeur le projet sans devenir trop lourde.

### 9.9 Choix techniques

Section importante pour montrer ton sérieux.

Exemples de sujets :

* architecture des composants ;
* gestion des données ;
* organisation des routes ;
* responsive design ;
* design system local ;
* gestion des états ;
* séparation admin / utilisateur.

### 9.10 Difficultés et solutions

Très bon pour montrer ta progression.

Format possible :

1. Problème
2. Solution
3. Ce que ça m'a appris

Exemple :

**Problème :**  
Structurer les données Firebase pour pouvoir ajouter facilement de nouveaux contenus.

**Solution :**  
Créer une collection dédiée aux contenus avec des champs normalisés.

**Apprentissage :**  
L'importance de penser la structure des données avant l'interface.

### 9.11 Ce que j'ai appris

Section très utile pour un profil junior.

Elle montre que tu progresses et que tu sais analyser ton travail.

Exemple :

> Ce projet m'a permis de mieux comprendre la structure d'une application Vue.js connectée à Firebase, ainsi que l'importance d'un design system cohérent pour maintenir une interface évolutive.

### 9.12 Liens

Actions possibles :

* Voir la démo
* Voir le code
* Retour aux projets
* Projet suivant

---

## 10. Page À propos

### Rôle de la page

La page À propos doit humaniser ton profil.

Elle doit montrer :

* qui tu es ;
* ton parcours ;
* ta vision du développement ;
* tes compétences ;
* ta manière de travailler ;
* ce que tu recherches.

### Structure recommandée

1. Intro personnelle
2. Parcours
3. Ce que j'aime construire
4. Compétences
5. Méthode de travail
6. Outils
7. CV / contact

### 10.1 Intro personnelle

Texte possible :

> Je suis Costa Maskulov, développeur full-stack en formation d'ingénierie informatique. J'aime créer des interfaces qui ont du caractère, avec une structure propre derrière.

### 10.2 Parcours

Contenu possible :

* Bac+3 en informatique ;
* passage en Bac+4 ingénierie informatique ;
* recherche d'alternance ;
* projets personnels et scolaires ;
* expérience avec Vue.js, React, Node.js, Firebase, MongoDB.

Format possible :

* timeline ;
* cards ;
* blocs empilés ;
* parcours en étapes.

### 10.3 Ce que j'aime construire

Cette section peut être plus personnelle.

Exemple :

> J'aime les interfaces modernes, les systèmes modulaires, les animations utiles et les expériences web qui restent en mémoire.

Elle permet de reconnecter avec ton territoire créatif.

### 10.4 Compétences

Même contenu que la home, mais plus détaillé.

Catégories :

* Front-end
* Back-end
* Design / UI
* Outils
* Méthodes

### 10.5 Méthode de travail

Exemple :

> Je commence par comprendre le besoin, puis je structure les pages, les composants et les données avant de développer. J'aime garder une base claire, évolutive et facile à maintenir.

### 10.6 CV / Contact

Actions :

* Télécharger mon CV
* Voir mes projets
* Me contacter

---

## 11. Page Contact

### Rôle de la page

La page Contact doit être simple, directe et humaine.

**Objectif :**

Permettre à quelqu'un de te contacter rapidement pour une alternance, une opportunité ou un projet.

### Structure recommandée

1. Titre
2. Message court
3. Moyens de contact
4. Réseaux
5. CV

### Contenu possible

> Tu veux discuter d'une alternance, d'un projet ou simplement échanger ? Je suis ouvert aux opportunités et toujours partant pour construire des interfaces utiles, créatives et bien pensées.

Actions :

* Email
* LinkedIn
* GitHub
* Télécharger mon CV

---

## 12. Composants UX nécessaires

### Composants structurels

* `Header`
* `Footer`
* `PageWrapper`
* `Section`
* `Container`
* `Grid`

### Composants éditoriaux

* `HeroTitle`
* `SectionTitle`
* `IntroText`
* `ManifestoBlock`
* `TextBlock`
* `Timeline`

### Composants projets

* `ProjectCard`
* `ProjectGrid`
* `ProjectHero`
* `ProjectMeta`
* `ProjectStack`
* `ProjectGallery`
* `ProjectNavigation`
* `ProjectCTA`

### Composants techniques

* `SkillPill`
* `StackTag`
* `ToolBadge`
* `CategoryFilter`
* `StatusBadge`

### Composants d'action

* `ButtonPrimary`
* `ButtonSecondary`
* `TextLink`
* `ExternalLink`
* `ContactCTA`
* `DownloadCVButton`

### Composants décoratifs

* `Sticker`
* `FloatingShape`
* `Marquee`
* `Label`
* `HighlightWord`

### Composants motion

* `ScrollReveal`
* `HoverReveal`
* `PageTransition`
* `AnimatedTitle`
* `FloatingElement`

---

## 13. Règles UX globales

### Règle 1

Le visiteur doit comprendre ton profil en moins de 5 secondes.

### Règle 2

Les projets doivent toujours rester faciles à trouver.

### Règle 3

Les animations doivent renforcer l'expérience, pas la ralentir.

### Règle 4

Chaque page doit avoir un CTA clair.

### Règle 5

La DA peut être expressive, mais la lecture doit rester simple.

### Règle 6

Le mobile doit être pensé dès le début, pas adapté à la fin.

### Règle 7

Le portfolio doit donner une impression de maîtrise technique.

---

## 14. Règles motion

### Animations autorisées

* Scroll reveal
* Hover cards
* Hover buttons
* Transitions de page
* Apparition de titres
* Stickers flottants légers
* Marquee contrôlée

### Animation exclue

* Custom cursor

### Règle principale

> Le mouvement doit donner de l'énergie, pas ralentir la lecture.

### Accessibilité motion

Il faudra prévoir une version réduite avec :

```css
@media (prefers-reduced-motion: reduce) {
  /* animations réduites ou désactivées */
}
```

---

## 15. Priorité V1

Pour ne pas partir dans un projet trop énorme, je recommande cette priorité.

### V1 indispensable

* Accueil
* Projets
* Détail projet
* À propos
* Contact
* Header
* Footer
* ProjectCard
* ProjectDetail layout
* Buttons
* Tags
* Badges
* Scroll reveal simple
* Hover projet
* Responsive

### V1 optionnel

* Filtres projets
* Marquee
* Stickers animés
* Transitions de page avancées
* Galerie projet avancée
* Timeline animée

### À garder pour plus tard

* CMS ou backend réel
* Mode dark/light
* Animations complexes
* 3D
* Curseur custom
* Blog
* Système de thème dynamique

---

## 16. Structure recommandée côté projet Vue

Comme tu veux une architecture modulaire, on peut garder une logique proche de ce que tu avais imaginé.

```txt
src/
  shell/
    router/
    layouts/
    pages/

  ds/
    components/
    tokens/
    motion/
    styles/

  features/
    home/
    projects/
    project-detail/
    about/
    contact/

  data/
    projects.mock.ts
    skills.mock.ts

  assets/
    images/
    icons/
```

Ou avec tes conventions :

```txt
src/
  Shell/
  DS/
  HE/
  FT/
  DemAcc/
  DemProj/
  DemProjectDetails/
  DemAbou/
  DemContact/
  data/
```

Mais je te conseille une version un peu plus lisible techniquement :

```txt
src/
  shell/
  design-system/
  features/
  data/
  assets/
```

Elle sera plus claire pour toi, pour Codex, et pour quelqu'un qui lirait ton repo.

---

## 17. Résumé de la structure UX finale

### Accueil

* Hero manifeste
* Projets mis en avant
* Stack / compétences
* Méthode
* Mini à propos
* Contact CTA

### Projets

* Intro
* Filtres simples
* Grille de projets
* CTA contact

### Détail projet

* Hero projet
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

* Intro personnelle
* Parcours
* Vision
* Compétences
* Méthode
* Outils
* CV / contact

### Contact

* Message humain
* Email
* LinkedIn
* GitHub
* CV

---

## 18. Direction finale validée

Le portfolio doit être :

* créatif ;
* professionnel ;
* interactif ;
* lisible ;
* technique ;
* modulaire ;
* mémorable.

Et toute décision UX devra respecter cette phrase :

> Créer un portfolio de développeur full-stack qui ressemble à un mini studio digital personnel : créatif, vivant, professionnel, techniquement sérieux et mémorable.
