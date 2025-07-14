import React from "react";
import Form from "./Form";
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
      <Form />
      <br />
      <div>this is my Home component </div>
      <p>this is jhon banega don </p>
      {fullName}
      <br />
      {sum(10, 10)}

      <h2 className="text-xl mt-10 text-black sm:text-3xl md:text-5xl lg:text-6xl">
        ELIGIBILITY
      </h2>
    </>
  );
};

export default Home;
