import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ContainerSpacement from '../../common/components/ContainerSpacement';
import Pagination from '../../common/components/Pagination';

import courses from "../../common/constants/courses";
import { perPage } from '../../common/constants/pagination';
import { MainTitle } from '../../common/styles';
import CardCoursePreview from './components/CardCoursePreview';

export default function Home () {
    const [searchParams] = useSearchParams();
    const searchParam = searchParams.get('s');
    const currentPage = searchParams.get('page') || 1;

    const start = currentPage * perPage - perPage;
    const end = start + perPage;

    const coursesCorresponding = courses
        .filter(course => {
            return searchParam ? course.name.toLowerCase().includes(searchParam.toLowerCase()) : course;
        })
    
    const showingCourses = coursesCorresponding.slice(start, end);

    return (
        <ContainerSpacement>
            <div className="d-flex flex-column align-items-center">
                <MainTitle fw="800">
                    Resultados da Pesquisa por: {searchParam} {coursesCorresponding.length}
                </MainTitle>

                <div className="py-5"></div>

                <div className="row w-100">
                    {showingCourses.map((course, index) =>(
                        <div className='col-lg-4' key={index}>
                            <CardCoursePreview
                                id={course.id}
                                name={course.name}
                                description={course.description}
                             />
                        </div>
                    ))}
                </div>

                <Pagination
                    totalItems={coursesCorresponding.length}
                    currentPage={currentPage}
                />
            </div>
        </ContainerSpacement>
    )
  }