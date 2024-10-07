const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginTOC = require('eleventy-plugin-toc');

const emoji = require('markdown-it-emoji');
const markdownItAnchor = require('markdown-it-anchor')
const wikilinks = require('@gardeners/markdown-it-wikilinks')

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

    eleventyConfig.addPassthroughCopy("css")
    eleventyConfig.addPassthroughCopy("assets")
    eleventyConfig.addPassthroughCopy("images")

    // filters
    eleventyConfig.addFilter('md', (content)=> md.renderInline(content))

    global.filters = eleventyConfig.javascriptFunctions;
    eleventyConfig.setPugOptions({ // and here
        globals: ['filters']
    });

    // custom markdown
    let markdownIt = require("markdown-it")
    let md = markdownIt({html: true, linkify: true })
        .use(markdownItAnchor)
        .use(emoji)
        .use(wikilinks({
            uriSuffix: '/',
             postProcessLabel: (label) => {
                return label.split('/')[label.split('/').length - 1]
            },
        }))
        .use(require('./md-tufte/sidenote'))
        .use(require('./md-tufte/marginnote'))

    eleventyConfig.setLibrary("md", md)

    eleventyConfig.addCollection("notices",
        collection => collection
        .getFilteredByGlob("./content/notices/*.md")
        .sort((a,b) => {
            let x = ((a.data.short) ? a.data.short: a.data.title).toLowerCase()
            let y = ((b.data.short) ? b.data.short: b.data.title).toLowerCase()

    return x.localeCompare(y)
        })
    )

    eleventyConfig.addCollection("journal",
        collection => collection
        .getFilteredByGlob(['./content/journal/*.md', './content/yo/*.md'])
        .filter(x => !x.data.hidden)
    )

    eleventyConfig.addCollection("highlights",
        collection => collection
        .getFilteredByGlob("./content/highlights/*.md")
        .sort((a,b)=> {
            if (a.data.author.last > b.data.author.last) return 1;
            else if (a.data.author.last < b.data.author.last) return -1;
            else return 0;
        })
    )

    eleventyConfig.addCollection("semaines",
        collection => collection
        .getFilteredByGlob(['./content/semaines/*.md'])
    )
    
    eleventyConfig.addCollection("liens",
        collection => collection
        .getFilteredByGlob(['./content/liens/*.md'])
    )

    eleventyConfig
        .addCollection("posts",
            collection => collection
                .getFilteredByGlob('./content/**/*.md')
                .filter(x => x.inputPath != './README.md')
        )
        
    return {
    	dir: {
    	    input: 'content',
    	    includes: '../_includes',
    	    data: '../_data'
    	}
    }
}
