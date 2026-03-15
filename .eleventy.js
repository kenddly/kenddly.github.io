module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/styles/*.css');
    eleventyConfig.addPassthroughCopy("./src/assets/images");
    eleventyConfig.addPassthroughCopy("./src/assets/videos");

    // Collection for blog posts
    eleventyConfig.addCollection("posts", function(collectionApi) {
        return collectionApi.getFilteredByGlob("./src/blog/*.md");
    });

    eleventyConfig.addCollection("projects", function(collectionApi) {
        return collectionApi
            .getFilteredByGlob("src/projects/*.md")
            .sort((a, b) => b.data.order - a.data.order);
    });

    eleventyConfig.addFilter("dateFilter", function(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    });

    // Date filter to show hex-style timestamp
    eleventyConfig.addFilter("dateToHex", function(date) {
        return "0x" + Math.floor(date.getTime() / 1000).toString(16).toUpperCase();
    });



    return {
        dir: {
            input: 'src',
            output: 'public'
        }
    }
}
