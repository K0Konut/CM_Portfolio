# Specs — ProjectCard

### Rôle

Le composant `ProjectCard` présente un projet dans une grille et sert d'entrée vers la page détail.

Logique validée :

```txt
Card projet → Page détail projet → GitHub / Démo si disponibles
```

La card ne doit pas envoyer directement vers GitHub ou Contact.

### Usage

À utiliser dans :

* section « Projets mis en avant » de l'accueil ;
* page Projets ;
* grille de projets ;
* suggestions de projet suivant.

Route cible :

```txt
/projets/:slug
```

### Contenu

Contenu recommandé :

* image / thumbnail ;
* StatusBadge ;
* type ;
* année ;
* titre ;
* description courte ;
* stack principale ;
* tags optionnels ;
* CTA Voir le projet.

Données liées au modèle `Project` :

```txt
title
slug
shortDescription
type
stack
year
status
thumbnail
tags
```

Structure visuelle recommandée :

```txt
[Image projet]
[StatusBadge] [Année]
[Titre]
[Description courte]
[StackTags]
[CTA Voir le projet]
```

Ou version plus expressive :

```txt
[Sticker Status]
[Image]
[Titre très visible]
[Meta: type / année]
[Description]
[Stack]
[CTA]
```

### Variants

#### `default`

Card standard pour grille.

```css
background: #f5f1e8;
color: #101113;
border: 3px solid #101113;
box-shadow: 6px 6px 0 #101113;
```

#### `featured`

Pour projets mis en avant sur l'accueil.

```css
background: #4b3cff;
color: #f5f1e8;
border: 3px solid #101113;
box-shadow: 8px 8px 0 #101113;
```

Accents possibles :

* CTA lime ;
* sticker rose ;
* doodles deep doodle.

#### `compact`

Pour « Projet suivant » ou petites grilles.

* image plus petite ;
* description limitée ;
* moins de tags ;
* CTA discret.

### Tailles

#### Desktop

Card standard :

```css
width: 100%;
min-height: 420px;
padding: 24px;
```

Image :

```css
aspect-ratio: 16 / 10;
```

#### Featured

```css
padding: 32px;
min-height: 520px;
```

Image :

```css
aspect-ratio: 16 / 9;
```

#### Mobile

```css
padding: 20px;
min-height: auto;
```

Image :

```css
aspect-ratio: 4 / 3; /* ou 16 / 10 */
```

### Couleurs

#### Fond clair

```txt
background: #F5F1E8
title: #101113
description: #474747
border: #101113
CTA: primary lime
```

#### Fond violet

```txt
background: #4B3CFF
title: #F5F1E8
description: #F5F1E8
border: #101113
CTA: lime
```

#### Accents

```txt
sticker: #FF6BD6
doodle: #17105B
highlight: #C7FF00
```

### Typographies

#### Titre

```css
font-family: Satoshi, sans-serif;
font-weight: 700; /* ou 900 */
font-size: 28px; /* à 32px desktop */
line-height: 1;
letter-spacing: -0.02em;
```

Mobile :

```css
font-size: 24px; /* à 28px */
```

Pour une card `featured`, possibilité d'utiliser HUMANE en accent, mais pas obligatoire.

#### Description

```css
font-family: Satoshi, sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.45;
```

#### Meta

```css
font-family: Satoshi, sans-serif;
font-weight: 500;
font-size: 13px; /* à 14px */
```

#### CTA

```css
font-family: Satoshi, sans-serif;
font-weight: 700;
font-size: 14px; /* à 16px */
```

### Padding

Desktop :

```txt
padding: 24px
gap interne: 16px
```

Featured :

```txt
padding: 32px
gap interne: 24px
```

Mobile :

```txt
padding: 20px
gap interne: 14px
```

### Radius

```css
border-radius: 24px;
```

Token :

```txt
radius.xl
```

Les images internes peuvent avoir :

```css
border-radius: 16px;
```

### Bordures

Card :

```css
border: 3px solid #101113;
```

Image :

```css
border: 2px solid #101113;
```

CTA :

```css
border: 2px solid #101113;
```

### Hover

La card entière est cliquable, donc le hover doit être visible.

Hover recommandé :

```css
transform: translate(-4px, -4px);
box-shadow: 10px 10px 0 #101113;
transition-duration: 150ms; /* à 250ms */
```

Image hover :

```css
transform: scale(1.03);
```

CTA hover :

* flèche qui avance légèrement.

Overlay possible :

* un bloc coloré rose ou lime monte légèrement.

Le hover doit rester rapide et ne pas gêner la lecture.

### Active

```css
transform: translate(2px, 2px);
box-shadow: 4px 4px 0 #101113;
```

### Focus

La card étant cliquable, elle doit avoir un focus visible.

```css
outline: 3px solid #ff6bd6;
outline-offset: 4px;
```

Si la card contient un `<a>` principal :

```html
<a class="project-card" href="/projets/koflix">
  <!-- contenu de la card -->
</a>
```

Le focus doit être appliqué à toute la card.

### Responsive

Desktop :

* grille de 2 ou 3 colonnes selon la page.

Tablette :

* grille de 2 colonnes.

Mobile :

* grille de 1 colonne.

Sur mobile :

* éviter les cards trop hautes ;
* limiter la description à 2 ou 3 lignes ;
* limiter la stack visible à 3 tags ;
* CTA toujours visible sans devoir chercher.

### Accessibilité

Règles importantes :

* la card doit être un lien clair vers le détail projet ;
* ne pas imbriquer plusieurs liens dans une card entièrement cliquable ;
* si la card entière est cliquable, GitHub / Démo ne doivent pas être dans la card ;
* image avec alt descriptif ;
* texte du lien explicite.

Exemple :

```txt
Voir le projet KoFlix
```

Plutôt que :

```txt
Voir le projet
```

si plusieurs cards sont listées pour les lecteurs d'écran.

Solution possible :

```html
<span aria-hidden="true">Voir le projet</span>
<span class="sr-only">Voir le projet KoFlix</span>
```

Motion :

* respecter `prefers-reduced-motion` ;
* désactiver scale / translation si nécessaire ;
* garder un hover alternatif par couleur ou bordure.

### Priorité V1

**Priorité :** P1 indispensable

Composants Vue liés :

```txt
ProjectCard.vue
ProjectGrid.vue
StackTag.vue
StatusBadge.vue
BaseButton.vue
```

---

