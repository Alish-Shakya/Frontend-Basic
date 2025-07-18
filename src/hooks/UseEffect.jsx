import React, { useEffect } from "react";

const UseEffect = () => {
  console.log("a");

  useEffect(() => {
    console.log("i am useEffect");
    console.log("b");
  });
  console.log("c");

  // useEffect funtion is a asynchronous function which will edxecute once all the code is executed
  // it means it will exxecute once the dom is printed on the browser

  return <div>UseEffect</div>;
};

export default UseEffect;
