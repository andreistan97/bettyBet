import { LitElement, html, css } from '@lion/core';
import '../BasicComponents/Banner.js';
import '../BigComponents/BetbroFooter.js';
class ConfirmRegistration extends LitElement {
  render() {
    return html`
      <betbro-banner></betbro-banner>
      <h1>Your account has been successfuly registered.</h1>
      <h2>
        After you verify your account, you can log-in
        <a href="/">here</a>.
      </h2>
      <betbro-footer></betbro-footer>
    `;
  }
}

customElements.define('confirm-registration', ConfirmRegistration);
