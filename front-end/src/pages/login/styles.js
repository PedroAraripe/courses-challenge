import styled from "styled-components";

export const WrapperLogin = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const HelloLogin = styled.h2`
  text-align: center;
  position: relative;
  font-size: 26px;
  line-height: 39px;
  font-weight: 600;
  margin-bottom: 35px;
`;

export const FormLoginWrapper = styled.form`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  
  & input {
    width: 100%;
    background-color: hsl(195deg 15% 90%);
  }

  & button {
    transition: all 0.3s;

    &:hover {
      transform: translateY(-5px);
    }
  }
`;

