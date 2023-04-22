import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Login, SignUp } from "./module";
const Routess = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routess;
