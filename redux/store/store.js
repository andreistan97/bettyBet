import { createStore } from 'redux';
import { reducer } from '../reducers/auth';

export const store = createStore(reducer);
