import styled from "styled-components";

export const SubTitle = styled.div`
  color: #cf2020;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const MainTitle = styled.h2`
  color: #413e4b;
  font-size: 32px;
  font-weight: ${props => props.fw ? props.fw : '700'};
  text-transform: none;
  line-height: 1.4em;
`;