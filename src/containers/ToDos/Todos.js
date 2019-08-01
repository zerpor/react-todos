import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid-v4';
import { editTodo, deleteTodo, addTodo } from '../../actions/todos';
import ToDo from './ToDo';

const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  };
};

class ToDos extends React.Component {
  changeText = (id, value) => {
    const { dispatch } = this.props;
    dispatch(
      editTodo({
        id,
        text: value
      })
    );
  };

  deleteToDo = id => {
    const { dispatch } = this.props;
    dispatch(
      deleteTodo({
        id
      })
    );
  };

  addToDo = () => {
    const { dispatch } = this.props;
    dispatch(
      addTodo({
        id: uuid(),
        text: ''
      })
    );
  };

  addToDoAsync = () => {
    const { dispatch } = this.props;
    function fetchPosts() {
      return dispatch => {
        setTimeout(() => {
          dispatch(
            addTodo({
              id: uuid(),
              text: ''
            })
          );
        }, 1000);
      };
    }
    dispatch(fetchPosts());
  };

  doSomeThing = () => {
    function a({ i, j }) {
      console.log('do a');

      return i + j;
    }
    function b() {
      console.log('do b');

      return {
        i: 1,
        j: 3
      };
    }
    a(b());
  };

  render() {
    const { todos } = this.props;

    return (
      <div>
        <ul>
          {todos.map(item => (
            <ToDo
              key={item.id}
              todo={item}
              changeText={this.changeText}
              deleteToDo={this.deleteToDo}
            />
          ))}
        </ul>
        <button onClick={this.addToDo}>add todo</button>
        <button onClick={this.addToDoAsync}>async add todo</button>

        <button onClick={this.doSomeThing}>do some thing</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ToDos);
