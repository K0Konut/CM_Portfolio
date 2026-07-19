# Suivi de projet - Portfolio Costa Maskulov

Derniere mise a jour : 2026-07-19

## Objectif du fichier

Ce fichier sert de point de reprise entre les sessions.

Il doit conserver une trace claire de :

- l'etat reel du projet ;
- ce qui est termine ou valide ;
- les decisions de conception ;
- les elements encore provisoires ;
- la prochaine action concrete.

## Phase actuelle

```txt
Maquettes Figma des pages Accueil et Projets terminees et validees.
Maquettes Figma `KoFlix - Desktop` et `KoFlix - Mobile` terminees et validees
en version courte.
Maquette Figma `A propos - Desktop` avancee avec structure principale posee.
Maquette Figma `A propos - Mobile` terminee structurellement.
Page `Contact - Desktop` quasiment finalisee : Header actif, Hero Contact pose,
section `02 - Moyens de contact` ajustee, section `03 - CV / opportunites`
posee, Footer conserve.
Page `Contact - Mobile` adaptee section par section en largeur 390 px.
La creation structurelle des pages principales est consideree bonne pour
avancer.
Phase actuelle : integration demarree. Le scaffold Vue/Vite/TypeScript est en
place sur la branche `dev/CM_Portfolio/integration-v1`, avec les premieres
routes, tokens, composants de design system, donnees mockees et pages V1.
```

Le design kit principal et les composants Figma necessaires existent deja.
Les frames `Accueil - Desktop` et `Accueil - Mobile` sont assemblees et validees
dans leur ensemble.
Les frames `Projets - Desktop` et `Projets - Mobile` sont egalement assemblees
et validees.
Les frames `KoFlix - Desktop` et `KoFlix - Mobile` sont assemblees et validees
en version detail projet courte.
La frame `A propos - Desktop` est assemblee dans sa structure principale.
La frame `A propos - Mobile` est assemblee : Hero, Parcours, section
`Ce que j'aime construire`, section `Methode & competences`, ContactCTA et
Footer sont adaptes.

La structure responsive principale des pages Accueil et Projets est terminee.
La page detail KoFlix est terminee en desktop et mobile.
La page A propos est consideree terminee structurellement en desktop et mobile.
Le wording de la timeline reste provisoire.
La page Contact est consideree terminee structurellement en desktop et mobile.
La prochaine etape n'est plus de creer une page, mais de finaliser la coherence
graphique desktop/mobile puis de preparer l'integration avec la spec motion V1.

Document motion cree :

```txt
Docs/Motion_Spec_V1.md
```

Document integration cree :

```txt
Docs/Integration_Plan_V1.md
```

## Mode de travail actuel

Le MCP Figma n'est pas utilise actuellement, faute de budget tokens.

Les indications doivent donc etre donnees manuellement et de facon tres
detaillee, etape par etape. Pour chaque correction ou ajout dans Figma, il faut
preciser :

- quelle frame ou quel groupe selectionner ;
- quel Auto Layout utiliser ;
- la largeur, la hauteur, les paddings et les gaps ;
- les tailles typographiques, line-height, couleurs et opacites ;
- la position exacte des doodles ou stickers ;
- quand utiliser `Fill container`, `Hug contents`, `Absolute position`,
  `Clip content` ou les contraintes ;
- quoi masquer ou simplifier en mobile si un doodle gene la lisibilite.

Ne pas supposer que l'agent pourra modifier la maquette directement via MCP.
Le role de l'agent est de guider la construction dans Figma avec des consignes
operationnelles.

## Composants Figma disponibles

Composants termines et reutilises dans la maquette :

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

Regle de travail :

- utiliser des instances des composants existants ;
- ne pas detacher les instances sans raison technique ;
- modifier le contenu et les variants depuis les proprietes du composant ;
- garder les compositions propres a une page dans la page elle-meme.

Correction de nommage a verifier dans le fichier Figma :

```txt
SectionTittle -> SectionTitle
```

## Page Accueil - Desktop

Frame :

```txt
Accueil - Desktop
```

Etat :

```txt
Structure et direction visuelle validees
```

Ordre final des sections :

1. Header
2. Hero Home
3. Projets mis en avant
4. Stack / competences
5. Methode / approche
6. Mini section A propos
7. ContactCTA
8. Footer

La frame principale doit rester en Auto Layout vertical avec :

- largeur desktop : 1440 px ;
- sections en `Fill container` ;
- hauteur des sections en `Hug contents` ou hauteur controlee ;
- gap entre les sections : 0 ;
- doodles contenus avec `Clip content` si necessaire.

## 1. Header

Etat :

```txt
Valide
```

Direction :

- fond creme ;
- nom `Costa Maskulov` a gauche ;
- navigation a droite ;
- lien actif violet ;
- composition simple pour laisser le hero dominer.

## 2. Hero Home

Etat :

```txt
Valide
```

Direction retenue :

```txt
Hero poster creatif - Creative Full-Stack Playground
```

Elements presents :

- fond violet ;
- grand titre HUMANE `COSTA MASKULOV` ;
- label `CREATIVE FULL-STACK PLAYGROUND` ;
- role `Developpeur full-stack` en lime ;
- phrase manifeste ;
- CTA `Voir mes projets` et `Me contacter` ;
- bandeau de technologies ;
- grande card code noire inclinee ;
- syntaxe coloree ;
- bloc de statut lime ;
- sticker rose `Creative dev` ;
- doodles bleu profond.

Decision :

Le hero est une composition specifique a la Home. Ses decorations n'ont pas
besoin de devenir des composants reutilisables.

## 3. Projets mis en avant

Etat :

```txt
Structure validee - visuels projets provisoires
```

Elements presents :

- fond creme ;
- label `01 - PROJETS` ;
- titre `Projets, interfaces & experimentations` ;
- texte d'introduction ;
- trois instances de `ProjectCard` ;
- projets KoFlix, Mandolina et Tablatures ;
- variants violet, creme et dark ;
- CTA `Voir tous les projets` ;
- mot decoratif `SELECTED WORK` ;
- doodles subtils en arriere-plan.

Reste a faire plus tard :

- remplacer les rectangles gris par les vrais visuels des projets ;
- verifier les textes et les donnees definitives de chaque projet ;
- verifier les liens des CTA.

Les placeholders gris sont acceptes pendant la construction du responsive.

## 4. Stack / competences

Etat :

```txt
Valide
```

Elements presents :

- fond noir ;
- label `02 - STACK` ;
- titre `Une stack moderne pour des interfaces vivantes.` ;
- texte d'introduction ;
- trois blocs Front-end, Back-end et Design / UI ;
- tags de competences ;
- bandeau inferieur de principes de travail ;
- mot decoratif `STACK`.

## 5. Methode / approche

Etat :

```txt
Valide
```

Elements presents :

- fond creme ;
- label `03 - METHODE` ;
- titre `Je pense mes projets comme des systemes complets.` ;
- texte d'introduction ;
- panneau noir en cinq etapes ;
- numeros HUMANE colores ;
- sticker `Clean structure` ;
- mot decoratif `Process` ;
- doodles discrets.

Etapes affichees :

1. Comprendre l'idee
2. Structurer l'experience
3. Creer une interface claire
4. Developper une base maintenable
5. Tester et ameliorer

## 6. Mini section A propos

Etat :

```txt
Valide
```

Elements presents :

- fond violet ;
- label `04 - A PROPOS` ;
- grande phrase de positionnement ;
- presentation courte ;
- CTA `En savoir plus` ;
- card creme `Actuellement` ;
- informations Bac+3, recherche d'alternance et interfaces creatives ;
- court texte de disponibilite ;
- sticker `Open to Work` ;
- doodles et mot decoratif `About`.

## 7. ContactCTA

Etat :

```txt
Valide et insere comme instance
```

Variant actuel :

```txt
Dark / Full section
```

Contenu :

- titre `Une idee, une opportunite, un projet ?` ;
- texte de disponibilite ;
- CTA principal `Me contacter` ;
- CTA secondaire `Voir mon GitHub` ;
- mot decoratif `LET'S TALK`.

Decision :

Le composant `ContactCTA` existant est reutilise. Il ne faut pas reconstruire
manuellement une nouvelle section de contact autour de lui.

## 8. Footer

Etat :

```txt
Valide et insere comme instance
```

Variant retenu :

```txt
Light
```

Elements presents :

- ligne superieure lime ;
- grande signature HUMANE `Costa Maskulov` ;
- phrase de positionnement ;
- colonnes Navigation, Reseaux et Contact ;
- liens Accueil, Projets, A propos et Contact ;
- liens GitHub, LinkedIn et Email ;
- lien `Retour en haut` ;
- copyright `2026 Costa Maskulov`.

Decision :

Le footer clair est conserve. Il cree une rupture nette apres le ContactCTA
sombre et termine la page sans ajouter une nouvelle masse noire.

## Page Accueil - Mobile

Frame :

```txt
Accueil - Mobile
Largeur : 390 px
```

Etat :

```txt
Structure, direction visuelle et revue globale validees
```

La frame principale utilise un Auto Layout vertical avec :

- largeur fixe de 390 px ;
- sections en `Fill container` ;
- hauteurs en `Hug contents` ;
- gap de 0 entre les sections ;
- `Clip content` active lorsque les doodles ou ombres le necessitent.

Ordre final des sections :

1. Header mobile
2. Hero Home mobile
3. Projets mobile
4. Stack mobile
5. Methode mobile
6. A propos mobile
7. ContactCTA mobile
8. Footer mobile

Adaptations validees :

- Header compact avec nom et bouton menu ;
- Hero en une colonne avec CTA empiles, bandeau technique et card code ;
- doodles du Hero simplifies pour conserver la lisibilite ;
- trois `ProjectCard` empilees avec variants violet, creme et dark ;
- section Projets avec CTA final et doodles discrets ;
- blocs Front-end, Back-end et Design / UI empiles ;
- bandeau des principes de travail adapte avec wrap ;
- panneau Methode adapte en cinq lignes verticales lisibles ;
- sticker `Clean structure` et doodles conserves avec moderation ;
- section A propos empilee avec la card `Actuellement` ;
- sticker `Open to Work` conserve sans masquer le contenu ;
- `ContactCTA` dark avec deux boutons empiles ;
- Footer light avec navigation, reseaux, contact et retour en haut.

Decisions specifiques au mobile :

- les mots decoratifs `PROCESS`, `ABOUT` et `LET'S TALK` sont masques ;
- le mot decoratif `STACK` peut rester en arriere-plan avec une faible opacite ;
- les informations importantes ne dependent jamais des doodles ;
- aucun debordement horizontal n'est visible lors de la revue globale ;
- les placeholders gris des projets restent acceptes provisoirement.

## Page Projets

Frames :

```txt
Projets - Desktop
Largeur : 1440 px

Projets - Mobile
Largeur : 390 px
```

Etat :

```txt
Desktop et Mobile termines et valides
```

Structure finale :

1. Header
2. Hero de page / introduction
3. Filtres Tous, Front-end, Full-stack et Creative
4. Grille de projets
5. Bloc editorial `03 projets et d'autres a venir`
6. ContactCTA
7. Footer

Decisions validees :

- `Projets` est le lien actif dans le Header ;
- le Hero violet utilise HUMANE, une introduction courte et des doodles ;
- le filtre `Tous` est selectionne par defaut ;
- les `ProjectCard` menent vers `/projets/:slug` ;
- la grille desktop utilise deux colonnes ;
- KoFlix, Mandolina et Tablatures reutilisent leurs instances existantes ;
- le bloc editorial rose equilibre la deuxieme ligne desktop ;
- la grille mobile empile les trois cards et le bloc editorial ;
- le `ContactCTA` dark reutilise `Me contacter` et `Voir mon GitHub` ;
- le Footer violet est conserve pour rappeler le Hero et encadrer la page ;
- aucun debordement horizontal n'est visible sur la version mobile.

## Page detail KoFlix - Desktop

Frame :

```txt
KoFlix - Desktop
Largeur : 1440 px
```

Etat :

```txt
Version desktop courte terminee et validee
```

Structure finale :

1. Header
2. ProjectHero
3. Contexte et objectifs
4. Role et fonctionnalites
5. Navigation projet precedent / suivant
6. Footer

Decisions validees :

- `Projets` reste le lien actif dans le Header ;
- le `ProjectHero` utilise le variant dark pour renforcer l'univers KoFlix ;
- le Hero contient deja le statut, le type, l'annee, les StackTags, les liens
  demo / GitHub et le placeholder visuel principal ;
- le `ProjectMeta` a ete retire de cette page, car il creait un doublon avec
  le Hero et cassait la composition avec son radius place juste sous le Hero ;
- la section Stack technique a ete retiree en V1, car les technologies sont
  deja visibles dans les StackTags du Hero ;
- la Galerie a ete retiree en V1, car le Hero contient deja le grand
  placeholder visuel du projet ;
- la page est volontairement courte et orientee case study ;
- la section Contexte / Objectifs utilise un fond creme et une composition en
  deux colonnes ;
- la section Role / Fonctionnalites utilise un fond noir avec deux cards
  contrastees ;
- la navigation projet precedent / suivant est placee avant le Footer ;
- le Footer violet est reutilise pour rester coherent avec la page Projets.

Corrections de contenu a verifier dans Figma :

- utiliser `KoFlix` avec le F majuscule partout ;
- utiliser `Tailwind CSS` avec cette casse exacte partout.

## Page detail KoFlix - Mobile

Frame :

```txt
KoFlix - Mobile
Largeur : 390 px
```

Etat :

```txt
Version mobile courte terminee et validee
```

Structure finale :

1. Header mobile
2. ProjectHero mobile
3. Contexte et objectifs mobile
4. Role et fonctionnalites mobile
5. Navigation projet precedent / suivant mobile
6. Footer mobile

Adaptations validees :

- la frame desktop a ete dupliquee puis adaptee en largeur 390 px ;
- le Header, le ProjectHero et le Footer utilisent leurs versions mobiles ;
- le Hero conserve le statut, le type, l'annee, les StackTags, les liens demo /
  GitHub et le placeholder visuel principal ;
- la section Contexte / Objectifs est empilee en une colonne ;
- les objectifs sont corriges pour eviter le debordement horizontal ;
- la section Role / Fonctionnalites est empilee avec deux cards lisibles ;
- la navigation projet precedent / suivant est empilee en colonne pour garantir
  des zones de clic lisibles ;
- le Footer violet mobile est reutilise ;
- aucun debordement horizontal n'est visible apres revue.

Corrections de contenu a verifier dans Figma :

- renommer la frame en `KoFlix - Mobile` si elle porte encore le nom desktop ;
- utiliser `KoFlix` avec le F majuscule partout ;
- utiliser `Tailwind CSS` avec cette casse exacte partout.

## Page A propos - Desktop

Frame :

```txt
A propos - Desktop
Largeur : 1440 px
```

Etat :

```txt
Structure desktop principale posee - wording provisoire
```

Structure actuelle :

1. Header
2. Hero A propos
3. Parcours avec card `Actuellement` et timeline
4. Section `Ce que j'aime construire`
5. Section `Methode & competences`
6. ContactCTA
7. Footer

Decisions validees :

- `A propos` est le lien actif dans le Header ;
- le Hero violet presente une phrase forte de profil et un paragraphe court ;
- la section Parcours utilise un fond creme ;
- la card `Actuellement` reste sombre avec tags colores et bordure violette ;
- une timeline editoriale a ete ajoutee pour presenter les etudes, projets,
  experiences et objectifs ;
- la timeline reste volontairement en liste simple, sans grosses cards ;
- les annees utilisent HUMANE en violet ;
- les points lime et les separateurs fins structurent la timeline ;
- la section noire `Ce que j'aime construire` est conservee pour porter la
  vision personnelle ;
- la section `Methode & competences` est ajoutee sur fond creme avant le
  ContactCTA ;
- la section `Methode & competences` utilise une colonne methode a gauche et
  des blocs de competences a droite ;
- les blocs competences sont sombres avec bordures d'accent violet, lime et
  rose ;
- le Footer dark est conserve pour fermer la page A propos.

Points a finaliser plus tard :

- remplacer le wording provisoire de la timeline par les vrais etablissements,
  entreprises, periodes et lieux ;
- verifier le niveau affiche dans la card `Actuellement` ;
- harmoniser les tags competences si certains paraissent trop colores ;
- ajouter ou non un petit bandeau de principes en bas de la section
  `Methode & competences`.

## Page A propos - Mobile

Frame :

```txt
A propos - Mobile
Largeur : 390 px
```

Etat :

```txt
Structure mobile terminee et consideree validee pour avancer
```

Structure cible :

1. Header mobile
2. Hero A propos mobile
3. Parcours mobile avec card `Actuellement` et timeline
4. Section `Ce que j'aime construire` mobile
5. Section `Methode & competences` mobile
6. ContactCTA mobile
7. Footer mobile

Elements deja adaptes :

- Header mobile compact ;
- Hero mobile violet avec titre raccourci pour eviter les coupures de mots ;
- titre mobile retenu : `Je construis des interfaces avec du caractere.` ;
- paragraphe mobile raccourci et lisible ;
- section Parcours mobile sur fond creme ;
- card `Actuellement` empilee et lisible ;
- timeline mobile en une colonne avec annees, labels, points lime,
  descriptions courtes et separateurs ;
- section noire `Ce que j'aime construire` adaptee avec titre raccourci :
  `Des interfaces modernes, propres et memorables.` ;
- liste 01 / 02 / 03 conservee avec numeros HUMANE violets ;
- section `04 - Methode & competences` adaptee en mobile ;
- methode empilee en une colonne avec cinq etapes lisibles ;
- blocs competences Front-end, Back-end et Design / outils empiles ;
- tags competences ajustes pour wrapper sans debordement ;
- ContactCTA mobile revu pour etre plus compact et coherent ;
- Footer mobile conserve apres le ContactCTA.

Decisions specifiques au mobile :

- ne pas conserver les titres desktop trop longs tels quels ;
- privilegier des titres mobiles plus courts et lisibles ;
- eviter les coupures de mots dans les grands titres ;
- garder la page en une colonne ;
- limiter la longueur des descriptions dans la timeline ;
- ne pas ajouter de doodles dans le Hero mobile pour garder une lecture nette ;
- ne pas conserver de hauteurs fixes sur les textes des etapes et des cards ;
- garder les boutons du ContactCTA mobile empiles et presque pleine largeur ;
- maintenir des paddings mobiles coherents autour de 24 px en horizontal.

Points a verifier plus tard :

- refaire une revue finale rapide si des textes definitifs remplacent les textes
  provisoires ;
- verifier que le ContactCTA mobile reste compact si son contenu change ;
- verifier que les tags competences ne debordent pas apres modification.

## Page Contact - Desktop

Frame :

```txt
Contact - Desktop
```

Etat :

```txt
Desktop quasiment finalise - passer a Contact Mobile apres controle rapide
```

Structure actuelle :

1. Header
2. Hero Contact
3. 02 - Moyens de contact
4. 03 - CV / opportunites
5. Footer

Elements poses :

- frame desktop en largeur 1440 px ;
- Header clair conserve avec le lien `Contact` actif en violet ;
- Hero sur fond creme ;
- label lime `CONTACT` ;
- grand titre HUMANE :

```txt
On construit quelque chose ensemble ?
```

- texte d'intro :

```txt
Tu veux discuter d'une alternance, d'un projet ou simplement echanger ? Je suis
ouvert aux opportunites et toujours partant pour construire des interfaces
utiles, creatives et bien pensees.
```

- deux boutons dans le Hero :
  - `M'envoyer un mail` ;
  - `Voir mon LinkedIn` ;
- bloc violet a droite `Disponible pour` avec ombre noire ;
- contenus du bloc :
  - `Alternance front-end / web` si la correction a bien ete faite ;
  - `Projet UI / integration` ;
  - `Echange autour d'une opportunite` ;
- note basse :

```txt
Reponse rapide, lien mail direct, CV disponible.
```

- sticker rose `OPEN` sur le bloc violet ;
- Footer dark conserve apres le Hero.

Dernier controle Hero avant mobile :

- renommer la frame en `Contact - Desktop` si elle est encore nommee
  `Contact- Desktop` ;
- verifier que le wording principal est bien `Alternance front-end / web` ;
- verifier l'orthographe du bouton `Voir mon LinkedIn`.

Section `02 - Moyens de contact` posee :

- fond noir `#101113` ;
- intro verticale retenue, plus coherente avec les pages deja realisees qu'une
  composition horizontale ;
- label lime `02 - MOYENS DE CONTACT` ;
- titre :

```txt
Les bons liens, sans detour.
```

- texte d'introduction :

```txt
Email, LinkedIn, GitHub ou CV : choisis le canal le plus simple pour echanger,
voir mon travail ou garder mon profil sous la main.
```

- grille desktop en 2 x 2 ;
- quatre cartes : Email, LinkedIn, GitHub et CV ;
- styles de cartes :
  - Email : fond creme, texte noir, ombre lime ;
  - LinkedIn : fond violet, texte creme, ombre creme ;
  - GitHub : fond noir, texte creme, ombre violette ;
  - CV : fond rose, texte noir, ombre creme ;
- boutons reutilises depuis le composant `Button` existant ;
- contenus actuels des cartes :
  - `EMAIL` / `Le plus direct` / `M'envoyer un mail` ;
  - `LINKEDIN` / `Pour le contexte pro` / `Voir mon LinkedIn` ;
  - `GITHUB` / `Pour voir le code` / `Voir mon GitHub` ;
  - `CV` / `Pour garder une trace` / `Telecharger mon CV`.

Ajustements fins realises / a conserver sur la section 02 :

- uniformiser la hauteur des quatre cartes ;
- garder le meme padding interne sur chaque carte ;
- aligner les labels, titres, textes et boutons ;
- pousser les boutons au meme niveau avec une structure `Content group` +
  `Button` dans chaque carte ;
- alleger les paragraphes des cartes en Satoshi Regular ou Medium ;
- conserver le titre GitHub oriente code : `Pour voir le code` ou `Voir le code`
  selon la version retenue dans la maquette ;
- verifier les bordures : noir sur Email et CV, creme sur LinkedIn et GitHub ;
- conserver les ombres actuelles, qui fonctionnent bien.

Section `03 - CV / opportunites` posee :

```txt
03 - CV / opportunites
```

Role :

- finir la page Contact avant le Footer ;
- donner une action claire autour du CV ;
- rappeler rapidement les types d'opportunites recherchees.

Structure posee :

- fond creme `#F5F1E8` ;
- frame pleine largeur 1440 px ;
- section en Auto Layout vertical ;
- padding desktop environ 80 px en haut, 72 px en bas, 80 px sur les cotes ;
- container interne horizontal d'environ 1280 px ;
- colonne gauche `CV Content` ;
- card droite `Opportunity Card` ;
- sticker rose `CV READY`.

Contenu gauche :

- label lime `03 - CV / OPPORTUNITES` ;
- titre :

```txt
Un profil a garder
sous la main.
```

- paragraphe :

```txt
Je suis ouvert a une alternance front-end / full-stack, a des projets UI web
et a des echanges autour d'opportunites creatives ou techniques.
```

- boutons :
  - `Telecharger mon CV` en lime ;
  - `Voir mes projets` en rose.

Card droite :

- fond violet ;
- bordure noire epaisse ;
- ombre offset noire ;
- titre `Disponible pour` ;
- liste :
  - `Alternance front-end / web` ;
  - `Integration UI responsive` ;
  - `Vue.js / Node.js` ;
  - `Echange autour d'une opportunite`.

Decision :

La section 03 est consideree bonne. Ne pas ajouter de formulaire en V1. La page
doit rester directe, humaine et orientee action.

## Page Contact - Mobile

Frame :

```txt
Contact - Mobile
Largeur : 390 px
```

Etat :

```txt
Structure mobile adaptee section par section
```

Methode utilisee :

1. Dupliquer la frame `Contact - Desktop`.
2. Renommer la copie `Contact - Mobile`.
3. Passer la largeur de la frame principale a 390 px.
4. Garder le fond principal creme `#F5F1E8`.
5. Adapter section par section, sans tout redimensionner manuellement d'un coup.

Structure mobile cible :

1. Header mobile
2. Hero Contact mobile
3. 02 - Moyens de contact mobile
4. 03 - CV / opportunites mobile
5. Footer mobile

Header mobile :

```txt
Costa Maskulov        Menu
```

Reglages recommandes :

- hauteur : 72 px ;
- padding gauche / droite : 24 px ;
- Auto Layout horizontal ;
- alignement : Space between / Center ;
- bordure basse : 2 px `#101113` ;
- logo en Satoshi Bold 12 ou 13 px ;
- bouton `Menu` en Satoshi Bold 12 px.

Hero Contact mobile :

- frame `Hero Contact Mobile` ;
- largeur : 390 px ;
- hauteur : Hug contents ;
- fond : `#F5F1E8` ;
- Auto Layout vertical ;
- padding : 40 px en haut, 24 px sur les cotes, 48 px en bas ;
- gap : 24 px.

Ordre interne du Hero mobile :

1. label `CONTACT`
2. titre
3. paragraphe
4. boutons
5. bloc `Disponible pour`

Titre mobile conseille :

```txt
On construit quelque chose ensemble ?
```

Reglages titre :

- HUMANE ;
- taille : 64 a 72 px ;
- line-height : environ 0.9 ;
- largeur texte : 342 px.

Boutons Hero mobile :

- frame `CTA Hero` en Auto Layout vertical ;
- gap : 12 px ;
- largeur : Fill container ;
- chaque bouton en largeur Fill container ;
- hauteur bouton : 44 a 48 px.

Regle mobile :

Les sections `02 - Moyens de contact` et `03 - CV / opportunites` doivent etre
empilees en une colonne. Les cartes doivent rester lisibles, avec des paddings
plus courts, des titres plus compacts et aucun debordement horizontal.

Etat actuel apres adaptation :

- le Header mobile est adapte ;
- le Hero Contact mobile est adapte avec label, titre, paragraphe, deux CTA et
  card `Disponible pour` ;
- la section `02 - Moyens de contact` mobile est adaptee avec cartes empilees ;
- la section `03 - CV / opportunites` mobile est adaptee en une colonne ;
- la creation structurelle de la page Contact mobile est consideree bonne pour
  passer au travail graphique global.

## Decisions visuelles globales

- Direction neo-brutaliste creative mais controlee.
- Palette principale : violet, creme, noir, lime et rose.
- HUMANE reservee aux grands textes display.
- Satoshi utilisee pour les contenus et controles.
- Les doodles soutiennent la composition sans transmettre d'information.
- Les sections alternent creme, noir et violet pour rythmer la page.
- Les nouveaux decors doivent rester secondaires et places derriere les
  contenus.
- Les composants existants sont prioritaires sur les constructions manuelles.

## Points encore provisoires

- Les visuels des trois projets restent volontairement representes par des
  placeholders dans la maquette.
- Ces placeholders seront remplaces plus tard, lorsque les visuels definitifs
  seront disponibles.
- Le visuel principal de `KoFlix - Desktop` reste egalement un placeholder dans
  le `ProjectHero`. La version mobile reutilise ce placeholder. Il sera remplace
  plus tard.
- Le wording de la timeline A propos est encore provisoire.
- Les annees, etablissements, entreprises, lieux et postes de la timeline
  seront remplaces plus tard par les informations definitives.
- Les pages principales sont structurellement bonnes.
- Les pages desktop Projets, KoFlix, A propos et Contact ont ete enrichies avec
  des doodles, mots decoratifs et stickers en continuite avec la Home.
- Les versions mobile doivent rester plus sobres et etre controlees pour eviter
  les debordements.

Elements consideres comme valides :

- descriptions, statuts, annees et technologies des projets ;
- liens des CTA, reseaux et contact ;
- prototypage et interactions des composants.
- structure generale des pages desktop et mobile.

## Prochaine action concrete

Finaliser la revue responsive et preparer l'integration.

Priorites immediates :

```txt
1. Raffiner la Home pour se rapprocher de la maquette Figma.
2. Raffiner les composants `ProjectCard`, `ContactCTA`, `AppHeader` et
   `AppFooter`.
3. Continuer l'integration page par page dans l'ordre :
   Home -> Projets -> KoFlix -> A propos -> Contact.
4. Garder `Docs/Motion_Spec_V1.md` comme reference pour l'integration des
   animations en code.
```

Le plan doodles ci-dessous reste la reference si une page doit etre ajustee ou
si de nouveaux ecrans sont ajoutes.

## Plan doodles - continuite avec la Home

Objectif :

```txt
Donner aux pages Projets, KoFlix, A propos et Contact la meme personnalite que
la Home, sans transformer les pages en compositions trop chargees.
```

Reference de densite :

- Home desktop : densite maximale, hero tres expressif, plusieurs doodles.
- Projets desktop : densite forte, car c'est une page galerie.
- A propos desktop : densite moyenne, plus editoriale et humaine.
- Contact desktop : densite moyenne, orientee action et liens.
- KoFlix desktop : densite faible a moyenne, car c'est une page case study.
- Mobile : densite reduite, 1 a 2 doodles visibles par section maximum.

Regles globales Figma :

- Dans chaque section a decorer, creer un groupe ou frame nomme
  `Decor / Doodles`.
- Placer `Decor / Doodles` juste au-dessus du fond de section et sous les
  contenus principaux.
- Mettre `Decor / Doodles` en absolute position si la section est en Auto
  Layout.
- Activer `Clip content` sur la section lorsque les doodles depassent.
- Verrouiller le calque `Decor / Doodles` une fois les positions validees.
- Ne jamais mettre un doodle devant un titre, un paragraphe, un bouton, une
  card projet ou un tag.
- Les doodles ne doivent transmettre aucune information essentielle.
- Les grands mots decoratifs utilisent HUMANE, letter-spacing `0`, line-height
  `0.85` a `0.9`, et une opacite faible.
- Les traits dessines utilisent un stroke de `4 px` desktop et `3 px` mobile,
  avec caps et joins arrondis.
- Les stickers textes peuvent rester en rose `#FF6BD6`, avec texte noir
  `#101113`, mais seulement s'ils ajoutent une idee claire.

Couleurs recommandees :

```txt
Sur fond violet:
- doodles traits: #17105B a 45-65%
- mots decoratifs: #17105B a 18-28%
- petits accents: #F5F1E8 a 12-18%

Sur fond creme:
- doodles traits: #4B3CFF a 12-18% ou #17105B a 10-16%
- mots decoratifs: #101113 a 5-8% ou #4B3CFF a 8-12%
- stickers: #FF6BD6 avec bordure #101113

Sur fond noir:
- doodles traits: #F5F1E8 a 10-16% ou #4B3CFF a 18-28%
- mots decoratifs: #F5F1E8 a 5-8%
- accents courts: #C7FF00 a 20-30%
```

Bibliotheque de formes a reutiliser :

- `Doodle / Spark` : etoile 4 branches, 32 a 56 px desktop, 20 a 32 px mobile.
- `Doodle / Rays` : 3 traits courts type accent, 56 a 90 px desktop.
- `Doodle / Squiggle` : ligne ondulee, 140 a 260 px desktop.
- `Doodle / Arrow` : fleche courbe manuscrite, 180 a 320 px desktop.
- `Doodle / Bracket` : crochet ou accolade dessinee, 80 a 160 px desktop.
- `Doodle / Code` : petit symbole `</>` ou `>_`, 44 a 90 px desktop.
- `Doodle / Orbit` : ellipse imparfaite derriere une zone, stroke sans fill.

### Projets - Desktop

Frame :

```txt
Projets - Desktop
```

Hero violet :

- Selectionner la section Hero de page.
- Creer `Decor / Doodles` en absolute position.
- Ajouter un mot decoratif `PROJECTS` :
  - position : `x 790`, `y 72` dans le hero ;
  - largeur : environ `560 px` ;
  - typo : HUMANE ;
  - taille : `170 px` ;
  - line-height : `0.85` ;
  - couleur : `#17105B` ;
  - opacite : `22%` ;
  - rotation : `0 deg`.
- Ajouter `Doodle / Rays` en haut droite :
  - position : `x 1240`, `y 52` ;
  - taille : environ `86 x 76 px` ;
  - stroke : `#17105B`, `4 px`, opacite `65%`.
- Ajouter `Doodle / Spark` pres du haut gauche du hero :
  - position : `x 300`, `y 62` ;
  - taille : `42 x 42 px` ;
  - stroke : `#17105B`, opacite `55%`.
- Ajouter une petite ligne ondulee sous l'intro :
  - position : `x 88`, `y 272` ;
  - largeur : `190 px` ;
  - stroke : `#17105B`, opacite `45%`.

Section grille projets :

- Selectionner la section contenant les filtres et la grille.
- Ajouter `Decor / Doodles` derriere les filtres et les cards.
- Ajouter une ellipse imparfaite `Doodle / Orbit` derriere la grille :
  - position : `x 70`, `y 260` ;
  - taille : `1180 x 420 px` ;
  - stroke : `#4B3CFF`, `4 px` ;
  - opacite : `10%` ;
  - pas de fill.
- Ajouter un mot decoratif `ALL WORK` derriere le bloc editorial rose :
  - position : `x 790`, `y 510` ;
  - taille : `116 px` ;
  - couleur : `#101113` ;
  - opacite : `6%` ;
  - rotation : `-4 deg`.
- Ajouter un sticker `MORE SOON` sur le bloc editorial rose :
  - position : coin superieur droit du bloc rose, debord de `18 px` ;
  - taille : environ `116 x 48 px` ;
  - fond : `#C7FF00` ;
  - bordure : `2 px #101113` ;
  - rotation : `4 deg`.

Mobile Projets :

- Dans `Projets - Mobile`, conserver le hero lisible.
- Masquer le grand mot `PROJECTS` desktop.
- Ajouter seulement :
  - un `Doodle / Rays` en haut droite du hero, `44 x 38 px`, opacite `45%` ;
  - un `Doodle / Spark` en bas gauche du hero, `24 x 24 px`, opacite `40%`.
- Dans la grille mobile, ne garder qu'une ellipse tres legere derriere les
  cards :
  - largeur : `330 px` ;
  - hauteur : `520 px` ;
  - stroke : `#4B3CFF`, `3 px`, opacite `8%`.
- Masquer `ALL WORK` et `MORE SOON` si le bloc editorial devient trop serre.

### KoFlix - Desktop

Frame :

```txt
KoFlix - Desktop
```

ProjectHero dark :

- Garder cette page plus sobre que la Home.
- Creer `Decor / Doodles` dans le `ProjectHero`, derriere le contenu et le
  placeholder visuel.
- Ajouter un mot decoratif `CASE STUDY` :
  - position : `x 760`, `y 96` ;
  - largeur : environ `520 px` ;
  - typo : HUMANE ;
  - taille : `140 px` ;
  - couleur : `#F5F1E8` ;
  - opacite : `5%`.
- Ajouter un petit symbole `>_` pres du titre :
  - position : `x 105`, `y 162` ;
  - typo : Satoshi Black ou monospace si disponible ;
  - taille : `32 px` ;
  - couleur : `#C7FF00` ;
  - opacite : `70%`.
- Ajouter `Doodle / Code` `</>` en haut droite du hero :
  - position : `x 1220`, `y 92` ;
  - taille : `72 x 72 px` ;
  - stroke : `#4B3CFF`, `4 px`, opacite `45%`.
- Ajouter un sticker discret `CASE STUDY` sur le coin superieur droit du grand
  placeholder :
  - fond : `#FF6BD6` ;
  - texte : `#101113` ;
  - bordure : `2 px #101113` ;
  - rotation : `3 deg` ;
  - taille : environ `128 x 44 px`.

Section Contexte / Objectifs :

- Ajouter une fleche courbe tres discrete entre le titre gauche et les
  objectifs droits :
  - position : environ `x 490`, `y 170` dans la section ;
  - largeur : `210 px` ;
  - stroke : `#4B3CFF`, `4 px`, opacite `12%`.
- Ajouter un `Doodle / Spark` pres du coin bas gauche du bloc texte :
  - taille : `30 x 30 px` ;
  - stroke : `#17105B`, opacite `12%`.

Section Role / Fonctionnalites :

- Ajouter le mot decoratif `BUILD` derriere les deux cards :
  - position : `x 800`, `y 80` ;
  - taille : `132 px` ;
  - couleur : `#F5F1E8` ;
  - opacite : `5%`.
- Ne pas ajouter plus de deux doodles dans cette section.

Mobile KoFlix :

- Masquer `CASE STUDY` en grand.
- Garder uniquement le petit symbole `>_` pres du titre si l'espace le permet :
  - taille : `20 px` ;
  - opacite : `55%`.
- Sur le placeholder visuel, garder le sticker `CASE STUDY` seulement s'il ne
  masque pas le visuel :
  - taille mobile : `96 x 34 px` ;
  - position : coin haut droit, debord maximum `8 px`.
- Masquer la fleche de la section Contexte / Objectifs sur mobile.

### A propos - Desktop

Frame :

```txt
A propos - Desktop
```

Hero violet :

- Creer `Decor / Doodles` dans le Hero A propos.
- Ajouter un mot decoratif `ABOUT` :
  - position : `x 810`, `y 72` ;
  - largeur : `460 px` ;
  - typo : HUMANE ;
  - taille : `178 px` ;
  - couleur : `#17105B` ;
  - opacite : `24%`.
- Ajouter `Doodle / Arrow` partant de la phrase vers la card `Actuellement` si
  la card est visible dans le hero :
  - largeur : `240 px` ;
  - stroke : `#17105B`, `4 px`, opacite `48%`.
- Ajouter deux sparks autour de la zone droite :
  - un `42 x 42 px` pres du haut droit ;
  - un `28 x 28 px` plus bas, opacite plus faible.

Section Parcours :

- Ajouter un mot decoratif `TIMELINE` a droite de la section, derriere la
  liste :
  - position : `x 850`, `y 80` ;
  - taille : `124 px` ;
  - couleur : `#101113` ;
  - opacite : `5%`.
- Ajouter une ligne verticale manuscrite derriere la timeline :
  - position : environ `x 585`, `y 170` ;
  - hauteur : `420 px` ;
  - stroke : `#4B3CFF`, `4 px`, opacite `10%`.
- Garder cette ligne derriere les points lime et les separateurs.

Section `Ce que j'aime construire` :

- Ajouter le mot decoratif `BUILD` dans la partie droite :
  - position : `x 790`, `y 62` ;
  - taille : `150 px` ;
  - couleur : `#F5F1E8` ;
  - opacite : `6%`.
- Ajouter un petit `Doodle / Bracket` autour de la liste 01 / 02 / 03 :
  - position : a gauche de la liste ;
  - hauteur : `180 px` ;
  - stroke : `#4B3CFF`, opacite `28%`.

Section `Methode & competences` :

- Ajouter une fleche courbe entre la colonne methode et les cards competences :
  - largeur : `220 px` ;
  - stroke : `#4B3CFF`, `4 px`, opacite `12%`.
- Ajouter un mot decoratif `SYSTEM` derriere les cards competences :
  - taille : `118 px` ;
  - couleur : `#101113` ;
  - opacite : `5%`.

Mobile A propos :

- Respecter la decision precedente : ne pas charger le Hero mobile.
- Ne pas ajouter de grand mot decoratif dans le Hero mobile.
- Ajouter les doodles seulement dans les sections suivantes :
  - Parcours : un spark `24 x 24 px` pres du coin superieur droit de la card
    `Actuellement`, opacite `18%`.
  - `Ce que j'aime construire` : mot `BUILD` en HUMANE, taille `88 px`,
    opacite `5%`, position bas droite, derriere la liste.
  - `Methode & competences` : une petite fleche courbe entre la methode et la
    premiere card competence, opacite `10%`.
- Masquer `TIMELINE`, `SYSTEM` et les grands brackets si un debordement
  horizontal apparait.

### Contact - Desktop

Frame :

```txt
Contact - Desktop
```

Hero Contact creme :

- Creer `Decor / Doodles` dans le Hero Contact.
- Ajouter un mot decoratif `LET'S TALK` :
  - position : `x 735`, `y 62` ;
  - largeur : `500 px` ;
  - typo : HUMANE ;
  - taille : `150 px` ;
  - couleur : `#101113` ;
  - opacite : `5%` ;
  - rotation : `-2 deg`.
- Ajouter une fleche courbe depuis les CTA vers la card violette :
  - position : entre la colonne gauche et la card droite ;
  - largeur : `260 px` ;
  - stroke : `#4B3CFF`, `4 px`, opacite `18%`.
- Ajouter un petit symbole `@` dessine pres de la card `Disponible pour` :
  - taille : `52 px` ;
  - stroke : `#17105B`, opacite `18%`.
- Conserver le sticker rose `OPEN`.

Section `02 - Moyens de contact` :

- Ajouter un mot decoratif `LINKS` derriere la grille :
  - position : `x 840`, `y 62` ;
  - taille : `156 px` ;
  - couleur : `#F5F1E8` ;
  - opacite : `6%`.
- Ajouter une ligne courbe tres legere qui passe derriere les quatre cartes :
  - stroke : `#4B3CFF`, `4 px`, opacite `16%`.
- Ajouter un `Doodle / Spark` pres du titre :
  - taille : `34 x 34 px` ;
  - stroke : `#C7FF00`, opacite `35%`.

Section `03 - CV / opportunites` :

- Ajouter le mot decoratif `READY` derriere la card violette :
  - position : `x 825`, `y 60` ;
  - taille : `142 px` ;
  - couleur : `#101113` ;
  - opacite : `5%`.
- Ajouter un underline dessine sous `sous la main.` :
  - largeur : `260 px` ;
  - stroke : `#4B3CFF`, `4 px`, opacite `18%`.
- Conserver le sticker rose `CV READY`, sans ajouter un second sticker.

Mobile Contact :

- Dans le Hero mobile, masquer `LET'S TALK`.
- Garder seulement :
  - un petit `@` pres de la card violette, taille `28 px`, opacite `15%` ;
  - un `Doodle / Spark` pres du haut droit, taille `22 px`.
- Dans `02 - Moyens de contact`, masquer `LINKS` et la grande ligne courbe.
- Garder un seul spark pres du label de section si la zone respire encore.
- Dans `03 - CV / opportunites`, masquer `READY`.
- Garder l'underline sous le titre seulement s'il ne touche pas les boutons.

### Controle final apres ajout

Checklist desktop :

- Les doodles sont derriere les contenus.
- Aucun texte utile n'est recouvert.
- Les grands mots decoratifs restent visibles mais secondaires.
- Les pages Projets, A propos et Contact ont une energie proche de la Home.
- KoFlix reste plus sobre et plus case study.
- Les stickers ne se multiplient pas inutilement.
- La palette reste violet, creme, noir, lime et rose.

Checklist mobile :

- Aucun debordement horizontal en largeur `390 px`.
- Les grands mots decoratifs desktop sont masques ou fortement reduits.
- Chaque section mobile garde au maximum 1 a 2 doodles visibles.
- Les boutons et cards restent les elements les plus lisibles.
- Les decisions precedentes de lisibilite mobile restent prioritaires.

## Journal de session

### 2026-07-19

- Verification des documents existants autour de la motion :
  `Brand-UX-Direction.md`, `Design_System_Foundations.md`, `UX_Structure.md`,
  `PRD.md` et specs composants.
- Confirmation que la direction motion etait deja presente : scroll reveal,
  hovers, transitions de page, titres animes, stickers flottants, pas de custom
  cursor et respect de `prefers-reduced-motion`.
- Decision de ne pas prototyper les animations de scroll reveal dans Figma,
  car Figma ne donne pas un equivalent propre du trigger `element enters
  viewport` utilise en integration web.
- Creation du document centralise `Docs/Motion_Spec_V1.md`.
- La Motion Spec V1 contient les tokens de duree/easing, les regles de scroll
  reveal, hover de boutons, hover de ProjectCards, filtres projets, stickers
  flottants, transitions de page, regles mobile et accessibilite.
- Decision de passer a la preparation de l'integration plutot que continuer les
  doodles mobile, car les versions mobile doivent rester sobres.
- Creation de `Docs/Integration_Plan_V1.md` pour cadrer le scaffold Vue/Vite,
  l'arborescence, les routes, les composants, les donnees mockees, les tokens,
  le responsive, les doodles en code et les criteres de validation.
- Prochaine action recommandee : creer la branche
  `dev/CM_Portfolio/integration-v1`, scaffold le projet Vue/Vite/TypeScript,
  puis suivre l'ordre `setup -> tokens/styles -> design-system -> data mocks ->
  pages -> motion`.
- Creation de la branche `dev/CM_Portfolio/integration-v1`.
- Scaffold initial Vue/Vite/TypeScript ajoute :
  - `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html` ;
  - routes Vue Router : `/`, `/projets`, `/projets/:slug`, `/a-propos`,
    `/contact` ;
  - CSS globaux : `reset.css`, `tokens.css`, `base.css`, `motion.css` ;
  - composants initiaux : `BaseButton`, `StackTag`, `StatusBadge`,
    `SectionTitle`, `ContactCTA`, `AppHeader`, `AppFooter` ;
  - donnees mockees projets et contact ;
  - pages V1 initiales : Home, Projets, Detail projet, A propos, Contact.
- Installation npm effectuee avec succes.
- Validation technique : `npm run build` passe.
- Serveur local Vite demarre sur `http://localhost:5173/`.

### 2026-07-17

- Reprise du contexte apres la creation structurelle des pages principales.
- Analyse de la Home comme reference de personnalite graphique.
- Confirmation que les autres pages paraissent plus plates par manque de
  doodles, mots decoratifs et traces dessinees.
- Ajout d'un plan operationnel pour enrichir `Projets`, `KoFlix`, `A propos`
  et `Contact` avec des doodles desktop et mobile.
- Decision de garder KoFlix plus sobre que les pages principales, car c'est une
  page detail projet.
- Decision de reduire fortement les doodles en mobile pour proteger la
  lisibilite et eviter les debordements.

### 2026-07-16

- Adaptation de la page `Contact - Mobile` a partir de la version desktop
  dupliquee.
- Revue et ajustement du Hero Contact mobile :
  - titre HUMANE reduit et rendu plus horizontal ;
  - padding mobile ajuste ;
  - paragraphe rendu plus compact ;
  - boutons empiles et plus coherents ;
  - card violette `Disponible pour` ajustee.
- Revue et ajustement de la section `02 - Moyens de contact` mobile :
  - cartes empilees en une colonne ;
  - largeurs corrigees en `Fill container` ;
  - titres et paragraphes corriges pour eviter les coupures ;
  - cartes Email, LinkedIn, GitHub et CV rendues plus lisibles.
- Revue et ajustement de la section `03 - CV / opportunites` mobile :
  - colonne mobile corrigee ;
  - titre, paragraphe, boutons et card violette remis sur une largeur mobile
    lisible ;
  - section consideree bonne structurellement.
- Confirmation que la creation des pages principales est globalement terminee.
- Nouveau sujet de travail : enrichir les pages Projets, KoFlix, A propos et
  Contact avec des doodles et elements graphiques pour retrouver l'energie
  expressive de la Home.
- Decision importante : le MCP Figma n'est pas utilise actuellement. Les
  prochaines consignes doivent etre donnees manuellement, de maniere detaillee,
  avec les frames, paddings, gaps, tailles et positions a appliquer dans Figma.

### 2026-07-15

- Reprise de la page `Contact - Desktop` a partir de la maquette existante.
- Validation du principe de ne pas reconstruire la page et de travailler la zone
  creme vide entre la section `02 - Moyens de contact` et le Footer.
- Creation de la section `03 - CV / opportunites` sur fond creme.
- Mise en place d'une composition desktop en deux colonnes :
  - contenu CV a gauche ;
  - card `Disponible pour` a droite.
- Ajout du label lime `03 - CV / OPPORTUNITES`.
- Ajout du titre :

```txt
Un profil a garder
sous la main.
```

- Ajout du texte autour de l'alternance front-end / full-stack, des projets UI
  web et des opportunites creatives ou techniques.
- Ajout des CTA `Telecharger mon CV` et `Voir mes projets`.
- Ajout de la card violette `Disponible pour` avec liste d'opportunites :
  `Alternance front-end / web`, `Integration UI responsive`,
  `Vue.js / Node.js`, `Echange autour d'une opportunite`.
- Ajout du sticker rose `CV READY`.
- Ajustement de la section pour reduire le vide vertical, centrer la card droite
  avec le contenu gauche et garder la ligne lime avant le Footer.
- Confirmation que la section `03 - CV / opportunites` est bonne.
- Confirmation que la section `02 - Moyens de contact` est egalement bonne
  apres ajustements fins.
- A ce moment-la, la prochaine etape etait de creer `Contact - Mobile` en
  largeur 390 px, section par section.

### 2026-07-11

- Relecture du suivi projet et des documents de direction avant de continuer la
  page `Contact - Desktop`.
- Confirmation que la section a creer etait `02 - Moyens de contact`.
- Creation de la section 02 sur fond noir, sous le Hero Contact.
- Choix d'une intro verticale label / titre / texte, plus coherente avec les
  pages deja realisees qu'une intro horizontale.
- Ajout du label lime `02 - MOYENS DE CONTACT`.
- Ajout du titre `Les bons liens, sans detour.`.
- Ajout du texte d'introduction autour de Email, LinkedIn, GitHub et CV.
- Creation d'une grille desktop 2 x 2 avec quatre cartes : Email, LinkedIn,
  GitHub et CV.
- Validation de la direction visuelle des cartes : creme, violet, noir et rose,
  avec ombres offset lime, creme ou violette.
- Contenus poses : `M'envoyer un mail`, `Voir mon LinkedIn`,
  `Voir mon GitHub` et `Telecharger mon CV`.
- Ajustements restants notes : uniformiser les hauteurs, aligner les boutons,
  alleger les paragraphes et renommer le titre GitHub en `Voir le code`.
- A ce stade, la prochaine section a creer etait `03 - CV / opportunites`.

### 2026-07-09

- Reprise du contexte depuis le suivi de projet.
- Confirmation que la derniere page principale a traiter est `Contact`.
- Creation de la frame `Contact - Desktop` en repartant d'une page desktop
  existante.
- Conservation du Header et du Footer existants.
- Mise du lien `Contact` en etat actif dans le Header.
- Creation du Hero Contact desktop sur fond creme.
- Ajout du label lime `CONTACT`.
- Ajout du grand titre HUMANE `On construit quelque chose ensemble ?`.
- Ajout du texte d'introduction humain autour d'une alternance, d'un projet ou
  d'un echange.
- Ajout des deux CTA du Hero : `M'envoyer un mail` et `Voir mon LinkedIn`.
- Ajout du bloc violet `Disponible pour` avec une liste d'opportunites et le
  sticker rose `OPEN`.
- Decision de faire la section `02 - Moyens de contact` plus tard.

### 2026-07-05

- Reprise du contexte autour de `A propos - Mobile`.
- Confirmation que la section restante etait `04 - Methode & competences`.
- Adaptation manuelle de la section mobile a partir du desktop en largeur
  390 px.
- Correction des coherences mobile : paddings, tailles typographiques,
  hauteurs de textes, wrapping des tags et espacements internes.
- Validation de la section `Methode & competences` mobile avec methode en une
  colonne et cards competences empilees.
- Revue du `ContactCTA` mobile pour le rendre plus compact et coherent avec une
  fin de page mobile.
- Confirmation que `A propos - Mobile` est consideree bonne structurellement.
- Decision de traiter la derniere page principale, `Contact`, plus tard.

### 2026-06-30

- Reprise du contexte apres interruption machine.
- Confirmation que le suivi local ne contenait pas encore l'etat reel de la
  page `A propos`.
- Analyse de la frame `A propos - Desktop` en cours dans Figma.
- Validation de la structure desktop generale : Header, Hero, Parcours,
  `Ce que j'aime construire`, `Methode & competences`, ContactCTA et Footer.
- Ajout d'une timeline dans la section Parcours desktop pour representer les
  etudes, lieux d'etudes, experiences et objectifs.
- Decision de garder la timeline en liste editoriale plutot qu'en grille de
  cards.
- Ajout de la section `Methode & competences` desktop sur fond creme.
- Mise en place d'une colonne methode avec cinq etapes et d'une colonne
  competences avec groupes Front-end, Back-end et Design / outils.
- Passage a l'adaptation mobile de la page `A propos`.
- Correction du Hero mobile avec un titre raccourci pour eviter les coupures de
  mots.
- Adaptation de la section Parcours mobile avec card `Actuellement` et timeline
  empilee.
- Correction de la section noire `Ce que j'aime construire` mobile avec un
  titre plus court et lisible.
- Decision de traiter `Methode & competences` mobile lors de la prochaine
  session.

### 2026-06-29

- Creation et validation de la frame `KoFlix - Desktop`.
- Reutilisation du Header desktop avec le lien `Projets` actif.
- Creation du `ProjectHero` dark pour KoFlix avec statut, type, annee,
  StackTags, boutons demo / GitHub et grand placeholder visuel.
- Suppression du `ProjectMeta` dans la composition finale, car il faisait
  doublon avec le Hero et creait une cassure visuelle sous la section.
- Creation et validation de la section `Contexte et objectifs` sur fond creme.
- Creation et validation de la section `Role et fonctionnalites` sur fond noir.
- Decision de ne pas ajouter de section Stack technique dediee en V1, car la
  stack est deja visible dans le Hero.
- Decision de ne pas ajouter de Galerie dediee en V1, car le Hero contient deja
  le placeholder visuel principal.
- Ajout de la navigation projet precedent / suivant avant le Footer.
- Reutilisation du Footer violet valide sur la page Projets.
- Validation de la version desktop courte de la page detail KoFlix.
- Duplication de la version desktop en largeur 390 px pour creer
  `KoFlix - Mobile`.
- Adaptation du Header, du ProjectHero et du Footer en versions mobiles.
- Correction de la section Contexte / Objectifs mobile pour eviter les
  debordements horizontaux.
- Adaptation de la section Role / Fonctionnalites en cards empilees.
- Adaptation de la navigation projet precedent / suivant en colonne.
- Validation de la version mobile courte de la page detail KoFlix.
- Definition de Mandolina Desktop ou de l'implementation comme prochaine etape
  selon la priorite retenue.

### 2026-06-26

- Creation et validation de la frame `Projets - Desktop`.
- Creation d'un Hero violet avec titre HUMANE et doodles.
- Ajout et validation des filtres Tous, Front-end, Full-stack et Creative.
- Creation de la grille desktop en deux colonnes.
- Reutilisation des ProjectCard KoFlix, Mandolina et Tablatures.
- Creation du bloc editorial rose `03 projets et d'autres a venir`.
- Reutilisation du ContactCTA dark avec lien GitHub.
- Choix et validation du Footer violet.
- Creation et validation de la frame `Projets - Mobile` en 390 px.
- Adaptation du Hero, des filtres et des doodles au mobile.
- Empilement des trois ProjectCard et du bloc editorial.
- Adaptation du ContactCTA et du Footer violet.
- Revue responsive et validation des pages Projets desktop et mobile.
- Definition de la page detail `KoFlix - Desktop` comme prochaine etape.

### 2026-06-25

- Creation et validation de la frame `Accueil - Mobile` en 390 px.
- Adaptation et validation du Header mobile.
- Recomposition et validation du Hero mobile avec doodles simplifies.
- Adaptation de la section Projets avec trois ProjectCard empilees.
- Ajout du CTA final et de doodles discrets dans la section Projets.
- Adaptation et validation de la section Stack.
- Adaptation du panneau Methode en cinq etapes verticales.
- Adaptation et validation de la section A propos.
- Reutilisation du `ContactCTA` dark en version mobile.
- Reutilisation du Footer light en version mobile.
- Revue globale de la page mobile.
- Validation de la composition complete de `Accueil - Mobile`.
- Confirmation que les textes, statuts, annees, technologies et liens sont
  valides.
- Confirmation que le prototypage des composants est deja realise.
- Conservation volontaire des placeholders projets dans la maquette.
- Definition de la page `Projets - Desktop` comme prochaine etape.

### 2026-06-23

- Finalisation et validation du Hero desktop.
- Creation de la section Projets mis en avant avec trois ProjectCard.
- Ajout des decorations de fond de la section Projets.
- Creation et validation de la section Stack.
- Creation et validation de la section Methode.
- Creation et validation de la mini section A propos.
- Reutilisation et validation du composant ContactCTA.
- Reutilisation et validation du Footer en variant clair.
- Validation de la composition complete de `Accueil - Desktop`.
- Definition de la version mobile comme prochaine etape.

### 2026-06-18

- Confirmation que la phase composants est terminee pour les specs detaillees.
- Passage a la maquette concrete de la Home page.
- Choix d'une direction hero forte, proche d'un poster creatif.
- Creation du fichier de suivi.

## Prompt de reprise pour un nouveau chat Codex

Copier et envoyer le prompt suivant au debut de la prochaine session :

```txt
Nous reprenons la conception Figma de mon portfolio personnel Costa Maskulov.

Commence par lire entierement :

- Suivis_de_Projet/Suivi_Portfolio.md
- Docs/Integration_Plan_V1.md
- Docs/Motion_Spec_V1.md
- Docs/Components_Specs/
- les documents principaux du dossier Docs utiles a la structure, au contenu
  et a la direction visuelle globale du portfolio.

Le fichier Suivis_de_Projet/Suivi_Portfolio.md contient l'etat reel et le plus
recent du projet.

Contexte actuel :

- La maquette `Accueil - Desktop` est terminee et validee.
- La maquette `Accueil - Mobile` en 390 px est terminee et validee.
- La maquette `Projets - Desktop` est terminee et validee.
- La maquette `Projets - Mobile` en 390 px est terminee et validee.
- La maquette `KoFlix - Desktop` est terminee et validee en version courte.
- La maquette `KoFlix - Mobile` en 390 px est terminee et validee en version
  courte.
- La maquette `A propos - Desktop` est avancee : Hero, Parcours avec timeline,
  section `Ce que j'aime construire`, section `Methode & competences`,
  ContactCTA et Footer sont poses.
- La maquette `A propos - Mobile` en 390 px est terminee structurellement :
  Hero, Parcours avec timeline, section `Ce que j'aime construire`, section
  `Methode & competences`, ContactCTA et Footer sont adaptes.
- La page `Contact - Desktop` est quasiment finalisee : Header actif, Hero
  Contact pose, bloc `Disponible pour` pose, section `02 - Moyens de contact`
  ajustee, section `03 - CV / opportunites` posee et Footer conserve.
- La page `Contact - Mobile` en largeur 390 px est adaptee section par section :
  Header, Hero Contact, section `02 - Moyens de contact`, section `03 - CV /
  opportunites` et Footer.
- La creation structurelle des pages principales est consideree bonne.
- Les pages desktop Projets, KoFlix, A propos et Contact ont ete enrichies avec
  des doodles, mots decoratifs et stickers en continuite avec la Home.
- Les versions mobile doivent rester plus sobres et etre controlees pour eviter
  les debordements.
- La spec motion V1 existe dans `Docs/Motion_Spec_V1.md`. Elle cadre les
  animations a implementer en code : scroll reveal, hovers, transitions de page,
  filtres projets, stickers flottants et `prefers-reduced-motion`.
- Le plan d'integration V1 existe dans `Docs/Integration_Plan_V1.md`. Il cadre
  le scaffold Vue/Vite, l'arborescence, les routes, les composants, les mocks,
  les tokens, le responsive et les criteres de validation.
- L'integration a demarre sur la branche `dev/CM_Portfolio/integration-v1`.
- Le scaffold Vue/Vite/TypeScript existe deja avec Vue Router, CSS globaux,
  premiers composants, mocks et pages V1 initiales.
- `npm run build` passe et le serveur Vite peut demarrer avec `npm run dev`.
- Les visuels des ProjectCard et le visuel principal de KoFlix sont encore des
  placeholders gris.
- Le wording de la timeline A propos est provisoire et sera remplace plus tard
  par les vrais etablissements, entreprises, lieux, periodes et postes.
- Les composants Figma existent deja : Header, Button, ProjectCard, StackTag,
  ContactCTA, Footer et les autres composants indiques dans le suivi.
- Il faut reutiliser leurs instances et leurs variants, sans les detacher ni
  reconstruire manuellement un composant existant.
- La direction visuelle est neo-brutaliste creative avec violet, creme, noir,
  lime, rose, HUMANE pour le display et Satoshi pour l'interface.
- Le MCP Figma n'est pas utilise actuellement. Il faut donc donner des
  consignes manuelles tres detaillees, etape par etape, avec les frames a
  selectionner, Auto Layout, paddings, gaps, tailles, line-height, couleurs,
  positions, contraintes et regles `Fill container` / `Hug contents` /
  `Absolute position`.

Les pages Accueil, Projets, `KoFlix - Desktop`, `KoFlix - Mobile`,
`A propos - Desktop` et `A propos - Mobile` ne doivent pas etre reconstruites.

Prochaine tache :

Raffiner l'integration existante pour se rapprocher des maquettes Figma.

Ordre de travail recommande :

1. Raffiner `HomePage.vue` et les tokens globaux.
2. Raffiner `ProjectCard`, `ProjectGrid` et `ProjectsPage.vue`.
3. Raffiner `ProjectDetailPage.vue` pour KoFlix.
4. Raffiner `AboutPage.vue`.
5. Raffiner `ContactPage.vue`.
6. Ajouter le scroll reveal selon `Docs/Motion_Spec_V1.md`.
7. Verifier mobile et build a chaque etape importante.

Structure validee pour `KoFlix - Desktop` :

1. Header
2. ProjectHero
3. Contexte et objectifs
4. Role et fonctionnalites
5. Navigation projet precedent / suivant
6. Footer

Structure validee pour `KoFlix - Mobile` :

1. Header mobile
2. ProjectHero mobile
3. Contexte et objectifs mobile
4. Role et fonctionnalites mobile
5. Navigation projet precedent / suivant mobile
6. Footer mobile

Les contenus, statuts, annees, technologies, liens et prototypes des composants
sont deja valides. Les placeholders des projets sont conserves volontairement
dans la maquette et ne bloquent pas la suite.

Decisions specifiques A propos :

- Le Hero mobile utilise un titre raccourci pour eviter les coupures de mots.
- La section Parcours contient une timeline desktop et mobile, avec wording
  provisoire.
- La section `Ce que j'aime construire` mobile utilise le titre raccourci
  `Des interfaces modernes, propres et memorables.`.
- `Methode & competences` desktop est posee avec une colonne methode et une
  colonne competences.
- `Methode & competences` mobile est adaptee en une colonne avec cards
  competences empilees et tags qui wrappent.
- Le ContactCTA mobile de la page A propos a ete rendu plus compact pour une
  fin de page mobile.

Direction recommandee pour Contact :

- Faire une page simple, directe et humaine, pas un formulaire lourd en V1.
- Structure desktop : Header, Hero Contact, moyens de contact, bloc CV /
  opportunites, Footer.
- Structure mobile : Header mobile, Hero Contact mobile, moyens de contact
  empiles, bloc CV / opportunites empile, Footer mobile.
- CTA principaux recommandes : `M'envoyer un mail`, `Voir mon LinkedIn`,
  `Voir mon GitHub`, `Telecharger mon CV`.
- Hero desktop deja pose :
  - fond creme ;
  - label lime `CONTACT` ;
  - titre HUMANE `On construit quelque chose ensemble ?` ;
  - intro autour d'une alternance, d'un projet ou d'un echange ;
  - boutons `M'envoyer un mail` et `Voir mon LinkedIn` ;
  - bloc violet `Disponible pour` avec sticker rose `OPEN`.
- Section `02 - Moyens de contact` deja posee :
  - fond noir ;
  - intro verticale label / titre / texte ;
  - titre `Les bons liens, sans detour.` ;
  - grille desktop 2 x 2 ;
  - cartes Email, LinkedIn, GitHub et CV ;
  - directions de cartes validees : creme, violet, noir et rose avec ombres
    offset.
- Section `03 - CV / opportunites` posee :
  - fond creme ;
  - composition desktop en deux colonnes ;
  - label lime `03 - CV / OPPORTUNITES` ;
  - titre `Un profil a garder sous la main.` ;
  - CTA `Telecharger mon CV` et `Voir mes projets` ;
  - card violette `Disponible pour` ;
  - sticker rose `CV READY`.
- `Contact - Mobile` a deja ete adapte en largeur 390 px. Ne pas repartir de
  zero ; continuer uniquement les ajustements graphiques, doodles et controles
  de lisibilite.

Decisions specifiques KoFlix :

- `ProjectMeta` est retire sur la page detail KoFlix car il faisait doublon
  avec le Hero.
- La section Stack technique dediee est retiree en V1 car les StackTags sont
  deja visibles dans le Hero.
- La Galerie dediee est retiree en V1 car le Hero contient deja le placeholder
  visuel principal.

Ne modifie pas la direction graphique validee sans demande explicite.
```
