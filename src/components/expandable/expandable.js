class Component {

    constructor(element) {
        // component configuration
        this.config = {
            // e.g. someSelector: '[data-expandable-something]'
        };

        // component properties
        this.element = element;

        // bind to events
        this.element.addEventListener('click', this.toggle, false);
    }

    toggle = () => {
        const isExpanded = this.element.getAttribute('aria-expanded') === 'true';
        const targetId = this.element.getAttribute('aria-controls');
        const target = document.getElementById(targetId);

        this.element.setAttribute('aria-expanded', !isExpanded);
        isExpanded ? target.setAttribute('hidden', '') : target.removeAttribute('hidden');
    }
}

const enhanceAll = () => {
    const elements = [].slice.call(document.querySelectorAll('[data-expandable]'));
    return enhanceElements(elements);
};

const enhanceElements = (elements) =>
    elements.map(element => new Component(element));

export default {enhanceAll};