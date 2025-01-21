import React from "react";
import "../css/Counter.css";
import { useState } from "react";
const Counter = () => {
  const count = 0;
  const [currentState, setCount] = useState(count);
  const handleCouter = () => {
    setCount(currentState + 1);
  };
  return (
    <div className="min-counter">
      <h3>Counter is {currentState}</h3>
      <button onClick={handleCouter}>0</button>
    </div>
  );
};

export default Counter;
