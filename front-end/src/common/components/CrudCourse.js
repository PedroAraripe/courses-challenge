import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function CrudCourse({id}) {
  return (
    <div className="mb-2 d-flex w-100 justify-content-end">
      <button className="bg-transparent border-0 text-warning">
        <FontAwesomeIcon icon="pen" className='me-2'/>
      </button>

      <button className="bg-transparent border-0 text-danger">
        <FontAwesomeIcon icon="trash" className='me-2'/>
      </button>
    </div>
  )
}