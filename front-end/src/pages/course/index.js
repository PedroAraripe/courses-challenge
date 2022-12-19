import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import ContainerSpacement from '../../common/components/ContainerSpacement';
import NotFoundSearch from '../../common/components/NotFoundSearch';
import { TitleCard, DescriptionCard } from '../../common/styles';
import { getUserCourse } from '../../store/user';

const IframeResponsive = styled.iframe`
    aspect-ratio: 560/315;
    width: 100%;
    height: auto;

    background-color: gray;
`;

export default function Course ({
}) {
    
    const [searchParams] = useSearchParams();
    const courseId = searchParams.get('id');
    
    const userState = useSelector((state) => state.user.value);
    const userCourse = userState.course;
    const dispatch = useDispatch();

    
    useEffect(() => {
        if(courseId) {
            dispatch(getUserCourse({id: courseId}));
        }
    }, [courseId]);

    const hasCurrentCourse = userCourse && Object.keys(userCourse);
    
    const {
        name,
        description,
        url
    } = hasCurrentCourse ?
        userCourse : {
            name: "",
            description: "",
            url: "",
        };

    return (
        <ContainerSpacement>
            {hasCurrentCourse ? (
                <div className='row'>
                    <div className="col-lg-9">
                        <IframeResponsive
                            width="560"
                            height="315"
                            src={url}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></IframeResponsive>
                    </div>

                    <div className="col-lg-3 d-flex flex-column justify-content-center">
                        <TitleCard className='my-3 mt-lg-0'>
                            {name}
                        </TitleCard>

                        <DescriptionCard unlimitedLines>
                            {description}
                        </DescriptionCard>
                    </div>
                </div>
            ) : (
                <div>
                    <NotFoundSearch text="Infelizmente não encontramos este curso em sua lista" />
                </div>
            )}
        </ContainerSpacement>
    )
  }