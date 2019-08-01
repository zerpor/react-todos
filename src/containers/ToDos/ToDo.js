import React from 'react';

class ToDo extends React.Component {
  render() {
    const { todo, changeText, deleteToDo } = this.props;

    return (
      <div>
        <input
          type="text"
          value={todo.text}
          placeholder="请输入"
          onChange={event => changeText(todo.id, event.target.value)}
        />
        <button onClick={() => deleteToDo(todo.id)}>delete</button>
      </div>
    );
  }
}

export default ToDo;
