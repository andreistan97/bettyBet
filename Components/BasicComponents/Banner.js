import { LitElement, html, css } from '@lion/core';

class BetbroBanner extends LitElement {
  static get styles() {
    return css`
      img {
        margin-bottom: 24px;
      }
    `;
  }

  render() {
    return html`
      <img src="../../Assets/Images/BetBro.png" alt="BetBro Banner" />
    `;
  }
}

customElements.define('betbro-banner', BetbroBanner);
