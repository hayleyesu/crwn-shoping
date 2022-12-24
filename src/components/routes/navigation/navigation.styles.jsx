import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const NavigationContainer=styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

`


  export const LogoContainer= styled(Link)
  `
  height: 100%;
  width: 70px;
  padding: 25px;
  `
  export const NavLinks= styled.div
  `
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    
    
  `
export const NavLink= styled(Link)
`
 padding: 10px 15px;
 cursor: pointer;
 font-weight:bolder;
 letter-spacing: 0.5px;
 font-size:14px;
 &:hover {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-decoration-color: blue;
  
}
`
  

    