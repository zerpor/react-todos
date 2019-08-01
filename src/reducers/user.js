import { USER_LOGIN, USER_LOGOUT } from '../actions/ActionTypes';

const initialState = {
  userInfo: {
    username: 'admin',
    password: '123456'
  }
};
export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userInfo: action.payload
      };

    case USER_LOGOUT:
      return {
        ...state,
        userInfo: null
      };
    default:
      return state;
  }
}
