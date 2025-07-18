import React, { useEffect, useState } from "react";

const UseEffect1 = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log("im useEffect");
    return () => {
      console.log("im clean up function");
    };
  });

  // cleanup fnction is the function whuch is retured by useEffect
  // cleanup function dosenot executen on first render (component mount"show"),but from then
  //  second render if useEffect execute clean up bfunction runs at first then other code will run

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
    </div>
  );
};

export default UseEffect1;
