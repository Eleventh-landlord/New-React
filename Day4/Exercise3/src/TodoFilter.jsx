import React from "react";

function TodoFilter({ current, setFilter }) {
  const filters = ["All", "Active", "Completed"];

  return (
    <div className="todo-filter">
      <span>Filter:</span>
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={current === f ? "active" : ""}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;
