import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getCourses } from "../../store/courses";

import ContainerSpacement from '../../common/components/ContainerSpacement';
import Pagination from '../../common/components/Paginator';

import { perPage } from '../../common/constants/pagination';
import { MainTitle } from '../../common/styles';
import CardCoursePreview from './components/CardCoursePreview';
import DropdownCategories from './components/DropdownCategories';

export default function Home () {
    const courseState = useSelector((state) => state.courses.value);
    const courses = courseState.items;
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    const searchParam = searchParams.get('s');
    const currentPage = searchParams.get('page') || 1;
    const category = searchParams.get('category');

    const start = currentPage * perPage - perPage;
    const end = start + perPage;

    useEffect(() => {
        dispatch(getCourses({start, end, category, search: searchParam}));
    }, [category, currentPage, searchParam]);
    
    return (
        <ContainerSpacement>
            <div className="d-flex flex-column align-items-center">
                <div>
                    <MainTitle fw="800">
                        Resultados da Pesquisa por: {searchParam}
                    </MainTitle>
                    
                    <DropdownCategories />
                </div>

                <div className="py-5"></div>

                <div className="row w-100">
                    {courses.map((course, index) =>(
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
                    totalItems={courseState.total}
                    currentPage={currentPage}
                />
            </div>
        </ContainerSpacement>
    )
  }