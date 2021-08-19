import { LitElement, html, css } from '@lion/core';

class NavBar extends LitElement {
  static get styles() {
    return css`
      * {
        text-align: center;
      }
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        margin-bottom: 24px;
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
      }
    `;
  }

  handleRedirectHome() {
    window.location.href = '/home';
  }
  handleRedirectProfile() {
    window.location.href = '/profile';
  }
  handleRedirectSupport() {
    window.location.href = '/support';
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
        </ul>
      </header>
    `;
  }
}

customElements.define('nav-bar', NavBar);
