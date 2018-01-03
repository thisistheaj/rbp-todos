/**
 *
 * Todos
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTodos from './selectors';
import reducer from './reducer';
import saga from './saga';
import { ADD_TODO, TOGGLE_TODO } from './constants';
import TodoList from '../../components/TodoList/index';
import makeSelectVisibilityButtons from '../VisibilityButtons/selectors';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_REMAINING } from '../VisibilityButtons/constants';


export class Todos extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.inputChanged = this.inputChanged.bind(this);
  }
  inputChanged(e) {
    this.setState({ input: e.target.value });
  }
  render() {
    const {
      todos,
      addTodoClick,
      onItemClick,
      visibility,
    } = this.props;
    const {
      input,
    } = this.state;
    const visibleTodos = todos.filter((todo) => {
      switch (visibility.filter) {
        case SHOW_ALL:
          return true;
        case SHOW_COMPLETED:
          return todo.completed;
        case SHOW_REMAINING:
          return !todo.completed;
        default:
          return true;
      }
    });
    return (
      <div>
        <Helmet>
          <title>Todos</title>
          <meta name="description" content="Description of Todos" />
        </Helmet>
        <input value={input} onChange={this.inputChanged} />
        <button
          onClick={() => {
            addTodoClick(input);
            this.setState({ input: '' });
          }}
        >Add</button>
        <TodoList todos={visibleTodos} onItemClick={onItemClick} />
      </div>
    );
  }
}


Todos.propTypes = {
  todos: PropTypes.array,
  addTodoClick: PropTypes.func,
  onItemClick: PropTypes.func,
  visibility: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  todos: makeSelectTodos(),
  visibility: makeSelectVisibilityButtons(),
});

function mapDispatchToProps(dispatch) {
  return {
    addTodoClick: (text) => { dispatch({ type: ADD_TODO, text }); },
    onItemClick: (id) => { dispatch({ type: TOGGLE_TODO, id }); },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'todos', reducer });
const withSaga = injectSaga({ key: 'todos', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Todos);
