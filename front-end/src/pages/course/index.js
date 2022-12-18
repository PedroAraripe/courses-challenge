import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import ContainerSpacement from '../../common/components/ContainerSpacement';
import { MainTitle } from '../../common/styles';
import { getCourses } from '../../store/courses';

import CardCoursePromoteSell from './components/CardCoursePromoteSell';

const CourseDescription = styled.p`
    color: #8B92A1;
    font-size: 16px;
    font-weight: 400;
`;

export default function Home () {
    const [searchParams] = useSearchParams();
    const courseId = searchParams.get('id');

    const courseState = useSelector((state) => state.courses.value);
    const courses = courseState.items;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourses());
    }, [])

    const searchedCourse = courses.find(course => course.id == courseId);
    return (
        <ContainerSpacement>
            <div
                style={{
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#413E4B',
                }}
                className={`${searchedCourse ? 'text-uppercase mb-5' : 'd-none'}`}
            >
                INÍCIO » {searchedCourse.name}
            </div>

            <div className="row">
                <div className="col-lg-8">
                    <div
                        style={{
                            maxWidth: '380px'
                        }}
                    >
                        <MainTitle fw="800" className='mb-4'>
                            Curso de {searchedCourse.name}
                        </MainTitle>

                        <CourseDescription>
                            {searchedCourse.description}
                        </CourseDescription>
                    </div>

                    <div
                        style={{
                            color: "var(--theme-red)",
                            fontSize: '16px',
                        }}
                        className="fw-bold my-4"
                    >
                        MELHOR CURSO DE PERÍCIA DO MERCADO
                    </div>

                    <div
                        style={{
                            color: "var(--theme-red)",
                            fontSize: '12px',
                            fontWeight: '500',
                        }}
                        className="pt-3"
                    >
                        Plataforma acessível  |  100% atualizado  |  Material disponível pra download
                    </div>

                </div>

                <div className="col-lg-4">
                    <CardCoursePromoteSell />
                </div>
            </div>

            <div className="py-5"></div>            
        </ContainerSpacement>
    )
  }