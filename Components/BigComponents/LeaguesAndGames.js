import { LitElement, html, css } from '@lion/core';

class LeaguesAndGames extends LitElement {
  static get styles() {
    return css`
      html {
        box-sizing: border-box;
      }
      ul {
        display: none;
        list-style-type: none;
        padding: 0px;
      }
      h3:hover {
        cursor: pointer;
        color: grey;
      }
      .select {
        display: flex;
      }
      p {
        display: block;
      }
      li {
        padding: 8px;
      }
      .odd {
        border: 1px solid black;
        padding: 6px 2px;
        text-align: center;
      }
      .odd:hover {
        cursor: pointer;
        background-color: grey;
      }
      .odd:active {
        background-color: crimson;
      }
      .clicked {
        background-color: crimson;
        border: 1px solid blue;
      }
      .more {
        cursor: pointer;
      }
    `;
  }
  static get properties() {
    return {
      leagues: { type: Array },
      games: { type: Array },
      top10games: { type: Object },
      oddsTop10: { type: Array },
      oddsLigues: { type: Array },
      arrayOfLeaguesAndGames: { type: Object },
    };
  }
  constructor() {
    super();
    // API call for games and leagues and top 10 games

    // oddsTop10Games: un obiect care are key - meciul, iar proprietatea sa fie un obiect cu optiunile ca si key, iar valoriile cote
    // prettier-ignore
    this.top10Games = {
      'City vs Utd': {
        'firstWin': 1.8,
        'equal': 3.25,
        "secondWin": 3.56,
        'over3': 1.75,
        'under3': 1.85,
      },
      'Stoke vs WestHam': {
        'firstWin': 1.8,
        'equal': 3.25,
        'secondWin': 3.56,
        'over3': 1.75,
        'under3': 1.85,
      },
      'Liverpool vs Chelsea': {
        'firstWin': 5,
        'equal': 2.25,
        'secondWin': 1.5,
        'over3': 1.5,
        'under3': 2.2
      },
    };
    console.log(Object.keys(this.top10Games));
    console.log(Object.values(this.top10Games));

    // campionate, meciuri si cote: un array care contine obiecte cu numele campionatelor (ex liga1), la proprietati meciurile, iar la fiecare
    // meci, numele optiunilor si cotele
  }
  getSiblings(parent) {
    const siblingsArr = [];
    let sibling = parent.firstChild;
    while (sibling) {
      if (sibling.nodeType === 1) {
        siblingsArr.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblingsArr;
  }

  removeClicks(element) {
    [...element.parentElement.parentElement.children].forEach(sibling =>
      [...sibling.children].forEach(elem => elem.classList.remove('clicked'))
    );
  }
  _selectOdd(event) {
    if (event.target.classList.contains('clicked')) {
      event.target.classList.remove('clicked');
      // sterge meci din bilet
    } else {
      this.removeClicks(event.target);
      // sterge meci din bilet
      event.target.classList.add('clicked');
      // adauga meci in bilet
    }
  }
  showDetails(event) {
    const list = event.target.nextElementSibling;
    list.classList.contains('select')
      ? list.classList.remove('select')
      : list.classList.add('select');
  }
  showMoreOptions() {
    console.log('more options');
  }
  render() {
    return html`
      ${!this.top10Games
        ? html`Content is loading`
        : html`
            <h1>Most betted games</h1>
            ${Object.keys(this.top10Games).map(
              (key, index) => html`
                <h3 @click=${this.showDetails}>${key}</h3>
                <ul>
                  <li>
                    <p>1 final</p>
                    <p class="odd" @click=${this._selectOdd}>
                      ${Object.values(this.top10Games)[index].firstWin}
                    </p>
                  </li>
                  <li>
                    <p>X final</p>
                    <p class="odd" @click=${this._selectOdd}>
                      ${Object.values(this.top10Games)[index].equal}
                    </p>
                  </li>
                  <li>
                    <p>2 final</p>
                    <p class="odd" @click=${this._selectOdd}>
                      ${Object.values(this.top10Games)[index].secondWin}
                    </p>
                  </li>
                  <li>
                    <p>Over 2.5</p>
                    <p class="odd" @click=${this._selectOdd}>
                      ${Object.values(this.top10Games)[index].over3}
                    </p>
                  </li>
                  <li>
                    <p>Under 2.5</p>
                    <p class="odd" @click=${this._selectOdd}>
                      ${Object.values(this.top10Games)[index].under3}
                    </p>
                  </li>
                  <li class="more" @click=${this.showMoreOptions}>
                    <p>More</p>
                    <p>Options</p>
                  </li>
                </ul>
              `
            )}
          `}
    `;
  }
}

window.customElements.define('leagues-and-games', LeaguesAndGames);
