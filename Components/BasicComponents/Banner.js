import { LitElement, html, css } from '@lion/core';

class BetbroBanner extends LitElement {
  static get styles() {
    return css`
      img {
        padding: 24px;
      }
      p {
        background-color: #fff;
        padding: 0 24px;
        margin: 0;
      }
    `;
  }

  render() {
    return html`
      <p>
        <img src="../../Assets/Images/BetBro.png" alt="BetBro Banner" />
      </p>
    `;
  }
}

customElements.define('betbro-banner', BetbroBanner);
