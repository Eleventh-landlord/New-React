import React, { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  // Functions for buttons
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1); // prevent going below 0
  };
  const reset = () => setCount(0);

  return (
    <div className="counter-card">
      <h2>Count: {count}</h2>
      <div className="button-group">
        <button onClick={increment}>+</button>
        <button onClick={decrement} disabled={count === 0}>
          -
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
