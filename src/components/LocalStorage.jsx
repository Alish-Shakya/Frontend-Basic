import React from "react";

const LocalStorage = () => {
  /* local storage is the memory of a particular domian in a particular browser.
all data in local storage are in string format. if the browser is closed localStorage
data will persist in local*/

  //set localStorage
  localStorage.setItem("name", "ram");
  localStorage.setItem("age", 20);

  // get localStorage
  let name = localStorage.getItem("name");
  let age = localStorage.getItem("age");

  //remove localStorage
  localStorage.removeItem("myfile");
  localStorage.removeItem("name");
  return (
    <div>
      localStorage {name} {age}
    </div>
  );
};

export default LocalStorage;
