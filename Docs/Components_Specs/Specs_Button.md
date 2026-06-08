# Specs — Button

### Rôle

Le composant `Button` sert à déclencher une action claire : navigation, contact, ouverture de lien, soumission simple ou accès à une section importante.

Il doit être visible, expressif, mais rester très lisible.

Exemples d'usage :

* Voir mes projets
* Me contacter
* Voir le projet
* Voir le GitHub
* Voir la démo

### Usage

À utiliser pour :

* CTA principal du hero ;
* CTA secondaire du hero ;
* CTA des cards projets ;
* CTA final de section ;
* liens externes importants sur une page détail projet.

À éviter pour :

* liens textuels simples dans un paragraphe ;
* tags ou badges ;
* filtres de projets, sauf si le filtre est vraiment traité comme une action.

### Contenu

Structure recommandée :

```txt
[Label]
[Label + icône optionnelle]
```

Contenu autorisé :

* texte court ;
* icône optionnelle à droite ;
* icône optionnelle à gauche.

Exemples :

```txt
Voir mes projets
Me contacter
Voir le projet →
GitHub ↗
Démo ↗
```

Le label doit rester explicite.

Éviter les boutons vagues comme :

* Clique ici
* En savoir plus
* Go

### Variants

#### `primary`

Bouton principal, utilisé pour l'action la plus importante.

Usage principal :

* Voir mes projets
* Voir le projet
* Envoyer un message

Style :

```css
background: #c7ff00;
color: #101113;
border: 2px solid #101113;
box-shadow: 4px 4px 0 #101113;
```

#### `secondary`

Bouton secondaire, utilisé pour une action importante mais moins prioritaire.

Usage :

* Me contacter
* Voir la démo
* Retour aux projets

Style :

```css
background: #4b3cff;
color: #f5f1e8;
border: 2px solid #101113;
box-shadow: 4px 4px 0 #101113;
```

#### `outline`

Bouton plus discret, utile dans les pages de contenu.

Usage :

* lien vers GitHub ;
* lien vers Figma ;
* action secondaire dans une page détail projet.

Style :

```css
background: transparent; /* ou #f5f1e8 */
color: #101113;
border: 2px solid #101113;
box-shadow: none; /* ou 3px 3px 0 #101113 */
```

#### `ghost`

Bouton très léger, proche d'un lien UI.

Usage :

* navigation secondaire ;
* retour ;
* actions peu importantes.

Style :

```css
background: transparent;
color: #101113; /* ou #f5f1e8 selon le fond */
border-color: transparent;
box-shadow: none;
```

#### `dark`

Bouton pour fond clair avec rendu très contrasté.

Usage :

* CTA final ;
* bouton dans une section crème.

Style :

```css
background: #101113;
color: #f5f1e8;
border: 2px solid #101113;
box-shadow: 4px 4px 0 #4b3cff; /* ou #17105b */
```

### Tailles

| Taille | Usage | Height | Padding | Font size |
| --- | --- | --- | --- | --- |
| `sm` | Cards, petits blocs, actions secondaires | `40px` | `0 16px` | `14px` |
| `md` | Usage par défaut | `48px` | `0 24px` | `16px` |
| `lg` | Hero, CTA important | `56px` | `0 32px` | `18px` |

### Typographie

Police :

* Satoshi Medium ;
* Satoshi Bold.

Règles :

```css
font-weight: 600; /* ou 700 */
letter-spacing: -0.01em;
text-transform: none;
```

Ne pas utiliser HUMANE dans les boutons.

### Padding

Desktop :

```txt
sm: 0 16px
md: 0 24px
lg: 0 32px
```

Mobile :

```txt
sm: 0 14px
md: 0 20px
lg: 0 24px
```

### Radius

Recommandé :

```css
border-radius: 16px;
```

Token :

```txt
radius.lg
```

Le bouton doit avoir un aspect solide, pas trop rond.

Éviter `radius.full` pour les CTA principaux, afin de garder l'énergie néo-brutaliste.

### Bordures

```css
border-width: 2px;
border-style: solid;
border-color: #101113;
```

Pour les CTA hero très importants, possibilité de passer à :

```css
border-width: 3px;
```

### Hover

Le hover doit donner une impression physique et interactive.

Recommandation :

```css
transform: translate(-2px, -2px);
box-shadow: 6px 6px 0 #101113;
transition: 150ms ease;
```

Pour `ghost` :

```css
text-decoration: underline;
text-underline-offset: 4px;
```

Ne pas faire de hover trop lent.

### Active

Au clic :

```css
transform: translate(2px, 2px);
box-shadow: 2px 2px 0 #101113;
```

Objectif : effet « pressé ».

### Focus

Focus visible obligatoire.

```css
outline: 3px solid #ff6bd6;
outline-offset: 3px;
```

Sur fond rose, utiliser plutôt :

```css
outline: 3px solid #c7ff00;
```

Le focus ne doit jamais être supprimé.

### Disabled

```css
opacity: 0.5;
cursor: not-allowed;
transform: none;
box-shadow: none; /* ou 2px 2px 0 #101113 */
```

Le texte doit rester lisible.

### Responsive

Sur mobile :

* les boutons du hero peuvent passer en largeur pleine ;
* les boutons côte à côte peuvent devenir empilés ;
* conserver un minimum de `44px` de hauteur cliquable ;
* éviter les labels trop longs.

Exemple mobile :

```css
width: 100%;
height: 52px;
```

### Accessibilité

Règles :

* utiliser un vrai `<button>` pour une action ;
* utiliser un `<a>` stylé comme bouton pour une navigation ;
* ne pas utiliser une `div` ;
* label toujours compréhensible ;
* icône seule interdite en V1 sauf avec `aria-label` ;
* focus visible ;
* contraste élevé ;
* avec `prefers-reduced-motion`, supprimer ou réduire les translations.

### Priorité V1

**Priorité :** P1 indispensable

À designer et développer en premier.

Composant Vue recommandé :

```txt
BaseButton.vue
```

---

