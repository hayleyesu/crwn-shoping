import styled from 'styled-components'

export const BaseButton=styled.button`
.button-container 
    min-width: 165px;
    width: 100%;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 12px; 
    background-color: #454545 ;
    color: white;
    text-transform: uppercase;
    font-family: sans-serif,'Ubuntu';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    border-radius: 100px;
    margin-top:10px;
   
  
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
`; 
export const GoogleSignInButton=styled(BaseButton)`
background-color: #4285f4;
      color: white;
  
      &:hover {
        background-color: #357ae8;
        border: none;
      }

`;
export const InvertedButton=styled(BaseButton)`
ackground-color: white;
      color: black;
      border: 1px solid black;
  
      &:hover {
        background-color: black;
        color: white;
        border: none;
      }
`;