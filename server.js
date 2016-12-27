const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
const port = process.env.PORT || 1337;

const renderer = new nunjucks.Environment(
    new nunjucks.FileSystemLoader('.', {
        noCache: true,
        watch: false,
        express: app
    }),
    { autoescape: true }
);

app.get('/', (req, res) => res.redirect('views/index/index.html'));

app.use('/assets', express.static('src/assets'));

app.get('*?', function (req, res) {
    const filename = 'src' + req.params[0];
    const html = renderer.render(filename, {});
    res.send(html);
});

app.listen(port);

