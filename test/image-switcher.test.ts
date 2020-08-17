import { html, fixture, expect } from '@open-wc/testing';

import {ImageSwitcher} from '../src/ImageSwitcher.js';
import '../image-switcher.js';

describe('ImageSwitcher', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el: ImageSwitcher = await fixture(html`
      <image-switcher></image-switcher>
    `);

    expect(el.title).to.equal('Hey there');
  });

  it('increases the counter on button click', async () => {
    const el: ImageSwitcher = await fixture(html`
      <image-switcher></image-switcher>
    `);
    el.shadowRoot!.querySelector('button')!.click();
  });

  it('can override the title via attribute', async () => {
    const el: ImageSwitcher = await fixture(html`
      <image-switcher title="attribute title"></image-switcher>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el: ImageSwitcher = await fixture(html`
      <image-switcher></image-switcher>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
