# Motion Spec V1 - Portfolio Costa Maskulov

Projet : Portfolio developpeur full-stack  
Territoire : Creative Full-Stack Playground  
Statut : V1 pour integration code

## 1. Objectif

Cette spec centralise les animations du portfolio avant integration.

Les documents existants cadrent deja la direction motion :

- scroll reveal ;
- hover des cards ;
- hover des boutons ;
- transitions de page ;
- apparition des titres ;
- stickers et doodles flottants ;
- micro-interactions ;
- respect de `prefers-reduced-motion` ;
- exclusion du custom cursor.

Cette V1 transforme ces intentions en regles exploitables en code.

## 2. Principe general

Le mouvement doit donner de l'energie, pas ralentir la lecture.

Chaque animation doit servir au moins un objectif :

- guider le regard ;
- rendre une interaction plus claire ;
- donner du rythme au scroll ;
- renforcer la personnalite graphique ;
- rendre les pages moins statiques.

A eviter :

- loader obligatoire ;
- intro longue avant de lire le contenu ;
- animation qui masque une information ;
- animation qui empeche de cliquer ;
- hover indispensable a la comprehension ;
- custom cursor ;
- parallax lourd sur toutes les sections.

## 3. Role de Figma

Figma sert de reference visuelle statique et de prototype simple.

Dans Figma, on peut prototyper :

- hover de boutons ;
- hover de ProjectCards ;
- transitions entre frames ;
- etats de filtres ;
- scroll vertical ;
- elements fixed ou sticky.

Dans le code, on gere :

- scroll reveal quand un element entre dans le viewport ;
- delays et staggers propres ;
- doodles et stickers flottants ;
- transitions de route ;
- reduction motion via `prefers-reduced-motion`.

Decision V1 :

```txt
Ne pas construire les scroll reveal dans Figma.
Les implementer en code pendant l'integration.
```

## 4. Tokens motion

Durations :

```txt
motion.duration.instant = 100ms
motion.duration.fast = 150ms
motion.duration.default = 250ms
motion.duration.slow = 400ms
motion.duration.reveal = 600ms
motion.duration.page = 350ms
motion.duration.float = 5000ms a 7000ms
```

Easings :

```txt
motion.easing.default = cubic-bezier(0.16, 1, 0.3, 1)
motion.easing.snappy = cubic-bezier(0.2, 0.8, 0.2, 1)
motion.easing.smooth = cubic-bezier(0.65, 0, 0.35, 1)
motion.easing.linear = linear
```

Stagger :

```txt
motion.stagger.short = 60ms
motion.stagger.default = 80ms
motion.stagger.long = 120ms
motion.stagger.max = 320ms
```

## 5. Scroll reveal

Usage :

- sections ;
- SectionTitle ;
- ProjectCards ;
- blocs de stack ;
- etapes de methode ;
- timeline A propos ;
- cards de contact ;
- cards competences ;
- blocs de page detail projet.

Animation desktop :

```txt
Initial:
opacity: 0
transform: translateY(24px)

Visible:
opacity: 1
transform: translateY(0)

Duration:
600ms

Easing:
motion.easing.default
```

Animation mobile :

```txt
Initial:
opacity: 0
transform: translateY(12px)

Visible:
opacity: 1
transform: translateY(0)

Duration:
400ms a 500ms
```

Stagger recommande :

```txt
Section title: 0ms
Intro text: 80ms
Cards / list items: 120ms, 200ms, 280ms...
Maximum delay: 320ms
```

Regles :

- ne pas cacher le contenu critique trop longtemps ;
- pas de reveal sur chaque petit tag si cela rend la page nerveuse ;
- sur mobile, reduire les delays ;
- une section doit rester lisible meme si JavaScript ne charge pas.

## 6. Hero entrance

La Home peut avoir une entree plus expressive que les autres pages.

Home hero :

```txt
Label: 0ms
Titre principal: 80ms
Role / phrase: 160ms
CTA: 240ms
Card code: 320ms
Sticker / doodles: 420ms
```

Animation :

```txt
opacity 0 -> 1
translateY 20px -> 0
duration 600ms
easing default
```

Card code :

```txt
opacity 0 -> 1
translateY 28px -> 0
rotate -2deg -> current rotation
duration 700ms
```

Autres pages :

- garder une entree plus sobre ;
- label, titre et texte peuvent apparaitre ensemble ou avec un stagger court ;
- pas de sequence hero longue sur Projets, KoFlix, A propos ou Contact.

## 7. ProjectCard hover

La card entiere est cliquable. Le hover doit etre visible et physique.

Default -> Hover :

```txt
transform: translate(-4px, -4px)
box-shadow: 10px 10px 0 #101113
duration: 180ms a 250ms
easing: motion.easing.snappy
```

Image hover :

```txt
transform: scale(1.03)
duration: 250ms
```

CTA interne :

```txt
arrow / label shift: translateX(2px)
duration: 150ms
```

Active :

```txt
transform: translate(2px, 2px)
box-shadow: 2px 2px 0 #101113
duration: 100ms
```

Regles :

- ne pas masquer les informations ;
- ne pas ajouter d'overlay obligatoire en V1 ;
- garder un focus visible au clavier ;
- sur mobile, pas de hover : garder seulement l'etat active/tap si utile.

## 8. Button hover

Usage :

- CTA hero ;
- boutons de cards ;
- ContactCTA ;
- liens d'action.

Default -> Hover :

```txt
transform: translate(-2px, -2px)
box-shadow: 6px 6px 0 #101113
duration: 150ms
easing: motion.easing.snappy
```

Active :

```txt
transform: translate(2px, 2px)
box-shadow: 2px 2px 0 #101113
duration: 100ms
```

Focus :

```txt
outline: 3px solid #FF6BD6
outline-offset: 3px
```

Sur fond violet :

```txt
outline: 3px solid #C7FF00
```

Regles :

- ne pas faire de hover lent ;
- le bouton doit rester stable et lisible ;
- sur mobile, privilegier l'etat active au hover.

## 9. Filters projets

Usage :

- page Projets ;
- filtres `Tous`, `Front-end`, `Full-stack`, `Creative`.

Etat selected :

```txt
background: #C7FF00
color: #101113
box-shadow: 4px 4px 0 #101113
duration: 150ms
```

Changement de filtre :

```txt
Cards leaving:
opacity 1 -> 0
translateY 0 -> 8px
duration 150ms

Cards entering:
opacity 0 -> 1
translateY 12px -> 0
duration 250ms
stagger 60ms
```

Regles :

- ne pas recharger toute la page ;
- garder une annonce accessible si le filtrage change la liste ;
- ne pas utiliser de grande animation de grille en mobile.

## 10. Floating stickers and doodles

Usage :

- stickers : `Creative dev`, `OPEN`, `CV READY`, `MORE SOON`, `CASE STUDY` ;
- doodles du hero ;
- doodles secondaires dans quelques sections.

Animation :

```txt
translateY: -4px -> 4px
rotate: -1.5deg -> 1.5deg
duration: 5000ms a 7000ms
direction: alternate
iteration: infinite
easing: motion.easing.smooth
```

Variation :

```txt
Element 1: duration 5200ms, delay 0ms
Element 2: duration 6400ms, delay 400ms
Element 3: duration 7000ms, delay 900ms
```

Regles :

- pas plus de 2 a 4 elements flottants visibles par viewport ;
- pas de mouvement sur tous les doodles ;
- ne jamais animer un grand mot decoratif si cela fatigue la lecture ;
- desactiver sur mobile sauf sticker important ;
- desactiver avec `prefers-reduced-motion`.

## 11. Page transitions

Usage :

- Accueil ;
- Projets ;
- detail projet ;
- A propos ;
- Contact.

Transition d'entree :

```txt
opacity: 0 -> 1
translateY: 12px -> 0
duration: 350ms
easing: motion.easing.default
```

Transition de sortie :

```txt
opacity: 1 -> 0
duration: 180ms
easing: motion.easing.smooth
```

Regles :

- la transition doit rester courte ;
- ne pas bloquer la navigation ;
- reset scroll top sur changement de page classique ;
- preserve scroll seulement si un flux specifique le demande.

## 12. Component rules

### Header

V1 :

- hover discret sur liens ;
- couleur active immediate ;
- underline optionnel ;
- transition 150ms.

Pas de header anime complexe en V1.

### SectionTitle

V1 :

- scroll reveal ;
- pas de hover ;
- pas de split-letter systematique.

Option plus tard :

- reveal par ligne pour les grands titres HUMANE.

### StackTag

V1 :

- pas de hover obligatoire ;
- `cursor: default` si non cliquable.

Si tag filtrant plus tard :

```txt
translateY(-2px)
box-shadow: 2px 2px 0 #101113
duration: 150ms
```

### Contact cards

V1 :

- scroll reveal ;
- hover leger uniquement si la card entiere est cliquable.

Hover possible :

```txt
transform: translate(-3px, -3px)
box-shadow offset +2px
duration: 180ms
```

### ContactCTA

V1 :

- section reveal ;
- hover uniquement sur les CTA ;
- stickers flottants tres legers si presents.

## 13. Page-by-page motion

### Accueil

- Hero entrance plus expressive.
- Card code entree avec rotation legere.
- Stickers/doodles flottants sur desktop.
- ProjectCards reveal en stagger.
- Stack cards reveal en stagger.
- Methode steps reveal en stagger.
- A propos card reveal.
- ContactCTA reveal.

### Projets

- Hero reveal sobre.
- Filtres interactifs.
- ProjectCards reveal en stagger.
- Bloc rose reveal comme une card.
- ContactCTA reveal.

### Detail projet KoFlix

- Hero reveal sobre.
- Placeholder projet reveal apres le texte.
- Section Contexte reveal.
- Objectifs 01/02/03 reveal en stagger.
- Role/Fonctionnalites cards reveal.
- Pas de floating excessif.

### A propos

- Hero reveal sobre.
- Timeline reveal item par item.
- Section `Ce que j'aime construire` reveal.
- Methode steps reveal en stagger.
- Cards competences reveal en stagger.
- ContactCTA reveal.

### Contact

- Hero reveal sobre.
- Card `Disponible pour` reveal apres le texte.
- Cards de contact reveal en 2x2 avec stagger.
- Section CV reveal.
- Stickers `OPEN` et `CV READY` flottants tres legers sur desktop.

## 14. Mobile rules

Sur mobile :

- reduire les distances de translation ;
- reduire les delays ;
- masquer ou figer la plupart des floating elements ;
- ne pas animer les grands mots decoratifs ;
- garder les interactions tactiles simples ;
- eviter toute animation qui peut creer un scroll horizontal.

Motion mobile recommandee :

```txt
Scroll reveal:
opacity 0 -> 1
translateY 12px -> 0
duration 400ms

Button active:
translateY 1px
duration 100ms

No continuous float by default
```

## 15. Accessibility

Le site doit respecter `prefers-reduced-motion`.

Regle :

```txt
Si prefers-reduced-motion = reduce:
- supprimer les translations ;
- supprimer les animations infinies ;
- garder au maximum un fade court ;
- supprimer les delays longs ;
- desactiver smooth scroll.
```

Snippet CSS recommande :

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

Regles accessibilite :

- une information ne depend jamais uniquement du hover ;
- focus visible obligatoire ;
- pas de contenu invisible par defaut sans fallback ;
- pas d'animation clignotante rapide ;
- pas de mouvement permanent massif.

## 16. Implementation notes

Animations a privilegier :

```txt
transform
opacity
filter tres leger si necessaire
```

A eviter :

```txt
top / left animes
width / height animes
box-shadow trop lourd sur trop d'elements
blur massif
```

Implementation recommandee :

- CSS variables pour tokens motion ;
- `IntersectionObserver` pour scroll reveal ;
- classes utilitaires type `.reveal`, `.is-visible`, `.stagger-*` ;
- transitions Vue pour les changements de route ;
- animations infinies reservees a quelques stickers/doodles.

Variables CSS de base :

```css
:root {
  --motion-duration-fast: 150ms;
  --motion-duration-default: 250ms;
  --motion-duration-slow: 400ms;
  --motion-duration-reveal: 600ms;
  --motion-duration-page: 350ms;
  --motion-ease-default: cubic-bezier(0.16, 1, 0.3, 1);
  --motion-ease-snappy: cubic-bezier(0.2, 0.8, 0.2, 1);
  --motion-ease-smooth: cubic-bezier(0.65, 0, 0.35, 1);
}
```

Reveal utility :

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity var(--motion-duration-reveal) var(--motion-ease-default),
    transform var(--motion-duration-reveal) var(--motion-ease-default);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

Floating utility :

```css
@keyframes float-soft {
  from {
    transform: translateY(-4px) rotate(-1.5deg);
  }

  to {
    transform: translateY(4px) rotate(1.5deg);
  }
}

.float-soft {
  animation: float-soft 6000ms var(--motion-ease-smooth) infinite alternate;
}
```

## 17. Priorite V1

Indispensable :

- Button hover ;
- ProjectCard hover ;
- scroll reveal ;
- page transition simple ;
- `prefers-reduced-motion`.

Fortement recommande :

- filtres projets animes ;
- timeline reveal ;
- stickers flottants desktop.

Optionnel / plus tard :

- marquee ;
- parallax subtil ;
- animated title par lettres ;
- galerie projet animee ;
- transitions avancees entre projets.
