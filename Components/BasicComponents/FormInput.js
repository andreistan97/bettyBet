import { LionInput } from '@lion/input';
import { css } from '@lion/core';

class FormInput extends LionInput {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          min-width: 150px;
          margin: 0 auto;
          width: 75%;
          padding: 16px 0;

          font-weight: bold;
        }
        :host(:focus) {
          border: 2px solid #6b48a8;
        }
        @media only screen and (min-width: 768px) {
          :host {
            max-width: 600px;
          }
        }
      `,
    ];
  }
}

customElements.define('form-input', FormInput);
