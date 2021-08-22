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
  funds: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        email: action.email,
        id: action.id,
        funds: action.funds,
      };
    case UNSET_AUTH:
      return {
        ...state,
        email: null,
        id: null,
      };
    case ADD_BET:
      return {
        ...state,
        ticket: [...state.ticket, action.ticket],
      };
    case REMOVE_BET:
      return {
        ...state,
        ticket: [
          ...state.ticket.filter(game => game.game !== action.ticket.game),
        ],
        // ticket: [
        //   ...state.ticket.slice(0, action.ticket[index]),
        //   ...state.ticket.slice(action.ticket[index] + 1),
        // ],
        // [state.ticket.filter(ticket => ticket !== action.ticket)]
      };
    case ADD_TICKET:
      return {
        ...state,
        ticket: [],
        funds: action.funds,
        // sterge funds cand pui bilet
      };
    default:
      return state;
  }
};
