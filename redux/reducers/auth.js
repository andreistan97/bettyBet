import {
  ADD_BET,
  ADD_TICKET,
  REMOVE_BET,
  SET_AUTH,
  UNSET_AUTH,
} from '../actions/auth.js';

const INITIAL_STATE = {
  email: null,
  id: null,
  ticket: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        email: action.email,
        id: action.id,
      };
    case UNSET_AUTH:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
