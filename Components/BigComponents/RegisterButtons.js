import { LitElement, html, css } from '@lion/core';

class RegisterButtons extends LitElement {
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

  render() {
    <div>
      <a href="/">
        <span>Log-in</span>
      </a>
      <a href="/register">
        <span>Register</span>
      </a>
    </div>;
  }
}

window.customElements.define('register-buttons', RegisterButtons);
