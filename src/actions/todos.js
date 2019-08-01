import * as types from './ActionTypes';

export const addTodo = payload => ({ type: types.ADD_TODO, payload });
export const deleteTodo = payload => ({
  type: types.DELETE_TODO,
  payload
});
export const editTodo = payload => ({ type: types.EDIT_TODO, payload });
