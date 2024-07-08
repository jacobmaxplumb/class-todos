import { Component } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export class ClassTodos extends Component {
  constructor(props) {
    super();
    this.state = {
      todos: ['item 1'],
    };
  }

  addTodo = (text) => {
    this.setState({todos: [this.state.todos, text]})
  }

  deleteTodo = (text) => {
    this.setState({ todos: this.state.todos.filter((todo) => todo !== text) });
  }

  render() {
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}
