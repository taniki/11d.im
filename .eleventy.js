module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "pug",
    "md",
    "css",
    "woff"
  ]);

  eleventyConfig.setFrontMatterParsingOptions({
    sections: true
  })

  eleventyConfig.addCollection("notices", collection => collection.getFilteredByGlob("notices/*.md"))

  eleventyConfig.addCollection("journal",
    collection => collection
      .getAllSorted()
      .filter(item => item.url
                    && item.inputPath.startsWith('./journal/')))

  eleventyConfig.addCollection("highlights",
    collection => collection.getFilteredByGlob("highlights/*.md"))

};
