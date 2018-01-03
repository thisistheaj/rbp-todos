/*
 *
 * VisibilityButtons reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_VISIBILITY, SHOW_ALL,
} from './constants';

const initialState = fromJS({ filter: SHOW_ALL });

function visibilityButtonsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY:
      return state.set('filter', action.filter);
    default:
      return state;
  }
}

export default visibilityButtonsReducer;
