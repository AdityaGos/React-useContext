import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/Counter";

const Counter = () => {
  const counterState = useContext(CounterContext);
  const { count, setCount } = counterState;
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
