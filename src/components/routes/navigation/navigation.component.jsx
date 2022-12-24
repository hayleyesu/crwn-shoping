import {Outlet} from 'react-router-dom';
import { Fragment} from 'react';
import { useSelector } from 'react-redux';
import {ReactComponent as Crwnlogo} from '../../../assets/crown.svg';
import {NavigationContainer,NavLinks,NavLink,LogoContainer} from './navigation.styles';
import {selectIsCartOpen} from '../../../store/cart/cart.selector'
import {signOutUser} from '../../../utils/firebase/firebase.utils'
import CartIcon from '../../cart-icon/cart-icon.component';
import CartDropdown from '../../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../../store/user/user.selector';

const Navigation = () => {
    
const currentUser= useSelector(selectCurrentUser);
const isCartOpen=useSelector(selectIsCartOpen);



 

     

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to ='/'>
                <Crwnlogo className='logo'/>
            </LogoContainer>
           
                <NavLinks>
                <NavLink to='shop'>
                Shop
                </NavLink>
                <NavLink to='contact-us'>
                Contact us
                </NavLink>
                {
                currentUser ?
                (<NavLink as='span' onClick={signOutUser}>Sign out</NavLink>)
                :(<NavLink to='/auth'>
                Sign in
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