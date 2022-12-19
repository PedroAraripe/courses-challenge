import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { MainTitle, SubTitle } from '../styles';

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
  seeAllRoute,
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
          <Link to={seeAllRoute}>
            Ver tudo
          </Link>
        </CheckAllCourses>
      </div>
    );
  }
  
  export default SectionTitle;
  
