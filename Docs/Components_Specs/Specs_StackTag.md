# Specs — StackTag

### Rôle

Le composant `StackTag` sert à afficher une technologie, un outil ou une compétence technique.

Exemples :

* Vue.js
* Node.js
* Firebase
* MongoDB
* Tailwind CSS
* Figma

Il doit renforcer le côté technique du portfolio sans surcharger visuellement l'interface.

### Usage

À utiliser dans :

* ProjectCard ;
* ProjectHero ;
* ProjectStack ;
* sections compétences ;
* page détail projet.

À éviter pour :

* statuts de projet ;
* catégories de navigation ;
* CTA.

### Contenu

Structure simple :

```txt
[Nom de la technologie]
```

Structure optionnelle plus tard :

```txt
[petite icône] [Nom de la technologie]
```

En V1, rester principalement sur du texte.

### Variants

| Variant | Background | Text | Border |
| --- | --- | --- | --- |
| `default` | `#F5F1E8` | `#101113` | `#101113` |
| `violet` | `#4B3CFF` | `#F5F1E8` | `#101113` |
| `lime` | `#C7FF00` | `#101113` | `#101113` |
| `pink` | `#FF6BD6` | `#101113` | `#101113` |
| `dark` | `#101113` | `#F5F1E8` | `#101113` |

Usage :

* `default` : usage général ;
* `violet` : stack importante ;
* `lime` : technologie clé, avec modération ;
* `pink` : highlight créatif ponctuel ;
* `dark` : section claire ou tag très technique.

### Catégories possibles

Plus tard, le variant peut être dérivé de la catégorie :

* front-end ;
* back-end ;
* database ;
* design ;
* tool.

Mais en V1, il vaut mieux éviter un système trop complexe. La priorité est la lisibilité.

### Tailles

| Taille | Usage | Font size | Padding |
| --- | --- | --- | --- |
| `sm` | Cards | `12px` | `4px 10px` |
| `md` | Pages détail projet | `14px` | `6px 12px` |

### Typographie

```css
font-family: Satoshi, sans-serif;
font-weight: 500;
font-size: 12px; /* à 14px */
line-height: 1;
```

Le tag doit rester compact.

### Radius

```css
border-radius: 999px;
```

Token :

```txt
radius.full
```

Contrairement aux boutons, le tag peut être très arrondi.

### Bordures

```css
border: 2px solid #101113;
```

Pour les petits tags, `1px` peut être accepté si l'interface devient trop lourde.

### Hover

Par défaut, `StackTag` n'est pas interactif.

Donc :

* pas de hover obligatoire ;
* `cursor: default`.

Si le tag devient cliquable plus tard :

```css
transform: translateY(-2px);
box-shadow: 2px 2px 0 #101113;
cursor: pointer;
```

Pour la V1, éviter de créer de faux affordances.

### Focus

Pas de focus si le tag n'est pas interactif.

Si cliquable :

```css
outline: 3px solid #ff6bd6;
outline-offset: 2px;
```

### Responsive

Sur mobile :

* tags en wrap ;
* gap de `8px` ;
* éviter trop de tags dans les cards ;
* limiter les cards à 3 ou 4 tags visibles.

Exemple :

```txt
Vue.js · Node.js · Firebase
```

Si beaucoup de stack :

```txt
+3 autres
```

### Accessibilité

Règles :

* utiliser un `<span>` si non interactif ;
* utiliser un `<button>` si filtre interactif ;
* ne pas transmettre uniquement l'information par couleur ;
* garder le nom complet de la technologie ;
* éviter les abréviations obscures.

### Priorité V1

**Priorité :** P1 indispensable

Composant Vue recommandé :

```txt
StackTag.vue
```

---

