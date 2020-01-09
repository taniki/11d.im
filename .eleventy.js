module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "pug",
    "md",
    "css",
    "woff"
  ])

  eleventyConfig.addCollection("notices", collection => collection.getFilteredByGlob("notices/*.md"))

  eleventyConfig.addCollection("journal",
    collection => collection.getFilteredByGlob('./journal/*.md'))

  eleventyConfig.addCollection("highlights",
    collection => collection.getFilteredByGlob("highlights/*.md"))

}
