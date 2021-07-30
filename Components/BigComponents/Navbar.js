import { LitElement, html, css } from '@lion/core';

class NavBar extends LitElement {
  static get styles() {
    return css`
      * {
        text-align: center;
      }
      ul {
        list-style-type: none;
        padding-right: 40px;
      }
      li {
        text-decoration: none;
        padding: 12px 0;
      }
      a {
        text-decoration: none;
        color: #02db26;
      }
      a:hover {
        color: black;
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
        }
        li {
          flex: 1;
          justify-content: space-around;
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
          <li>
            <a href="/home.html">Home</a>
          </li>
          <li>
            <a href="/profile.html">Profile</a>
          </li>
          <li>
            <a href="/contact.html">Support</a>
          </li>
        </ul>
      </header>
    `;
  }
}

customElements.define('nav-bar', NavBar);
