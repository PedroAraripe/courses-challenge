import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CoursesCarouselSection from '../../common/components/CoursesCarouselSection';
import { getCourses, getHomeCategories } from '../../store/courses';

export default function Home () {
    const topCourses = useSelector((state) => state.courses.courses.items);
    const categoriesCoursesState = useSelector((state) => state.courses.categories);
    const categoriesToShow = Object.keys(categoriesCoursesState);

    const dispatch = useDispatch();

    const bestCourses = [
        {
            title: "Top 10 vendidos",
            subTitle: "Direito",
            items: topCourses,
        },
    ];

    const categoriesCourses = categoriesToShow
    .map(categoryId => {
        return categoriesCoursesState[categoryId]
    })

    const coursesToShowHomePage = [
        ...bestCourses,
        ...categoriesCourses
    ];

    
    
    useEffect(() => {
        dispatch(getCourses({start: 0, end: 9}));
        dispatch(getHomeCategories());
    }, []);

    return (
        <div>
            {coursesToShowHomePage.map((course,index) =>(
                <CoursesCarouselSection
                    key={index}
                    title={course.title}
                    subTitle={course.subTitle}
                    courses={course.items}
                    hidePagination
                />
            ))}

            {/* <CoursesCarouselSection
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
            /> */}
        </div>
    )
  }