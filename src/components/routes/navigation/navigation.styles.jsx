import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const NavigationContainer=styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  
  @media screen and (max-width:800px){
    height: 60px;
    margin-bottom:20px;
  }

`


  export const LogoContainer= styled(Link)
  `
  height: 100%;
  width: 70px;
  padding: 25px;

    @media screen and (max-width:800px){
      width:50px;
      padding:0px;
    }
  `
  export const NavLinks= styled.div
  `
    font-weight:600;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    @media screen and (max-width:800px){
      width:90%;
      font-weight:560;
    }
    
  `
export const NavLink= styled(Link)
`
 padding: 10px 15px;
 cursor: pointer;
 letter-spacing: 0.3px;
 font-size:12px;
 &:hover {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-decoration-color: blue;

  @media screen and (max-width:800px){
    padding: 10px 5px;
  }
  
}
`
  

    