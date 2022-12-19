import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DescriptionCard, TitleCard, WrapperCard } from '../styles';

export default function CardCoursePreview ({
  name,
  description,
  id
}) {
  
  const userCredentials = useSelector((state) => state.user.value.user);
  const isAdmin = userCredentials?.role === "admin";

    return (
      <WrapperCard className="p-4 mb-4 d-flex flex-column justify-content-between">
        <div>
          <TitleCard className='mb-4'>
            {name} {`${!!isAdmin}`}
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