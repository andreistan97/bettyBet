import { LionForm } from '@lion/form';
import { css } from '@lion/core';

class CustomForm extends LionForm {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          background-color: #4856e0;
          padding: 24px 0;
          margin: 0 auto;
        }
      `,
    ];
  }
}

customElements.define('custom-form', CustomForm);
