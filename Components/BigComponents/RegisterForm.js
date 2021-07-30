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
      button {
        padding: 0px;
        border: none;
        margin-left: 12px;
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

  _handleFormSubmit() {
    console.log('da');
  }

  render() {
    return html`
      <custom-form>
        <h3>Register your account</h3>
        <form @submit=${this._handleFormSubmit}>
          <form-input
            name="firstName"
            label="First Name"
            type="text"
          ></form-input>
          <form-input
            name="lastName"
            label="Last Name"
            type="text"
          ></form-input>
          <form-input
            name="password"
            label="Password"
            type="password"
          ></form-input>
          <form-input
            name="confirmPassword"
            label="Confirm Password"
            type="password"
          ></form-input>
          <form-input name="email" label="Email" type="email"></form-input>
          <date-picker
            name="birthday"
            label="Date of birth"
            .validators=${[new MaxDate(this._maxDate)]}
          ></date-picker>
          <form-input
            name="phone"
            label="Phone Number"
            type="text"
          ></form-input>
          <button type="submit">
            <form-button>Register</form-button>
          </button>
        </form>
      </custom-form>
    `;
  }
}

customElements.define('register-form', RegisterForm);
