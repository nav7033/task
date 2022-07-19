import React, { useContext } from "react";
import { CounterContext } from "../context/Context";

export const Counter= ()=> {
  const [state, dispatch] = useContext(CounterContext);

  const incrementCounter = () => dispatch({ type: "INCREMENT" });

  const decrementCounter = () => dispatch({ type: "DECREMENT" });

  const resetCounter = () => dispatch({ type: "RESET" });

  return (
    <>
      <h3>Counter {state.count}</h3>
      <button className="btn btn-outline-primary" onClick={incrementCounter}>Increment</button>
      <button className="btn btn-outline-primary" onClick={decrementCounter}>Decrement</button>
      <button  className="btn btn-outline-primary" onClick={resetCounter}>Reset</button>
    </>
  );
}

