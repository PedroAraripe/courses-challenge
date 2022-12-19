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

  const courseState = useSelector((state) => state.courses);
  const currentCourse = courseState.course;

  const hasCurrentCourse = currentCourse && Object?.keys(currentCourse)?.length;

  console.log(Object.keys(currentCourse))
  const {
      name,
      description,
      url
  } = hasCurrentCourse ?
      currentCourse : {
          name: "",
          description: "",
          url: "",
      };

  useEffect(() => {
    dispatch(getUserInStorage());
  }, []);

  return (
    <Router>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{!hasCurrentCourse ? "Criando Curso" : `Editando Curso ${name}` }</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
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
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button type="button" className="btn btn-success">Salvar</button>
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