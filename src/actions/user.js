import * as types from './ActionTypes';

export const login = payload => ({ type: types.USER_LOGIN, payload });
export const logout = payload => ({ type: types.USER_LOGOUT, payload });
