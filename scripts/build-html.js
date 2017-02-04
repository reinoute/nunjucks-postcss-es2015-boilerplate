const Promise = require('bluebird');
const glob = require('glob');
const path = require('path');
const renderer = require('../lib/renderer');
const saveFile = require('../lib/save-file');

const srcDir = 'src/';
const distDir = 'dist/';

function buildViews() {
    const pathnames = glob.sync(srcDir + 'views/**/*.html');

    return Promise.all(pathnames.map(pathname => {
        const result = renderer.render(pathname, {});
        const filename = path.parse(pathname).base;

        return saveFile(distDir + filename, result);
    }));
};

module.exports = new Promise (buildViews);