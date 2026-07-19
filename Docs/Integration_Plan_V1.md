# Integration Plan V1 - Portfolio Costa Maskulov

Projet : Portfolio developpeur full-stack  
Stack cible : Vue.js + Vite + TypeScript  
Statut : preparation integration

## 1. Objectif

Ce document prepare le passage des maquettes Figma vers le code.

Il sert a cadrer :

- la stack technique ;
- l'arborescence du projet ;
- l'ordre de creation des composants ;
- l'ordre de creation des pages ;
- la gestion des donnees mockees ;
- les regles responsive ;
- les regles motion ;
- les criteres de validation avant de considerer la V1 integree.

## 2. Decision de depart

Les maquettes desktop principales sont suffisamment avancees pour commencer
l'integration.

Les versions mobile ne doivent pas reprendre toute la densite graphique desktop.
Les doodles et grands mots decoratifs seront :

- fortement reduits ;
- souvent masques ;
- jamais necessaires a la comprehension ;
- controles pour eviter tout debordement horizontal.

Decision :

```txt
On commence l'integration avec une base Vue/Vite propre, puis on implemente les
pages en mobile-first responsive, en gardant les maquettes desktop comme
reference visuelle principale.
```

## 3. Stack V1

Stack recommandee :

```txt
Vue 3
Vite
TypeScript
Vue Router
CSS natif organise par tokens / composants
```

Decision CSS :

```txt
Utiliser du CSS natif au depart.
Ne pas ajouter Tailwind tant que la structure visuelle n'est pas integree.
```

Raison :

- le design system repose sur des tokens precis ;
- les ombres, bordures, fonts et layouts neo-brutalistes sont tres specifiques ;
- le CSS natif donnera plus de controle au debut ;
- Tailwind pourra etre ajoute plus tard si necessaire.

## 4. Branche Git recommandee

Le workflow du projet prevoit :

```txt
feature branch -> dev -> main
```

Branche recommandee pour l'integration :

```txt
dev/CM_Portfolio/integration-v1
```

Ne pas developper directement sur `main`.

## 5. Arborescence cible

Arborescence recommandee :

```txt
src/
  app/
    App.vue
    main.ts
    router.ts

  design-system/
    components/
      BaseButton.vue
      StackTag.vue
      StatusBadge.vue
      SectionTitle.vue
    styles/
      reset.css
      tokens.css
      base.css
      motion.css

  layout/
    AppHeader.vue
    AppFooter.vue

  features/
    home/
      HomePage.vue
      components/
    projects/
      ProjectsPage.vue
      components/
        ProjectCard.vue
        ProjectGrid.vue
        ProjectFilters.vue
    project-detail/
      ProjectDetailPage.vue
      components/
        ProjectHero.vue
    about/
      AboutPage.vue
    contact/
      ContactPage.vue
      components/
        ContactCard.vue

  shared/
    data/
      projects.ts
      skills.ts
      contact.ts
    types/
      project.ts
      skill.ts
    utils/
      routes.ts
      motion.ts

  assets/
    fonts/
    images/
    projects/
```

## 6. Routes V1

Routes a creer :

```txt
/                  -> HomePage
/projets           -> ProjectsPage
/projets/:slug     -> ProjectDetailPage
/a-propos          -> AboutPage
/contact           -> ContactPage
```

Redirections / erreurs :

```txt
project slug inconnu -> /projets
route inconnue -> / ou page 404 plus tard
```

## 7. Ordre d'integration

### Phase 1 - Setup technique

1. Creer le projet Vue/Vite/TypeScript.
2. Ajouter Vue Router.
3. Creer l'arborescence `src/`.
4. Ajouter les fichiers CSS globaux :
   - `reset.css`
   - `tokens.css`
   - `base.css`
   - `motion.css`
5. Brancher les fonts.
6. Creer les routes vides.
7. Verifier que le serveur de dev fonctionne.

### Phase 2 - Design system minimal

Creer dans cet ordre :

1. `BaseButton.vue`
2. `StackTag.vue`
3. `StatusBadge.vue`
4. `SectionTitle.vue`
5. `AppHeader.vue`
6. `AppFooter.vue`
7. `ContactCTA.vue`

Objectif :

```txt
Avoir les briques communes avant de construire les pages.
```

### Phase 3 - Donnees mockees

Creer :

```txt
src/shared/types/project.ts
src/shared/data/projects.ts
src/shared/data/skills.ts
src/shared/data/contact.ts
```

Les donnees projet doivent permettre :

- cards Home ;
- page Projets ;
- page Detail Projet ;
- filtres ;
- liens demo / GitHub ;
- stack tags ;
- statut ;
- annee ;
- contenus case study.

### Phase 4 - Pages principales

Ordre recommande :

1. `HomePage.vue`
2. `ProjectsPage.vue`
3. `ProjectDetailPage.vue` avec KoFlix
4. `AboutPage.vue`
5. `ContactPage.vue`

Raison :

- la Home valide le design system global ;
- la page Projets valide les cards, filtres et grid ;
- la page Detail valide la structure data-driven ;
- A propos et Contact reutilisent beaucoup de patterns deja poses.

### Phase 5 - Motion

Suivre :

```txt
Docs/Motion_Spec_V1.md
```

Ordre motion :

1. hover boutons ;
2. hover ProjectCards ;
3. scroll reveal ;
4. transitions de route ;
5. filtres projets ;
6. stickers/doodles flottants desktop ;
7. `prefers-reduced-motion`.

Ne pas faire les animations au scroll dans Figma.

## 8. Tokens CSS V1

Couleurs :

```css
:root {
  --color-brand-electric: #4b3cff;
  --color-brand-deep: #17105b;
  --color-accent-lime: #c7ff00;
  --color-accent-pink: #ff6bd6;
  --color-neutral-black: #101113;
  --color-neutral-cream: #f5f1e8;
  --color-neutral-grey: #474747;
}
```

Typographies :

```css
:root {
  --font-display: "HUMANE", "Arial Narrow", sans-serif;
  --font-body: "Satoshi", system-ui, sans-serif;
  --font-accent: "Fraunces", Georgia, serif;
}
```

Motion :

```css
:root {
  --motion-duration-fast: 150ms;
  --motion-duration-default: 250ms;
  --motion-duration-slow: 400ms;
  --motion-duration-reveal: 600ms;
  --motion-ease-default: cubic-bezier(0.16, 1, 0.3, 1);
  --motion-ease-snappy: cubic-bezier(0.2, 0.8, 0.2, 1);
  --motion-ease-smooth: cubic-bezier(0.65, 0, 0.35, 1);
}
```

Spacing :

```css
:root {
  --space-2xs: 4px;
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 80px;
  --space-5xl: 96px;
}
```

Layout :

```css
:root {
  --layout-max-width: 1280px;
  --layout-page-width: 1440px;
  --layout-mobile-width: 390px;
  --border-strong: 3px solid var(--color-neutral-black);
  --radius-card: 8px;
}
```

## 9. Fonts

Fonts utilisees dans les maquettes :

```txt
HUMANE
Satoshi
Fraunces
```

Integration recommandee :

- stocker les fichiers dans `src/assets/fonts/` ou `public/fonts/` ;
- definir `@font-face` dans `base.css` ou `fonts.css` ;
- prevoir des fallbacks propres ;
- verifier les licences avant publication.

Fallbacks :

```css
--font-display: "HUMANE", "Arial Narrow", "Impact", sans-serif;
--font-body: "Satoshi", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
--font-accent: "Fraunces", Georgia, serif;
```

## 10. Responsive

Breakpoints V1 :

```css
mobile: 0 - 767px
tablet: 768px - 1023px
desktop: 1024px+
wide: 1280px+
```

Regles mobile :

- page en une colonne ;
- padding horizontal 24px ;
- titres HUMANE reduits ;
- cards empilees ;
- boutons empiles si necessaire ;
- pas de scroll horizontal ;
- doodles masques ou tres reduits ;
- grands mots decoratifs masques dans la plupart des sections ;
- pas d'animation continue par defaut.

## 11. Doodles en code

Les doodles peuvent etre integres en V1 de deux facons :

1. CSS / HTML simple pour les mots decoratifs.
2. SVG inline pour les formes dessinees.

Regle :

```txt
Les doodles restent decoratifs et doivent etre `aria-hidden="true"`.
```

Implementation :

```vue
<span class="decor-word" aria-hidden="true">SELECTED WORK</span>
```

ou :

```vue
<svg class="doodle" aria-hidden="true">...</svg>
```

Mobile :

```css
@media (max-width: 767px) {
  .decor-word {
    display: none;
  }
}
```

## 12. Donnees V1

Projets minimum :

- KoFlix ;
- Mandolina ;
- Tablatures.

Pour chaque projet :

- slug ;
- title ;
- subtitle ;
- shortDescription ;
- type ;
- status ;
- year ;
- role ;
- stack ;
- tags ;
- thumbnail ;
- coverImage ;
- context ;
- objectives ;
- features ;
- links ;
- isFeatured ;
- order.

## 13. Criteres de validation

Avant de considerer l'integration V1 correcte :

- toutes les routes principales fonctionnent ;
- header et footer visibles partout ;
- navigation active correcte ;
- page Home proche de la maquette ;
- page Projets proche de la maquette ;
- page KoFlix proche de la maquette ;
- page A propos proche de la maquette ;
- page Contact proche de la maquette ;
- responsive mobile sans debordement horizontal ;
- cards projets cliquables ;
- filtre projets fonctionnel ;
- donnees projets centralisees ;
- hover boutons et ProjectCards integres ;
- scroll reveal integre ;
- `prefers-reduced-motion` respecte ;
- focus visible ;
- images placeholders remplacees ou assumeees proprement ;
- build de production reussi.

## 14. Commandes attendues

Commandes cibles apres setup :

```txt
npm install
npm run dev
npm run build
npm run preview
```

Scripts `package.json` attendus :

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc -b && vite build",
    "preview": "vite preview"
  }
}
```

## 15. Prochaine action

Prochaine action recommandee :

```txt
Creer une branche feature puis scaffold le projet Vue/Vite/TypeScript.
```

Branche :

```txt
dev/CM_Portfolio/integration-v1
```

Puis integrer dans l'ordre :

```txt
setup -> tokens/styles -> design-system -> data mocks -> pages -> motion
```
