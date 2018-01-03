import { createSelector } from 'reselect';

/**
 * Direct selector to the visibilityButtons state domain
 */
const selectVisibilityButtonsDomain = (state) => state.get('visibilityButtons');

/**
 * Other specific selectors
 */


/**
 * Default selector used by VisibilityButtons
 */

const makeSelectVisibilityButtons = () => createSelector(
  selectVisibilityButtonsDomain,
  (substate) => substate.toJS()
);

export default makeSelectVisibilityButtons;
export {
  selectVisibilityButtonsDomain,
};
