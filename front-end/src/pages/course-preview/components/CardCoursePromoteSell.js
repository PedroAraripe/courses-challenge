import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { toastConfig } from '../../../common/configs';
import { MainTitle } from '../../../common/styles';
import { buyCourse } from '../../../store/user';
import { BuyNow, WrapperCardSell } from '../styles';

export default function CardCoursePromoteSell ({courseId}) {
  const userState = useSelector((state) => state.user.value);
  const userCredentials = userState.user;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alreadyBoughtIt = !!(userCredentials && userState.coursesIds?.includes(courseId));
  
  const sendToCoursePage = () => {
    navigate(`/my-courses?id=${courseId}`)
  }

  const handlerBuyNow = () => {
    if(!userCredentials) {
      navigate("/login");
      
    } else if (alreadyBoughtIt) {
      sendToCoursePage();

      
    } else {
      dispatch(buyCourse({courseId}))
      
      return toast.success('Curso comprado e disponível para acesso!', toastConfig);
    }
  }

    return (
        <WrapperCardSell className='p-3'>
          <span> De </span>

          <span className='text-decoration-line-through'>
            R$300,00
          </span>

          <div
            style={{
              fontWeight: "500"
            }}
            className="mt-3"
          >
            por apenas:
          </div>

          <MainTitle fw="800">
            R$0,00
          </MainTitle>
          
          <div className='my-3'>
            <BuyNow onClick={handlerBuyNow}> 
              {alreadyBoughtIt ? "Acessar curso" : "Compre agora"}
            </BuyNow>
          </div>

          <div className='d-flex justify-content-center mb-2'>
            <div
              style={{
                fontSize: '14px',
                color: '#8b92a1',
              }}
            >
              <FontAwesomeIcon icon="lock" className='me-2'/>
              <span className='fw-bold'>
                7 dias
              </span>

              &ensp;

              <span>
                de Garantia
              </span>
            </div>
          </div>
        </WrapperCardSell>
    )
  }