import React, { useState } from "react";
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";
import TodoFilter from "./TodoFilter.jsx";
import "./App.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  //  Add new todo
  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  //  Toggle completed
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //  Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  //  Filtered todos based on selected filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true; // All
  });

  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;

  return (
    <div className="todo-app">
      <h2> My Todo List</h2>

      <TodoInput addTodo={addTodo} />
      <TodoFilter current={filter} setFilter={setFilter} />

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />

      <div className="todo-stats">
        <p>
          Total: {total} tasks | Completed: {completed}
        </p>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
}

export default TodoApp;
