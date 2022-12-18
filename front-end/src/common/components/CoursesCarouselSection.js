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
}) {

  const optionsSplide = {
    perMove: 1,
    type: "loop",
    gap: "1rem",
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
    perPage: 5,
    pagination: !hidePagination
  };

  return (
    <section className="mb-5">
      <ContainerSpacement>
        <SectionTitle title={title} subTitle={subTitle} />
      </ContainerSpacement>

      <div className="pt-4 ms-lg-4 ps-lg-5">
        <div className="ms-2">
          <Splide
            options={optionsSplide}
            aria-label="Top 10 courses"
          >
            {courses.map((course, index) => (
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
