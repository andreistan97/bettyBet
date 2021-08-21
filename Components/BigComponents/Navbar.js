import { LitElement, html, css } from '@lion/core';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store/store';
import { unsetAuth } from '../../redux/actions/auth';

class NavBar extends connect(store)(LitElement) {
  static get styles() {
    return css`
      * {
        text-align: center;
      }
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }
      h1 {
        margin: 0;
        padding: 24px;
      }
      li {
        text-decoration: none;
        padding: 12px 0;
      }
      li:hover {
        background-color: grey;
      }
      h1:hover {
        color: #5c5c5c;
        cursor: pointer;
      }
      .toggle {
        display: none;
      }
      @media only screen and (min-width: 768px) {
        ul {
          display: flex;
          background-color: #fff;
          border: 2px solid aqua;
        }
        li {
          flex: 1;
          justify-content: space-around;
          border-right: 2px solid black;
        }
        li:last-child {
          border-right: none;
        }
        .toggle {
          display: flex;
        }
        h1 {
          display: none;
        }
        a[invisible] {
          visibility: hidden;
        }
      }
    `;
  }

  handleRedirectHome() {
    this.shadowRoot.querySelector('.home').click();
  }
  handleRedirectProfile() {
    this.shadowRoot.querySelector('.profile').click();
  }
  handleRedirectSupport() {
    this.shadowRoot.querySelector('.support').click();
  }
  handleLogOut() {
    store.dispatch(unsetAuth(store.getState().email, store.getState().id));
    this.shadowRoot.querySelector('.logout').click();
  }
  _handleClick(event) {
    if (event.target.nextElementSibling.classList.contains('toggle')) {
      event.target.nextElementSibling.classList.remove('toggle');
    } else {
      event.target.nextElementSibling.classList.add('toggle');
    }
  }
  render() {
    return html`
      <header>
        <h1 class="menu" @click=${this._handleClick}>Menu</h1>
        <ul class="toggle">
          <li @click=${this.handleRedirectHome}>
            <span>Home</span>
          </li>
          <li @click=${this.handleRedirectProfile}>
            <span>Profile</span>
          </li>
          <li @click=${this.handleRedirectSupport}>
            <span>Support</span>
          </li>
          <li @click=${this.handleLogOut}>
            <span>Log Out</span>
          </li>
        </ul>
        <a href="/home" class="home" invisible></a>
        <a href="/support" class="support" invisible></a>
        <a href="/profile" class="profile" invisible></a>
        <a href="/" class="logout" invisible></a>
      </header>
    `;
  }
}

customElements.define('nav-bar', NavBar);
