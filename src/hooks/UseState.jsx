import React, { useState } from "react";

const UseState = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      count is {count}
      <button
        onClick={() => {
          setCount = count + 1;
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseState;
