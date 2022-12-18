import React from 'react';
import { Link } from 'react-router-dom';
import { DescriptionCard, TitleCard, WrapperCard } from '../styles';

export default function CardCoursePreview ({
  name,
  description,
  id
}) {
    return (
      <WrapperCard className="p-4 mb-4 d-flex flex-column justify-content-between">
        <div>
          <TitleCard className='mb-4'>
            {name}
          </TitleCard>

          <DescriptionCard>
            {description}
          </DescriptionCard>
        </div>

        <Link
          to={`/course?id=${id}`}
          className="text-uppercase"
          style={{
            textDecoration: "none",
            color: "var(--theme-red)",
            filter: "grayscale(0.4)",
            fontSize: "12px",
            fontWeight: 700,
          }}
        >
          Leia mais »
        </Link>
      </WrapperCard>
    )
  }