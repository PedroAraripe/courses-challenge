import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from 'react-redux';
import { getCourse, removeCourse } from '../../store/courses';

export default function CrudCourse({id}) {
  const dispatch = useDispatch();

  return (
    <div className="mb-2 d-flex w-100 justify-content-end">
      <button
        className="bg-transparent border-0 text-warning"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => dispatch(getCourse({id}))}
      >
        <FontAwesomeIcon icon="pen" className='me-2'/>
      </button>

      <button onClick={() => dispatch(removeCourse({id}))} className="bg-transparent border-0 text-danger">
        <FontAwesomeIcon icon="trash" className='me-2'/>
      </button>
    </div>
  )
}