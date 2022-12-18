import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ContainerSpacement from '../../common/components/ContainerSpacement';

import courses from "../../common/constants/courses";
import { MainTitle } from '../../common/styles';
import CardCoursePreview from './components/CardCoursePreview';

export default function Home () {
    const [searchParams] = useSearchParams();
    const searchParam = searchParams.get('s'); // "testCode"

    const coursesCorresponding = courses.filter(course => {
        return searchParam ? course.name.toLowerCase().includes(searchParam.toLowerCase()) : course;
    });

    return (
        <ContainerSpacement>
            <div className="d-flex flex-column align-items-center">
                <MainTitle fw="800">
                    Resultados da Pesquisa por: {searchParam}
                </MainTitle>

                <div className="py-5"></div>

                <div className="row">
                    {coursesCorresponding.map((course, index) =>(
                        <div className='col-lg-4' key={index}>
                            <CardCoursePreview
                                id={course.id}
                                name={course.name}
                                description={course.description}
                             />
                        </div>
                    ))}
                </div>

            </div>
        </ContainerSpacement>
    )
  }