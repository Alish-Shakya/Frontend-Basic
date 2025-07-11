import React from "react";
import { Outlet, Route, Routes } from "react-router";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import NotFound from "../components/notFound";
import Dynamic from "../hooks/Dynamic";
import QueryParams from "../hooks/QueryParams";

const MyRoutes = () => {
  return (
    <>
      {/* <Routes> */}
      {/* <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route> */}

      {/* pass value */}
      {/* <Route
          path="/contact"
          element={<Contact name={"ram"} number={9761814913} />}
        ></Route> */}

      {/* <Route path="*" element={<NotFound />}></Route> */}

      {/* learn dymanic route */}

      {/* <Route path=":id" element={<div>dymanic route page</div>}></Route>

        <Route path="/bike" element={<div> bike page </div>}>
          <Route path="create" element={<div> create</div>}></Route>
        </Route>

         */}
      {/* </Routes> */}

      {/* nested route */}
      {/* we have to give parent an outlet to render child element */}

      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />}></Route>
          <Route path="contact" element={<Outlet />}>
            <Route index element={<Contact />}></Route>
            <Route path="about" element={<Outlet />}>
              <Route index element={<About />}></Route>
              <Route path=":id" element={<Dynamic />}></Route>
            </Route>
          </Route>
          {/* <Route path=":id" element={<QueryParams />}> </Route> */}
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
