import React from 'react';

function ContainerSpacement({children, className}) {
    return (
        <section className={`container px-lg-5 ${className}`}>
          {children}
        </section>
    );
  }
  
  export default ContainerSpacement;
  
