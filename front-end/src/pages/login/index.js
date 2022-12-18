import React from 'react';
import { useDispatch } from 'react-redux';

import ContainerSpacement from '../../common/components/ContainerSpacement';
import { InputComp } from '../../common/styles';
import { validateUser } from '../../store/user';

import { FormLoginWrapper, HelloLogin, WrapperLogin } from "./styles";


export default function Home () {
    const dispatch = useDispatch();

    function submitHandler(e) {
        e.preventDefault();
        
        const login = e.target[0].value;
        const password = e.target[1].value;
        dispatch(validateUser({login, password}));
    };

    return (
        <ContainerSpacement>
            <WrapperLogin className='px-3 px-lg-5'>
                <HelloLogin className='d-flex justify-content-center'>
                    Bem-vindo(a) 😀
                </HelloLogin>

                <FormLoginWrapper onSubmit={submitHandler} className='d-flex flex-column align-items-center'>
                    <InputComp
                        placeholder="Login"
                        type="text"
                        name="login"
                        title="Pesquisar"
                        className='p-3'
                    />

                    <InputComp
                        placeholder="Senha"
                        type="password"
                        name="password"
                        title="Pesquisar"
                        className='p-3 mt-3'
                    />

                    <button
                        className='btn mt-5 w-100'
                        style={{
                            backgroundColor: "var(--theme-red)",
                            filter: "grayscale(0.1)",
                            color: 'white',
                        }}
                    > Entrar</button>
                </FormLoginWrapper>

                <div className="py-5"></div>
            </WrapperLogin>
        </ContainerSpacement>
    )
  }