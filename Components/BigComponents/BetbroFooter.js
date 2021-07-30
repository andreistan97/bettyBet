import { LitElement, html, css } from '@lion/core';

class BetbroFooter extends LitElement {
  static get styles() {
    return css`
      a {
        text-decoration: none;
        color: #222121;
        font-weight: bold;
        font-size: 28px;
      }
      span {
        font-weight: bold;
        color: #6d6862c0;
      }
      p {
        font-size: 18px;
      }
      nav {
        margin-top: 30px;
        text-align: center;
        border-top: 2px solid #fff;
      }
    `;
  }

  render() {
    return html`
      <nav>
        <a href="/">BetBro</a>
        <p>&copy;Copyright <span>2021</span>.</p>
        <p>All rights reserved. Powered by <span>Andrei Stanciu</span>.</p>
      </nav>
    `;
  }
}

customElements.define('betbro-footer', BetbroFooter);
