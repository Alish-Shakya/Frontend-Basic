import React from "react";
import LocalStorage from "./localStorage";

const Form = () => {
  const handelSubmit = () => {
    alert("button clicked");
    console.log("button clicked");

    let a = 10;
    let b = 20;
    let finalOutput = `the sum of ${a} and ${b} is ${a + $b}`;
    console.log(finalOutput);

    let first = "Alish";
    let last = "Shakya";
    let fullName = `${first} ${last}`;
    console.log(fullName);
  };

  return (
    <>
      <LocalStorage />
      <div>
        <label htmlFor="fullName">FullName:</label>
        <input type="text" name="fullName" id="fullName" />
      </div>
      <br />
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <br />
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
      </div>
      <br />
      <div>
        <label htmlFor="age">Age:</label>
        <input type="Number" name="age" id="age" />
      </div>
      <br />
      <div>
        <label htmlFor="isMArried">isMArried</label>
        <input type="checkbox" name="isMarried" id="isMarried" />
      </div>
      <br />
      <div>
        <label htmlFor="gender">Gender:</label>
        <input type="radir" name="gender" id="gender" />
      </div>
      <br />
      <div>
        <label htmlFor=""> Description:</label>
        <textarea name="text" id="text"></textarea>
      </div>
      <br />
      <div>
        <label htmlFor=""> Select </label>
        <select name="drop" id="drop">
          <option value="">Country</option>
          <option value="India">India</option>
          <option value="china">China</option>
          <option value="Nepal">Nepal</option>
        </select>
      </div>
      <br />
      <div>
        <button
          onClick={handelSubmit}
          type="Submit"
          style={{ cursor: "pointer", padding: "10px" }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Form;
