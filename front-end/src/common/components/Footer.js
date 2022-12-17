import React from 'react';

import styled from 'styled-components'

const WrapperFooter = styled.footer`
    font-size: .7rem;
    color: #b7b2b2;
`

function FooterSection() {
    return (
        <WrapperFooter className='p-5 text-center text-capitalize'>
            <span style={{color: "gray"}}>
                I don't own this product! This is a challenge passed by
            </span> <a href="https://www.cursobeta.com.br/" style={{textDecoration: 'none', color: "var(--theme-red)"}}>
                Curso Beta
            </a>
        </WrapperFooter>
    );
  }
  
  export default FooterSection;
  
