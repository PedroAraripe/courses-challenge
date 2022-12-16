import React from "react";
import styled from "styled-components";
import CourseCard from "./CourseCard";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import ContainerSpacement from "./ContainerSpacement";
import SectionTitle from "./SectionTitle";

const WrapperCard = styled.span`
  aspect-ratio: 288 / 336;
  padding: 2rem 1.3rem;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0 0 0.5rem 0 #00000033;
  border: 1px solid #80808080;
  border-radius: 10px;
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

function CoursesCarouselSection({
  courses,
  title,
  subTitle,
  totalCoursesCategory,
  hidePagination,
}) {
  return (
    <section className="mb-5">
      <ContainerSpacement>
        <SectionTitle title={title} subTitle={subTitle} />
      </ContainerSpacement>

      <div className="pt-4 ms-lg-4 ps-lg-5">
        <div className="ms-2">
          <Splide
            options={{
              perMove: 1,
              type: "loop",
              gap: "1rem",
              autoplay: true,
              pauseOnHover: true,
              resetProgress: false,
              perPage: 5,
              pagination: !hidePagination
            }}
            aria-label="Top 10 courses"
          >
            {courses.map((course, index) => (
              <SplideSlide>
                <CourseCard
                  name={course.name}
                  category={course.category}
                  rank={index + 1}
                />
              </SplideSlide>
            ))}
              {totalCoursesCategory ?
                <SplideSlide>
                  <CourseCard totalCoursesCategory={totalCoursesCategory} /> 
                </SplideSlide> : ""
                }
                
          </Splide>
        </div>
      </div>
    </section>
  );
}

export default CoursesCarouselSection;
