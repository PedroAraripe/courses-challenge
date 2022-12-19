import React, { useEffect } from "react";
import {
  Routes,
  Route,
  HashRouter as Router,
  useSearchParams,
} from "react-router-dom";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getUserInStorage } from "./store/user";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./common/components/Navbar";

import Home from "./pages/home/";
import Courses from "./pages/courses/";
import CoursePreview from "./pages/course-preview/";
import Login from "./pages/login/";
import MyCourses from "./pages/my-courses/";
import Course from "./pages/course/";

export default function App() {  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInStorage());
  }, []);

  return (
    <Router>

      <Navbar />

      <div className="py-4"></div>

      <ToastContainer />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course-preview" element={<CoursePreview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </Router>
  )
}