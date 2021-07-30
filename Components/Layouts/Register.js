import '../BigComponents/RegisterForm.js';
import { LitElement, html, css } from '@lion/core';
import '../BasicComponents/Banner.js';
import '../BigComponents/BetbroFooter.js';

class RegisterPage extends LitElement {
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
  connectedCallback() {
    super.connectedCallback();
    console.log(window.sessionStorage.getItem('email'));
  }
  render() {
    return html`
      <betbro-banner></betbro-banner>
      <div>
        <a href="/"><span>Log-in</span></a>
        <a href="/register"><span>Register</span></a>
      </div>
      <register-form></register-form>
      <betbro-footer></betbro-footer>
    `;
  }
}
customElements.define('register-page', RegisterPage);
