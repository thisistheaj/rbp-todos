
import { fromJS } from 'immutable';
import visibilityButtonsReducer from '../reducer';

describe('visibilityButtonsReducer', () => {
  it('returns the initial state', () => {
    expect(visibilityButtonsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
