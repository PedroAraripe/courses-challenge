import React, { useEffect } from "react";
import {
  Routes,
  Route,
  HashRouter as Router,
} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/home/";
import Courses from "./pages/courses/";
import Course from "./pages/course/";
import Login from "./pages/login/";
import Navbar from "./common/components/Navbar";
import { getUserInStorage } from "./store/user";
import { useDispatch } from "react-redux";

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
      </Routes>
    </Router>
  )
}