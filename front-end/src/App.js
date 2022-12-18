import React from "react";
import {
  Routes,
  Route,
  HashRouter as Router,
} from "react-router-dom";

import Home from "./pages/home/";
import Courses from "./pages/courses/";
import Course from "./pages/course/";
import Login from "./pages/login/";
import Navbar from "./common/components/Navbar";

export default function App() {  
  return (
    <Router>
      <Navbar />

      <div className="py-5"></div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course" element={<Course />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  )
}