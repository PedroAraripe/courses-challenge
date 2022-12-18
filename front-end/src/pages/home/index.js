import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CoursesCarouselSection from '../../common/components/CoursesCarouselSection';
import { getCourses } from '../../store/courses';

export default function Home () {
    const courseState = useSelector((state) => state.courses.value);
    const courses = courseState.items;
    const dispatch = useDispatch();

    // const homeCategoriesIDs = [1,2];

    useEffect(() => {
        dispatch(getCourses());
    }, [])

    return (
        <div>
            <CoursesCarouselSection
                title="Top 10 vendidos"
                subTitle="Cursos"
                courses={courses}
                hidePagination
            />

            <CoursesCarouselSection
                title="Direito"
                courses={courses}
                subTitle="Categoria"
                totalCoursesCategory={courseState.total}
                hidePagination
            />

            <CoursesCarouselSection
                title="Perícia Judicial"
                courses={courses}
                subTitle="Categoria"
                totalCoursesCategory={courseState.total}
                hidePagination
            />
        </div>
    )
  }