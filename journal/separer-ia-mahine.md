---
title: séparer l'IA de la machine
---

Confiance : `3/5` - cet article est le produit de la lecture de [2 livres et de quelques vidéos](#ressources).
Je ne suis pas économiste, au mieux un amateur éclairé.

Effort : `4/5` - cet article m'a demandé de l'effort, j'ai fait des recherches, je me suis documenté.
Cependant, je n'ai pas mené le travail de référence jusqu'au bout.
J'aurai également pu produire des graphiques et apporté des chiffres.


## introduction

Je profite de cette nouvelle journée de grève pour poursuivre [ma réflexion sur l'intelligence artificielle (IA)][ia-capitalisme] comme moment de rencontre entre des problématiques technologiques, économiques, écologiques et sociales.
Je lis pas mal de choses sur ce sujet en ce moment et cette petite synthèse de ce que j'ai appris est ma modeste contribution à une meilleure compréhension du monde.

Pour comprendre les enjeux matériels de l'intelligence matérielle, il faut en revenir à ses conditions d'existence.
L'IA, aujourd'hui, est surtout une question de calculs qui tournent sur des machines.
Mettons de côté les produits de l'IA pour voir les questions d'infrastructure technique.
À mon avis, il y a au moins deux dimensions : les ordinateurs et les réseaux.
Pour cet article, j'aimerai me concentrer sur ce qui permet aux IA de fonctionner : la capacité de calcul.

[ia-capitalisme]: /journal/separer-ia-capitalisme/


## le marché des puces électroniques

Il y a en ce moment [un conflit économique entre la Chine et les États-Unis d'Amérique (US)][article:1].
Cette tension a aussi une géographie autour de l'île de Taïwan.
Ce pays a reçu ces dernières années la visite de réprésentants du gouvernement US car il est aussi le domicile d'une entreprise, [TSMC], qui a un quasi-monopole sur la production de puces électroniques de pointe.
L'enjeu est beaucoup plus d'entretenir un avantage technologique et une capacité de production qu'une question de biens de consommation pour les foyers américains.

Les entreprises US se sont positionnées en amont (conception) et en aval (exploitation) de la fabrication des puces.
On dit qu'elles sont *fabless*.
La conception des puces est dépendante de logiciels édités par une poignée d'entreprises qui sont principalement américaines.
Apple, par exemple, concoit en interne les puces de ses produits sans posséder les entreprises qui les fabriquent et les assemblent.

Une usine de fabrication représente un capital de plusieurs dizaines de milliard USD alors que la conception et l'exploitation est plutôt de l'ordre de quelques millions.
Cet écosystème perment l'apparition de startup qui se lancent après un investissement relativement banal.
L'externalisation permet une réduction du coût des innovations et expérimentations.

Un autre point intéressant de ce système économique est le monopole d'[ASML], une entreprise hollandaise, sur la fabrication de machine permettant de produire les dernières générations de puces électroniques.
C'est intéressant car c'est à raison de partenariats économiques et d'interdiction d'exportation vers la Chine que les US sont entrain de dominer ce conflit.
Il est estimé qu'il faudrait 10 ans pour que la Chine atteigne l'expertise et la capacité de fabrication d'ASML.
Soit une éternité pour un milieu qui vit selon la [loi de Moore] : une multiplication par 2 du nombre de transistors tous les 2 ans.

Il faut aussi comprendre que l'on parle ici de la production de puces avancées càd qui sont en dessous d'une certaine taille, une dizaine de nano-mètres.
La plupart des biens de consommation, disons tout ce qui est moins compliqué qu'un smartphone, utilise des puces dont le niveau technologique est celui de la fin des années 90.
L'échelle d'un transistor est alors autour de 180 nm.
Une entreprise américaine comme Texas Instruments accumule des profits en continuant à concevoir, fabriquer et exploiter ces puces tout en voyant les coûts de production baissés au fil des innovations.

Pour comprendre, comment et pourquoi, les US se sont retrouvés avec une dépendance avec l'asie du sud, je vous invite à lire *[Chip War]* de Chris Miller.
C'est un ouvrage assez synthétique sur la préhistoire de la Silicon Valley et des différents mouvements géopolitiques qui font l'histoire économique des puces.
Il est aussi intéressant d'y constater l'omni-présence des gouvernement dans le financement des innovations.
Un magnifique contre-exemple du discours néo-libéral.


[ASML]: https://en.wikipedia.org/wiki/ASML_Holding
[TSMC]: https://en.wikipedia.org/wiki/TSMC
[Chip War]: https://www.simonandschuster.com/books/Chip-War/Chris-Miller/9781982172008
[loi de Moore]: https://en.wikipedia.org/wiki/Moore%27s_law

[article:1]: https://www.mediapart.fr/journal/international/221022/les-etats-unis-declarent-la-guerre-technologique-la-chinei


## GPU

L'IA, spécialement le Deep Learning, ne serait pas ce qu'il est aujourd'hui sans la disponibilité et une certaine abondance de cartes graphiques puissantes, ou GPU pour *Graphical Processing Unit*.
Les cartes graphiques contiennent une puce qui est optimisé pour transformer et afficher des pixels, soit des matrices, soit la même structure de données que les algorithmes d'apprentissage machine (*machine learning*).
Les réseaux de neurones sont étudiés depuis plusieurs décénies mais les capacités de calcul disponibles n'étaient pas intéressantes pour une application.

[Nvidia] est une entreprise US qui produit une architecture logicielle nommée [CUDA] qui permet d'interfacer n'importe quel type de logiciel avec la capacité de calcul des cartes graphiques.
La très vaste majorité des infrastructures IA repose sur CUDA.
CUDA n'est compatible qu'avec les cartes graphiques Nvidia.
C'est à nouveau un monopole.

Dans l'affrontement entre Google et Microsoft ainsi que la floraison de startups surfant sur la vague actuelle, Nvidia sera là pour fournir le matériel ou le fournit déjà.

Il pourrait être interessant de comparer les revenus annuels d'Intel et de Nvidia sur le secteur des *data centers* et de l'IA.

[Nvidia]: https://en.wikipedia.org/wiki/Nvidia
[CUDA]: https://en.wikipedia.org/wiki/CUDA

## IA et ses usages

Au début de cette année, j'ai déboursé une jolie somme pour [acheter un GPU d'occasion](/yo/20230112215341/) de l'avant dernière-génération.
C'est du matériel initialement prévu pour le jeu vidéo et le traitement vidéo qui coûte une fraction d'un matériel vendu pour faire du machine learning.
Cette carte graphique, une GeForce 3090, est onéreuse mais également volumineuse et gourmande en électricité.
Elle ne rentre pas dans quel boîtier et réclame un bloc d'alimentation au dessus de la moyenne.
La dernière génération est encore plus extrème.

Avec cela, je peux surtout faire des inférences.
Autrement dit, je peux récupérer des modèles pré-entrainés et générer du texte ou des images dans un laps de temps raisonnable.

Je peux sans doute adapter des modèles en faisant du *fine tuning* et avec beaucoup de patience.
Je peux complètement oublié l'idée d'entrainer mes propres modèles.

Il est ainsi complètement abusif de dire que ChatGPT, c'est à avoir une IA dans sa poche.
Il en sera de même pour Bard, Sydney et toute la farandole de produits qui incorporeront de l'IA.
C'est également vrai pour les produits existants comme Siri ou Alexa.

À l'heure actuelle, on est donc sur des modèles qui vont chercher à tout faire, pour tout le monde mais surtout à un seul endroit : un *data center*.
La consommation de ressources est ainsi déportée et vaguement optimisé.
On est loin d'une combinaison entre edge computing (calcul fait en bout de chaine) et de l'intelligence artificielle personnalisée.
Peut-être qu'avoir ces technologies à disposition sera trop coûteux et donc fera relativiser leur utilité.

On ne pourra parler de démocratisation de ces technologies seulement quand la production et la personnalisation des modèles sera à la portée de tous.
Pas nécessairement sous une forme individualiste, il a des options qui tendent vers le commun comme [petals].
En attendant, c'est donc surtout une manière pour les géants du numériques (Amazon, Microsoft et secondairement Google) de vendre et d'exploiter leur accumulation de ressources matérielles sous forme de location, autrement dit du capital.

J'ai également hâte de voir une rimbabelle d'entrepreneurs graté un morceau du gateau en vendant une expertise qui sera une sur-taxe sur l'accès aux nuages de calcul, *Ponzi scheme style*, et en prenant bien soin de ne produire aucune valeur au passage.
(Non.)


[petals]: https://github.com/bigscience-workshop/petals


## ressources

### bibliographie

- Miller, Chris. Chip War: The Fight for the World’s Most Critical Technology. First Scribner hardcover edition. New York: Scribner, an imprint of Simon & Schuster, 2022.

- Cardon, Dominique, Jean-Philippe Cointet, and Antoine Mazières. “La Revanche Des Neurones: L’invention Des Machines Inductives et La Controverse de l’intelligence Artificielle.” Réseaux n° 211, no. 5 (November 2, 2018): 173–220. https://doi.org/10.3917/res.211.0173.


### articles de presse

- [Les États-Unis déclarent la guerre technologique à la Chine][article:1] (Mediapart)
- [Etats-Unis-Chine: la guerre des puces a commencé][article:2] (Mediapart)
- [ASML, le « miracle néerlandais » des puces électroniques][article:3] (Le Monde)

[article:2]: https://www.mediapart.fr/journal/economie/260321/etats-unis-chine-la-guerre-des-puces-commence
[article:3]: https://www.lemonde.fr/economie/article/2022/09/06/asml-le-miracle-neerlandais-des-semi-conducteurs_6140381_3234.html

### vidéos

- [The Race to Build a Perfect Computer Chip][video:1] (Bloomberg Originals)
- [Has Nvidia’s A100 Chip Met Its Match With Biren’s BR100 Processor? | U.S. vs. China | WSJ][video:2] (WSJ)
- [The Entire World Relies on a Machine Made by ONE Company][video:3] (Newsthink)
- [The fight for TSMC is heating up][video:4] (Tech Altar)
- [Why China is losing the microchip war][video:5] (Vox)


[video:1]: https://invidious.fdn.fr/watch?v=VsUF_CBJq50
[video:2]: https://invidious.fdn.fr/watch?v=gPpAL_pG_Wc
[video:3]: https://invidious.fdn.fr/watch?v=Shuv9-MJBEU
[video:4]: https://invidious.fdn.fr/watch?v=qmn46KrztJ0
[video:5]: https://invidious.fdn.fr/watch?v=Uh4QGey2zTk
