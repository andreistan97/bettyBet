export const SET_AUTH = 'SET_AUTH';

export const setUser = (email, id) => ({
  type: SET_AUTH,
  email,
  id,
});
