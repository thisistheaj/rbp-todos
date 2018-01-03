/**
*
* TodoList
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';


function TodoList({ todos, onItemClick  }) {
  return (
    <ul>{todos.map((item) => (
      <li
        style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
        key={item.id}
        onClick={() => { onItemClick(item.id); }}
      >{item.text}</li>
    ))}</ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array,
  onItemClick: PropTypes.any,
};

export default TodoList;
