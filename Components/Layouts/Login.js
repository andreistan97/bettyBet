import '../BigComponents/LoginForm.js';
import { LitElement, html, css } from '@lion/core';
import '../BasicComponents/Banner.js';
import '../BigComponents/BetbroFooter.js';
class LoginPage extends LitElement {
  static get styles() {
    return css`
      div {
        text-align: center;
      }
      a {
        text-decoration: none;
      }
      span {
        margin: 0 auto;
        color: #c1f35c;
        background-color: #5a7029ab;
        padding: 16px;
        display: inline-block;
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
