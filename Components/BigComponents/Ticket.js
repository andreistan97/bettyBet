import { LitElement, html, css } from '@lion/core';

class BetbroTicket extends LitElement {
  static get styles() {}

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

  connectedCallback() {
    super.connectedCallback();
    this.games = [...this.games, [...Object.keys(window.sessionStorage)]];
    this.odds = Object.values(window.sessionStorage);
    Object.entries(window.sessionStorage)
      .map(elem => elem[1])
      .forEach(elem => this.data.push(JSON.parse(elem)));
    // console.log(this.data[0].odd);
    // console.log(this.data[0].selection);
    // console.log(this.games[0]);
    let sum = 1;
    this.data.forEach(odds => (sum *= odds.odd));
    this.totalOdd = sum;
    console.log(this.totalOdd);
  }

  render() {
    return html`
      ${typeof this.data
        ? html` <div class="container">
            <span>${this.totalOdd}</span>

            <div class="game-card">
              ${this.games.map(
                (game, index) => html`
                  <span>${game}</span>
                  <span>${this.data[index].odd}</span>
                  <span>${this.data[index].selection}</span>
                `
              )}
            </div>
          </div>`
        : html`Content is loading`}
    `;
  }
}

window.customElements.define('betbro-ticket', BetbroTicket);
