---
title: "11ty + tufte.css"
---

## features

- ✅ tufte.css
- ✅ side note mardown markup
- ✅ simple margin note markdown markup
- complex note (like paragraphs or pictures)

## configuration

- copy [tufte.css](https://github.com/edwardtufte/tufte-css) git content into your css folder
- link to it in your templates. *e.g.* `<link rel="stylesheet" href="tufte.css"/>`
- copy [`sidenote.js`](https://gist.github.com/taniki/0eb61559482e40768b40dc5aea71dff4#file-sidenote-js) and [`marginnote.js`](https://gist.github.com/taniki/0eb61559482e40768b40dc5aea71dff4#file-marginnote-js) in any folder of you choice (*e.g.* `/md-tufte/`)
- add the following code to your `.eleventy.js` inside `module.exports = function(eleventyConfig) {}`

```
let markdownIt = require("markdown-it")
let md = markdownIt({debug: true})
  .use(require('./md-tufte/sidenote'))
  .use(require('./md-tufte/marginnote'))
```

## side note `^`

### example

```
Virgine^[Pikachu vs Palpatine] Haec non Vulcania uror illa stabant, expresso urbes: corpora in solverat
in augur hirsutis successu! Trinacriam non una et pius [sunt](http://www.o.net/)
est purasque timorem, *timentia mille suis* imbre et dictis es. Nocebit dederat
ibi. Potita et qui ad pulcherrime concilio linquendus vomit. Iunonia Pandrosos
undis, [non labor puteisque](http://www.grandior.io/) marito mortales sanguine
et cuspis monitus, mihi tua litora.
```

Virgine^[Pikachu vs Palpatine] Haec non Vulcania uror illa stabant, expresso urbes: corpora in solverat
in augur hirsutis successu! Trinacriam non una et pius [sunt](http://www.o.net/)
est purasque timorem, *timentia mille suis* imbre et dictis es. Nocebit dederat
ibi. Potita et qui ad pulcherrime concilio linquendus vomit. Iunonia Pandrosos
undis, [non labor puteisque](http://www.grandior.io/) marito mortales sanguine
et cuspis monitus, mihi tua litora.

## margin note `+`

### example

```
Coniunx erat *rotarum virum* sed harenas *vulnere* gladium commissa ante arma
monte artus dolorque, malo. +[ok boomer] Cur utque, vox terras tecta Medusaei numina, qua
erat magnanimus tantum.
```

Coniunx erat *rotarum virum* sed harenas *vulnere* gladium commissa ante arma
monte artus dolorque, malo. +[ok boomer] Cur utque, vox terras tecta Medusaei numina, qua
erat magnanimus tantum.
