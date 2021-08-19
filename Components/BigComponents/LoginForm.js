import { LitElement, html, css } from '@lion/core';
import '../BasicComponents/FormButton.js';
import '../BasicComponents/FormInput.js';
import '../BasicComponents/CustomForm.js';
import { ajax } from '@lion/ajax';
import { setUser } from '../../redux/actions/auth.js';
import { selectUserId, selectUserEmail } from '../../redux/selectors/auth.js';
import '../BasicComponents/ReduxClass.js';

class LoginForm extends LitElement {
  static get styles() {
    return css`
      * {
        background-color: #fff;
        box-sizing: border-box;
      }
      h3 {
        padding-top: 50px;
        text-align: center;
      }
      form {
        text-align: center;
      }
      input {
        display: block;
        margin: 16px auto;
        padding: 16px;
        border-radius: 12px;
      }
      input:focus {
        outline: none;
        border: 3px solid black;
      }
      button {
        padding: 16px;
        margin-top: 16px;
        border-radius: 6px;
      }
      button:focus {
        outline: none;
      }
      button:hover {
        cursor: pointer;
        background-color: grey;
        color: #fff;
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
      email: { type: String },
      id: { type: String },
    };
  }
  // constructor() {
  //   this.email = null;
  //   this.id = null;
  // }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <custom-form>
        <h3>Enter your details</h3>
        <form @submit=${this._handleFormSubmit}>
          <input name="email" placeholder="Email" type="email" />
          <input name="password" placeholder="password" type="password" />
          <button type="submit">Log In</button>
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
    window.location.href = '/home';
    // this._callLoginApi();
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
