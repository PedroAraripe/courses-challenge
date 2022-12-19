import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getCourses } from "../../store/courses";

import ContainerSpacement from '../../common/components/ContainerSpacement';
import Pagination from '../../common/components/Paginator';

import { perPage } from '../../common/constants/pagination';
import { MainTitle } from '../../common/styles';
import NotFoundSearch from '../../common/components/NotFoundSearch';
import DropdownCategories from '../../common/components/DropdownCategories';
import CardCoursePreview from '../../common/components/CardCoursePreview';
import { getUserCourses } from '../../store/user';

export default function Home () {
    const userState = useSelector((state) => state.user.value);
    const userCredentials = userState.user;
    const myCourses = userState.courses;
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    const searchParam = searchParams.get('s');
    const currentPage = searchParams.get('page') || 1;
    const category = searchParams.get('category');

    const start = currentPage * perPage - perPage;
    const end = start + perPage;

    useEffect(() => {
        dispatch(getUserCourses({start, end, category}));
    }, [category, currentPage, searchParam, userCredentials]);
    
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
                    {myCourses?.items?.length ? (
                        myCourses.items.map((course, index) =>(
                            <div className='col-lg-4' key={index}>
                                <CardCoursePreview
                                    hasBoughtIt
                                    id={course.id}
                                    name={course.name}
                                    description={course.description}
                                 />
                            </div>
                        )) 
                    ): (
                        <NotFoundSearch />
                    )}
                </div>

                <Pagination
                    totalItems={myCourses?.total || 0}
                    currentPage={currentPage}
                />
            </div>
        </ContainerSpacement>
    )
  }