import { LitElement, html, css } from '@lion/core';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store/store';

class BetbroTicket extends connect(store)(LitElement) {
  static get styles() {
    return css`
      .container {
        background-color: #3b3939;
        color: #fff;
      }
      .game-card {
        overflow: hidden;
        padding: 30px;
        margin: 30px;
        background-color: grey;
      }
      .content {
        overflow: auto;
        width: 100%;
        display: inline-block;
      }
      .content:first-child {
        display: block;
        float: left;
        width: 250px;
      }
      .content:last-child {
        display: block;
        float: right;
        width: 250px;
      }
      .final {
        display: block;
      }
      p {
        visibility: hidden;
        margin: 0;
      }
    `;
  }

  static get properties() {
    return {
      games: { type: Array },
      odds: { type: Array },
      options: { type: Array },
      totalOdd: { type: Number },
      data: { type: Array },
    };
  }

  constructor() {
    super();
    this.games = [];
    this.odds = [];
    this.data = [];
    this.totalOdd = null;
  }
  stateChanged(state) {
    this.games = store.getState();
  }
  render() {
    return html` <div class="container">
      <div class="topBar">Your Ticket</div>
      <div class="game-card">
        <div class="content">
          <span game>Meciul aici</span>
          <br />
          <p>test</p>
          <span time>Data si ora</span>
        </div>
        <span odd>Cota meciului</span>
      </div>
      <div class="game-card">
        <div class="content">
          <span game>Meciul aici</span>
          <br />
          <p>test</p>
          <span time>Data si ora</span>
        </div>
        <span odd>Cota meciului</span>
      </div>
      <div class="game-card">
        <div class="content">
          <span game>Meciul aici</span>
          <br />
          <p>test</p>
          <span time>Data si ora</span>
        </div>
        <span odd>Cota meciului</span>
      </div>
      <div class="final">
        <input type="number" placeholder="0.00 RON" required />
        <span totalOdd>Cota totala</span>
      </div>
    </div>`;
  }
}

window.customElements.define('betbro-ticket', BetbroTicket);
