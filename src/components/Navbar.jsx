import React from "react";
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <>
      <div style={{ background: "grey", padding: "20px" }}>
        <NavLink to={"/"} style={{ marginRight: "10px" }}>
          Home
        </NavLink>
        <NavLink to={"/about"}> About </NavLink>
      </div>
    </>
  );
};

export default Navbar;
