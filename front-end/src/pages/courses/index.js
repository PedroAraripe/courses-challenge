import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { clearCourse, createCourse, getCourses, updateCourse } from "../../store/courses";

import ContainerSpacement from '../../common/components/ContainerSpacement';
import Pagination from '../../common/components/Paginator';
import DropdownCategories from '../../common/components/DropdownCategories';
import CardCoursePreview from '../../common/components/CardCoursePreview';

import { perPage } from '../../common/constants/pagination';
import { InputComp, MainTitle, TextAreaComp } from '../../common/styles';
import NotFoundSearch from '../../common/components/NotFoundSearch';

import { courses as coursesData } from "../../store/courses"
import { toast } from 'react-toastify';
import { toastConfig } from '../../common/configs';

export default function Home () {
    const courseState = useSelector((state) => state.courses);
    const courses = courseState.courses.items;
    const dispatch = useDispatch();
    const currentCourse = courseState.course;

    const hasCurrentCourse = currentCourse && Object?.keys(currentCourse)?.length;

    const {
        id : currentCourseId,
        name : currentCourseName,
        description: currentCourseDescription,
        url: currentCourseUrl,
        categoryId: currentCourseCategoryId,
    } = hasCurrentCourse ? currentCourse : {
        name: "",
        description: "",
        url: "",
        categoryId: "",
    };

    const userCredentials = useSelector((state) => state.user.value.user);
    const [categoryToCreate, setCategoryToCreate] = useState("");
    
    const isAdmin = userCredentials?.role === "admin";

    const [searchParams] = useSearchParams();
    const searchParam = searchParams.get('s');
    const currentPage = searchParams.get('page') || 1;
    const category = searchParams.get('category');

    const start = currentPage * perPage - perPage;
    const end = start + perPage;

    const submitHandler = (event) => {
        event.preventDefault();
    }

    const handleCreate = (event) => {
        event.preventDefault();
    
        const form = document.querySelector("#modal-form");
    
        const name = form[0].value;
        const description = form[1].value;
        const url = form[2].value;

        if(!(name && description && url && categoryToCreate)) {
          return toast.error('Preencha todos os campos.', toastConfig);
          
        }

        const inputValues = {
            name,
            description,
            url,
            categoryId: categoryToCreate
        }

        console.log({inputValues})
    
        toast.success('Curso  com sucesso!', toastConfig);
    
        dispatch(createCourse(inputValues));
    }

    const handleUpdate = (event) => {
        event.preventDefault();
    
        const form = document.querySelector("#modal-form");
    
        const name = form[0].value;
        const description = form[1].value;
        const url = form[2].value;

        if(!(name && description && url && categoryToCreate)) {
          return toast.error('Preencha todos os campos.', toastConfig);
          
        }

        const inputValues = {
            id: currentCourseId,
            name,
            description,
            url,
            categoryId: categoryToCreate
        }

        toast.success('Curso atualizado com sucesso!', toastConfig);
    
        dispatch(updateCourse(inputValues));
    }
    
    useEffect(() => {
        dispatch(getCourses({start, end, category, search: searchParam}));
    }, [category, currentPage, searchParam, coursesData]);
    
    useEffect(() => {
        if(hasCurrentCourse) {
            
            const form = document.querySelector("#modal-form");
            const name = form[0];
            const description = form[1];
            const url = form[2];

            name.value = currentCourseName;
            description.value = currentCourseDescription;
            url.value = currentCourseUrl;
            setCategoryToCreate(currentCourseCategoryId)
        }
    }, [hasCurrentCourse]);
    
    return (
        <ContainerSpacement>
            
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{!hasCurrentCourse ? "Criando Curso" : `Editando Curso ${currentCourseName}` }</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form onSubmit={submitHandler} id="modal-form" className="modal-body">
                    <InputComp
                        placeholder="Título"
                        type="text"
                        name="name"
                        title="name"
                        className='w-100 p-3'
                    />
                    <TextAreaComp
                        placeholder="Descrição"
                        type="text"
                        name="description"
                        title="description"
                        className='w-100 p-3'
                    />
                    <InputComp
                        placeholder="Url"
                        type="text"
                        name="url"
                        title="Url"
                        className='w-100 p-3'
                    />

                    <div className='w-100 p-3'>
                    <DropdownCategories id={1} passValue={true} initialCategory={currentCourseCategoryId} setCategory={setCategoryToCreate} />
                    </div>
                </form>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    <button type="button" className="btn btn-success" onClick={!hasCurrentCourse? handleCreate : handleUpdate}>Salvar</button>
                </div>
                </div>
            </div>
            </div>
            <div className="d-flex flex-column align-items-center">
                <div>
                    <MainTitle fw="800">
                        Resultados da Pesquisa por: {searchParam}
                    </MainTitle>
                    
                    <DropdownCategories id={2}  />

                    {isAdmin ? (
                        <button 
                            onClick={() => dispatch(clearCourse())}
                            className="btn btn-success mt-3"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            Criar curso
                        </button>
                    ): null}
                </div>

                <div className="py-5"></div>

                <div className="row w-100">
                    {courses.length ? (
                        courses.map((course, index) =>(
                            <div className='col-lg-4' key={index}>
                                <CardCoursePreview
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
                    totalItems={courseState.courses.total}
                    currentPage={currentPage}
                />
            </div>
        </ContainerSpacement>
    )
  }