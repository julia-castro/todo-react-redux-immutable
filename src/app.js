import React from 'react';
import { render } from 'react-dom';
import { TodoList } from './components';

const dummyTodos = [
  {id: 1, isDone: true, text: 'make components'},
  {id: 2, isDone: false, text: 'design actions'},
  {id: 3, isDone: false, text: 'implement reducer'},
  {id: 4, isDone: false, text: 'connect components'},
];

render(
  <TodoList todos={dummyTodos} />,
  document.getElementById('app')
)
