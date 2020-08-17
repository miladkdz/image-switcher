import { html, css, LitElement, property } from 'lit-element';

export class ImageSwitcher extends LitElement {
  static styles =css`
    :host {
      display: block;
      padding: 25px;
      color: var(--image-switcher-text-color, #000);
    }
  `;

  @property({type: String}) alt = '';
  @property({type: String}) src = '';
  @property({type: String}) androidSrc = '';
  @property({type: String}) iosSrc = '';

  __getUserAgent() {
    return navigator.userAgent || navigator.vendor;
  }

  __isiOS() {
    if (/iPad|iPhone|iPod/i.test(this.__getUserAgent())) {
      return true;
    }
  }

  __isAndroid() {
    if (/android/i.test(this.__getUserAgent())) {
      return true;
    }
    return false;
  }

  render() {
    let src = this.src;
    if (this.iosSrc !== '' && this.__isiOS()) {
      src = this.iosSrc;
    } else if (this.androidSrc !== '' && this.__isAndroid()) {
      src = this.androidSrc;
    }

    return html`
      <img
        src=${src}
        alt=${this.alt}
      />
    `;
  }
}
