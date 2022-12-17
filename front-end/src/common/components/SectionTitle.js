import React from 'react';
import styled from "styled-components";
import { MainTitle, SubTitle } from './styles/sectionTexts';

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
  
