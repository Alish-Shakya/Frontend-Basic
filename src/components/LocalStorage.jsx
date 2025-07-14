import React from "react";

const LocalStorage = () => {
  localStorage.setItem("name", "ram");
  localStorage.setItem("age", 20);
  return <div>localStorage</div>;
};

export default LocalStorage;
