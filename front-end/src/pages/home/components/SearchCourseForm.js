import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SearchInput = styled.input`
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  color: #81807f;
  background: transparent;

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #afaead;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #afaead;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: #afaead;
  }

  &:focus-visible {
    outline: 0;
  }
`;

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
          <SearchInput
            placeholder="Qual curso você está procurando?"
            type="search"
            name="s"
            title="Pesquisar"
            className='w-100 p-3'
            onChange={handleSubmit}
          />
          <FontAwesomeIcon icon="search" className='me-2' style={{color: 'var(--theme-red)'}} />
        </form>
    );
  }
  
  export default SearchCourseForm;
  
