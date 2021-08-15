import { LitElement } from '@lion/core';

import { store } from '../../redux/store/store.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

export default class ReduxClass extends connect(store)(LitElement) {
  get store() {
    return store;
  }
  get state() {
    return store.getState();
  }
  dispatch(action) {
    store.dispatch(action);
  }
}
