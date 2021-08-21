import '../Components/BigComponents/LoginButtons';
import '../Components/BigComponents/LoginForm';

import { LitElement, html, css } from '@lion/core';

export class LoginView extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    window.document.title = 'Login';
  }

  render() {
    return html`
      <login-buttons></login-buttons>
      <login-form></login-form>
    `;
  }
}

window.customElements.define('login-view', LoginView);
