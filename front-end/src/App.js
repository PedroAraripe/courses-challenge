import React, { useEffect } from "react";
import {
  Routes,
  Route,
  HashRouter as Router,
} from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getUserInStorage } from "./store/user";
import { useDispatch } from "react-redux";

import Navbar from "./common/components/Navbar";

import Home from "./pages/home/";
import Courses from "./pages/courses/";
import Course from "./pages/course/";
import Login from "./pages/login/";
import MyCourses from "./pages/my-courses/";

export default function App() {  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInStorage());
  }, []);

  return (
    <Router>
      <Navbar />

      <div className="py-5"></div>

      <ToastContainer />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course" element={<Course />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-courses" element={<MyCourses />} />
      </Routes>
    </Router>
  )
}