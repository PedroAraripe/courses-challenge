import React from 'react';
import styled from "styled-components";

const SearchInput = styled.input`
  font-size: 15px;
  font-weight: 600;
  border: none;
  background: #f4f2f0;
  border-radius: 10px;
  color: #81807f;

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
    box-shadow: 0 0 0.1rem #00000040;
  }
`
const handleSubmit = (event) => {
  event.preventDefault();

  const searchInputValue = event.target[0].value;
  console.log(`Value of searchInput: ${searchInputValue}`)
}

function SearchCourseForm() {
    return (
        <form onSubmit={handleSubmit}>
          <SearchInput
            placeholder="Qual curso você está procurando?"
            type="search"
            name="s"
            title="Pesquisar"
            className='w-100 p-3'
          />
        </form>
    );
  }
  
  export default SearchCourseForm;
  
