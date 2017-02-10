class Component {

    constructor(element) {
        // component configuration
        this.config = {
            // e.g. someSelector: '[data-expandable-something]'
        };

        // component properties
        this.element = element;
        this.targetId = this.element.getAttribute('aria-controls');
        this.target = document.getElementById(this.targetId);

        // bind to events
        this.element.addEventListener('click', this.toggle, false);
    }

    toggle = () => {
        const isExpanded = this.element.getAttribute('aria-expanded') === 'true';

        this.element.setAttribute('aria-expanded', !isExpanded);
        isExpanded ? this.target.setAttribute('hidden', '') : this.target.removeAttribute('hidden');
    }
}

const enhanceAll = () => {
    const elements = [].slice.call(document.querySelectorAll('[data-expandable]'));
    return enhanceElements(elements);
};

const enhanceElements = (elements) =>
    elements.map(element => new Component(element));

export default {enhanceAll};