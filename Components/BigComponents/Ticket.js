import { LitElement, html, css } from '@lion/core';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store/store';

class BetbroTicket extends connect(store)(LitElement) {
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
    this.ticket = [];
    this.ticket = [...this.ticket, ...store.getState().ticket];
    console.log(this.ticket.length);
    this.odds = [];
    this.odds = [...this.odds];
    this.totalOdd = 1;
  }
  stateChanged(state) {
    this.games = store.getState();
    this.ticket = state.ticket;
    this.odds = [...this.odds, ...this.ticket.map(game => game.odd)];
    let prod = 1;
    this.odds.forEach(odd => (prod *= odd));
    this.totalOdd = prod;
    console.log(this.ticket);
  }

  static get styles() {
    return css`
      .container {
        margin: 0 auto;
        background-color: rgba(82, 68, 68, 1);
        color: #fff;
        width: 400px;
        border-radius: 12px 12px 0 0;
        border: 1px solid grey;
      }
      .top-bar {
        margin: 20px;
        padding: 24px;
        cursor: pointer;
      }
      .game-card {
        margin: 20px;
        background-color: #333333;
        padding: 15px;
        border-radius: 8px;
        border: 1px solid grey;
      }
      .top,
      .bottom,
      .top-bar {
        display: flex;
        justify-content: space-between;
      }
      .top {
        margin-bottom: 8px;
      }
      [game],
      [invisible] .top-bar:first-child {
        flex: 1;
      }
      [odd] {
        color: #fff460;
      }
      [invisible] {
        visibility: hidden;
      }
      .final {
        display: flex;
        justify-content: space-around;
      }
      input[number] {
        padding: 18px;
        font-size: 20px;
        width: 200px;
        font-weight: bold;
        background-color: #333333;
        color: #fff;
        border-radius: 12px;
        border: 1px solid #d1d1d1;
      }
      input[number]:focus,
      button {
        outline: none;
      }
      button:hover {
        cursor: pointer;
      }
      button {
        background-color: #333333;
        color: #fff;
        border-radius: 8px;
        border: 1px solid #d1d1d1;
      }
      .final {
        padding-bottom: 30px;
      }
      [gone] {
        display: none;
      }
    `;
  }

  handleBet() {}
  showHideTicket(e) {
    console.log(e);
    const ticket = this.shadowRoot.querySelector('.ticket');
    if (ticket.hasAttribute('gone')) {
      ticket.removeAttribute('gone');
    } else {
      ticket.setAttribute('gone', 'true');
    }
  }
  handleRemoveGame(e) {
    e.target.parentElement.parentElement.style.display = 'none';
  }
  render() {
    return html`
      ${this.ticket.length === 0
        ? html``
        : html`
            <div class="container">
              <div class="top-bar" @click=${this.showHideTicket}>
                <span>Your ticket @${this.ticket.length} selections</span>
                <span odd>@${this.totalOdd}</span>
              </div>
              <div class="ticket" gone>
                ${this.ticket.length === 0
                  ? html` <div invisible></div> `
                  : html` ${this.ticket.map(
                      match => html` <div class="game-card">
                        <div class="top">
                          <div delete @click=${this.handleRemoveGame}>X</div>
                          <div option>${match.option}</div>
                        </div>
                        <div class="bottom">
                          <div game>${match.game}</div>
                          <div odd>@${match.odd}</div>
                        </div>
                      </div>`
                    )}

                    <div class="final">
                      <input
                        number
                        type="text"
                        placeholder="0.00 RON"
                        required
                      />
                      <button type="button" @click=${this.handleBet}>
                        Bet now
                      </button>
                    </div>
                    </div>
                    `}
              </div>
            </div>
          `}
    `;
  }
}

window.customElements.define('betbro-ticket', BetbroTicket);
