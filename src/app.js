import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducer';
import { TodoList } from './containers';
import { List, Map } from 'immutable';

const dummyTodos = [
  Map({id: 1, isDone: true, text: 'make components'}),
  Map({id: 2, isDone: false, text: 'design actions'}),
  Map({id: 3, isDone: false, text: 'implement reducer'}),
  Map({id: 4, isDone: false, text: 'connect components'}),
];

const store = createStore(reducer);

render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('app')
)
