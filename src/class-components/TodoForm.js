import { Component } from "react";

export class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <>
        <input
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <button onClick={() => this.props.addTodo(this.state.text)}>Add</button>
      </>
    );
  }
}
