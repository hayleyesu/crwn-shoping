import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { CartContext, } from '../../contexts/cart.context';
import { useContext } from 'react';

const CartIcon=()=>{

  const {isCartOpen,setIsCartOpen,cartItems}=useContext(CartContext);
  const cartAddedAmount=cartItems.length;
  const toggleIsCartOpen=() =>setIsCartOpen(!isCartOpen);
    
  return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
          <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{cartAddedAmount}</span>
        </div>
      
    );
}
export default CartIcon;