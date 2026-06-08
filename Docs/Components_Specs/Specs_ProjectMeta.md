# Specs — ProjectMeta

### Rôle

Le composant `ProjectMeta` présente les informations clés d'un projet sous une forme courte, lisible et structurée.

Il doit permettre de comprendre rapidement :

* le type de projet ;
* l'année ;
* le statut ;
* le rôle personnel ;
* la stack principale ;
* le contexte.

### Usage

À utiliser dans :

* page détail projet ;
* sous le `ProjectHero` ;
* éventuellement dans une sidebar desktop ;
* éventuellement dans une section « Résumé du projet ».

À éviter dans :

* une `ProjectCard` simple si cela surcharge la card.

### Contenu

Contenu recommandé :

* type ;
* année ;
* statut ;
* rôle ;
* stack principale ;
* contexte ;
* liens.

Exemple :

```txt
Type: Full-stack
Année: 2026
Statut: En cours
Rôle: Design, front-end, back-end
Stack: Vue.js, Firebase, Tailwind CSS
```

### Structure visuelle

Version recommandée :

```txt
[Label] [Valeur]
[Label] [Valeur]
[Label] [Valeur]
[Label] [Valeur]
```

Desktop :

* grille de 2 à 4 colonnes.

Mobile :

* 1 colonne.

### Variants

#### `card`

Version en bloc encadré.

```css
background: #f5f1e8;
border: 3px solid #101113;
box-shadow: 6px 6px 0 #101113;
```

C'est le variant recommandé en V1.

#### `inline`

Version plus légère.

```css
display: flex;
flex-wrap: wrap;
gap: 12px;
```

À utiliser dans `ProjectHero`.

#### `dark`

Pour fond sombre.

```css
background: #101113;
color: #f5f1e8;
border-color: #f5f1e8;
--project-meta-accent: #c7ff00;
```

### Tailles

Desktop :

```css
padding: 24px; /* à 32px */
gap: 24px;
```

Mobile :

```css
padding: 20px;
gap: 16px;
```

### Typographies

#### Label

```css
font-family: Satoshi, sans-serif;
font-weight: 700;
font-size: 12px; /* à 13px */
text-transform: uppercase; /* optionnel */
letter-spacing: 0.04em;
```

#### Valeur

```css
font-family: Satoshi, sans-serif;
font-weight: 400; /* ou 500 */
font-size: 16px; /* à 18px */
line-height: 1.4;
```

#### Valeur importante

```css
font-family: Satoshi, sans-serif;
font-weight: 700;
font-size: 18px;
```

### Couleurs

#### Fond clair

```txt
label: #474747
value: #101113
accent: #4B3CFF
border: #101113
```

#### Fond violet

```txt
label: #E8E1D4
value: #F5F1E8
accent: #C7FF00
border: #101113
```

#### Fond sombre

```txt
label: #E8E1D4
value: #F5F1E8
accent: #FF6BD6
border: #F5F1E8
```

### Padding

```txt
card desktop: 32px
card mobile: 20px
item gap: 8px
grid gap: 24px
```

### Radius

```css
border-radius: 24px;
```

Token :

```txt
radius.xl
```

### Bordures

```css
border: 3px solid #101113;
```

Pour un style plus léger :

```css
border: 2px solid #101113;
```

Pour la V1, garder `3px` pour rester cohérent avec les cards projet.

### Hover

Pas de hover par défaut.

`ProjectMeta` est informatif, pas interactif.

Seuls les liens internes au bloc peuvent avoir un hover.

### Focus

Focus uniquement sur les liens ou boutons internes.

```css
outline: 3px solid #ff6bd6;
outline-offset: 3px;
```

### Responsive

Desktop :

```css
grid-template-columns: repeat(4, 1fr);
```

Tablette :

```css
grid-template-columns: repeat(2, 1fr);
```

Mobile :

```css
grid-template-columns: 1fr;
```

Sur mobile, garder une lecture verticale simple.

### Accessibilité

Règles :

* utiliser une structure claire ;
* privilégier une liste de description HTML.

Recommandation HTML :

```html
<dl>
  <div>
    <dt>Type</dt>
    <dd>Full-stack</dd>
  </div>
</dl>
```

C'est plus sémantique qu'une succession de `div`.

### Priorité V1

**Priorité :** P1 indispensable

Composant Vue recommandé :

```txt
ProjectMeta.vue
```

---
