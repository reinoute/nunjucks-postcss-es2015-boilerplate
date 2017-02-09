class Component {

    constructor(element) {
        /* setup component here */
        this.someClassMethod();
    }

    someClassMethod = () => {
        console.log('Navigation component initialized.');
    }
}

const enhanceElement = (element) =>
    element ? new Component(element) : false;

const enhance = () =>
    enhanceElement(document.querySelector('[data-navigation]'));

export default {enhance};
