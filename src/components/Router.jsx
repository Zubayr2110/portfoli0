import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Error from "../pages/Error/Error.jsx";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />}/>
    </Routes>
  );
}
