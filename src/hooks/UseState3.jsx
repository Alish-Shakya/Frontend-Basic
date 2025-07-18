import React, { useState } from "react";

const UseState3 = () => {
  let [show, setShow] = useState(false);
  return (
    <div>
      {show === true && <img src="/vite.svg" alt="image" />}
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Show
      </button>
      <button
        onClick={() => {
          setShow(false);
        }}
      >
        Hide
      </button>
    </div>
  );
};

export default UseState3;
