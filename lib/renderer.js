const nunjucks = require('nunjucks');

const renderer = new nunjucks.Environment(
    new nunjucks.FileSystemLoader('.', {
        noCache: true,
        watch: false
    }),
    {autoescape: true}
);

module.exports = renderer;