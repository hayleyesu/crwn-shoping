import {Outlet,Link} from 'react-router-dom';
import { Fragment,useContext } from 'react';
import {ReactComponent as Crwnlogo} from '../../../assets/crown.svg';
import {NavigationContainer,NavLinks,NavLink,LogoContainer} from './navigation.styles';
import { UserContext } from '../../../contexts/user.context';
import { CartContext } from '../../../contexts/cart.context';
import {signOutUser} from '../../../utils/firebase/firebase.utils'
import CartIcon from '../../cart-icon/cart-icon.component';
import CartDropdown from '../../cart-dropdown/cart-dropdown.component';


const Navigation = () => {
    
const {currentUser,}= useContext(UserContext);
const {isCartOpen}= useContext(CartContext);


 

     

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to ='/'>
                <Crwnlogo className='logo'/>
            </LogoContainer>
           
                <NavLinks>
                <Link className='nav-link' to='shop'>
                SHOP
                </Link>
                {
                currentUser ?
                (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>)
                :(<NavLink to='/auth'>
                SIGN IN
                </NavLink>)
                } 
                <CartIcon/>
                
            </NavLinks>
            {isCartOpen &&
            <CartDropdown/>
            }
            </NavigationContainer>
       
        <Outlet/>
      </Fragment>
      
    )}
    export default Navigation;