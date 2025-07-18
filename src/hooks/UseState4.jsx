import React, { useState } from "react";

const UseState4 = () => {
  let [show, setShow] = useState(true);
  return (
    <div>
      {show === true && <img src="/vite.svg" alt="image" />}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show === true ? "hide" : "show"}
      </button>
    </div>
  );
};

export default UseState4;
