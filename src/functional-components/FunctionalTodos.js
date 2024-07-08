import { useState } from "react"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const FunctionalTodos = () => {
    const [todos, setTodos] = useState([]);

    function addTodo(text) {
        setTodos([...todos, text]);
    }

    const deleteTodo = (text) => {
        setTodos(todos.filter(todo => todo !== text))
    }

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    )
}