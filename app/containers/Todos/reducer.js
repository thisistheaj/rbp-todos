/*
 *
 * Todos reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_TODO, TOGGLE_TODO,
} from './constants';

const initialState = fromJS([]);

let id = -1;
function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      id += 1;
      return state.push({ id, text: action.text, completed: false });
    case TOGGLE_TODO:
      return state.update(action.id, (item) => { return { ...item, completed: !item.completed }; });
    default:
      return state;
  }
}

export default todosReducer;
