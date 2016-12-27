(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var component = {
    config: {
        selector: '[data-example-component]'
    },
    setup: function setup(element) {
        this.element = element;

        console.log('-RE- example component iz working');

        return this;
    }
};

// initialize all the components with the selector defined on the config
function enhanceAll() {
    var elements = [].slice.call(document.querySelectorAll(component.config.selector));
    return enhanceElements(elements);
}

function enhanceElements(elements) {
    return elements.map(function (element) {
        var object = Object.create(component);
        return object.setup(element);
    });
}

module.exports = { enhanceAll: enhanceAll };

},{}],2:[function(require,module,exports){
'use strict';

var example = require('./components/example-component/example-component');

// initialize components
example.enhanceAll();

},{"./components/example-component/example-component":1}]},{},[2]);
