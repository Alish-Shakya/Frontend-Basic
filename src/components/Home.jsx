import React from "react";
import Form from "./Form";
import UseState from "../hooks/UseState";
import UseState3 from "../hooks/UseState3";
import UseState4 from "../hooks/UseState4";
import UseState5 from "../hooks/UseState5";
import UseEffect from "../hooks/UseEffect";
import UseEffect1 from "../hooks/UseEffect1";
import UseEffect2 from "../hooks/UseEffect2";
//rafce
const Home = () => {
  let firstName = "Ram";
  let lastName = "Shakya";
  let age = 20;

  let fullName = `My full name is ${firstName} ${lastName} and my age is ${age}`;

  let sum = (a, b) => {
    let c = a + b;
    return c;
  };

  return (
    <>
      {/* <Form /> */}
      <div>this is my Home component </div> <br />
      <br />
      {/* <p>this is jhon banega don </p>
      {fullName}
      <br />
      {sum(10, 10)} */}
      {/* <UseState /> */}
      {/* <UseState3 /> */}
      {/* <UseState4 /> */}
      {/* <UseState5 /> */}
      {/* <UseEffect /> */}
      {/* <UseEffect1 /> */}
      <UseEffect2 />
    </>
  );
};

export default Home;
