import { connect } from 'react-redux';
import * as components from './components';
import { addTodo, toggleTodo } from './actions';

export const TodoList = connect(
  function mapStateToProps(state) {
    return { todos: state}
    // it might help to visualize this on an instance of the wrapped React component
    // <TodoList todos={state}
  },
  function mapDispatchToProps(dispatch) {
    //this function is passed the store's dispatch method, so that we can use it to dispatch the actions from our action creators
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id))
      // might help to visualize all these props together on an instance of our wrapped React component
      // <TodoList todos={state} addTodo={text => dispatch(addTodo(text))} toggleTodo={id => dispatch(toggleTodo(id))} />
    }
  }
)(components.TodoList)
