# Expandable

## Functionality
Expand/collapse content by clicking on a handle.

## Usage

Example:

```
<button type="button" aria-expanded="false" aria-controls="panel" data-expandable>Toggle expand</button>
<div id="panel">Some content</div>
```

- Set `data-expandable` on the handle element to enhance it. On the same element, set the value of `aria-expanded` to the current state (`true`/`false`).
- Set the value of `aria-controls` to the identifier of the element you want to expand/collapse.

Inspired by:
- http://heydonworks.com/practical_aria_examples/#progressive-collapsibles


