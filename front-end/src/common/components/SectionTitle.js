import React from 'react';
import styled from "styled-components";

const SubTitle = styled.div`
  color: #cf2020;
  font-family: montserrat,Sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
`;

const MainTitle = styled.h3`
  color: #413e4b;
  font-family: montserrat,Sans-serif;
  font-size: 32px;
  font-weight: 700;
  text-transform: none;
  line-height: 1.4em;
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
      </div>
    );
  }
  
  export default SectionTitle;
  
