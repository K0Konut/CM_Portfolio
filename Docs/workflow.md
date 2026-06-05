# Workflow Git — Portfolio CM

Ce document définit les règles de branches, de merge et de commits pour garder un workflow propre sur le projet Portfolio Costa Maskulov.

## Branches principales

### `main`

La branche `main` est réservée aux releases.

Elle doit contenir uniquement du code stable, prêt à être publié.

Les merges vers `main` se font uniquement depuis la branche de développement lorsque les fonctionnalités sont validées pour une release.

### `dev` / `develop`

La branche de développement sert à regrouper les développements terminés avant leur passage en release.

Dans ce projet, cette branche correspond à la branche `dev`. Si le nom `develop` est utilisé dans les échanges, il désigne le même rôle : la branche d’intégration avant release.

Les branches de feature doivent merger vers cette branche.

## Branches de fonctionnalités

Chaque nouvelle feature doit avoir sa propre branche.

Convention de nommage :

```txt
<destination-merge>/CM_Portfolio/<nom-de-la-feature>
```

Pour une feature destinée à être mergée dans `dev`, le format attendu est :

```txt
dev/CM_Portfolio/<nom-de-la-feature>
```

Exemples :

```txt
dev/CM_Portfolio/page-accueil
dev/CM_Portfolio/page-projets
dev/CM_Portfolio/project-details
dev/CM_Portfolio/contact-form
```

Règles de nommage recommandées :

* utiliser des noms courts et explicites
* utiliser le kebab-case pour le nom de la feature
* éviter les espaces
* éviter les accents
* éviter les noms trop génériques comme `update`, `test` ou `new-feature`

## Flux de merge

Le flux de merge doit rester simple :

```txt
feature branch -> dev -> main
```

Règles :

* une feature terminée merge vers `dev`
* `dev` regroupe les développements terminés
* `main` reçoit uniquement les releases depuis `dev`
* aucune feature ne doit merger directement vers `main`

## Convention de commits

Les commits doivent suivre les préfixes suivants :

### Fix

Pour une correction de bug :

```txt
fix: corriger la navigation mobile
```

### Feature

Pour l’ajout d’une nouvelle fonctionnalité :

```txt
feat: ajouter la page projets
```

### Documentation

Pour une modification ou un ajout de documentation :

```txt
DOC: ajouter le PRD du portfolio
```

## Résumé rapide

```txt
main = releases
dev = développements terminés avant release
feature branch = une branche par nouvelle feature

feature branch -> dev
dev -> main

fix: correction
feat: nouvelle fonctionnalité
DOC: documentation
```
