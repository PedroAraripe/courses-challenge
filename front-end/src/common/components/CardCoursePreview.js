import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DescriptionCard, TitleCard, WrapperCard } from '../styles';
import CrudCourse from './CrudCourse';

const AccessContentButton = styled.div`
  text-decoration: none;
  color: white;
  background-color: var(--theme-red);
  width: fit-content;
  padding: 0.5rem 0.5rem;
  border-radius: 6px;

  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const BuyContentButton = styled.div`
  color: var(--theme-red);
  filter: grayscale(0.4);
`;

export default function CardCoursePreview ({
  name,
  description,
  id,
  hasBoughtIt,
  canShowCrudBar
}) {
  
  const userCredentials = useSelector((state) => state.user.value.user);
  const isAdmin = userCredentials?.role === "admin";

    return (
      <WrapperCard className="p-4 mb-4 d-flex flex-column justify-content-between">
        <div>
          {isAdmin && canShowCrudBar ? (
            <CrudCourse id={id} />
          ) : null}
          <TitleCard className='mb-4'>
            {name}
          </TitleCard>

          <DescriptionCard>
            {description}
          </DescriptionCard>
        </div>

        <Link
          to={hasBoughtIt ? `/course?id=${id}` : `/course-preview?id=${id}`}
          className="text-uppercase"
          style={{
            textDecoration: 'none',
            fontSize: '12px',
            fontWeight: 700,
          }}
        >
          {hasBoughtIt ? (
            <AccessContentButton>
              acessar conteúdo
            </AccessContentButton>
          ) : (
            <BuyContentButton>
              leia mais »
            </BuyContentButton>

          )}
        </Link>
      </WrapperCard>
    )
  }