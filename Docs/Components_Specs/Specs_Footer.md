# Specs — Footer

### Rôle

Le composant `Footer` clôture le site et donne des accès secondaires utiles.

Il doit rappeler :

* l'identité ;
* les liens importants ;
* les contacts ;
* les réseaux professionnels ;
* éventuellement une phrase manifeste courte.

### Usage

Présent sur toutes les pages.

Il sert de dernier point de navigation et de contact.

### Contenu

Contenu recommandé V1 :

* nom ;
* phrase courte ;
* navigation secondaire ;
* liens sociaux ;
* email ;
* mention copyright.

Exemple :

```txt
Costa Maskulov
Développeur full-stack — interfaces vivantes, créatives et maintenables.

Accueil
Projets
À propos
Contact

GitHub
LinkedIn
Email

© 2026 Costa Maskulov
```

### Structure desktop

```txt
[Nom + manifeste]
[Navigation]
[Social links]
[Contact]
```

Ou version plus visuelle :

```txt
[Gros Costa Maskulov]
[Phrase manifeste]
[Liens]
[Copyright]
```

Recommandation V1 :

> Footer éditorial avec gros nom et liens simples.

### Structure mobile

```txt
[Nom]
[Phrase]
[Navigation]
[Liens sociaux]
[Email]
[Copyright]
```

### Variants

#### `dark`

Recommandé pour la V1.

```css
background: #101113;
color: #f5f1e8;
--footer-accent: #c7ff00;
```

#### `violet`

Plus brandé.

```css
background: #4b3cff;
color: #f5f1e8;
--footer-accent: #c7ff00;
```

#### `light`

Plus discret.

```css
background: #f5f1e8;
color: #101113;
--footer-accent: #4b3cff;
```

### Tailles

Desktop :

```css
padding-top: 64px; /* à 96px */
padding-bottom: 32px; /* à 48px */
```

Mobile :

```css
padding-top: 48px;
padding-bottom: 32px;
```

### Typographies

#### Nom / grande signature

Option forte recommandée :

```css
font-family: HUMANE, sans-serif;
font-size: 96px; /* à 160px desktop */
line-height: 0.85;
```

Mobile :

```css
font-size: 64px; /* à 88px */
```

Option sobre :

```css
font-family: Satoshi, sans-serif;
font-weight: 900;
font-size: 40px; /* à 64px desktop */
line-height: 1;
```

Mobile :

```css
font-size: 32px; /* à 40px */
```

Recommandation :

> HUMANE pour la signature footer.

Cela permet de finir le site avec une identité forte.

#### Texte manifeste

```css
font-family: Satoshi, sans-serif;
font-weight: 400;
font-size: 18px; /* à 22px desktop */
line-height: 1.5;
```

Mobile :

```css
font-size: 16px; /* à 18px */
```

#### Liens

```css
font-family: Satoshi, sans-serif;
font-weight: 500;
font-size: 15px; /* à 16px */
```

#### Copyright

```css
font-family: Satoshi, sans-serif;
font-weight: 400;
font-size: 13px; /* à 14px */
color: #e8e1d4; /* ou #f5f1e8 avec opacité */
```

### Couleurs

Footer dark recommandé :

```txt
background: #101113
title: #F5F1E8
text: #F5F1E8
muted: #E8E1D4
accent: #C7FF00
secondary accent: #FF6BD6
```

Doodles possibles :

```txt
#17105B
```

Sur fond très sombre, `#17105B` risque d'être peu visible. Il doit rester décoratif, pas informatif.

### Padding

```txt
desktop: 80px 48px 40px
tablet: 64px 32px 40px
mobile: 48px 24px 32px
```

Gap :

```txt
entre blocs principaux: 32px à 48px
entre liens: 12px à 16px
```

### Radius

Footer pleine largeur :

```css
border-radius: 0;
```

Si le footer devient une grosse carte finale :

```css
border-radius: 24px 24px 0 0;
```

Recommandation V1 :

> Footer pleine largeur sans radius.

Plus stable et plus simple.

### Bordures

Option recommandée :

```css
border-top: 3px solid #101113;
```

Sur footer dark :

```css
border-top: 3px solid #c7ff00;
```

Option plus légère :

```css
border-top: 2px solid rgba(245, 241, 232, 0.2);
```

Pour garder l'énergie visuelle :

> `border-top: 3px solid #C7FF00`

### Hover

Liens :

```css
color: #c7ff00;
text-decoration: underline;
text-underline-offset: 5px;
transition-duration: 150ms;
```

Liens sociaux :

```css
transform: translateY(-2px);
```

### Focus

```css
outline: 3px solid #ff6bd6;
outline-offset: 4px;
```

Sur fond sombre :

```css
outline: 3px solid #c7ff00;
```

### Responsive

Sur mobile :

* liens en colonne ;
* éviter trop de colonnes ;
* signature HUMANE réduite ;
* email bien visible ;
* copyright en bas ;
* pas de footer trop chargé.

Structure mobile recommandée :

```txt
[Costa Maskulov]
[Phrase manifeste]
[Navigation]
[Social links]
[Email]
[Copyright]
```

### Accessibilité

Règles :

* utiliser une balise `<footer>` ;
* liens explicites ;
* email en `mailto:` ;
* liens externes compréhensibles ;
* ne pas cacher les liens importants dans des icônes seules ;
* focus visible ;
* contraste suffisant.

Exemple email :

```html
<a href="mailto:contact@example.com">
  Envoyer un email à Costa Maskulov
</a>
```

Exemple réseau :

```html
<a href="https://github.com/example" target="_blank" rel="noreferrer">
  GitHub de Costa Maskulov
</a>
```

### Priorité V1

**Priorité :** P1 indispensable

Composant Vue recommandé :

```txt
AppFooter.vue
```

---
