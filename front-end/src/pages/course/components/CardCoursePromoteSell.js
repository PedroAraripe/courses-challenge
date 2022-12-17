import React from 'react';
import { MainTitle } from '../../../common/styles';
import { BuyNow, WrapperCardSell } from '../styles';



export default function CardCoursePromoteSell () {
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
          
          <div className='my-3 px-3'>
            <BuyNow> Comprar Agora </BuyNow>
          </div>

          <div className='d-flex justify-content-center'>
            <div>
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