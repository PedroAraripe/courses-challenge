import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const WrapperCard = styled.span`
  aspect-ratio: 288 / 336;
  padding: 2rem 1.3rem;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: ${props => props.hasTotalCourseCategory ? 'center' : 'space-between'};

  box-shadow: 0 0 0.5rem 0 #00000033;
  border: 1px solid #80808080;
  border-radius: 10px;

  ${props => {
    if(props.hasTotalCourseCategory) {
      return `
        & > :first-child {display : none}
        background: var(--theme-red);

        & > :last-child {
          border: none;
        }
      `;
    }
  }}
`;

const CourseCategory = styled.span`
  font-size: 10px;
  color: #afaead;
  border: 1px solid black;
  padding: 0.3rem 1rem;
  border-radius: 10px;
  text-transform: uppercase;
`;

const CourseTitle = styled.h6`
  color: #413e4b;
  font-size: 18px;
  font-weight: 700;

  max-width: 50%;

  margin: 1rem 0;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  word-break: break-word;
`;

const CheckCourse = styled.div`
  width: 100%;
  padding: 15px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

  transition: all 0.3s;

  background-color: var(--theme-red);
  border: 1px solid white;
  color: white;

  font-weight: 500;

  &:hover {
    background-color: white;
    color: var(--theme-red);
    border: 1px solid var(--theme-red);
    transform: scale(1.1);
  }

  & > * {
    text-decoration: none;
    color: inherit;
    
    &:hover { 
      color: inherit;
    }
  }
`;


function CourseCard({
  id,
  name,
  category,
  totalCoursesCategory,
}) {
    return (
        <WrapperCard hasTotalCourseCategory={!!totalCoursesCategory}>
          <div> 
            <CourseCategory>
              {category}
            </CourseCategory>

            <CourseTitle>
              {name}
            </CourseTitle>
          </div>

          <CheckCourse>
            <Link
              to={`/course-preview?id=${id}`}
            >
              {totalCoursesCategory ? `Mais de ${totalCoursesCategory - 1 } cursos!` : "Conheça o curso"}
            </Link>
          </CheckCourse>

        </WrapperCard>
    );
  }
  
  export default CourseCard;
  
