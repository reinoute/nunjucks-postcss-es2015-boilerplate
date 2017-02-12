# Nunjucks / PostCSS / ES6 boilerplate
 
Boilerplate for module based development using Nunjucks templating, PostCSS and ES6.

## Requirements

* Recent version of *node*. It is recommend to install *node* using  [nvm](https://github.com/creationix/nvm).

## Getting started

1. Run `npm install` to install dependencies.
1. Run `npm start` to start development server and watch for JS/CSS changes.
1. Navigate to [localhost:1337](http://localhost:1337).

Navigating to *localhost:1337/example.html* will render the view located in `src/views/example/example.html`.

## Preparing production build

Run `npm run build` to generate a production build. Output is located in the `dist/` folder.


## HTML

Use [Nunjucks](https://mozilla.github.io/nunjucks/templating.htm ) for HTML templates.

## CSS

CSS is processed using [PostCSS](https://github.com/postcss/postcss). Next to [autoprefixing](https://github.com/postcss/autoprefixer) and compression (with [css-nano](http://cssnano.co/)) the following PostCSS plugins are used:

* [postcss-nested](https://github.com/postcss/postcss-nested): unwrap nested rules like how Sass does it
* [postcss-import](https://github.com/postcss/postcss-import): inline import rules content
* [postcss-apply](https://github.com/pascalduez/postcss-apply): custom properties sets references (mixins)
* [postcss-custom-media](https://github.com/postcss/postcss-custom-media): custom media queries
* [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties): variables

## Javascript

You can write *ES2015* style JavaScript. [Babel](https://babeljs.io/) will transform this into ES5 compatible code.

* the [transform-class-properties](http://babeljs.io/docs/plugins/transform-class-properties/) plugin allows you to write public class methods.