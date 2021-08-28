export const SET_AUTH = 'SET_AUTH';
export const UNSET_AUTH = 'UNSET_AUTH';
export const ADD_BET = 'ADD_BET';
export const REMOVE_BET = 'REMOVE_BET';
export const ADD_TICKET = 'ADD_TICKET';

export const setAuth = (email, id, funds) => {
  return {
    type: SET_AUTH,
    email,
    id,
    funds,
  };
};

export const unsetAuth = (email, id) => {
  return {
    type: UNSET_AUTH,
    email,
    id,
  };
};

export const addBet = (game, option, odd, selection_status, id) => {
  return {
    type: ADD_BET,
    ticket: {
      game,
      option,
      odd,
      selection_status,
      id,
    },
  };
};

export const removeBet = game => {
  return {
    type: REMOVE_BET,
    ticket: {
      game,
    },
  };
};

export const addTicket = (ticket, funds) => {
  return {
    type: ADD_TICKET,
    ticket,
    funds,
  };
};
