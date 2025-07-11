import React from "react";

const Contact = ({ name, number }) => {
  console.log(name);
  console.log(number);

  let details = `My name is ${name}`;
  return (
    <>
      <p>
        <p>
          my name is {name} and my contact number is {number}. <br />
          {details}
        </p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat a porro
        ea vitae sapiente at eligendi soluta dolor ipsum animi harum, eius enim
        omnis nemo tempore quae laudantium? Impedit, ea.
      </p>
    </>
  );
};

export default Contact;
