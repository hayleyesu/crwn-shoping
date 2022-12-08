import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import './cart-dropdown.styles.scss'
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
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
        
            {cartItems.map((item)=>{
        return <CartItem cartItem={item} key={item.id}/>
           } )}
        </div>
        <Button onClick={GoToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
    );
}
export default CartDropdown;