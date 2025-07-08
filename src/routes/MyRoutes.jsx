import React from "react";
import { Route, Routes } from "react-router";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import notFound from "../components/notFound";
import NotFound from "../components/notFound";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>

        {/* pass value */}
        <Route
          path="/contact"
          element={<Contact name={"ram"} number={9761814913} />}
        ></Route>

        {/*  */}

        {/* <Route path="*" element={<NotFound />}></Route> */}

        {/* learn dymanic route */}

        <Route path=":id" element={<div>dymanic route page</div>}></Route>

        <Route path="/bike" element={<div> bike page </div>}>
          <Route path="/create" element={<div> create</div>}>
            {" "}
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
