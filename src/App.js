import React from 'react'
import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Tasks from "./components/Tasks";
import Pages from "./components/Pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path path="/" element={<Pages />} />
        <Route exact path path="/Signin" element={<Signin />} />
        <Route exact path path="/Signup" element={<Signup />} />
        <Route exact path path="/Tasks" element={<Tasks />} />
        <Route exact path path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App
