import { defaultReducer } from './defaultReducer.js';
import { SET_AUTH } from '../actions/auth.js';

const actionTypes = [SET_AUTH];

const initialState = {
  email: null,
  id: null,
};

export const authReducer = defaultReducer(initialState, actionTypes);
