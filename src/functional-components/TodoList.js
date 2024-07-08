export const TodoList = (props) => {
  const { todos, deleteTodo } = props;

  return (
    <ul>
      {todos.map((todo, index) => (
        <li onClick={() => deleteTodo(todo)} key={index}>
          {todo}
        </li>
      ))}
    </ul>
  );
};
