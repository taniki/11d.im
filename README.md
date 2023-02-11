## démarrer le site en local

```
npm run serve
```

## ajouter une note

Pour rédiger et travailler un billet, j'aime bien me reposer sur la structure de git/github.

- travailler de préférence dans une nouvelle branche
- pousser et ouvrir une PR pour mettre en attente
- ne pas hésiter à abuser de petit commit et de faire des `fixup` une fois la session terminée
- idéalement les commits majeurs sont
    - draft
    - version complète
    - corrections et travail d'édition

```
vim journal/$(date +%Y%m%d%H%M%S).md
```

## publier

```
git push
```

[Netlify](https://netlify.com) et github font le reste du travail.
