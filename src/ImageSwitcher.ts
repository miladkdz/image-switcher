import { html, css, LitElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

export class ImageSwitcher extends LitElement {
  static styles =css`
    :host {
      display: inherit;
      --image-width: inherit;
      --image-height: inherit;
    }

    img {
      width: var(--image-width);
      height: var(--image-height);
    }

    .ios {
      width: var(--ios-image-width);
      height: var(--ios-image-height);
    }

    .android {
      width: var(--android-image-width);
      height: var(--android-image-height);
    }
  `;

  @property({type: String}) alt = '';
  @property({type: String}) src = '';
  @property({type: String}) androidSrc = '';
  @property({type: String}) iosSrc = '';
  @property({type: Object}) __imageClass = {};

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

  firstUpdated() {
    this.__imageClass = { ios: this.__isiOS(), android: this.__isAndroid() }
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
        class=${classMap(this.__imageClass)}
      />
    `;
  }
}
