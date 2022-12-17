import styled from "styled-components";

export const WrapperCardSell = styled.div`
  box-shadow: -12px 12px 43px 0px rgb(65 62 75 / 20%);
  border-radius: 15px;

  color: #413E4B;
  font-size: 18px;
  font-weight: 400;
`;

export const BuyNow = styled.button`
  font-size: 16px;
  font-weight: 500;

  border: none;
  border-radius: 8px 8px 8px 8px;
  background-color: #00D17C;
  color: white;
  
  width: 100%;
  
  padding: 0.8rem;
  margin-bottom: 0.3rem;

  transition: all 0.3s;
  
  &:hover {
    transform: translateY(0.3rem);
  }
`;