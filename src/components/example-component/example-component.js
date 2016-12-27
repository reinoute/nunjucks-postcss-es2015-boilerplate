const component = {
    config: {
        selector: '[data-example-component]'
    },
    setup(element) {
        this.element = element;
        
        console.log('-RE- example component iz working');

        return this;
    }
};

// initialize all the components with the selector defined on the config
function enhanceAll() {
    const elements = [].slice.call(document.querySelectorAll(component.config.selector));
    return enhanceElements(elements);
}

function enhanceElements(elements) {
    return elements.map(function (element) {
        let object = Object.create(component);
        return object.setup(element);
    });
}

module.exports = {enhanceAll};
