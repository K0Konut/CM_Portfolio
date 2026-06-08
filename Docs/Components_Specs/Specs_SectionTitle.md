# Specs — SectionTitle

### Rôle

Le composant `SectionTitle` sert à structurer les grandes sections du site.

Exemples :

* Projets mis en avant
* Stack & compétences
* Ma méthode
* À propos
* Contact

Il doit créer une hiérarchie forte, claire et mémorable.

### Usage

À utiliser dans :

* page Accueil ;
* page Projets ;
* page À propos ;
* page Contact ;
* page Détail Projet.

À éviter pour :

* titres de cards ;
* très petits blocs ;
* paragraphes internes.

### Contenu

Structure recommandée :

```txt
[Eyebrow optionnel]
[Titre principal]
[Description optionnelle]
[Highlight optionnel]
```

Exemple :

```txt
01 — Projets
Des interfaces vivantes, créatives et maintenables.
Une sélection de projets où je mélange technique, design et expérimentation.
```

### Variants

#### `default`

Pour sections classiques.

* titre : Satoshi Bold ;
* description : Satoshi Regular.

#### `display`

Pour sections très fortes visuellement.

* titre : HUMANE ;
* description : Satoshi Regular.

Usage :

* hero secondaire ;
* titre de page ;
* grosse section d'accueil.

#### `editorial`

Avec accent Fraunces Italic.

Exemple :

> Je construis des interfaces vivantes, utiles et maintenables.

Le mot « vivantes » peut être en Fraunces Italic.

### Tailles

| Taille | Usage | Title | Description |
| --- | --- | --- | --- |
| `sm` | Sous-section | `32–40px` | `16–18px` |
| `md` | Usage standard | `48–64px` | `18–20px` |
| `lg` | Usage très expressif avec HUMANE | `96–128px` | `20–24px` |

### Typographie

#### Titre standard

```css
font-family: Satoshi, sans-serif;
font-weight: 700; /* ou 900 */
font-size: 40px; /* à 72px */
line-height: 0.95; /* à 1.1 */
letter-spacing: -0.03em;
```

#### Titre display

```css
font-family: HUMANE, sans-serif;
font-size: 96px; /* à 128px desktop */
line-height: 0.85; /* à 0.95 */
```

Mobile :

```css
font-size: 56px; /* à 72px */
```

#### Description

```css
font-family: Satoshi, sans-serif;
font-weight: 400;
font-size: 16px; /* à 20px */
line-height: 1.5;
```

#### Highlight

```css
font-family: Fraunces, serif;
font-style: italic;
```

### Couleurs

| Contexte | Titre | Description | Highlight |
| --- | --- | --- | --- |
| Fond clair | `#101113` | `#474747` | `#4B3CFF` ou `#FF6BD6` |
| Fond violet | `#F5F1E8` | `#F5F1E8` | `#C7FF00` |
| Fond sombre | `#F5F1E8` | `#E8E1D4` | `#FF6BD6` ou `#C7FF00` |

### Padding

Le composant lui-même ne doit pas gérer tout l'espacement de section. La section parent doit gérer le gros padding vertical.

Padding interne recommandé :

```txt
gap entre eyebrow et titre: 8px
gap entre titre et description: 16px
margin-bottom avant une grille: 32–48px
```

### Radius

Pas de radius obligatoire.

Si le titre est dans un bloc expressif :

```css
border-radius: 24px;
```

Par défaut, `SectionTitle` reste textuel.

### Bordures

Option possible pour une version éditoriale :

```css
border-left: 4px solid #c7ff00;
padding-left: 16px;
```

Ou sticker / label au-dessus :

```css
border: 2px solid #101113;
```

### Hover

Pas de hover par défaut.

Le titre peut avoir une animation d'apparition, mais il ne doit pas se comporter comme un élément cliquable.

### Motion

Animation recommandée :

```css
opacity: 0;
transform: translateY(24px);
transition-duration: 600ms;
```

État visible :

```css
opacity: 1;
transform: translateY(0);
```

Avec `prefers-reduced-motion` :

* pas de translation ;
* fade simple ou aucun effet.

### Responsive

Sur mobile :

* réduire fortement HUMANE ;
* éviter les titres sur une seule ligne forcée ;
* autoriser les retours à la ligne ;
* garder une description courte ;
* éviter plus de 2 lignes en très gros display si possible.

Exemple mobile :

```txt
HUMANE: 56–72px
Satoshi H2: 32–40px
description: 16–18px
```

### Accessibilité

Règles :

* respecter la hiérarchie HTML ;
* utiliser `h1` une seule fois par page ;
* utiliser `h2` pour les sections principales ;
* ne pas choisir le niveau de titre selon la taille visuelle ;
* le highlight Fraunces doit rester lisible ;
* ne pas mettre du texte important uniquement en image.

Props utiles :

```txt
as="h2"
eyebrow
title
description
highlight
```

### Priorité V1

**Priorité :** P1 indispensable

Composant Vue recommandé :

```txt
SectionTitle.vue
```

---

