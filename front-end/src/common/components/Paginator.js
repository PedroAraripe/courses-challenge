import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { perPage } from "../constants/pagination";

const PageButton = styled.button`
  border: none;
  background: transparent;
  color: ${props => props.isCurrentPage ? "var(--theme-red)" : "black"}
`; 

export default function Pagination({
  totalItems
}) {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || 1;
  const search = searchParams.get('s');

  const totalPages = Math.ceil(totalItems/perPage);
  
  const handlePageChange = (page) => {
    const newSearchParams = {};
    
    if(search) {
      newSearchParams.s = search;
    }

    newSearchParams.page = page;

    setSearchParams(newSearchParams);
  }

  return (
    <div>
      {[...Array(totalPages).keys()].map((index) => {
        const page = index + 1;

        return (
          <PageButton
            key={index}
            isCurrentPage={page == currentPage}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </PageButton>
        )
      })}
    </div>
  )
}