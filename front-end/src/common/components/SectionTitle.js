import React from 'react';
import styled from "styled-components";

const SubTitle = styled.div`
  color: #cf2020;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
`;

const MainTitle = styled.h3`
  color: #413e4b;
  font-size: 32px;
  font-weight: 700;
  text-transform: none;
  line-height: 1.4em;
`;

const CheckAllCourses = styled.span`
  &, & > * {
    color: black;
    text-decoration: none;

    transition: color 0.3s;

    &:hover {
      color: var(--theme-red);
    }
  }
`;

function SectionTitle({
  title,
  subTitle,
}) {
    return (
      <div>
        <SubTitle className='text-uppercase'>
            {subTitle}
        </SubTitle>
        <MainTitle>
          {title}
        </MainTitle>

        <CheckAllCourses>
          <a href="#">
            Ver tudo
          </a>
        </CheckAllCourses>
      </div>
    );
  }
  
  export default SectionTitle;
  
