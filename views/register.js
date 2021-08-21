import '../Components/BigComponents/LoginButtons';
import '../Components/BigComponents/RegisterForm';
import { LitElement, html, css } from '@lion/core';

export class RegisterView extends LitElement {
  render() {
    return html`
      <login-buttons></login-buttons>
      <register-form></register-form>
    `;
  }
}

window.customElements.define('register-view', RegisterView);
