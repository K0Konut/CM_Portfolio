# Design System Foundations — Portfolio Costa Maskulov

**Version :** V1 — fondations visuelles et UX  
**Projet :** Portfolio développeur full-stack  
**Territoire :** Creative Full-Stack Playground

## 1. Objectif du document

Ce document définit les fondations du design system du portfolio.

Il sert à cadrer :

* la direction visuelle générale ;
* les principes graphiques ;
* la logique de couleurs ;
* la logique typographique ;
* les règles de layout ;
* les espacements ;
* les bordures ;
* les radius ;
* les ombres ;
* les animations ;
* les états interactifs ;
* le responsive ;
* l'accessibilité.

Ce document ne remplace pas encore le design system Figma complet. Il sert de base avant de créer les composants.

---

## 2. Rappel de la direction

Le portfolio doit ressembler à un mini studio digital personnel.

Il doit être :

* créatif ;
* professionnel ;
* interactif ;
* lisible ;
* technique ;
* modulaire ;
* mémorable.

Phrase centrale :

> Développeur full-stack, je transforme des idées en interfaces vivantes, créatives et maintenables.

La direction visuelle doit donc montrer deux choses en même temps :

```txt
Créativité visible
+
Rigueur technique
```

Le site ne doit pas être un simple portfolio sobre. Mais il ne doit pas non plus devenir une expérience trop expérimentale qui perd le visiteur.

---

## 3. Principe général

### Créatif assumé, mais maîtrisé

Le niveau choisi reste :

> Niveau 2 — Créatif assumé mais maîtrisé

Cela veut dire :

* oui aux couleurs fortes ;
* oui aux formes expressives ;
* oui aux cards originales ;
* oui aux animations visibles ;
* oui aux stickers / badges / labels ;
* non au chaos visuel ;
* non aux textes illisibles ;
* non aux animations qui bloquent ;
* non aux effets gratuits ;
* non au style trop template.

**Règle principale :**

> Le design doit surprendre sans désorienter.

---

## 4. Mots-clés de direction artistique

La DA doit être guidée par ces mots :

* Playful
* Digital
* Créatif
* Modulaire
* Interactif
* Expressif
* Lisible
* Énergique
* Technique
* Studio

En termes de sensation, le site doit évoquer :

* un terrain de jeu digital ;
* un studio créatif personnel ;
* une interface web moderne ;
* un système graphique vivant ;
* un portfolio technique mais pas froid.

---

## 5. Ce qu'on veut éviter

Il faut éviter que le portfolio ressemble à :

* un template de développeur classique ;
* un CV en ligne trop scolaire ;
* un site d'agence trop prétentieux ;
* un site expérimental incompréhensible ;
* une démo d'animations sans contenu ;
* un design néo-brutaliste copié sans intention.

Le style doit servir le contenu.

Donc la règle est :

> Chaque choix visuel doit aider à présenter ton profil, tes projets ou ton univers.

---

## 6. Principes visuels

### 6.1 Contraste fort

Le site doit avoir une lecture immédiate.

Les titres, CTA, cards projets et informations clés doivent ressortir fortement.

Implications :

* textes bien contrastés ;
* CTA très visibles ;
* hiérarchie claire ;
* éléments importants faciles à scanner.

### 6.2 Formes expressives

On peut utiliser des formes graphiques fortes :

* cards épaisses ;
* bordures visibles ;
* stickers ;
* badges ;
* labels ;
* blocs colorés ;
* pills techniques ;
* formes flottantes.

Mais elles doivent rester contrôlées.

### 6.3 Interface modulaire

Comme ton projet sera développé en Vue.js, le design doit être pensé en composants.

Chaque élément doit pouvoir être réutilisé.

Exemple :

Un tag de stack doit fonctionner sur :

* une card projet ;
* une page détail projet ;
* une section compétences.

Un bouton doit fonctionner sur :

* le hero ;
* une card ;
* la page contact ;
* la page détail projet.

### 6.4 Motion utile

Le mouvement doit donner de l'énergie.

Il peut servir à :

* révéler un contenu ;
* guider le regard ;
* rendre une interaction plus agréable ;
* créer du rythme ;
* renforcer la personnalité du site.

Mais il ne doit jamais ralentir la lecture.

**Règle validée :**

> Le mouvement doit donner de l'énergie, pas ralentir la lecture.

### 6.5 Lisibilité permanente

Même avec une DA forte, le visiteur doit toujours comprendre :

* où il est ;
* ce qu'il regarde ;
* où cliquer ;
* comment voir les projets ;
* comment te contacter.

---

## 7. Couleurs — logique du système

On ne fixe pas encore les couleurs exactes ici. Mais on définit leur rôle.

Le système couleur devra contenir :

* couleurs de fond ;
* couleurs de texte ;
* couleurs d'accent ;
* couleurs de surface ;
* couleurs de bordure ;
* couleurs d'état ;
* couleurs par catégorie.

### 7.1 Couleur de fond principale

Le fond principal doit donner immédiatement une identité forte.

Possibilités selon la direction finale :

* fond clair crème / papier ;
* fond sombre charbon ;
* fond coloré profond ;
* fond hybride avec sections contrastées.

Pour ton moodboard, le plus cohérent serait probablement :

```txt
Un fond principal fort
+
des surfaces très contrastées
+
des accents colorés expressifs
```

### 7.2 Couleur de texte

Il faudra prévoir :

* texte principal ;
* texte secondaire ;
* texte inversé ;
* texte désactivé ;
* texte sur accent.

La lisibilité doit être prioritaire.

### 7.3 Couleurs d'accent

Les accents servent à créer l'énergie du site.

Ils peuvent être utilisés sur :

* boutons ;
* tags ;
* badges ;
* hover de cards ;
* stickers ;
* mots mis en avant ;
* sections spécifiques.

Il faudra éviter d'avoir trop d'accents utilisés au même niveau.

Recommandation :

* 1 couleur accent principale ;
* 2 à 4 couleurs accent secondaires ;
* 1 couleur spéciale pour les éléments décoratifs.

### 7.4 Couleurs par catégorie

On peut utiliser des couleurs pour différencier les types d'informations.

Exemple :

* Front-end
* Back-end
* Creative
* Projet personnel
* Projet scolaire
* En cours
* Prototype
* Terminé

Mais il ne faut pas que tout devienne multicolore.

**Règle :**

> La couleur doit aider à comprendre, pas juste décorer.

### 7.5 Tokens couleur à prévoir

```txt
color.background.primary
color.background.secondary
color.background.inverse

color.text.primary
color.text.secondary
color.text.inverse
color.text.muted

color.surface.primary
color.surface.secondary
color.surface.highlight

color.border.default
color.border.strong

color.accent.primary
color.accent.secondary
color.accent.tertiary

color.status.success
color.status.warning
color.status.info
color.status.danger
```

---

## 8. Typographie — logique du système

On ne fixe pas encore les typos exactes, mais on définit leur rôle.

Le système typographique doit avoir 3 intentions :

* impact ;
* lisibilité ;
* technique.

### 8.1 Typo display

Rôle :

* hero ;
* gros titres ;
* mots forts ;
* sections importantes ;
* éléments mémorables.

Elle doit donner du caractère au site.

Elle peut être :

* large ;
* expressive ;
* un peu playful ;
* très identifiable.

Mais elle doit rester lisible.

### 8.2 Typo texte

Rôle :

* paragraphes ;
* descriptions de projets ;
* textes de page détail ;
* page À propos ;
* contact.

Elle doit être claire, stable et agréable à lire.

### 8.3 Typo mono ou technique

Optionnelle mais très pertinente pour ton profil.

Rôle :

* tags ;
* stack ;
* année ;
* statut ;
* métadonnées projet ;
* labels techniques ;
* petites annotations.

Elle permet de renforcer le côté développeur / studio digital.

### 8.4 Hiérarchie typographique

À prévoir :

* Display XL
* Display L
* Heading 1
* Heading 2
* Heading 3
* Body large
* Body default
* Body small
* Caption
* Label
* Mono label
* Button text

### 8.5 Tokens typo à prévoir

```txt
font.family.display
font.family.body
font.family.mono

font.size.display-xl
font.size.display-l
font.size.h1
font.size.h2
font.size.h3
font.size.body-lg
font.size.body-md
font.size.body-sm
font.size.caption
font.size.label

font.weight.regular
font.weight.medium
font.weight.bold
font.weight.black

line-height.tight
line-height.default
line-height.relaxed
```

---

## 9. Layout

Le layout doit être créatif, mais solide.

Il doit pouvoir accueillir :

* des sections très visuelles ;
* des grilles de projets ;
* des pages détail longues ;
* des blocs éditoriaux ;
* des galeries d'images ;
* des métadonnées techniques.

### 9.1 Largeur de page

On peut prévoir :

* Container small
* Container medium
* Container large
* Container full

Exemple d'usage :

* Small : textes longs, page À propos ;
* Medium : sections classiques ;
* Large : grille projets ;
* Full : hero, sections immersives.

### 9.2 Grille

Recommandation :

* Desktop : grille 12 colonnes
* Tablet : grille 8 colonnes
* Mobile : grille 4 colonnes

Mais en développement, on pourra simplifier avec CSS Grid.

### 9.3 Sections

Chaque section doit avoir un rôle clair.

Exemples :

* Hero section
* Featured projects section
* Stack section
* Method section
* About preview
* Contact CTA
* Project detail section

Chaque section doit avoir :

* titre ;
* texte d'intro ;
* contenu principal ;
* CTA éventuel.

---

## 10. Spacing

Le spacing doit donner de l'air, mais garder l'énergie.

On évite :

* un site trop compact ;
* un site trop vide ;
* des espacements incohérents.

### 10.1 Échelle recommandée

```txt
space.2xs = 4px
space.xs = 8px
space.sm = 12px
space.md = 16px
space.lg = 24px
space.xl = 32px
space.2xl = 48px
space.3xl = 64px
space.4xl = 96px
space.5xl = 128px
```

### 10.2 Usage recommandé

* petit espace entre tags : 8px ;
* padding bouton : 12px / 20px ;
* padding card : 24px ou 32px ;
* espace entre sections : 96px à 128px ;
* espace dans une page détail : 64px à 96px.

---

## 11. Radius

Le radius doit être cohérent avec la DA.

Deux directions possibles :

### Option A — Brutal / graphique

* peu de radius ;
* bords plus francs ;
* cards très graphiques ;
* style plus marqué.

### Option B — Playful / accessible

* radius moyen ;
* formes plus amicales ;
* cards plus douces ;
* interface plus accueillante.

Pour ton territoire, je recommande un mix :

```txt
Bordures fortes
+
radius moyen
```

Ça permet d'avoir un style expressif sans être trop dur.

### Tokens radius

```txt
radius.none = 0
radius.sm = 4px
radius.md = 8px
radius.lg = 16px
radius.xl = 24px
radius.full = 999px
```

Usage :

* Buttons : md ou full
* Tags : full
* Cards : lg ou xl
* Stickers : variable
* Blocs éditoriaux : lg

---

## 12. Bordures

Les bordures sont importantes pour ton style.

Elles peuvent donner :

* un côté graphique ;
* un côté modulaire ;
* un côté interface / système ;
* un côté playful neo-brutalism maîtrisé.

### Tokens border

```txt
border.width.thin = 1px
border.width.default = 2px
border.width.strong = 3px
border.width.heavy = 4px
```

Usage recommandé :

* 1px : séparateurs légers ;
* 2px : cards, boutons, tags ;
* 3px : éléments importants ;
* 4px : éléments décoratifs ou hero.

---

## 13. Ombres

Les ombres ne doivent pas être trop réalistes.

Elles peuvent être graphiques, presque « offset ».

Recommandation :

* ombre nette ;
* ombre décalée ;
* peu de blur ;
* effet sticker / card.

### Tokens shadow

```txt
shadow.none
shadow.sm
shadow.md
shadow.offset
shadow.strong
```

Exemples d'usage :

* Button hover : `shadow.offset`
* ProjectCard hover : `shadow.strong`
* Sticker : `shadow.sm`
* Surface classique : `shadow.md` léger

---

## 14. États interactifs

Chaque composant doit prévoir ses états.

### États minimum

* Default
* Hover
* Active
* Focus
* Disabled
* Loading si nécessaire

### 14.1 Boutons

CTA principal :

* Default : très visible
* Hover : déplacement léger ou ombre plus forte
* Active : effet pressé
* Focus : outline clair
* Disabled : contraste réduit

CTA secondaire :

* Default : moins dominant
* Hover : fond ou bordure qui change
* Focus : outline clair

### 14.2 Cards projets

La card projet est un élément central.

Comportement validé :

* la card est cliquable ;
* CTA visible : Voir le projet ;
* destination : page détail projet ;
* route : `/projets/:slug`.

États :

* Default
* Hover
* Focus
* Active

Hover possible :

* couleur qui monte ;
* image qui se décale ;
* sticker qui apparaît ;
* ombre offset ;
* tags légèrement animés.

**Règle :**

> Le hover doit donner envie de cliquer sans cacher l'information essentielle.

### 14.3 Tags et badges

Les tags doivent rester simples.

États :

* Default
* Hover léger si interactif
* Selected si filtre
* Disabled si nécessaire

Différence :

* Tag = information ou technologie
* Badge = statut ou label important
* Filter = élément cliquable

---

## 15. Motion system

Le motion system doit être simple, cohérent et maîtrisé.

On garde :

* Scroll reveal
* Hover de cards
* Hover de boutons
* Transitions de page
* Apparition de titres
* Stickers flottants légers
* Marquee contrôlée

On exclut :

* Custom cursor

### 15.1 Types d'animations

#### Scroll reveal

Usage :

* sections ;
* Project cards ;
* Text blocks ;
* Skill pills.

Animation :

* opacity 0 → 1 ;
* translate Y léger ;
* durée courte à moyenne ;
* décalage léger entre les éléments.

#### Hover expressif

Usage :

* Buttons ;
* ProjectCard ;
* Tags interactifs ;
* Liens.

Animation :

* déplacement léger ;
* changement de fond ;
* ombre offset ;
* bordure plus forte.

#### Page transition

Usage :

* changement entre Accueil, Projets, Détail, À propos, Contact.

Animation :

* fade léger ;
* slide léger ;
* transition rapide.

#### Floating elements

Usage :

* stickers ;
* badges décoratifs ;
* formes secondaires.

Animation :

* mouvement très léger ;
* lent ;
* non bloquant.

### 15.2 Tokens motion

```txt
motion.duration.fast = 150ms
motion.duration.default = 250ms
motion.duration.slow = 400ms
motion.duration.reveal = 600ms

motion.easing.default = ease-out
motion.easing.snappy = cubic-bezier(...)
motion.easing.smooth = cubic-bezier(...)
```

On définira les courbes exactes plus tard.

### 15.3 Règles motion

* pas d'animation obligatoire avant de lire le contenu ;
* pas de loader inutile ;
* pas de texte qui reste invisible trop longtemps ;
* pas d'effet qui empêche de cliquer ;
* pas d'animation trop longue sur les CTA.

**Règle principale :**

> L'animation accompagne l'expérience, elle ne la remplace pas.

---

## 16. Responsive

Le site doit être pensé mobile dès le départ.

### Breakpoints recommandés

```txt
mobile : 0 - 767px
tablet : 768 - 1023px
desktop : 1024 - 1439px
wide : 1440px+
```

### Règles mobile

Sur mobile :

* navigation simplifiée ;
* hero plus compact ;
* cards en une colonne ;
* animations réduites ;
* texte plus direct ;
* CTA visibles rapidement ;
* images optimisées ;
* pas de hover obligatoire.

**Important :**

> Une information ne doit jamais dépendre uniquement du hover.

Parce que sur mobile, le hover n'existe pas vraiment.

---

## 17. Accessibilité

Même avec une DA forte, le site doit rester accessible.

### Règles minimum

* contraste suffisant ;
* focus visible ;
* texte lisible ;
* boutons assez grands ;
* images avec alt ;
* navigation clavier ;
* animations réduites si nécessaire.

### Motion réduite

À prévoir :

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms;
    animation-iteration-count: 1;
    scroll-behavior: auto;
    transition-duration: 0.01ms;
  }
}
```

### Focus visible

Tous les éléments interactifs doivent avoir un focus clair :

* Buttons
* Cards cliquables
* Liens
* Filtres
* Navigation

---

## 18. Iconographie et visuels

L'iconographie doit être simple.

Pas besoin d'un gros système d'icônes au départ.

Utilisation possible :

* icônes réseaux ;
* icônes lien externe ;
* icônes GitHub / LinkedIn ;
* petits pictos pour stack ou catégories.

Les visuels projet sont plus importants que les icônes.

Priorité :

* captures propres ;
* mockups simples ;
* visuels projet cohérents ;
* images optimisées.

---

## 19. Règles pour les composants

Chaque composant devra être documenté avec :

* rôle ;
* usage ;
* contenu ;
* variants ;
* états ;
* responsive ;
* motion ;
* accessibilité.

### Exemple pour `ProjectCard`

**Rôle :**  
Présenter un projet et mener vers sa page détail.

**Usage :**  
Accueil et page Projets.

**Contenu :**  
Titre, description courte, stack, tags, statut, année, image, CTA Voir le projet.

**États :**  
Default, hover, focus, active.

**Motion :**  
Hover reveal léger.

**Accessibilité :**  
Card focusable, aria-label clair, CTA visible.

---

## 20. Nommage recommandé des tokens

Pour rester propre côté Figma et côté code, on peut utiliser une convention simple.

### Couleurs

```txt
color.background.primary
color.text.primary
color.accent.primary
color.surface.card
color.border.strong
```

### Spacing

```txt
space.xs
space.sm
space.md
space.lg
space.xl
space.2xl
```

### Radius

```txt
radius.sm
radius.md
radius.lg
radius.xl
radius.full
```

### Typography

```txt
font.display
font.body
font.mono
text.hero
text.heading-1
text.body
text.label
```

### Motion

```txt
motion.fast
motion.default
motion.slow
motion.reveal
```

---

## 21. Priorité des fondations pour la V1

### Indispensable

* palette couleur ;
* typographies ;
* hiérarchie texte ;
* spacing ;
* radius ;
* bordures ;
* boutons ;
* tags ;
* badges ;
* ProjectCard ;
* Header ;
* Footer ;
* responsive ;
* focus visible ;
* motion simple.

### Important mais secondaire

* Marquee ;
* stickers animés ;
* transitions de page avancées ;
* galerie projet avancée ;
* filtres projets animés.

### Plus tard

* dark / light mode ;
* 3D ;
* système de thème dynamique ;
* animations complexes ;
* CMS.

---

## 22. Résumé des décisions

**Territoire :**  
Creative Full-Stack Playground

**Niveau visuel :**  
Créatif assumé mais maîtrisé

**Direction :**  
Mini studio digital personnel

**Ton :**  
Humain, professionnel, créatif

**Motion :**  
Présente mais utile

**Custom cursor :**  
Exclu

**CTA hero :**

* Voir mes projets
* Me contacter

**Badge stack hero :**  
Vue.js / Node.js

**ProjectCard :**  
Cliquable vers la page détail

**CTA card :**  
Voir le projet
