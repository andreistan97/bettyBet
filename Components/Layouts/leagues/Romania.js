import { LitElement, html, css } from '@lion/core';
import '../../BigComponents/BetbroFooter.js';
import '../../BasicComponents/Banner.js';
class Romania extends LitElement {
  static get styles() {
    return css``;
  }
  static get properties() {
    return {
      games: { type: Array },
    };
  }
  constructor() {
    super();
    // prettier-ignore
    this.games= [
        {
        'City vs Utd': {
        'firstWin': 1.8,
        'equal': 3.25,
        "secondWin": 3.56,
        'over3': 1.75,
        'under3': 1.85,
      }
        },
        {
        'Stoke vs WestHam': {
        'firstWin': 1.8,
        'equal': 3.25,
        'secondWin': 3.56,
        'over3': 1.75,
        'under3': 1.85,
        }
        },
        {
      'Liverpool vs Chelsea': {
        'firstWin': 5,
        'equal': 2.25,
        'secondWin': 1.5,
        'over3': 1.5,
        'under3': 2.2}
        }
    ];
    console.log(Object.keys(this.games[0]));
    console.log(Object.values(this.games[0])[0].firstWin);
  }
  render() {
    return html`
      <betbro-banner></betbro-banner>

      <betbro-footer></betbro-footer>
    `;
  }
}

window.customElements.define('romania-bets', Romania);
