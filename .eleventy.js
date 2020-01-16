module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "pug",
    "md",
    "css",
    "woff"
  ])

  let markdownIt = require("markdown-it")
  let md = markdownIt({debug: true})
    .use(require('./md-tufte/sidenote'))
    .use(require('./md-tufte/marginnote'))

  // md.renderer.rules.footnote_ref = (tokens, idx, options, env, slf) => {
  //   var id      = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
  //   var caption = slf.rules.footnote_caption(tokens, idx, options, env, slf);
  //   var refid   = id;
  //
  //   if (tokens[idx].meta.subId > 0) {
  //     refid += ':' + tokens[idx].meta.subId;
  //   }
  //
  //   var label = `<label for="sn-${id}" class="margin-toggle sidenote-number"></label>`
  //   var input = `<input type="checkbox" id="sn-${id}" class="margin-toggle"/>`
  //   var sidenote = `<span class="sidenote">${tokens}</span>`
  //    //return '<sup class="footnote-ref"><a href="#fn' + id + '" id="fnref' + refid + '">' + caption + '</a></sup>';
  //   return `${label}${input}${sidenote}`
  // }


  eleventyConfig.setLibrary("md", md)

  eleventyConfig.addCollection("notices", collection => collection.getFilteredByGlob("notices/*.md"))

  eleventyConfig.addCollection("journal",
    collection => collection.getFilteredByGlob('./journal/*.md'))

  eleventyConfig.addCollection("highlights",
    collection => collection.getFilteredByGlob("highlights/*.md"))

}
