const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginTOC = require('eleventy-plugin-toc');

const emoji = require('markdown-it-emoji');
const markdownItAnchor = require('markdown-it-anchor')

const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

module.exports = function(eleventyConfig) {

    // plugins
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginTOC)
    eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateRfc3339);

    // supported formats
    eleventyConfig.setTemplateFormats([
        "pug",
        "njk",
        "md",
        "css",
        "woff"
    ])

    eleventyConfig.addPassthroughCopy("admin")
    eleventyConfig.addPassthroughCopy("images")

    // filters
    global.filters = eleventyConfig.javascriptFunctions;

    eleventyConfig.setPugOptions({ // and here
        globals: ['filters']
    });

    // custom markdown
    let markdownIt = require("markdown-it")
    let md = markdownIt({html: true, linkify: true })
        .use(markdownItAnchor)
        .use(emoji)
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

    eleventyConfig.addCollection("semaines",
        collection => collection
        .getFilteredByGlob(['./semaines/*.md'])
    )

    eleventyConfig.addPlugin(UpgradeHelper);
}
