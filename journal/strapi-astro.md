---
title: Strapi + astro
date: 2021-08-04
---

[Épisode précédent](/journal/10-jours-six-photos/) : Quelques notes sur [six.photos](https://six.photos) : un brouillon de site pour partager des photos avec mes proches (et de mes proches).

## [Strapi](https://strapi.io)

- Installer Strapi et l'intégrer à mon "architecture" a été plus rapide que prévu. Je misais pas mal sur ma première semaine de congé mais à la fin du week-end, c'était déjà plié.
- Comme j'avais l'immense flemme de prendre un vps et de le gérer, je suis parti sur du [heroku](https://heroku.com) malgré les gros warnings à base de logo Salesforce partout puis d'AWS par-ci, par là dans les URLs. J'avais pas vraiment suivi l'actualité de cette plateforme, j'en étais resté à un truc formidable pour les développeurs qui n'ont pas envie de faire de l'ops.
  - [Le tutoriel](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/heroku.html) est plutôt bien fait. Il couvre notamment l'instanciation d'une base de données PostgreSQL.
  - Il manque peut être quelque chose sur la persistance des fichiers ou le raccord avec une solution d'object storage. Le plugin [strapi-provider-upload-scaleway](https://github.com/team-appforge/strapi-provider-upload-scaleway) fonctionne parfaitement et simplement.
  - J'étais un peu en mode netlify et sans réfléchir, j'ai pris un dyno (une abstraction de serveur sur lequel sera copié le code) et il était aux US donc c'était très lent. En migrant vers des serveurs dans la région EU, c'était fluide. `heroku fork --from sourceapp --to targetapp --region eu` ([plus d'information](https://devcenter.heroku.com/articles/app-migration))
  - J'ai également upgradé pour un dyno **hobby dev**. Ce qui revient moins cher que le VPS minimal pour faire tourner strapi.
  - C'est également l'occasion de se rendre compte que le **serverless** n'est pas si sans server que ça mais que c'est juste bien abstrait.
  - Scaleway propose également la gestion de serveurs postgresql mais la partie serverless demande quand même un certain effort de devops que je vais m'épargner pour l'instant. Cela ne devrait pas être très compliqué de migrer, l'ayant déjà fait pour avoir un environnement de développement iso avec l'environnement de production.
  - L'alternative, et le end game originel, est de pouvoir tout héberger moi-même en recyclant un vieux laptop Lenovo que je laisserai tourner en permanence dans la cave. N'ayant pas encore la fibre et une bande passante au final limité, ça reste un horizon relativement lointain.
- L'interface de Strapi est plutôt honnête et facile à customiser progressivement.
- La gestion des utilisateurs est rationnelle mais pas vraiment intuitive. Les end-users et les auteurs/éditeurs/admin sont dans deux trucs différents mais gérer dans le même module. On s'y fait.
- Le code est modelé sur une base Model ~~View~~ Controller qui fait quand même un peu chelou en 2021.
- Avoir un contrôle total sur la modélisation des réponses de l'API est quand même un sacré bol d'air frais après avoir été contraint par les API des plateformes.

## Strapi + Astro

- Je suis passé de 30 secondes à 20 secondes de build ✌️. Je pense que je commencerai à réfléchir à une alternative quand j'approcherai d'1 minute de build. J'ai encore pas mal de marge.
- Le code a également perdu une 50aine de ligne tellement l'API REST d'airtable n'est quand même avant tout adapté qu'à l'affiche de leur propre front/client.
  - J'ai pu évacuer tous les morceaux d'interface pour l'upload et la gestion des photos.
- Je suis vraiment satisfait de cet assemblage.
  - Je n'ai pas vraiment de problème de performance à me soucier.
  - Le CMS n'est utilisé que lorsque quelqu'un vient éditer le site à la suite de quoi le site est entièrement reconstruit et autonome en terme d'affichage.
  - Je n'ai pas de serveur à intégrer dans une charge cognitive. Facturation, sécurité, etc.
  - En l'état, si je ne touche plus à rien, ce ne sont que des fichiers html qui s'afficheront quoi qu'il arrive.
  - Simon Wilson a fait [un super article sur l'architecture Baked Data](https://simonwillison.net/2021/Jul/28/baked-data/) qui est une bonne piste pour un avenir encore lointain.
- Je peux donc maintenant passer du temps à faire de la photographie, voir avec quelques proches s'ils ne veulent pas mettre leur photo sur ce site et réfléchir à la prochaine étape.
- Je suis également heureux d'utiliser mon propre site et d'y partager des photos depuis une dizaine de jours. C'est vraiment un plaisir d'avoir un espace de partage qui soit totalement en dehors du cadre de facebook, twitter, instagram, etc.
