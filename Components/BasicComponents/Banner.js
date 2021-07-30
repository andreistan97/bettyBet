import { LitElement, html, css } from '@lion/core';

class BetbroBanner extends LitElement {
  static get styles() {}

  render() {
    return html`
      <img src="../../Assets/Images/BetBro.png" alt="BetBro Banner" />
    `;
  }
}

customElements.define('betbro-banner', BetbroBanner);
