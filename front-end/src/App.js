import React, { useEffect } from "react";
import {
  Routes,
  Route,
  HashRouter as Router,
} from "react-router-dom";

import { ToastContainer } from 'react-toastify';
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
import { InputComp } from "./common/styles";

export default function App() {  
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.user.value);
  const userCourse = userState.course;

  const hasCurrentCourse = userCourse && Object.keys(userCourse);
  const {
      name,
      description,
      url
  } = hasCurrentCourse ?
      userCourse : {
          name: "",
          description: "",
          url: "",
      };

  useEffect(() => {
    dispatch(getUserInStorage());
  }, []);

  return (
    <Router>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Editar curso {name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <InputComp
              placeholder="Título"
              type="text"
              name="name"
              title="name"
              className='w-100 p-3'
            />
            <InputComp
              placeholder="Descrição"
              type="text"
              name="description"
              title="description"
              className='w-100 p-3'
            />
            <InputComp
              placeholder="Url"
              type="text"
              name="url"
              title="Url"
              className='w-100 p-3'
            />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button type="button" class="btn btn-success">Salvar</button>
          </div>
        </div>
      </div>
    </div>

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