# Expandable

## Functionality
Toggle expand/collapse by clicking on a handle.

## Usage

Example:

```
<button type="button" aria-expanded="false" aria-controls="panel" data-expandable>Toggle expand</button>
<div id="panel" hidden>Some content</div>
```

- Set `data-expandable` on the handle element to enhance it.
- Set the value of `aria-controls` to the identifier of the element you want to expand/collapse.
- Set the value of `aria-expanded` to the current state and add `hidden` attribute on the target.

Inspired by:
- http://heydonworks.com/practical_aria_examples/#progressive-collapsibles


