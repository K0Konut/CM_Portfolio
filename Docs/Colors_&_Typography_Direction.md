# Color & Typography Direction — Portfolio Costa Maskulov

**Version :** V1 — direction couleur & typo  
**Territoire :** Creative Full-Stack Playground

## 1. Analyse rapide de ta proposition

### Palette actuelle

| Rôle | Couleur |
| --- | --- |
| Primary / fond hero | `#4B3CFF` |
| Accent 1 / CTA | `#C7FF00` |
| Accent 2 / sticker | `#FF6BD6` |
| Background dark | `#474747` |
| Text black | `#101113` |
| Text clair | `#F5F1E8` |
| Doodle | `#17105B` |

### Typographies

* HUMANE — typo forte / display
* Satoshi — textes et paragraphes
* Fraunces — highlights / effet plus organique

L'ensemble donne une impression :

* digitale ;
* énergique ;
* créative ;
* pop ;
* studio ;
* un peu festival web / creative developer.

Cela correspond très bien au moodboard.

---

## 2. Ce qui fonctionne très bien

### Le violet / bleu électrique `#4B3CFF`

C'est une très bonne couleur principale.

Elle donne un côté :

* digital ;
* créatif ;
* fort ;
* moderne ;
* mémorable.

Elle peut très bien fonctionner pour :

* fond hero ;
* gros blocs de section ;
* surfaces importantes ;
* éléments de branding.

Je la garderais comme couleur signature.

Nom possible dans le design system :

```txt
color.brand.electric
```

### Le vert acide `#C7FF00`

Très bon choix pour le CTA.

Il crée un contraste très fort avec le violet, le noir et le gris foncé. C'est une couleur qui attire immédiatement l'œil.

Elle fonctionne bien pour :

* bouton principal ;
* élément important ;
* badge disponibilité ;
* hover fort ;
* highlight action.

Je la garderais, mais avec une règle stricte :

> Le vert acide doit être réservé aux actions importantes.

Sinon il perdra sa force.

Nom possible :

```txt
color.accent.lime
```

### Le rose `#FF6BD6`

Très bon pour les stickers, détails graphiques, labels ou éléments expressifs.

Il ajoute le côté :

* playful ;
* créatif ;
* pop ;
* humain ;
* plus doux.

Il ne doit pas devenir la couleur principale des textes, parce que sur fond clair il peut perdre en contraste.

Je l'utiliserais pour :

* stickers ;
* badges décoratifs ;
* mots highlight ;
* petits éléments graphiques ;
* hover secondaire.

Nom possible :

```txt
color.accent.pink
```

### Le texte clair `#F5F1E8`

Très bon choix.

Il est moins froid que du blanc pur. Cela donne un côté plus premium, plus doux, plus éditorial.

Il peut servir pour :

* texte sur fond violet ;
* texte sur fond sombre ;
* fond clair crème ;
* surface douce.

Nom possible :

```txt
color.neutral.cream
```

---

## 3. Ce que je modifierais ou cadrerais

### Le `#474747` comme background dark

Il est utilisable, mais je le trouve un peu trop neutre et « gris standard ».

Pour ton territoire, je pense qu'un fond dark devrait être plus profond, plus intentionnel.

Ton `#474747` peut servir de gris secondaire, mais pas forcément de fond principal.

Je ferais plutôt :

```txt
Background dark profond : #101113
Surface dark secondaire : #2A2A2D
Grey utility : #474747
```

Je déplacerais donc `#474747` vers un rôle de gris utilitaire :

```txt
color.neutral.grey
```

Et je donnerais à `#101113` un rôle plus fort :

```txt
color.background.dark
color.text.black
```

### Le doodle `#17105B`

Très intéressant.

Il est plus profond que ton violet principal.

Je le garderais pour :

* traits décoratifs ;
* doodles ;
* ombres colorées ;
* éléments graphiques secondaires ;
* fond très profond ;
* dessins / lignes / pictos.

Il peut aussi servir comme alternative au noir sur certains éléments.

Nom possible :

```txt
color.brand.deep
```

---

## 4. Contrastes importants

### Associations qui fonctionnent bien

| Association | Usage |
| --- | --- |
| `#4B3CFF` + `#F5F1E8` | Fond violet + texte clair |
| `#C7FF00` + `#101113` | CTA vert + texte noir |
| `#FF6BD6` + `#101113` | Sticker rose + texte noir |
| `#101113` + `#F5F1E8` | Fond sombre + texte clair |
| `#17105B` + `#F5F1E8` | Fond profond + texte clair |

### Associations à éviter

| Association | Problème |
| --- | --- |
| `#4B3CFF` + `#101113` | Pas idéal pour du texte noir sur fond violet |
| `#FF6BD6` + `#F5F1E8` | Trop faible pour du texte clair sur rose |
| `#4B3CFF` + `#FF6BD6` | Pas assez lisible pour du texte important |

**Règles importantes :**

* sur fond violet, on écrit plutôt en crème ;
* sur vert acide, on écrit en noir ;
* sur rose, on écrit en noir ;
* sur fond sombre, on écrit en crème.

---

## 5. Palette recommandée V1

Je garderais quasiment ta palette, mais en la structurant mieux.

### Brand colors

**Brand Electric Violet**

```txt
#4B3CFF
```

**Brand Deep Ink**

```txt
#17105B
```

Usage :

* hero ;
* sections fortes ;
* éléments de marque ;
* doodles ;
* formes graphiques ;
* fonds expressifs.

### Accent colors

**Accent Lime**

```txt
#C7FF00
```

**Accent Pink**

```txt
#FF6BD6
```

Usage :

* CTA principal ;
* stickers ;
* badges ;
* hover ;
* éléments décoratifs ;
* mots highlight.

### Neutral colors

**Neutral Black**

```txt
#101113
```

**Neutral Cream**

```txt
#F5F1E8
```

**Neutral Grey**

```txt
#474747
```

Usage :

* textes ;
* fonds ;
* surfaces ;
* bordures ;
* paragraphes ;
* interfaces longues.

---

## 6. Tokens couleur proposés

### Tokens primitifs

```txt
color.brand.electric = #4B3CFF
color.brand.deep = #17105B

color.accent.lime = #C7FF00
color.accent.pink = #FF6BD6

color.neutral.black = #101113
color.neutral.cream = #F5F1E8
color.neutral.grey = #474747
```

### Tokens sémantiques

```txt
color.background.primary = #F5F1E8
color.background.dark = #101113
color.background.hero = #4B3CFF
color.background.deep = #17105B

color.text.primary = #101113
color.text.inverse = #F5F1E8
color.text.muted = #474747

color.cta.primary.background = #C7FF00
color.cta.primary.text = #101113

color.sticker.primary.background = #FF6BD6
color.sticker.primary.text = #101113

color.border.strong = #101113
color.border.inverse = #F5F1E8
```

---

## 7. Rôle des couleurs par composant

### Hero

Je recommande :

* fond : `#4B3CFF` ;
* texte : `#F5F1E8` ;
* CTA principal : `#C7FF00` + texte `#101113` ;
* CTA secondaire : transparent ou crème avec bordure ;
* doodles : `#17105B` ;
* sticker : `#FF6BD6`.

Cela donnerait une entrée très forte, très identifiable.

### Page principale / sections longues

Pour éviter que tout soit trop agressif :

* fond principal : `#F5F1E8` ;
* texte : `#101113` ;
* cards : `#F5F1E8` ou blanc cassé ;
* bordures : `#101113` ;
* accents : violet / lime / rose.

Le site ne serait donc pas entièrement violet. Le violet devient un moment fort, pas un fond partout.

### ProjectCard

Option recommandée :

* fond card : `#F5F1E8` ;
* bordure : `#101113` ;
* texte : `#101113` ;
* CTA : `#C7FF00` ;
* hover : montée de `#4B3CFF` ou `#FF6BD6`.

Pour certains projets, on pourra varier l'accent de hover :

* KoFlix → violet / noir
* Mandolina → rose / crème
* Tablatures → lime / violet

### Tags stack

Pour les tags techniques, je recommande de rester sobre.

* fond : transparent ou crème ;
* bordure : `#101113` ;
* texte : `#101113` ;
* hover léger : `#C7FF00`.

Évite de mettre toutes les technologies dans des couleurs différentes au début. Sinon la page peut vite devenir trop bruyante.

### Badges statut

* Disponible / Open to work : `#C7FF00`
* Prototype : `#FF6BD6`
* Projet personnel : `#4B3CFF` + texte crème
* Terminé : `#101113` + texte crème

---

## 8. Direction typographique

Ta combinaison est très bonne, mais il faut la contrôler.

```txt
HUMANE = impact
Satoshi = lisibilité
Fraunces = personnalité / highlight
```

Je pense que c'est une très bonne base pour ton territoire.

---

## 9. HUMANE — typo display

HUMANE est une typo display très condensée, forte, pensée pour les grands titres, avec un caractère très visible. Elle est adaptée aux titres, posters, branding et usages très impactants.

Pour ton portfolio, elle est pertinente pour :

* Hero title ;
* gros mots ;
* titres de page ;
* numéros géants ;
* mots d'impact ;
* éléments graphiques.

Mais attention : HUMANE ne doit pas être utilisée partout.

À éviter :

* paragraphes ;
* descriptions longues ;
* petits textes ;
* menus trop petits ;
* boutons si la lisibilité est faible.

Usage recommandé :

> HUMANE pour les très grands titres uniquement.

Exemple :

```txt
COSTA MASKULOV
FULL-STACK DEVELOPER
PROJETS
À PROPOS
```

---

## 10. Satoshi — typo principale

Satoshi est une très bonne typo de texte pour ton projet. Elle fonctionne bien pour des interfaces modernes, propres et éditoriales.

Elle fonctionne bien pour :

* paragraphes ;
* navigation ;
* boutons ;
* descriptions projets ;
* cards ;
* pages détail ;
* formulaires ;
* textes longs.

Je la mettrais comme typo principale du système :

```txt
font.family.body = Satoshi
```

Poids recommandés :

* Regular — paragraphes
* Medium — labels, navigation, tags
* Bold — sous-titres, CTA
* Black — éventuellement pour headings secondaires

---

## 11. Fraunces — typo highlight

Fraunces est une soft-serif display expressive, playful, élégante et flexible.

Elle est très intéressante pour casser le côté trop digital de HUMANE + Satoshi.

Elle peut servir à apporter :

* humain ;
* organique ;
* éditorial ;
* personnalité ;
* chaleur ;
* contraste.

Je ne l'utiliserais pas pour tous les highlights, mais pour des moments précis :

* mots-clés dans le hero ;
* citations courtes ;
* phrases éditoriales ;
* stickers textuels ;
* accents dans la page À propos.

Exemple :

```txt
interfaces vivantes
idées
créatives
maintenables
```

---

## 12. Combinaison typographique recommandée

### Système typographique V1

* Display impact : HUMANE
* Body / UI : Satoshi
* Highlight / editorial accent : Fraunces Italic

C'est une très bonne combinaison parce que :

* HUMANE donne l'impact ;
* Satoshi donne la clarté ;
* Fraunces donne l'humain et le côté créatif.

---

## 13. Règles d'usage typo

### HUMANE

* Usage : très grands titres
* Taille : grande à très grande
* Casse : uppercase possible
* Fréquence : faible mais impactante

Exemples :

* Hero
* Titre de page
* Gros numéro de section
* Mot décoratif

### Satoshi

* Usage : interface complète
* Taille : toutes tailles
* Fréquence : dominante

Exemples :

* Navigation
* Paragraphes
* Cards
* Tags
* Boutons
* Descriptions projet
* Page détail
* Contact

### Fraunces Italic

* Usage : accent éditorial
* Taille : moyenne à grande
* Fréquence : ponctuelle

Exemples :

* Mot highlight
* Phrase courte
* Sticker
* Citation
* Texte émotionnel

---

## 14. Hiérarchie typographique proposée

### Display XL

| Propriété | Valeur |
| --- | --- |
| Font | HUMANE |
| Usage | Hero principal |
| Size desktop | 120–180px |
| Size mobile | 64–88px |
| Line-height | 0.85–0.95 |
| Letter-spacing | Léger ajustement si nécessaire |

### Display L

| Propriété | Valeur |
| --- | --- |
| Font | HUMANE |
| Usage | Titres de page |
| Size desktop | 96–128px |
| Size mobile | 56–72px |
| Line-height | 0.9 |

### Heading 1

| Propriété | Valeur |
| --- | --- |
| Font | Satoshi Black ou Satoshi Bold |
| Usage | Gros titres secondaires |
| Size desktop | 56–72px |
| Size mobile | 40–48px |
| Line-height | 1 |

### Heading 2

| Propriété | Valeur |
| --- | --- |
| Font | Satoshi Bold |
| Usage | Titres de section |
| Size desktop | 40–56px |
| Size mobile | 32–40px |
| Line-height | 1.05 |

### Heading 3

| Propriété | Valeur |
| --- | --- |
| Font | Satoshi Bold |
| Usage | Sous-sections, cards importantes |
| Size desktop | 28–32px |
| Size mobile | 24–28px |
| Line-height | 1.1 |

### Body large

| Propriété | Valeur |
| --- | --- |
| Font | Satoshi Regular / Medium |
| Usage | Intro, paragraphes importants |
| Size desktop | 20–24px |
| Size mobile | 18–20px |
| Line-height | 1.4 |

### Body default

| Propriété | Valeur |
| --- | --- |
| Font | Satoshi Regular |
| Usage | Paragraphes standards |
| Size | 16–18px |
| Line-height | 1.5 |

### Body small

| Propriété | Valeur |
| --- | --- |
| Font | Satoshi Regular |
| Usage | Descriptions secondaires |
| Size | 14–15px |
| Line-height | 1.45 |

### Label / Tag

| Propriété | Valeur |
| --- | --- |
| Font | Satoshi Medium ou Bold |
| Usage | Tags, badges, statuts |
| Size | 12–14px |
| Line-height | 1 |
| Text-transform | Uppercase possible |

### Highlight

| Propriété | Valeur |
| --- | --- |
| Font | Fraunces Italic |
| Usage | Mots mis en avant |
| Size | Dépend du contexte |

---

## 15. Exemple d'application sur le hero

* fond hero : `#4B3CFF` ;
* titre : HUMANE, `#F5F1E8` ;
* phrase manifeste : Satoshi, `#F5F1E8` ;
* mot « vivantes » ou « créatives » : Fraunces Italic, `#C7FF00` ou `#FF6BD6` ;
* CTA principal : fond `#C7FF00`, texte `#101113` ;
* CTA secondaire : bordure `#F5F1E8`, texte `#F5F1E8` ;
* doodles : `#17105B` ;
* sticker : `#FF6BD6`, texte `#101113`.

Exemple visuel en mots :

```txt
COSTA MASKULOV
Développeur full-stack

Je transforme des idées en interfaces vivantes,
créatives et maintenables.

[Voir mes projets] [Me contacter]
```

---

## 16. Direction finale recommandée

Je garderais ta direction, avec ces ajustements.

### On garde

* `#4B3CFF` comme couleur brand principale ;
* `#C7FF00` comme CTA principal ;
* `#FF6BD6` comme accent sticker / playful ;
* `#F5F1E8` comme crème clair ;
* `#101113` comme noir principal ;
* `#17105B` comme deep doodle ;
* HUMANE comme display ;
* Satoshi comme texte principal ;
* Fraunces Italic comme highlight.

### On recadre

`#474747` ne doit pas être le vrai background dark principal. Il devient plutôt un gris secondaire / muted.

### On ajoute éventuellement

Je proposerais d'ajouter un gris ou une surface intermédiaire :

```txt
Surface soft : #E8E1D4
Surface dark : #2A2A2D
```

Pas obligatoire tout de suite, mais utile pour les cards, sections secondaires et états hover.

---

## 17. Palette V1 validable

| Token visuel | Valeur |
| --- | --- |
| Brand Electric Violet | `#4B3CFF` |
| Brand Deep Doodle | `#17105B` |
| Accent Lime | `#C7FF00` |
| Accent Pink | `#FF6BD6` |
| Neutral Black | `#101113` |
| Neutral Cream | `#F5F1E8` |
| Neutral Grey | `#474747` |

Optionnel :

| Token visuel | Valeur |
| --- | --- |
| Surface Cream Darker | `#E8E1D4` |
| Surface Dark Soft | `#2A2A2D` |

---

## 18. Typo V1 validable

* Display : HUMANE
* Body / UI : Satoshi
* Highlight : Fraunces Italic

C'est une direction forte, cohérente, et surtout très alignée avec ton territoire :

> Creative Full-Stack Playground

Elle donne assez d'impact pour être mémorable, tout en gardant Satoshi pour que le site reste sérieux et lisible.
