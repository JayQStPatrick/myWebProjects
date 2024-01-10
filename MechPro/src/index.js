import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./components/css/index.css";
import App from "./App";
// import Home from "./components/navpages/home";
import Profile from "./components/navpages/profile";
import Login from "./components/navpages/login";
import Signup from "./components/navpages/signup";
import AboutUs from "./components/navpages/aboutus";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      {/* <Route path="/navpages/home" element={<Home />}></Route> */}
      <Route path="/navpages/profile" element={<Profile />}></Route>
      <Route path="/navpages/aboutus" element={<AboutUs />}></Route>
      <Route path="/navpages/login" element={<Login />}></Route>
      <Route path="/navpages/signup-mech" element={<Signup />}></Route>
    </Routes>
  </Router>
  /* </React.StrictMode> */
);
