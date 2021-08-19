import '../Components/BigComponents/Leagues-Navbar';
import '../Components/BigComponents/Navbar';
import '../Components/BigComponents/LeaguesAndGames';
import { LitElement, html, css } from '@lion/core';

export class HomeView extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    window.document.title = 'Home';
  }
  render() {
    return html`
      <nav-bar></nav-bar>
      <leagues-navbar></leagues-navbar>
      <leagues-and-games></leagues-and-games>
    `;
  }
}

window.customElements.define('home-view', HomeView);
