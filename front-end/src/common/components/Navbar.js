import React from 'react';
import ContainerSpacement from './ContainerSpacement.js';
import SearchCourseForm from '../../pages/home/components/SearchCourseForm.js';
import { Link, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FastNavItem } from '../styles.js';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/user.js';

const whatsAppLink = 'https://api.whatsapp.com/send/?phone=552140032140&text=Oi,%20me%20ajuda%20aqui...%20';

export default function Navbar() {
  const userCredentials = useSelector((state) => state.user.value.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const fastNavItems = [
    {
      name: "Início",
      path: "/"
    },
    {
      name: "Todos os cursos",
      path: "/courses"
    },
    {
      name: "Meus cursos",
      path: userCredentials ? "/my-courses" : "/login"
    },
  ];

  function handleLogout() {
    dispatch(logout());
    navigate("/login");
  }

  return (
    <div>
      <div
        className='d-none d-lg-block'
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
          <div className="row mt-lg-5 mb-lg-4 align-items-center my-4 my-lg-0">
            <div className='col-lg-3'>
              <a href="#">
                <img width="199" height="30" src="https://www.cursobeta.com.br/wp-content/uploads/sites/4/2022/07/Logo-1.svg" className="attachment-full size-full" alt="Logo Curso Beta" />
              </a>
            </div>

            <div className="col-lg-6 mt-5 mb-3 my-lg-0">
              <SearchCourseForm />
            </div>

            <div className="col-lg-3 d-flex align-items-center">
              <Link
                to="/login"
                className="white-to-red-button w-100 mx-lg-3 d-flex align-items-center"
              >
                  <FontAwesomeIcon icon="user" className='me-2' />

                  <div className='flex-grow-1 d-flex justify-content-center'>
                    
                  { userCredentials ? userCredentials.login : 'Área de Login'}
                  </div>
              </Link>

              {userCredentials ? (
                <button
                  onClick={handleLogout}
                  className='bg-transparent btn border-0 h-100 p-2 d-flex align-items-center justify-content-center'
                  style={{
                    color: 'var(--theme-red)'
                  }}
                >
                  <FontAwesomeIcon icon="sign-out" className='me-2' />
                </button>
              ) : null}
            </div>

            <div className="col-lg-12 mt-4 d-flex justify-content-center">
              {fastNavItems.map((nav, index) => (
                <Link
                  key={index}
                  to={nav.path}
                  style={{
                    textDecoration: "none",
                    color: "inherit"
                  }}
                >
                  <FastNavItem className={`${index ? 'ms-4' : ''}`}>
                    {nav.name}
                  </FastNavItem>
                </Link>
              ))}
            </div>
          </div>
        </ContainerSpacement>
      </div>
    </div>
  )
}