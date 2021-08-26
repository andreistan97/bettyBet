import { LitElement, html, css } from '@lion/core';

class LeaguesNavbar extends LitElement {
  static get styles() {
    return css`
      ul {
        margin: 0;
        padding: 24px 0;
        list-style-type: none;
      }
      a[invisible] {
        visibility: hidden;
      }
      li {
        /* display: inline; */
        border: 1px solid green;
        padding: 8px;
        margin: 0;
        color: #617140;
        background-color: #fff;
      }
      li:hover {
        cursor: pointer;
        background-color: #ecebeb;
        color: #3d4b23;
      }
      @media only screen and (min-width: 480px) {
        ul {
          display: flex;
        }
        li {
          flex: 1;
          text-align: center;
        }
      }
    `;
  }
  static get properties() {
    return {
      romania: {
        type: Array,
      },
      england: {
        type: Array,
      },
      italy: {
        type: Array,
      },
      france: {
        type: Array,
      },
      germany: {
        type: Array,
      },
      spain: {
        type: Array,
      },
    };
  }

  handleRomania() {
    this.shadowRoot.querySelector('.ro').click();
  }
  handleEngland() {
    this.shadowRoot.querySelector('.en').click();
  }
  handleFrance() {
    this.shadowRoot.querySelector('.fr').click();
  }
  handleGermany() {
    this.shadowRoot.querySelector('.ge').click();
  }
  handleItaly() {
    this.shadowRoot.querySelector('.it').click();
  }
  handleSpain() {
    this.shadowRoot.querySelector('.sp').click();
  }

  render() {
    return html`
      <nav class="site-nav">
        <ul class="group">
          <li @click=${this.handleRomania}>Romania</li>
          <li @click=${this.handleEngland}>England</li>
          <li @click=${this.handleFrance}>France</li>
          <li @click=${this.handleGermany}>Germany</li>
          <li @click=${this.handleItaly}>Italy</li>
          <li @click=${this.handleSpain}>Spain</li>
          <a href="/league/1" invisible class="ro"></a>
          <a href="/league/2" invisible class="ge"></a>
          <a href="/league/3" invisible class="en"></a>
          <a href="/league/4" invisible class="sp"></a>
          <a href="/league/5" invisible class="fr"></a>
          <a href="/league/6" invisible class="it"></a>
        </ul>
      </nav>
    `;
  }
}

window.customElements.define('leagues-navbar', LeaguesNavbar);
