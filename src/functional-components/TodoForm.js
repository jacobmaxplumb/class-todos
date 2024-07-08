import { useState } from "react"

export const TodoForm = (props) => {
    const { addTodo } = props;
    const [text, setText] = useState('');

    return (
        <>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => addTodo(text)}>Add</button>
        </>
    )
}