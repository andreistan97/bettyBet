import { LitElement, html, css } from '@lion/core';
import '../BasicComponents/FormButton.js';
import '../BasicComponents/FormInput.js';
import '../BasicComponents/CustomForm.js';
import '../BasicComponents/ReduxClass.js';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store/store';
import { setAuth } from '../../redux/actions/auth';

class LoginForm extends connect(store)(LitElement) {
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
      a[invisible] {
        visibility: hidden;
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
      }
      button:focus {
        outline: none;
      }
      button:hover {
        cursor: pointer;
        background-color: grey;
        color: #fff;
      }
      .error {
        color: #b31717;
        visibility: hidden;
        font-weight: bold;
        text-align: center;
        font-size: 18px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
      }
    `;
  }
  static get properties() {
    return {
      email: { type: String },
      id: { type: String },
    };
  }
  stateChanged(state) {
    this.email = state.email;
    this.id = state.id;
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('login');
    console.log(store.getState());
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
        <a invisible class="redirect" href="/home">invisible</a>
        <div class="error">
          <h4>Wrong email or password. please try again!</h4>
        </div>
      </custom-form>
    `;
  }
  async _handleFormSubmit(event) {
    event.preventDefault();
    const data = {
      username: event.target.email.value,
      password: event.target.password.value,
    };
    const promise = await this._callLoginApi(data);
    console.log(promise);
    if (promise.message === 'Logged in.') {
      // dispatch funds and id
      store.dispatch(setAuth(data.username, promise.id, promise.funds));
      const aTag = this.shadowRoot.querySelector('.redirect');
      aTag.click();
    } else {
      this.shadowRoot.querySelector('.error').style.visibility = 'visible';
    }
  }

  async _callLoginApi(data) {
    // fake an api call
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const final = await response.json();
    return final;
    // daca contul nu exista
    const errorDiv = this.shadowRoot.querySelector('.error');
    errorDiv.style.visibility = 'visible';
    // daca contul nu e verificat
    // const notVerifiedDiv = this.shadowRoot.querySelector('.notVerified');
    //notVerifiedDiv.style.visibility = 'visible';
  }
}

customElements.define('login-form', LoginForm);
