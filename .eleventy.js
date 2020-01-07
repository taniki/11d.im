module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "pug",
    "md",
    "css",
    "woff"
  ]);

  eleventyConfig.addCollection("notices",
    collection => collection
      .getAllSorted()
      .filter(item => item.url
                   && item.inputPath.startsWith('./notices/')))

  eleventyConfig.addCollection("journal",
    collection => collection
      .getAllSorted()
      .filter(item => item.url
                    && item.inputPath.startsWith('./journal/')))
};
