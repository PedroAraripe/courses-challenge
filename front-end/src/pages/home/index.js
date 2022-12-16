import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardContent from '../../common/components/CardContent';
import { setShowBannerValue } from '../../store/banner';
import { getData } from '../../store/scriptsContent';
import { useSearchParams } from "react-router-dom";

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ContainerSpacement from '../../common/components/ContainerSpacement';
import CourseCard from '../../common/components/CourseCard';
import SectionTitle from '../../common/components/SectionTitle';

export default function Home () {
    const [searchParams] = useSearchParams();
    const projectName = searchParams.get("project_name");
    const scriptsContent = useSelector((state) => state.scriptsContent.value);
    const dispatch = useDispatch();

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
            <section>
                <div>
                    <ContainerSpacement>
                        <SectionTitle title="Top 10 vendidos" subTitle="Cursos" />
                    </ContainerSpacement>
                    
                    <div className='ms-lg-5 ps-lg-5'>
                        <div className='w-100 d-flex '>
                            {courses.map((course, index) => (
                                <div className={index ? 'ms-3' : ''}>
                                    <CourseCard name={course.name} category={course.category} rank={index + 1} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
  }