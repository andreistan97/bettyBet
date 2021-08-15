import { LitElement, html, css } from '@lion/core';

class LeaguesNavbar extends LitElement {
  static get styles() {
    return css`
      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
      }
      li {
        display: inline;
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
    window.location.href = './romania.html';
  }
  handleEngland() {
    window.location.href = './england.html';
  }
  handleFrance() {
    window.location.href = './france.html';
  }
  handleGermany() {
    window.location.href = './germany.html';
  }
  handleItaly() {
    window.location.href = './italy.html';
  }
  handleSpain() {
    window.location.href = './spain.html';
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
        </ul>
      </nav>
    `;
  }
}

window.customElements.define('leagues-navbar', LeaguesNavbar);
