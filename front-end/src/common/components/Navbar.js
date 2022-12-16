import React from 'react';
import ContainerSpacement from './ContainerSpacement.js';
import SearchCourseForm from '../../pages/home/components/SearchCourseForm.js';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
  const whatsAppLink = 'https://api.whatsapp.com/send/?phone=552140032140&text=Oi,%20me%20ajuda%20aqui...%20';

  return (
    <div>
      <div
        style={{
          fontSize: '15px',
          fontWeight: '600',
          borderBottom: '1px solid #8b92a152'
        }}
      >
        <ContainerSpacement>
          <ul className="px-0 mb-0 d-flex align-items-center justify-content-between py-2">
            <li style={{color: 'var(--theme-red)'}}>
              <span>
                <FontAwesomeIcon icon="check" className='me-2'/>
                100% online
              </span>
              
              <span className='ms-5'>
                <FontAwesomeIcon icon="check" className='me-2'/>
                Certificados válidos em todo o Brasil
              </span>
            </li>

            
            <li className='d-flex align-items-center'>
              <a href={whatsAppLink} style={{
                color: '#34af23',
                textDecoration: 'none'
              }}>
                <FontAwesomeIcon icon="phone-alt" className='me-2' style={{transform: 'rotate(90deg)'}}/>
                Atendimento
              </a>
            </li>
          </ul>
        </ContainerSpacement>
      </div>

      <div
        style={{
          borderBottom: '1px solid #8b92a152'
        }}
      >
        <ContainerSpacement>
          <div className="row my-lg-5 align-items-center">
            <div className='col-lg-3'>
              <a href="#">
                <img width="199" height="30" src="https://www.cursobeta.com.br/wp-content/uploads/sites/4/2022/07/Logo-1.svg" class="attachment-full size-full" alt="Logo Curso Beta" />
              </a>
            </div>

            <div className="col-lg-6">
              <SearchCourseForm />
            </div>

            <div className="col-lg-3">
            <Link
              to="/login"
              className="white-to-red-button"
            >
                <FontAwesomeIcon icon="user" className='me-2' />
                Acessar Área do Aluno
            </Link>
            </div>
          </div>
        </ContainerSpacement>
      </div>
    </div>
  )
}