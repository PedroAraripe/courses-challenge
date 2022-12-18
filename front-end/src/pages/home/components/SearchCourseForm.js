import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { InputComp } from '../../../common/styles';

function SearchCourseForm() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
    
      const searchInputValue = event.target[0].value;
      navigate(`/courses?s=${searchInputValue}`);
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex align-items-center" style={{
          background: "#f4f2f0",
        }} >
          <InputComp
            placeholder="Qual curso você está procurando?"
            type="search"
            name="s"
            title="Pesquisar"
            className='w-100 p-3'
          />
          <FontAwesomeIcon icon="search" className='me-2' style={{color: 'var(--theme-red)'}} />
        </form>
    );
  }
  
  export default SearchCourseForm;
  
