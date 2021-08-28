import { LitElement, html, css } from '@lion/core';

import '../Components/BigComponents/Navbar';
import '../Components/BigComponents/Leagues-Navbar';
import { connect } from 'pwa-helpers';
import { store } from '../redux/store/store';
import { addBet, removeBet } from '../redux/actions/auth';

export class ClickLeague extends connect(store)(LitElement) {
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
    console.log(store.getState());
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
        justify-content: space-around;
        padding-bottom: 40px;
      }
      .classic-bets,
      .goals-bets,
      .odd-even-bets,
      .corners-bets,
      .cards-bets,
      .penalty-bets,
      .score-bets {
        display: flex;
        justify-content: center;
      }
      [odd] {
        /* visibility: hidden; */
        display: none;
      }
      [odd],
      [option] {
        /* display: inline-block; */
        cursor: pointer;
        border: 1px solid green;
        border-radius: 2px;
        background-color: #cac9c9;
        width: 100%;
        min-width: 50px;
        height: 35px;
        text-align: center;
      }
      [odd]:hover,
      [option]:hover {
        cursor: pointer;
        background-color: #b37474;
      }
      .selected {
        background-color: #b37474;
      }
      h2 {
        padding-bottom: 14px;
      }
    `;
  }
  showOddOnHover(e) {
    e.target.style.display = 'none';
    e.target.nextElementSibling.style.display = 'block';
  }
  hideOdd(e) {
    e.target.style.display = 'none';
    e.target.previousElementSibling.style.display = 'block';
  }
  selectOdd(e) {
    const array =
      e.target.parentElement.parentElement.firstElementChild.innerText.split(
        '\n'
      );
    let game = `${array[0]} ${array[1]} ${array[2]}`;
    const id = e.target.parentElement.getAttribute('idmatch');
    const data = {
      game,
      bet_selection: e.target.previousElementSibling.innerText,
      odd: e.target.innerText,
      selection_status: 'In progress',
      id: id,
    };
    [...this.shadowRoot.querySelectorAll(`.match${id}`)].forEach(div =>
      [...div.children].forEach(odd => odd.classList.remove('selected'))
    );
    e.target.previousElementSibling.classList.add('selected');
    store.dispatch(removeBet(data.game));
    store.dispatch(
      addBet(
        data.game,
        data.bet_selection,
        data.odd,
        data.selection_status,
        data.id
      )
    );
    console.log(store.getState());
  }
  render() {
    return html`${this.matches
      ? html`
          <nav-bar></nav-bar>
          <leagues-navbar></leagues-navbar>
          <span class="league"><i>${this.matches[0].league_name}</i></span>
          ${this.matches.map(
            game =>
              html`
                <div class="container">
                  <div class="game" idmatch=${game.id}>
                    <span>${game.team_name1}</span>
                    <span>vs.</span>
                    <span>${game.team_name2}</span>
                  </div>
                  <h2>Classic bets</h2>

                  <div idmatch=${game.id} class="classic-bets match${game.id}">
                    <span option @mouseover=${this.showOddOnHover}>1</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.s1}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>X</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.sx}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>2</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.s2}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>1X</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.s1x}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>X2</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.sx2}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>12</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.s12}</span
                    >
                  </div>

                  <h2>Goals</h2>
                  <div idmatch=${game.id} class="goals-bets match${game.id}">
                    <span option @mouseover=${this.showOddOnHover}>1+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.goals_over1}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>2+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.goals_over2}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>3+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.goals_over3}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>4+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.goals_over4}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>5+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.goals_over5}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>6+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.goals_over6}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>7+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.goals_over7}</span
                    >
                  </div>
                  <br />
                  <div idmatch=${game.id} class="goals-bets match${game.id}">
                    <span option @mouseover=${this.showOddOnHover}>0-1</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.goals_under1}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-2</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.goals_under2}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-3</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.goals_under3}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-4</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.goals_under4}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-5</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.goals_under5}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-6</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.goals_under6}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-7</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.goals_under7}</span
                    >
                  </div>
                  <h2>Odd/Even</h2>
                  <div idmatch=${game.id} class="odd-even-bets match${game.id}">
                    <span option @mouseover=${this.showOddOnHover}>Odd</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.odd}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>Even</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.even}</span
                    >
                  </div>
                  <h2>Both teams score?</h2>
                  <div idmatch=${game.id} class="score-bets match${game.id}">
                    <span option @mouseover=${this.showOddOnHover}>Yes</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.gg_yes}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>No</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.gg_no}</span
                    >
                  </div>
                  <h2>Penalty in game?</h2>
                  <div idmatch=${game.id} class="penalty-bets match${game.id}">
                    <span option @mouseover=${this.showOddOnHover}>Yes</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.penalty_yes}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>No</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.penalty_no}</span
                    >
                  </div>
                  <h2>Yellow cards ${game.team_name1}</h2>
                  <div idmatch=${game.id} class="cards-bets match${game.id}">
                    <span option @mouseover=${this.showOddOnHover}>2+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t1_over2}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>3+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t1_over3}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>4+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t1_over4}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>5+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t1_over5}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>6+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t1_over6}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>7+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t1_over7}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>8+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t1_over8}</span
                    >
                  </div>
                  <br />
                  <div idmatch=${game.id} class="cards-bets match${game.id}">
                    <span option @mouseover=${this.showOddOnHover}>0-1</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t1_under2}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-2</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t1_under3}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-3</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t1_under4}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-4</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t1_under5}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-5</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t1_under6}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-6</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t1_under7}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-7</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t1_under8}</span
                    >
                  </div>

                  <h2>Yellow cards ${game.team_name2}</h2>
                  <div idmatch=${game.id} class="cards-bets match${game.id}">
                    <span option @mouseover=${this.showOddOnHover}>2+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t2_over2}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>3+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t2_over3}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>4+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t2_over4}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>5+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t2_over5}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>6+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t2_over6}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>7+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t2_over7}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>8+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t2_over8}</span
                    >
                  </div>
                  <br />
                  <div idmatch=${game.id} class="cards-bets match${game.id}">
                    <span option @mouseover=${this.showOddOnHover}>0-1</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t2_under2}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-2</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t2_under3}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-3</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t2_under4}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-4</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t2_under5}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-5</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t2_under6}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-6</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t2_under7}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-7</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.cards_t2_under8}</span
                    >
                  </div>

                  <h2>Corners ${game.team_name1}</h2>
                  <div idmatch=${game.id} class="corners-bets match${game.id}">
                    <span option @mouseover=${this.showOddOnHover}>2+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t1_over2}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>3+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t1_over3}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>4+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t1_over4}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>5+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t1_over5}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>6+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t1_over6}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>7+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t1_over7}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>8+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t1_over8}</span
                    >
                  </div>
                  <br />
                  <div idmatch=${game.id} class="corners-bets match${game.id}">
                    <span option @mouseover=${this.showOddOnHover}>0-1</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t1_under2}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-2</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t1_under3}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-3</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t1_under4}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-4</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t1_under5}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-5</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t1_under6}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-6</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t1_under7}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-7</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t1_under8}</span
                    >
                  </div>

                  <h2>Corners ${game.team_name2}</h2>
                  <div idmatch=${game.id} class="corners-bets match${game.id}">
                    <span option @mouseover=${this.showOddOnHover}>2+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t2_over2}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>3+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t2_over3}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>4+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t2_over4}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>5+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t2_over5}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>6+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t2_over6}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>7+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t2_over7}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>8+</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t2_over8}</span
                    >
                  </div>
                  <br />
                  <div idmatch=${game.id} class="corners-bets match${game.id}">
                    <span option @mouseover=${this.showOddOnHover}>0-1</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t2_under2}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-2</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t2_under3}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-3</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t2_under4}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-4</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t2_under5}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-5</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t2_under6}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-6</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t2_under7}</span
                    >
                    <span option @mouseover=${this.showOddOnHover}>0-7</span>
                    <span odd @mouseout=${this.hideOdd} @click=${this.selectOdd}
                      >${game.corners_t2_under8}</span
                    >
                  </div>
                </div>
              `
          )}
        `
      : html`Content is loading...`}`;
  }
}

window.customElements.define('click-league', ClickLeague);
