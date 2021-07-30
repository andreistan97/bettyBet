import { css } from '@lion/core';
import { LionButton } from '@lion/button';

class FormButton extends LionButton {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          color: red;
          background-color: black;
          padding: 12px 16px;
        }
        :host(:hover) {
          cursor: pointer;
          background-color: aqua;
        }
      `,
    ];
  }
}

customElements.define('form-button', FormButton);
