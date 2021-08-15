import { LitElement, html, css } from '@lion/core';
import '../../BigComponents/BetbroFooter.js';
import '../../BasicComponents/Banner.js';

class FranceBets extends LitElement {
  render() {
    return html`
      <betbro-banner></betbro-banner>

      <betbro-footer></betbro-footer>
    `;
  }
}

customElements.define('france-bets', FranceBets);
