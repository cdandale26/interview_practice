import React, { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h2>Counter</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment </button>
      <button onClick={() => setCounter(counter - 1)}>Decrement </button>
      <h5>Counter : {counter}</h5>
    </>
  );
};

export default Counter;
