import { LitElement, html, css } from '@lion/core';

export class BetbroFooter extends LitElement {
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
        color: black;
        font-family: system-ui;
      }
      p {
        font-size: 18px;
      }
      .container {
        font-family: sans-serif;
        color: #999;
      }
      nav {
        border-top: 2px solid blue;
        padding-top: 12px;
        text-align: left;
        padding-bottom: 36px;
        background-color: #fff;
      }
      .container {
        padding-left: 36px;
      }
      @media only screen and (min-width: 600px) {
        .container {
          padding-left: 58px;
        }
      }
    `;
  }

  render() {
    return html`
      <nav>
        <div class="container">
          <a href="/">BetBro</a>
          <p>&copy;Copyright <span>2021</span>.</p>
          <p>All rights reserved. Powered by <span>Andrei Stanciu</span>.</p>
        </div>
      </nav>
    `;
  }
}

customElements.define('betbro-footer', BetbroFooter);
