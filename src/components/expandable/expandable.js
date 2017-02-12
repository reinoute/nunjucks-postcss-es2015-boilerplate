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

        // set initial state
        const isExpanded = this.element.getAttribute('aria-expanded') === 'true';
        isExpanded ? this.expand() : this.collapse();

        // bind to events
        this.element.addEventListener('click', this.toggle, false);
    }

    expand = () => {
        this.element.setAttribute('aria-expanded', "true");
        this.target.removeAttribute('hidden');
    };

    collapse = () => {
        this.element.setAttribute('aria-expanded', "false");
        this.target.setAttribute('hidden', '');
    };

    toggle = () => {
        const isExpanded = this.element.getAttribute('aria-expanded') === 'true';

        isExpanded ? this.collapse() : this.expand();
    };
}

const enhanceAll = () => {
    const elements = [].slice.call(document.querySelectorAll('[data-expandable]'));
    return enhanceElements(elements);
};

const enhanceElements = (elements) =>
    elements.map(element => new Component(element));

export default {enhanceAll};