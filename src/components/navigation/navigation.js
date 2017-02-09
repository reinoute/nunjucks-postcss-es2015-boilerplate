class Component {

    constructor(element) {
        console.log('Navigation component initialized with element: ', element);
    }
}

const enhanceElement = (element) =>
    element ? new Component(element) : false;

const enhance = () =>
    enhanceElement(document.querySelector('[data-navigation]'));

export default {enhance};
