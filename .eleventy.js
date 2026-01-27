module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/styles/*.css');

    // Collection for blog posts
    eleventyConfig.addCollection("posts", function(collectionApi) {
        console.log("Generating posts collection");
        const collection = collectionApi.getFilteredByGlob("src/blog/*.md");
        console.log(`Found ${collection.length} project(s)`);
        return collectionApi.getFilteredByGlob("./src/blog/*.md");
    });

    eleventyConfig.addCollection("projects", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/projects/*.md");
    });

    eleventyConfig.addFilter("dateFilter", function(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    });

    return {
        dir: {
            input: 'src',
            output: 'public'
        }
    }
}
