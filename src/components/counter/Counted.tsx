import React, { useState } from "react";
import "./Counter.css";

interface CounterProps {
  initialValue?: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState<number>(initialValue);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter</h1>
      <div className="counter">
        <button className="counter-button" onClick={handleDecrement}>
          -
        </button>
        <p className="counter-value">{count}</p>
        <button className="counter-button" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
