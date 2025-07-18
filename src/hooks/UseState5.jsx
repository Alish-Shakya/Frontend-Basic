import React, { useState } from "react";

const UseState5 = () => {
  let [type, setType] = useState("password");

  return (
    <div>
      <label htmlfor="password">password</label>
      <input type={type} />

      {/* method 2 */}
      <button
        onClick={() => {
          type === "password" ? setType("text") : setType("password");
        }}
      >
        {type === "password" ? "show" : "hide"}
      </button>

      {/* method 1 */}
      {/* <button
        onClick={() => {
          setType("text");
        }}
      >
        Show
      </button>
      <button
        onClick={() => {
          setType("password");
        }}
      >
        Hide
      </button> */}

      {/* method 2 */}
    </div>
  );
};

export default UseState5;
