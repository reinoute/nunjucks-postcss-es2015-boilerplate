const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const renderer = require('./lib/render-html');

const app = express();
const port = process.env.PORT || 1337;

app.get('/', function (req, res) {
    res.redirect('index.html');
});

app.get('/:view', function (req, res) {
    const query = req.params['view'];
    const basename = query.replace('.html', '');
    const pathname = `src/views/${basename}/${basename}.html`;
    const html = renderer.render(pathname, {});
    res.send(html);
});

app.use('/assets', express.static('dist/assets'));

app.listen(port);

