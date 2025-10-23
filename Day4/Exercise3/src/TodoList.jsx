import React from "react";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  if (todos.length === 0) {
    return <p className="empty">No tasks found.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <span onClick={() => toggleTodo(todo.id)}>
            {todo.completed ? "☑" : "☐"} {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
