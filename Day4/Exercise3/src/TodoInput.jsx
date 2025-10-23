import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    addTodo(text);
    setText("");
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Add new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
