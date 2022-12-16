import React from 'react';

import CoursesCarouselSection from '../../common/components/CoursesCarouselSection';

export default function Home () {
    const courses = [
        {
            name: "Pericia médica",
            category: "pericia judicial",
            url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
            description: "Curso de pericia medica muito legal"
        },
        {
            name: "Pericia médicaPericia médicaPericia médicaPericia médica",
            category: "pericia judicial",
            url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
            description: "Curso de pericia medica muito legal"
        },
        {
            name: "Pericia médica",
            category: "pericia judicial",
            url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
            description: "Curso de pericia medica muito legal"
        },
        {
            name: "Pericia médica",
            category: "pericia judicial",
            url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
            description: "Curso de pericia medica muito legal"
        },
        {
            name: "Pericia médica",
            category: "pericia judicial",
            url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
            description: "Curso de pericia medica muito legal"
        },
        {
            name: "Pericia médica",
            category: "pericia judicial",
            url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
            description: "Curso de pericia medica muito legal"
        },
        {
            name: "Pericia médica",
            category: "pericia judicial",
            url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
            description: "Curso de pericia medica muito legal"
        },
        {
            name: "Pericia médica",
            category: "pericia judicial",
            url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
            description: "Curso de pericia medica muito legal"
        },
        {
            name: "Pericia médica",
            category: "pericia judicial",
            url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
            description: "Curso de pericia medica muito legal"
        },
    ]

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