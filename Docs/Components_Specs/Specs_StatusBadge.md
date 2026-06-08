# Specs — StatusBadge

### Rôle

Le composant `StatusBadge` indique l'état d'un projet.

Exemples :

* Terminé
* En cours
* Prototype
* Concept

Il permet de comprendre rapidement la maturité du projet.

### Usage

À utiliser dans :

* ProjectCard ;
* ProjectHero ;
* ProjectMeta ;
* grille de projets ;
* page détail projet.

À éviter pour :

* technologies ;
* catégories ;
* CTA.

### Contenu

Le badge doit toujours contenir un texte explicite.

Exemples :

* Terminé
* En cours
* Prototype
* Concept

Ne jamais utiliser uniquement une couleur ou une icône.

### Variants

| Variant | Label | Background | Text | Border |
| --- | --- | --- | --- | --- |
| `finished` | Terminé | `#C7FF00` | `#101113` | `#101113` |
| `in-progress` | En cours | `#FF6BD6` | `#101113` | `#101113` |
| `prototype` | Prototype | `#4B3CFF` | `#F5F1E8` | `#101113` |
| `concept` | Concept | `#F5F1E8` | `#101113` | `#101113` |

### Tailles

| Taille | Usage | Font size | Padding |
| --- | --- | --- | --- |
| `sm` | ProjectCard | `12px` | `4px 10px` |
| `md` | ProjectHero ou ProjectMeta | `14px` | `6px 12px` |

### Typographie

```css
font-family: Satoshi, sans-serif;
font-weight: 700;
font-size: 12px; /* à 14px */
line-height: 1;
```

Le badge doit être plus affirmé qu'un `StackTag`.

### Radius

```css
border-radius: 999px;
```

Token :

```txt
radius.full
```

### Bordures

```css
border: 2px solid #101113;
```

### Hover

Par défaut, le badge n'est pas interactif.

Donc :

* pas de hover ;
* `cursor: default`.

Ne pas donner un effet de bouton si le badge ne fait rien.

### Focus

Pas de focus si non interactif.

Si un jour il devient cliquable :

```css
outline: 3px solid #ff6bd6;
outline-offset: 2px;
```

### Responsive

Sur mobile :

* garder le badge court ;
* ne pas empiler trop de badges ;
* positionner près du titre ou dans le bloc meta ;
* éviter de le mettre seul en haut d'une card si cela casse la hiérarchie.

### Accessibilité

Règles :

* texte explicite obligatoire ;
* ne pas dépendre uniquement de la couleur ;
* utiliser un `<span>` ;
* si le statut est dynamique, prévoir éventuellement un `aria-label`.

Exemple :

```html
<span aria-label="Statut du projet : terminé">Terminé</span>
```

### Priorité V1

**Priorité :** P1 indispensable

Composant Vue recommandé :

```txt
StatusBadge.vue
```

---

