import React, { useEffect, useState } from "react";

const UseEffect2 = () => {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(100);

  // Syntax of useEffect:
  //useEffect(() => {}, []) // array dependency

  // we can have multiple useffect
  // if you miss array dependency [], useeffect will run on every render
  useEffect(() => {
    console.log("i am use effect");
  }, []);

  useEffect(() => {
    console.log("i am useeffect without array dependency");
  });
  return (
    <div>
      count is {count}
      <button
        onClick={() => {
          setCount(count + 1);
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
      <br />
      count1 is {count1}
      <button
        onClick={() => {
          setCount(count1 + 100);
        }}
      >
        increment by 100
      </button>
      <button
        onClick={() => {
          setCount(count1 - 100);
        }}
      >
        decrement by 100
      </button>
    </div>
  );
};

export default UseEffect2;
