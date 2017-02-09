const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const renderer = require('./lib/renderer');

const app = express();
const port = process.env.PORT || 1337;

app.get('/', function (req, res) {
    const indexFilename = `src/views/index/index.html`;
    const html = renderer.render(indexFilename, {});
    res.send(html);
});

app.get('/:view', function (req, res) {
    const query = req.params['view'];
    const basename = query.replace('.html', '');
    const pathname = `src/views/${basename}/${basename}.html`;
    const html = renderer.render(pathname, {});
    res.send(html);
});

app.get('/components/:name', function (req, res) {
    const name = req.params['name'];
    const pathname = `src/components/${name}/${name}.html`;
    const html = renderer.render(pathname, {});
    res.send(html);
});

app.use('/assets', express.static('dist/assets'));

app.listen(port);

