import React from "react";

import styled from 'styled-components';

const WrapperNotFoundText = styled.div`
  color: #413e4b;
  font-size: 25px;
  font-weight: 800;
  text-transform: none;
  line-height: 1.4em;

  max-width: 500px;
  margin: 0 auto;
`;

export default function NotFoundSearch({
  text
}) {

  return (
    <WrapperNotFoundText className="text-center py-5 mb-5">
      {text ?? "Não foram encontrados resultados para esta busca"}
    </WrapperNotFoundText>
  )
}