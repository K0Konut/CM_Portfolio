# Specs — ContactCTA

### Rôle

Le composant `ContactCTA` sert à pousser l'utilisateur vers une prise de contact.

Il doit conclure une page ou une section avec une intention claire :

> Tu veux discuter d'un projet, d'une alternance ou d'une opportunité ?

C'est un composant important pour transformer la visite en contact.

### Usage

À utiliser dans :

* fin de page Accueil ;
* fin de page Projets ;
* fin de page À propos ;
* page Contact ;
* éventuellement fin de page détail projet.

### Contenu

Contenu recommandé :

* titre ;
* texte court ;
* CTA principal ;
* CTA secondaire optionnel ;
* liens rapides optionnels.

Exemple :

```txt
Une idée, une opportunité, un projet ?
Je suis disponible pour échanger autour d'une alternance, d'un projet web ou d'une collaboration créative.

[Me contacter]
[Voir mes projets]
```

### Variants

#### `default`

Version claire.

```css
background: #f5f1e8;
color: #101113;
--contact-cta-accent: #4b3cff;
```

CTA principal :

* lime.

#### `violet`

Version très brandée, recommandée pour la home.

```css
background: #4b3cff;
color: #f5f1e8;
--contact-cta-accent: #c7ff00;
--contact-cta-sticker: #ff6bd6;
```

#### `dark`

Version finale très contrastée.

```css
background: #101113;
color: #f5f1e8;
--contact-cta-accent: #c7ff00;
```

### Structure visuelle

Desktop :

```txt
[Titre fort]
[Texte]
[CTA principal] [CTA secondaire]
[Stickers / doodles optionnels]
```

Mobile :

```txt
[Titre]
[Texte]
[CTA principal]
[CTA secondaire]
```

### Tailles

Desktop :

```css
padding: 64px; /* à 96px */
```

Mobile :

```css
padding: 40px; /* à 48px */
```

Largeur :

```css
width: 100%;
```

Contenu :

```css
max-width: 900px;
```

### Typographies

#### Titre display

Option recommandée :

```css
font-family: HUMANE, sans-serif;
font-size: 96px; /* à 140px desktop */
line-height: 0.85; /* à 0.95 */
```

Mobile :

```css
font-size: 56px; /* à 76px */
```

#### Titre sobre

```css
font-family: Satoshi, sans-serif;
font-weight: 900;
font-size: 48px; /* à 72px desktop */
line-height: 1;
```

Mobile :

```css
font-size: 36px; /* à 44px */
```

#### Texte

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

#### Highlight

```css
font-family: Fraunces, serif;
font-style: italic;
```

Exemple :

> Discutons d'une interface vivante.

Le mot « vivante » peut être en Fraunces Italic.

### Couleurs

Variant violet recommandé :

```txt
background: #4B3CFF
title: #F5F1E8
text: #F5F1E8
highlight: #C7FF00
button primary: #C7FF00 / #101113
button secondary: transparent / #F5F1E8
```

Stickers :

```txt
background: #FF6BD6
text: #101113
```

Doodles :

```txt
#17105B
```

### Padding

```txt
desktop: 80px 64px
tablet: 64px 40px
mobile: 48px 24px
```

Gap interne :

```txt
titre → texte: 16px
texte → CTA: 32px
CTA gap: 16px
```

### Radius

Possibilité :

```css
border-radius: 32px;
```

Pour rester cohérent avec les tokens :

```txt
radius.xl = 24px
```

Recommandation V1 :

```css
border-radius: 24px;
```

### Bordures

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

Le bloc entier n'a pas besoin d'être interactif.

Hover uniquement sur les CTA.

Possibilité décorative légère :

```css
transform: rotate(0deg); /* depuis -2deg */
transition-duration: 150ms;
```

Ne pas rendre le bloc trop agité.

### Focus

Focus visible sur les boutons et liens.

```css
outline: 3px solid #ff6bd6;
outline-offset: 3px;
```

Sur variant violet :

```css
outline: 3px solid #c7ff00;
```

### Responsive

Sur mobile :

* CTA en colonne ;
* boutons largeur pleine si nécessaire ;
* titre plus court visuellement ;
* stickers décoratifs réduits ou masqués ;
* ne pas dépasser 2 CTA visibles.

Structure mobile recommandée :

```txt
[Titre]
[Texte court]
[Bouton principal]
[Bouton secondaire]
```

### Accessibilité

Règles :

* garder un vrai titre de section ;
* CTA explicite ;
* email accessible en lien `mailto:` ;
* liens externes avec texte clair ;
* ne pas dépendre des stickers pour transmettre une information importante ;
* respecter `prefers-reduced-motion`.

### Priorité V1

**Priorité :** P1 indispensable

Composant Vue recommandé :

```txt
ContactCTA.vue
```

---
