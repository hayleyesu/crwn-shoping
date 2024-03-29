import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }
  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }
  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width:800px){
    width:42vw;
    height: 260px;
    &:hover {
      img {
        opacity: 0.7;
      }
      button {
        opacity:0.6;
        
      }
    }
    button {
      width: 96%;
      top: 170px;
      display: block;
      opacity:unset;
      ;
      
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

export const Name = styled.span`
  width: 90%;

  @media screen and (max-width:800px){
    width: 80%;
  }
  
`;

export const Price = styled.span`
  width: 10%;
  @media screen and (max-width:800px){
    width: 20%;
  }
`;