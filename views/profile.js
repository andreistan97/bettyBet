import '../Components/BigComponents/Navbar';
import { LitElement, html, css } from '@lion/core';

export class ProfileView extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    window.document.title = 'Profile';
  }
  render() {
    return html` <nav-bar></nav-bar> `;
  }
}

window.customElements.define('profile-view', ProfileView);
