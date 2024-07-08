import { Component } from "react";

export class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) => (
          <li onClick={() => this.props.deleteTodo(todo)} key={index}>
            {todo}
          </li>
        ))}
      </ul>
    );
  }
}
