import '../BigComponents/LoginForm.js';
import { LitElement, html, css } from '@lion/core';
import '../BasicComponents/Banner.js';
import '../BigComponents/BetbroFooter.js';
class LoginPage extends LitElement {
  static get styles() {
    return css`
      div {
        text-align: center;
        background-color: #fff;
        float: right;
        padding-right: 16px;
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

        border: 3px solid #e5e9dc;
      }
      span:hover {
        background-color: #e5e9dc;
        border-color: grey;
      }
    `;
  }
  render() {
    return html`
      <betbro-banner></betbro-banner>
      <div>
        <a href="/"><span>Log-in</span></a>
        <a href="/register.html"><span>Register</span></a>
      </div>
      <login-form></login-form>
      <betbro-footer></betbro-footer>
    `;
  }
}
customElements.define('login-page', LoginPage);
