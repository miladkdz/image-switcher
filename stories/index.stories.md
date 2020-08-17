```js script
import { html } from '@open-wc/demoing-storybook';
import '../dist/image-switcher.js';

export default {
  title: 'ImageSwitcher',
  component: 'image-switcher',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# ImageSwitcher

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add image-switcher
```

```js
import 'image-switcher/image-switcher.js';
```

```js preview-story
export const Simple = () => html`
  <image-switcher></image-switcher>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <image-switcher title="Hello World"></image-switcher>
`;
```
