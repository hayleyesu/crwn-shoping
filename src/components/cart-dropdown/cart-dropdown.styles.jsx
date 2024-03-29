import styled from 'styled-components';
import {BaseButton,GoogleSignInButton,InvertedButton} from '../button/button.styles'


export const CartDropdownContainer=styled.div`
position: absolute;
    width: 260px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    ${BaseButton},
    ${InvertedButton},
    ${GoogleSignInButton}
    {
      margin-top: auto;   
   
    }
    @media screen and (max-width:800px){
      right: 15px;
      width: 230px;
      height: 240px;
      
  }
`
export const EmpityMessage=styled.span`
font-size: 18px;
margin: 50px auto;
`
  
    export const CartItems=styled.div`
    height: 240px;
      display: flex;
      flex-direction: column;
      overflow: scroll;
    `
  
    
  
   
  
  