import '../Components/BigComponents/Navbar';
import { LitElement, html, css } from '@lion/core';

export class SupportView extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    window.document.title = 'Support';
  }
  render() {
    return html` <nav-bar></nav-bar> `;
  }
}

window.customElements.define('support-view', SupportView);
