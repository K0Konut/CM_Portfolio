# Specs — ProjectHero

### Rôle

Le composant `ProjectHero` sert d'introduction principale à une page détail projet.

Il doit immédiatement faire comprendre :

* le nom du projet ;
* le type de projet ;
* son statut ;
* son année ;
* la promesse ou l'objectif du projet ;
* l'ambiance visuelle du projet.

C'est l'équivalent du hero de page, mais dédié à un projet précis.

### Usage

À utiliser uniquement sur les pages :

```txt
/projets/:slug
```

Il apparaît en haut de la page détail projet, avant les sections :

* Contexte
* Objectifs
* Rôle personnel
* Fonctionnalités
* Stack technique
* Choix techniques
* Difficultés / solutions
* Apprentissages
* Liens

### Contenu

Contenu recommandé :

* StatusBadge ;
* type de projet ;
* année ;
* titre du projet ;
* subtitle / phrase manifeste du projet ;
* description courte ;
* stack principale ;
* image cover ;
* liens optionnels.

Exemple :

```txt
Full-stack · 2026
KoFlix
Une plateforme de streaming fictive au design terminal / hacking.
Vue.js · Firebase · Tailwind CSS
```

### Structure visuelle

Structure recommandée desktop :

```txt
[Meta projet + titre + texte + CTA]
[Image cover projet]
```

Ou version plus créative :

```txt
[StatusBadge] [Année] [Type]
[Titre très grand]
[Subtitle]
[Description courte]
[StackTags]
[Image cover large]
```

Version V1 recommandée :

> Hero vertical avec titre fort et image cover en dessous.

C'est plus simple, plus responsive et plus facile à maintenir.

### Variants

#### `default`

Pour la majorité des projets.

```css
background: #f5f1e8;
color: #101113;
--project-hero-accent: #4b3cff;
```

#### `dark`

Pour les projets avec un univers visuel plus sombre.

```css
background: #101113;
color: #f5f1e8;
--project-hero-accent: #c7ff00;
```

#### `violet`

Pour un rendu très brandé.

```css
background: #4b3cff;
color: #f5f1e8;
--project-hero-accent: #c7ff00; /* ou #ff6bd6 */
```

### Tailles

#### Desktop

```css
padding-top: 96px; /* à 128px */
padding-bottom: 64px; /* à 96px */
gap: 48px;
```

#### Mobile

```css
padding-top: 64px;
padding-bottom: 48px;
gap: 32px;
```

#### Image cover

Desktop :

```css
aspect-ratio: 16 / 9;
```

Mobile :

```css
aspect-ratio: 4 / 3; /* ou 16 / 10 */
```

### Typographies

#### Titre projet court

Option recommandée :

```css
font-family: HUMANE, sans-serif;
font-size: 120px; /* à 160px desktop */
line-height: 0.85; /* à 0.95 */
```

Mobile :

```css
font-size: 64px; /* à 88px */
```

#### Titre projet long

```css
font-family: Satoshi, sans-serif;
font-weight: 900;
font-size: 56px; /* à 72px desktop */
line-height: 1;
```

Mobile :

```css
font-size: 40px; /* à 48px */
```

Règle simple :

> HUMANE si le titre est court. Satoshi Black si le titre est long.

#### Subtitle

```css
font-family: Satoshi, sans-serif;
font-weight: 700;
font-size: 24px; /* à 32px desktop */
line-height: 1.15;
```

Mobile :

```css
font-size: 20px; /* à 24px */
```

#### Description

```css
font-family: Satoshi, sans-serif;
font-weight: 400;
font-size: 18px; /* à 20px desktop */
line-height: 1.5;
max-width: 720px;
```

Mobile :

```css
font-size: 16px; /* à 18px */
```

#### Meta

```css
font-family: Satoshi, sans-serif;
font-weight: 500; /* ou 700 */
font-size: 13px; /* à 14px */
text-transform: none;
```

### Couleurs

#### Fond crème

```txt
title: #101113
subtitle: #101113
description: #474747
accent: #4B3CFF
highlight: #FF6BD6
```

#### Fond violet

```txt
title: #F5F1E8
subtitle: #F5F1E8
description: #F5F1E8
accent: #C7FF00
```

#### Fond sombre

```txt
title: #F5F1E8
subtitle: #F5F1E8
description: #E8E1D4
accent: #C7FF00 ou #FF6BD6
```

### Padding

Conteneur interne :

```css
padding-inline: 24px; /* mobile */
```

Desktop :

```css
padding-inline: 48px;
```

Si le hero est dans un `Container`, le composant ne doit pas forcer toute la largeur.

### Radius

Image cover :

```css
border-radius: 24px;
```

Token :

```txt
radius.xl
```

Si l'image est très grande, possibilité :

```css
border-radius: 32px;
```

### Bordures

Image cover :

```css
border: 3px solid #101113;
box-shadow: 8px 8px 0 #101113;
```

Sur fond sombre :

```css
border: 3px solid #f5f1e8;
box-shadow: 8px 8px 0 #c7ff00;
```

### Hover

Le `ProjectHero` n'est pas un élément cliquable.

Hover possible uniquement sur :

* liens GitHub ;
* lien Démo ;
* image si elle ouvre une galerie plus tard.

En V1, éviter de rendre l'image interactive si elle ne fait rien.

### Motion

Animation recommandée à l'arrivée :

| Élément | Animation | Durée |
| --- | --- | --- |
| StatusBadge / meta | Fade + `translateY(16px)` | `250ms` |
| Titre | Apparition progressive | `400ms` |
| Description | Fade | Courte à moyenne |
| Image | Fade + `translateY(32px)` | `600ms` |

Avec `prefers-reduced-motion` :

* pas de translation ;
* fade simple ou affichage direct.

### Responsive

Sur mobile :

* titre plus compact ;
* image sous le contenu ;
* stack en wrap ;
* CTA en colonne si plusieurs boutons ;
* éviter un hero trop haut qui cache le reste de la page.

Structure mobile :

```txt
[StatusBadge + année]
[Titre]
[Subtitle]
[Description]
[Stack]
[CTA]
[Image]
```

### Accessibilité

Règles :

* le titre projet doit être le `h1` de la page détail ;
* l'image cover doit avoir un alt clair ;
* ne pas mettre le titre uniquement dans l'image ;
* les liens externes doivent indiquer s'ils ouvrent une nouvelle page ;
* focus visible sur les boutons et liens ;
* contraste fort sur tous les variants.

Exemple d'alt :

```txt
Capture de l'interface KoFlix affichant une grille de films dans un style terminal.
```

### Priorité V1

**Priorité :** P1 indispensable

Composant Vue recommandé :

```txt
ProjectHero.vue
```

---
