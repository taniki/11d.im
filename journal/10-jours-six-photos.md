---
title: Ce que j'ai appris en une dizaine de jours sur six.photos
date: 2021-07-28
---

Au départ, je voulais un nouvel objectif pour faire de la [street photography](/notices/streetphotography) puis je me suis retrouvé à acheter un appareil (cette partie de l’histoire dans un autre épisode) et donc très logiquement, je me suis retrouvé à faire un site web pour partager des photos à des proches parce que j’en ai marre d’instagram et que flickr, ça fait quand même bizarre d’y revenir. Ces deux points également une histoire pour une autre fois mais en attendant quelque _assorted musings_ à propos de la construction du site.

J’avais envie de voir jusqu’où je peux aller en mode ~~no code~~ low code et surtout sans avoir à gérer un serveur web.

## [Astro](https://astro.build)

- Super fun !
- Rapide.
- Pratique.
- Enlève la complexité de la plupart des machins en javascript contemporain. On revient aux bases : du html, du css et un petit de scripting pour construire des collections ou faciliter la représentation.
- L'augmentation progressive avec Vue était marrante au départ mais je suis vite revenu à faire le maximum avec des `.astro`.
- J’ai utilisé [tailwind](https://tailwindcss.com/) pour voir. J'ai trouvé ça chouette. C'est quelque part entre [bootstrap](https://getbootstrap.com/) et [tachyon](http://tachyons.io/).
- Par habitude, pour le layout _à la pinterest_, j’avais commencé à faire de choses avec [masonry](https://masonry.desandro.com/) mais en cherchant quelque chose de plus responsive, je suis tombé sur [muuri](https://muuri.dev/). Je recommande, c'est de la balle, aussi simple à utiliser et mille fois plus pratique.

## Netlify

- [Netlify Identity](https://docs.netlify.com/visitor-access/identity/) est bien pratique pour prototyper et débuter un service web sans se prendre la tête.
  - Il y a quelques soucis avec le développement local et [Netlify Dev](https://www.netlify.com/products/dev/) 🤷‍♂️
- J’avais commencé avec du Large Media mais je suis vite passé à [Object Storage chez Scaleway](https://www.scaleway.com/en/object-storage/). Ça se combine très bien avec [Netlify Functions](https://www.netlify.com/products/functions/).

## Airtable comme backend

- C’était bien au début mais le rate limiting à 5 requêtes par seconde est vite devenu pénible et j’ai fini par devoir passer par un CDN tiers ainsi des contorsions informatiques plutôt moches.
- Il y a plein de trucs que j’aurai pu faire avec des fonctions sur netlify mais qui sont en fait devenu des bouts de script et des automations dans airtable.
- Après un benchmark rapide des [headless CMS](https://jamstack.org/headless-cms/), un gestionnaire de contenu sans site de présentation, j'en suis arrivé à [strapi](https://strapi.io/). C'est la prochaine étape de l'aventure. J'ai mis sérieusement les mains dedans hier soir et je suis toujours pas résolu à gérer un serveur/vps.
- J’aurai bien goûter un peu la hype de [Ghost](https://ghost.org/) mais j’ai jamais réussi à faire d’autres types de contenu que des articles.
- La solution de repli aurait été de retourner à Wordpress 👴.

Le travail en cours est ici : https://six.photos. C’est pas encore tout à fait prêt mais si jamais vous avez des envies de site de photographie communautaire, c’est-à-dire entre personnes de confiance et bienveillantes, vous pouvez me contacter en DM sur mastodon ou sur twitter, ou bien tout simplement par email.
