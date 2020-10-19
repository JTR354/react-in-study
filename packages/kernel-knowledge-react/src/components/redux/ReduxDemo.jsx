import React from "react";
import { useState, useEffect } from "react";
import { createStore } from "redux";

function counter(count = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return count + 1;
    case "DECREMENT":
      return count - 1;
    default:
      return count;
  }
}
const store = createStore(counter);

export default () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    store.subscribe(() => {
      setCount(store.getState());
    });
  }, []);
  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={() => store.dispatch({ type: "DECREMENT" })}>-</button>
        <button onClick={() => store.dispatch({ type: "INCREMENT" })}>+</button>
      </div>
    </div>
  );
};
