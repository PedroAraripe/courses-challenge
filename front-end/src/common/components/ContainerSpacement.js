import React from 'react';

function ContainerSpacement({children}) {
    return (
        <section className='container px-lg-5'>
          {children}
        </section>
    );
  }
  
  export default ContainerSpacement;
  
