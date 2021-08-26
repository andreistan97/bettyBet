import { LitElement, html, css } from '@lion/core';

export class RomaniaView extends LitElement {
  static get properties() {}
  static get styles() {}
  constructor() {
    super();
    this.league = 'Liga I';
  }
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return html``;
  }
}

window.customElements.define('romania-view', RomaniaView);
