import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { TodoList } from './components';
import { List, Map } from 'immutable';
import reducer from './reducer';

const dummyTodos = [
  Map({id: 1, isDone: true, text: 'make components'}),
  Map({id: 2, isDone: false, text: 'design actions'}),
  Map({id: 3, isDone: false, text: 'implement reducer'}),
  Map({id: 4, isDone: false, text: 'connect components'}),
];

const store = createStore(reducer);

render(
  <TodoList todos={dummyTodos} />,
  document.getElementById('app')
)
