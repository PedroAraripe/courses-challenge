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

export const InputComp = styled.input`
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  color: #81807f;
  background: transparent;

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #afaead;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #afaead;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: #afaead;
  }

  &:focus-visible {
    outline: 0;
  }
`;

export const TextAreaComp = styled.textarea`
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  color: #81807f;
  background: transparent;

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #afaead;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #afaead;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: #afaead;
  }

  &:focus-visible {
    outline: 0;
  }
`;

export const FastNavItem = styled.span`
  padding: 0.4rem 0.5rem;
  
  @media (min-width: 992px) {
    padding: 0.5rem 1.8rem;
  }

  font-size: 14px;
  
  border-radius: 20px;
  
  filter: grayscale(0.2);
  transition: all 0.3s;

  &:hover {
    color: white;
    background-color: var(--theme-red);
  }
`;

export const WrapperCard = styled.div`
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%);
  
  height: 250px;
  
  border-radius: 10px;

  transition: all 0.3s;
  
  &:hover {
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 15%);
  }
`;

export const TitleCard = styled.h3`
  color: #413E4B;
  font-size: 18px;
  font-weight: 800;
`;

export const DescriptionCard = styled.p`
  color: #8B92A1;
  font-size: 15px;
  font-weight: 400;

  ${ props => {
    if(!props.unlimitedLines) {
      return `
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      `;
    }
  }
  }
`;


export const WrapperDropdownCategorie = styled.div`
  display: flex;
  align-items: center;
  
  & > button {
    font-weight: 500;
  }
  
  & button {
    border: none;
    background: transparent;
  }
  
  &, & *{
    font-size: 14px !important;
  }

  & ul button {
    display: block;

    transition all 0.2s;
    
    text-align: left;
    
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:hover {
      background-color: #f6dede;
    }
    
  }
`;