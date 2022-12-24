import {CheckoutContainer,CheckoutHeader,HeaderBlock,Total} from './checkout.styles';

import { useSelector } from 'react-redux';
import {selectCartItems,selectCartTotal} from '../../../store/cart/cart.selector'
import CheckoutItem from '../../checkout-item/checkout-item.component';

const Checkout=()=>{
    const cartItems=useSelector(selectCartItems);
    const totalPrice=useSelector(selectCartTotal);

    return(

<CheckoutContainer>
    <CheckoutHeader>
        <HeaderBlock><span>Products</span></HeaderBlock>
        <HeaderBlock><span>Description</span></HeaderBlock>
        <HeaderBlock><span>Quantity</span></HeaderBlock>
        <HeaderBlock><span>Price</span></HeaderBlock>
        <HeaderBlock><span>Remove</span></HeaderBlock>
    </CheckoutHeader>
    {cartItems.map((cartItem)=>
         <CheckoutItem cartItem={cartItem} key={cartItem.id}/>
    )}
    
    <Total>{`Total : $${totalPrice}`}</Total>
    
    
    </CheckoutContainer>


    );
}
export default Checkout;