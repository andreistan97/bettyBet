import { LitElement, html, css } from '@lion/core';
import '../../BigComponents/BetbroFooter.js';
import '../../BasicComponents/Banner.js';
class GermanyBets extends LitElement {
  render() {
    return html`
      <betbro-banner></betbro-banner>

      <betbro-footer></betbro-footer>
    `;
  }
}

window.customElements.define('germany-bets', GermanyBets);
