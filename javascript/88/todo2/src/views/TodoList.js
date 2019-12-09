import React from 'react';
import './TodoList.css';

export default ({ todos, onDeleteTodo, onToggleTodo }) => {
    return (
        <ul>
            {todos.map(todo =>
                <li key={todo.id}>{todo.text}
                    <input type="checkbox" value={todo.complete} onChange={() => onToggleTodo(todo.id)} />
                    <button onClick={() => onDeleteTodo(todo.id)}>x</button>
                </li>)}
        </ul>
    );
}