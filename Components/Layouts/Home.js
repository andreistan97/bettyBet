import { LitElement, html, css } from '@lion/core';
import '../BigComponents/BetbroFooter.js';
import '../BasicComponents/Banner.js';
import '../BigComponents/Navbar.js';
import '../BigComponents/LeaguesAndGames.js';

class BetbroHome extends LitElement {
  static get styles() {}
  static get properties() {
    return {
      _userEmail: String,
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this._userEmail = window.sessionStorage.getItem('email');
    console.log(this._userEmail);
  }
  render() {
    return html`
      <betbro-banner></betbro-banner>
      <nav-bar></nav-bar>
      <leagues-and-games></leagues-and-games>
      <betbro-footer></betbro-footer>
    `;
  }
}

customElements.define('betbro-home', BetbroHome);
