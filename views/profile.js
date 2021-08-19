import '../Components/BigComponents/Navbar';
import { LitElement, html, css } from '@lion/core';

export class ProfileView extends LitElement {
  render() {
    return html` <nav-bar></nav-bar> `;
  }
}

window.customElements.define('profile-view', ProfileView);
