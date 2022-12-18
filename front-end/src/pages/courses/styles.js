import styled from "styled-components";

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

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

