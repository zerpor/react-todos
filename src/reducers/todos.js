import { combineReducers } from 'redux';
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../actions/ActionTypes';
import uuid from 'uuid-v4';

const initialState = [
  {
    id: uuid(),
    text: ''
  }
];

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );

    default:
      return state;
  }
}

function process(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );

    default:
      return state;
  }
}



const childrenReducer = combineReducers({
  todos,
  process
});

export default childrenReducer;
