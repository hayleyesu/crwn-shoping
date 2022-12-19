import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import {CartDropdownContainer,EmpityMessage,CartItems} from './cart-dropdown.styles'
import Button from '../button/button.components'
import CartItem from '../cart-item/cart-item.component';
import { useNavigate, useRoutes } from 'react-router-dom';

const CartDropdown=()=>{
    const {cartItems}=useContext(CartContext);
    const navigate=useNavigate();
const GoToCheckoutHandler =() =>{
        navigate('/checkout');

    }
    return(
    <CartDropdownContainer>
        <CartItems>
        {cartItems.length ? (cartItems.map((item)=>(<CartItem cartItem={item} key={item.id}/>)
         
            )):(<EmpityMessage>Your cart is empity.</EmpityMessage>)}
            
        </CartItems>
        <Button onClick={GoToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
    );
}
export default CartDropdown;