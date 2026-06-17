# Suivi de projet - Portfolio Costa Maskulov

Derniere mise a jour : 2026-06-18

## Objectif du fichier

Ce fichier sert de point de reprise entre les sessions.

Il doit etre mis a jour a chaque fin de session pour garder une trace claire de :

- l'etat actuel du projet ;
- ce qui est termine ;
- ce qui est en cours ;
- les decisions prises ;
- la prochaine action concrete.

## Etat actuel

Phase actuelle :

```txt
Maquette concrete de la page Home
```

Nous ne sommes plus dans la creation des composants.

Le design kit principal Figma est considere termine pour les composants avec specs detaillees. La suite consiste a assembler les pages finales, en commencant par la page Accueil.

## Composants Figma termines

Composants termines selon les specs detaillees :

- Button
- StackTag
- StatusBadge
- SectionTitle
- ProjectCard
- ContactCTA
- Header
- Footer
- ProjectMeta
- ProjectHero

Correction a verifier dans Figma :

```txt
SectionTittle -> SectionTitle
```

Note :

L'inventaire global V1 mentionne d'autres elements comme `ProjectSection`, `ProjectGrid`, `ProjectGallery`, `ProjectStack`, `ProjectChallengeBlock`, etc. Ils ne sont pas tous couverts par les specs detaillees. Pour l'instant, ils ne bloquent pas la maquette Home.

## Page en cours

Page actuelle :

```txt
Accueil / Home page
```

Frame en cours :

```txt
Accueil - Desktop
```

La version mobile sera traitee apres validation de la structure desktop.

## Structure prevue pour la Home

Ordre des sections :

1. Header
2. Hero home
3. Projets mis en avant
4. Stack / competences
5. Methode / approche
6. Mini section A propos
7. ContactCTA
8. Footer

## Etat du Hero Home

Direction retenue :

```txt
Hero poster creatif inspire Creative Full-Stack Playground
```

Reference choisie :

- Gros hero violet pleine largeur.
- Nom tres dominant.
- Card code creative a droite.
- Sticker rose `Creative dev`.
- Doodles noirs.
- Badges en bas du hero.
- CTA `Voir mes projets` et `Me contacter`.

Etat actuel observe :

- Header place.
- Hero violet en place.
- Texte principal place.
- Card visuelle a droite en cours.
- La card actuelle est trop simple / trop vide.
- Il faut passer d'une fenetre vide a une vraie card code creative.

## Ajustements Hero a faire

Colonne gauche :

- Remplacer le badge pill par le label simple `CREATIVE FULL-STACK PLAYGROUND`.
- Mettre le titre en deux lignes :

```txt
COSTA
MASKULOV
```

- Agrandir fortement le titre en HUMANE.
- Ajouter ou renforcer `Developpeur full-stack` en vert lime.
- Garder une phrase manifeste courte et lisible.

CTA :

- Bouton principal : `Voir mes projets`.
- Bouton secondaire : `Me contacter`.
- Corriger le doublon actuel ou les deux boutons disent `Voir mes projets`.

Card visuelle droite :

- Remplacer le grand rectangle gris par un bloc code noir.
- Ajouter le code :

```txt
const costa = {
  role: "full-stack developer",
  focus: "creative interfaces",
  stack: ["Vue", "Node", "Firebase"]
}
```

- Ajouter un bloc lime en bas :

```txt
status:
available_for_alternance
```

- Ajouter un sticker rose :

```txt
Creative
dev
```

Details graphiques :

- Ajouter 3 doodles noirs :
  - etoile en haut centre ;
  - fleche courbe entre texte et card ;
  - symbole `</>` en bas droite.
- Ajouter une ligne de badges en bas du hero :

```txt
</> Full-stack developer
* Creative web interfaces
Vue.js / Node.js
Disponible alternance
```

## Decisions prises

- On travaille maintenant sur la maquette finale, pas sur les composants.
- Les nouveaux elements decoratifs du hero peuvent rester specifiques a la page Home.
- Il n'est pas necessaire de transformer chaque detail du hero en composant.
- Les composants existants doivent etre reutilises quand ils servent vraiment : Header, Button, ProjectCard, StackTag, ContactCTA, Footer.
- Le hero Home peut etre une composition unique.

## Prochaine action concrete

Continuer le hero desktop.

Priorite immediate :

1. Agrandir et restructurer le titre `COSTA MASKULOV`.
2. Remplir la card visuelle avec le bloc code.
3. Corriger les CTA.
4. Ajouter le sticker rose.
5. Ajouter les badges bas de hero.

Quand le hero desktop est propre, passer a :

```txt
Section Projets mis en avant
```

## Journal de session

### 2026-06-18

- Confirmation que la phase composants est terminee pour les specs detaillees.
- Passage a la maquette concrete de la Home page.
- Choix d'une direction hero plus forte, proche d'un poster creatif.
- Creation de ce fichier de suivi pour faciliter la reprise entre sessions.
