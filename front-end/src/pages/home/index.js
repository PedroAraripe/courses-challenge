import React from 'react';

import CoursesCarouselSection from '../../common/components/CoursesCarouselSection';
import courses from '../../common/constants/courses';

export default function Home () {
    return (
        <>
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
                totalCoursesCategory={90}
                hidePagination
            />

            <CoursesCarouselSection
                title="Perícia Judicial"
                courses={courses}
                subTitle="Categoria"
                totalCoursesCategory={55}
                hidePagination
            />
        </>
    )
  }