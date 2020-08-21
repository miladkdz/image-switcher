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

A component for displaying different images based on which platform the component is being rendered on with a fallback to default resource.

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
  <image-switcher alt="an alt text to briefly describe the image for screenreaders" src="desktop.jpg" androidSrc="android.png" iosSrc="ios.png"></image-switcher>
`;
```