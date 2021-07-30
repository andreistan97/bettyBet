import { LitElement, html, css } from '@lion/core';
import '../BasicComponents/FormButton.js';
import '../BasicComponents/FormInput.js';
import '../BasicComponents/CustomForm.js';
import { ajax } from '@lion/ajax';

class LoginForm extends LitElement {
  static get styles() {
    return css`
      button {
        padding: 0px;
        border: none;
        margin-left: 12px;
      }
      .error,
      .notVerified {
        color: #b31717;
        visibility: hidden;
        font-weight: bold;
      }
    `;
  }
  static get properties() {
    return {
      _userData: {
        type: Object,
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <custom-form>
        <h3>Enter your details</h3>
        <form @submit=${this._handleFormSubmit}>
          <form-input name="email" label="Email" type="email"> </form-input>
          <form-input
            name="password"
            label="Password"
            type="password"
          ></form-input>
          <button type="submit">
            <form-button>da</form-button>
          </button>
        </form>
        <div class="error">
          <h4>Wrong email or password. please try again!</h4>
        </div>
        <div class="notVerified">
          <h4>You need to verify your account first!</h4>
        </div>
      </custom-form>
    `;
  }
  _handleFormSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    const form = event.target;
    const formData = new FormData(form);
    this._userData = Object.fromEntries(formData);
    console.log(this._userData);
    this._callLoginApi();
  }

  async _callLoginApi() {
    // fake an api call
    const response = true;

    if (response === true) {
      window.sessionStorage.setItem('email', `${this._userData.email}`);
      window.location.href = 'register.html';
    }
    // daca contul nu exista
    else {
      const errorDiv = this.shadowRoot.querySelector('.error');
      errorDiv.style.visibility = 'visible';
    }
    // daca contul nu e verificat
    // const notVerifiedDiv = this.shadowRoot.querySelector('.notVerified');
    //notVerifiedDiv.style.visibility = 'visible';
  }
}

customElements.define('login-form', LoginForm);
