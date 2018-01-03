/**
 *
 * VisibilityButtons
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectVisibilityButtons from './selectors';
import reducer from './reducer';
import saga from './saga';
import { SET_VISIBILITY, SHOW_ALL, SHOW_COMPLETED, SHOW_REMAINING } from './constants';

export class VisibilityButtons extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      setVisibility,
    } = this.props;
    return (
      <div>
        Show:
        {' '}
        <button onClick={() => { setVisibility(SHOW_ALL); }}>All</button>
        <button onClick={() => { setVisibility(SHOW_COMPLETED); }}>Completed</button>
        <button onClick={() => { setVisibility(SHOW_REMAINING); }}>Remaining</button>
      </div>
    );
  }
}

VisibilityButtons.propTypes = {
  visibilitybuttons: PropTypes.object,
  setVisibility: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  visibilitybuttons: makeSelectVisibilityButtons(),
});

function mapDispatchToProps(dispatch) {
  return {
    setVisibility: (filter) => { dispatch({ type: SET_VISIBILITY, filter }); },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'visibilityButtons', reducer });
const withSaga = injectSaga({ key: 'visibilityButtons', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(VisibilityButtons);
