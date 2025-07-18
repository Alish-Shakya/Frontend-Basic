import React from "react";

const SessionStorage = () => {
  sessionStorage.setItem("name", "ram");

  let name = sessionStorage.getItem("name");

  sessionStorage.removeItem("name");
  return <div>SessionStorage {name}</div>;
};

export default SessionStorage;
