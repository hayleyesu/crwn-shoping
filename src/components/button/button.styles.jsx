import styled from 'styled-components';
import {SpinnerContainer} from '../spinner/spinner.styles'

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
    align-items:center;
   
  
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
    
    @media screen and (max-width:800px){
      font-size: 10px; 
      
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
background-color: white;
      color: black;
      border: 1px solid black;
  
      &:hover {
        background-color: black;
        color: white;
        border: none;
     
      }
      @media screen and (max-width:800px){
        font-size: 10px; 
        
     }
      
`;
export const ButtonSpinner=styled(SpinnerContainer)`
width:30px;
height:30px;  `