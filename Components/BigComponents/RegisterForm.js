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
      input[arrows]::-webkit-outer-spin-button,
      input[arrows]::-webkit-inner-spin-button {
        /* Chrome, Safari, Edge, Opera */
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      input[arrows][type='number'] {
        -moz-appearance: textfield;
      }
      p {
        color: red;
        font-weight: bold;
        display: none;
      }
      p > span {
        display: block;
        padding: 10px 0;
      }
      .popup > h1,
      .popup > h2 {
        padding: 12px 24px;
        font-family: cursive;
        font-size: 26px;
      }
      .popup > h2 {
        font-size: 22px;
      }
      .abs {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -175px;
        margin-top: -150px;
      }
      .popup {
        width: 350px;
        border: 3px solid black;
        -webkit-box-shadow: 8px 8px 22px 10px rgba(0, 0, 0, 0.81);
        box-shadow: 8px 8px 22px 10px rgba(0, 0, 0, 0.81);
      }
      .hidden {
        transition: 0.5s linear all;
        visibility: hidden;
        opacity: 0;
      }
      .show {
        transition: 0.5s linear all;
        visibility: visible;
        opacity: 1;
      }
      .relative {
        position: sticky;
        top: 250px;
      }
      .invisible {
        display: none;
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

  isMailValid(mail, confirm) {
    if (mail === confirm) {
      return true;
    } else {
      return false;
    }
  }

  isCNPValid(cnp) {
    if (cnp.toString().length === 13) {
      return true;
    } else {
      return false;
    }
  }
  isPhoneValid(phone) {
    if (phone.toString().length < 13 && phone.toString().length > 8) {
      return true;
    } else {
      return false;
    }
  }
  isDate18orMoreYearsOld(day, month, year) {
    return new Date(year + 18, month - 1, day) <= new Date();
  }
  isPassConfirmed(pass, confirm) {
    if (pass === confirm) {
      return true;
    } else {
      return false;
    }
  }
  isPassValid(pass) {
    const passReg = new RegExp(
      '^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$'
    );
    if (passReg.test(pass)) {
      return false;
    } else {
      return true;
    }
  }

  async createAccount(data) {
    const formattedData = {
      username: data.email,
      password: data.password,
      first_name: data.firstName,
      last_name: data.lastName,
      birthday: data.date.toISOString().split('T')[0],
      address: data.address,
      gender: 'M',
      cnp: data.cnp,
      phone: data.phone,
    };
    console.log(formattedData.birthday);
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedData),
    });
    const final = await response.json();
    return final;
  }

  async _handleRegister(event) {
    const data = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      confirmEmail: event.target.confirmEmail.value,
      password: event.target.password.value,
      confirmPass: event.target.confirmPass.value,
      date: new Date(event.target.date.value),
      address: event.target.address.value,
      cnp: event.target.cnp.value,
      phone: event.target.phone.value,
    };
    const isMail = this.isMailValid(data.email, data.confirmEmail);
    const isCNP = this.isCNPValid(data.cnp);
    const isPhone = this.isPhoneValid(data.phone);
    const isPass = this.isPassConfirmed(data.password, data.confirmPass);
    const isPassValid = this.isPassValid(data.password);
    const isDate = this.isDate18orMoreYearsOld(
      data.date.getDate(),
      data.date.getMonth(),
      data.date.getFullYear()
    );
    isMail
      ? true
      : (this.shadowRoot.querySelector('.mail').style.display = 'block');
    isPassValid
      ? true
      : (this.shadowRoot.querySelector('.password').style.display = 'block');
    isCNP
      ? true
      : (this.shadowRoot.querySelector('.cnp').style.display = 'block');
    isPhone
      ? true
      : (this.shadowRoot.querySelector('.phone').style.display = 'block');
    isDate
      ? true
      : (this.shadowRoot.querySelector('.date').style.display = 'block');
    isPass
      ? true
      : (this.shadowRoot.querySelector('.confirmPass').style.display = 'block');

    isMail && isCNP && isPhone && isDate && isPassValid
      ? console.log('request acum')
      : console.log('nu chiar acum');

    if (isMail && isCNP && isPhone && isDate && isPassValid) {
      const response = await this.createAccount(data);
      if (response.message === 'User is existing') {
        this.shadowRoot.querySelector('.existing').style.display = 'block';
      }
      if (response.message === 'Success.') {
        // this.shadowRoot.querySelector('.redirect').click();
        const popup = this.shadowRoot.querySelector('.popup');
        popup.classList.remove('invisible');
        popup.classList.remove('hidden');
        popup.classList.add('abs');
        popup.classList.add('show');
      }
    }
    // trimis datele astea in spate

    // schimbat pagina
  }

  render() {
    return html`
      <div class="relative">
        <div class="popup hidden invisible">
          <h1>Congratulations! You have successfuly created your account!</h1>
          <br />
          <br />
          <h2>
            You can log-in
            <span><a href="/">here</a></span
            >.
          </h2>
        </div>
      </div>
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
          <p class="existing">
            <span>Email address is already in our database.</span>
            <span>You can have only 1 account.</span>
            <span>Please read our terms and conditions!</span>
          </p>
          <input
            name="confirmEmail"
            placeholder="Confirm Email"
            type="email"
            required
          />
          <p class="mail">Confirmation email does not match with email.</p>
          <input
            name="password"
            placeholder="Password"
            type="password"
            required
          />
          <p class="password">Password too weak, try other one.</p>
          <input
            name="confirmPass"
            placeholder="Confirm Password"
            type="password"
            required
          />
          <p class="confirmPass">Password and confirmation does not match.</p>
          <input name="date" placeholder="Date of birth" type="date" required />
          <p class="date">You need to be 18 years or older!</p>
          <input name="address" placeholder="Address" type="text" required />
          <input name="cnp" placeholder="CNP" type="number" arrows required />
          <p class="cnp">Invalid CNP.</p>
          <input
            name="phone"
            placeholder="Phone"
            type="number"
            arrows
            required
          />
          <p class="phone">Invalid phone number.</p>
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

      <a href="/" class="redirect"></a>
    `;
  }
}

customElements.define('register-form', RegisterForm);
