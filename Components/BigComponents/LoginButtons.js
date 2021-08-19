import { LitElement, html, css } from '@lion/core';

export class LoginButtons extends LitElement {
  static get styles() {
    return css`
      div {
        text-align: center;
        background-color: #fff;
        float: right;
        padding-right: 16px;
        overflow: auto;
      }

      a {
        text-decoration: none;
      }
      span {
        margin: 0 auto;
        background-color: #fff;
        padding: 16px 24px;
        display: inline-block;
        color: #617140;
        border: #798a56;

        border: 3px solid #e5e9dc;
      }
      span:hover,
      span:focus {
        border: 2px solid #535e38;
        background-color: #a9c278;
        color: black;
      }
    `;
  }

  render() {
    return html`
      <div>
        <a href="/">
          <span>Log-in</span>
        </a>
        <a href="/register">
          <span>Register</span>
        </a>
      </div>
      <div class="clearfix"></div>
    `;
  }
}

window.customElements.define('login-buttons', LoginButtons);
