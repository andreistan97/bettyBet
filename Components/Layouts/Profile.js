import { LitElement, html, css } from '@lion/core';
import '../BigComponents/BetbroFooter.js';
import '../BasicComponents/Banner.js';

class BetbroProfile extends LitElement {
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
}

customElements.define('betbro-profle', BetbroProfile);
