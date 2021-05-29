const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // plugins
  eleventyConfig.addPlugin(pluginRss);

  // supported formats
  eleventyConfig.setTemplateFormats([
    "pug",
    "md",
    "css",
    "woff"
  ])

  eleventyConfig.addPassthroughCopy("admin")
  eleventyConfig.addPassthroughCopy("images")

  // custom markdown
  let markdownIt = require("markdown-it")
  let md = markdownIt({html: true, linkify: true })
    .use(require('./md-tufte/sidenote'))
    .use(require('./md-tufte/marginnote'))

  eleventyConfig.setLibrary("md", md)

  eleventyConfig.addCollection("notices",
    collection => collection
      .getFilteredByGlob("notices/*.md")
      .sort((a,b) => {
        let x = ((a.data.short) ? a.data.short: a.data.title).toLowerCase()
        let y = ((b.data.short) ? b.data.short: b.data.title).toLowerCase()

        return x.localeCompare(y)
      })
    )

  eleventyConfig.addCollection("journal",
    collection => collection
      .getFilteredByGlob(['./journal/*.md', './yo/*.md'])
      .filter(x => !x.data.hidden)
    )

  eleventyConfig.addCollection("highlights",
    collection => collection
      .getFilteredByGlob("highlights/*.md")
      .sort((a,b)=> {
        if (a.data.author.last > b.data.author.last) return 1;
        else if (a.data.author.last < b.data.author.last) return -1;
        else return 0;
      })
  )

}
