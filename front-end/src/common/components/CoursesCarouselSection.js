import React from "react";
import CourseCard from "./CourseCard";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import ContainerSpacement from "./ContainerSpacement";
import SectionTitle from "./SectionTitle";


function CoursesCarouselSection({
  courses,
  title,
  subTitle,
  totalCoursesCategory,
  hidePagination,
  seeAllRoute,
}) {

  const mockupCourse = {
    name: '...',
    categoryName: '...',
  };

  const loadingMockupCourses = [...Array(10).keys()]
    .map((course, index) => {
      course = JSON.parse(JSON.stringify(mockupCourse));
      course.id = index + 1;

      return course;
    });

  const optionsSplide = {
    perMove: 1,
    type: "loop",
    gap: "1rem",
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
    perPage: 1.5,
    pagination: !hidePagination,
    breakpoints: {
      100: {
        perPage: 1.5,
      },
      992: {
        perPage: 1.5,
      },
      9999: {
        perPage: 5,
      },
    }
  };

  const showingCourses = courses?.length ? courses : loadingMockupCourses; 

  return (
    <section className="mb-5">
      <ContainerSpacement>
        <SectionTitle title={title} subTitle={subTitle} seeAllRoute={seeAllRoute} />
      </ContainerSpacement>

      <div className="pt-4 ms-lg-4 ps-lg-5">
        <div className="ms-2">
          <Splide
            options={optionsSplide}
            aria-label="Top 10 courses"
          >
            {showingCourses.map((course, index) => (
              <SplideSlide key={index}>
                <CourseCard
                  name={course.name}
                  category={course.categoryName}
                  rank={index + 1}
                  id={course.id}
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
