import { LitElement, html, css } from '@lion/core';
import '../BasicComponents/FormButton.js';
import '../BasicComponents/FormInput.js';
import '../BasicComponents/CustomForm.js';
import '../BasicComponents/DatePicker.js';
import { MaxDate } from '@lion/form-core';
import { ajax } from '@lion/ajax';

class RegisterForm extends LitElement {
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
      form > input {
        width: 75%;
      }
      input {
        display: block;
        margin: 16px auto;
        padding: 16px;
        border-radius: 12px;
      }
      input:focus {
        outline: none;
        border: 2px solid #869960;
        box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.13);
      }
      button {
        padding: 16px;
        margin-top: 16px;
        border-radius: 6px;
        display: block;
        margin: 0 auto;
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
      @media only screen and (min-width: 600px) {
        form > input {
          width: 50%;
        }
      }
    `;
  }
  static get properties() {
    return {
      _userData: {
        type: Object,
      },
      _maxDate: Date,
      _legalAge: Date,
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this._maxDate = new Date();
    console.log(this._maxDate);
    this._maxDate.setFullYear(
      this._maxDate.getFullYear() - 18,
      this._maxDate.getMonth(),
      this._maxDate.getDate()
    );
    console.log(this._maxDate);
  }

  _handleRegister(event) {
    const data = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      confirmEmail: event.target.confirmEmail.value,
      date: event.target.date.value,
    };
    console.log(data);
    // trimis datele astea in spate

    // schimbat pagina
  }

  render() {
    return html`
      <custom-form>
        <h3>Create account</h3>
        <form @submit=${this._handleRegister}>
          <input
            name="firstName"
            placeholder="First Name"
            type="text"
            required
          />
          <input name="lastName" placeholder="Last Name" type="text" required />
          <input name="email" placeholder="Email" type="email" required />
          <input
            name="confirmEmail"
            placeholder="Confirm Email"
            type="email"
            required
          />
          <input name="date" placeholder="Date of birth" type="date" required />
          <div class="container">
            <input
              name="terms"
              type="checkbox"
              required
              style="display:inline"
            />
            <span>
              I have read and understand the
              <a href="/terms">terms and conditions</a>.
            </span>
          </div>
          <button type="submit">Register Now</button>
        </form>
      </custom-form>
    `;
  }
}

customElements.define('register-form', RegisterForm);
