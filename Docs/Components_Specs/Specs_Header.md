# Specs — Header

### Rôle

Le composant `Header` sert à orienter l'utilisateur et donner accès aux pages principales du portfolio.

Il doit être :

* simple ;
* visible ;
* créatif mais pas envahissant ;
* responsive ;
* accessible.

Le header ne doit pas prendre le dessus sur le contenu.

### Usage

Présent sur toutes les pages :

* Accueil
* Projets
* Détail projet
* À propos
* Contact

### Contenu

Contenu recommandé :

* logo / nom ;
* navigation principale ;
* CTA contact optionnel ;
* bouton menu mobile.

Navigation V1 :

* Accueil
* Projets
* À propos
* Contact

Logo / nom :

```txt
Costa Maskulov
```

Ou version courte :

```txt
Costa.
```

### Structure desktop

```txt
[Logo] [Nav links] [CTA Contact]
```

Ou :

```txt
[Logo] [Nav links]
```

Recommandation V1 :

* logo à gauche ;
* navigation à droite ;
* CTA Contact visible seulement si l'espace le permet.

### Structure mobile

```txt
[Logo] [Menu button]
```

Au clic :

* `MobileMenu` plein écran ou panneau latéral.

### Variants

#### `transparent`

Pour un hero en haut de page.

```css
background: transparent;
```

À utiliser uniquement si le contraste reste excellent.

#### `solid-light`

Header sur fond clair.

```css
background: #f5f1e8;
color: #101113;
border-bottom: 2px solid #101113;
```

#### `solid-dark`

Header sur fond sombre ou violet.

```css
background: #101113; /* ou #4b3cff */
color: #f5f1e8;
border-bottom: 2px solid #101113;
```

### Position

#### Option recommandée V1 : `sticky`

```css
position: sticky;
top: 0;
z-index: 50;
```

Avantages :

* pratique ;
* simple ;
* moderne ;
* pas trop complexe.

#### Option alternative : `static`

Plus simple, mais moins pratique.

### Tailles

Desktop :

```css
height: 72px; /* à 80px */
padding-inline: 32px; /* à 48px */
```

Mobile :

```css
height: 64px;
padding-inline: 20px; /* à 24px */
```

### Typographies

#### Logo

```css
font-family: Satoshi, sans-serif;
font-weight: 700; /* ou 900 */
font-size: 18px; /* à 22px */
```

#### Navigation

```css
font-family: Satoshi, sans-serif;
font-weight: 500;
font-size: 15px; /* à 16px */
```

#### CTA

```css
font-family: Satoshi, sans-serif;
font-weight: 700;
font-size: 14px; /* à 16px */
```

Ne pas utiliser HUMANE dans le header, sauf pour un logo typographique très spécifique plus tard.

### Couleurs

#### Fond clair

```txt
background: #F5F1E8
logo: #101113
nav: #101113
active: #4B3CFF
```

#### Fond violet

```txt
background: #4B3CFF
logo: #F5F1E8
nav: #F5F1E8
active: #C7FF00
```

#### Fond sombre

```txt
background: #101113
logo: #F5F1E8
nav: #F5F1E8
active: #FF6BD6
```

### Padding

```txt
desktop: 0 48px
tablet: 0 32px
mobile: 0 24px
```

### Radius

Par défaut :

```css
border-radius: 0;
```

Option plus créative si le header devient flottant :

```css
border-radius: 999px;
```

Pour la V1, rester simple :

> Header pleine largeur.

### Bordures

```css
border-bottom: 2px solid #101113;
```

Sur fond sombre :

```css
border-bottom: 2px solid rgba(245, 241, 232, 0.2);
```

Pour garder le style brutaliste, possibilité de conserver :

```css
border-bottom: 2px solid #101113;
```

### Hover

Navigation :

```css
color: #4b3cff; /* fond clair */
text-decoration: underline;
text-underline-offset: 6px;
```

Sur fond violet ou sombre :

```css
color: #c7ff00;
```

Option plus playful :

```css
background: #c7ff00;
color: #101113;
border-radius: 999px;
padding: 6px 10px;
```

Recommandation V1 :

> Soulignement et changement de couleur.

C'est plus lisible et moins lourd.

### Active state

Lien actif :

```css
font-weight: 700;
color: var(--header-accent);
```

Option :

* petit point ou pastille sous le lien actif.

Exemple :

```txt
Projets ●
```

### Focus

Focus visible obligatoire :

```css
outline: 3px solid #ff6bd6;
outline-offset: 4px;
```

Sur fond violet :

```css
outline: 3px solid #c7ff00;
```

### Responsive

Breakpoint recommandé :

* navigation desktop visible à partir de `768px` ou `1024px` ;
* menu mobile en dessous.

Mobile :

* masquer la navigation desktop ;
* afficher le bouton menu ;
* bouton menu assez grand ;
* zone cliquable minimum de `44px` ;
* menu mobile avec liens très lisibles.

### MobileMenu lié

Le `Header` dépend du composant :

```txt
MobileMenu
```

Menu mobile recommandé :

```css
position: fixed;
inset: 0;
background: #4b3cff;
color: #f5f1e8;
```

Le menu doit comporter :

* des liens grands et lisibles ;
* un bouton fermer visible.

### Accessibilité

Règles :

* utiliser une balise `<header>` ;
* placer la navigation dans `<nav aria-label="Navigation principale">` ;
* bouton menu avec `aria-expanded` ;
* bouton menu avec `aria-controls` ;
* lien actif avec `aria-current="page"` ;
* focus visible ;
* fermeture du menu mobile avec Échap ;
* focus trap dans le menu mobile s'il est plein écran ;
* ne pas bloquer le scroll sans raison.

Exemple :

```html
<header>
  <nav aria-label="Navigation principale">
    <a href="/" aria-current="page">Accueil</a>
  </nav>
</header>
```

### Priorité V1

**Priorité :** P1 indispensable

Composants Vue recommandés :

```txt
AppHeader.vue
MobileMenu.vue
BaseButton.vue
```

---
