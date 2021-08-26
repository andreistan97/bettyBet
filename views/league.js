import { LitElement, html, css } from '@lion/core';

import '../Components/BigComponents/Navbar';
import '../Components/BigComponents/Leagues-Navbar';

export class ClickLeague extends LitElement {
  static get properties() {
    return {
      matches: { type: Array },
      isLoading: { type: Boolean },
      league_id: { type: Number },
    };
  }
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.matches) {
      this.loading();
    }
  }
  async showMatchesApi(id) {
    const data = {
      league_id: id,
    };
    const response = await fetch('http://localhost:3000/showMatches', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const final = await response.json();
    return final;
  }
  async loading() {
    this.isLoading = true;
    const urlArr = window.location.href.split('/');
    const myId = urlArr[urlArr.length - 1];
    this.matches = await this.showMatchesApi(myId);
    console.log(this.matches);
    console.log('da');
  }

  static get styles() {
    return css`
      * {
        font-family: cursive;
        font-size: 20px;
      }
      .league {
        text-align: center;
        display: block;
        margin: 0 auto;
        padding: 36px 0 60px 0;
        font-size: 26px;
        font-weight: bold;
        font-family: monospace;
      }
      .container {
        padding: 0 24px;
      }
      .game {
        display: flex;
        justify-content: space-between;
      }
    `;
  }

  render() {
    return html`${this.matches
      ? html`
          <span class="league"><i>${this.matches[0].league_name}</i></span>
          ${this.matches.map(
            game =>
              html`
                <div class="container">
                  <div class="game">
                    <span>${game.team_name1}</span>
                    <span>vs.</span>
                    <span>${game.team_name2}</span>
                  </div>
                </div>
              `
          )}
        `
      : html`Content is loading...`}`;
  }
}

window.customElements.define('click-league', ClickLeague);
