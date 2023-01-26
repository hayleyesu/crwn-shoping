import {CheckoutContainer,CheckoutHeader,HeaderBlock,Total} from './checkout.styles';

import { useSelector } from 'react-redux';
import {selectCartItems,selectCartTotal} from '../../../store/cart/cart.selector'
import CheckoutItem from '../../checkout-item/checkout-item.component';
import PaymentForm from '../../payment-form/payment-form.components';

const Checkout=()=>{
    const cartItems=useSelector(selectCartItems);
    const totalPrice=useSelector(selectCartTotal);

    return(

<CheckoutContainer>
    <CheckoutHeader>
        <HeaderBlock><span>Products</span></HeaderBlock>
        <HeaderBlock><span>Discription</span></HeaderBlock>
        <HeaderBlock><span>Quantity</span></HeaderBlock>
        <HeaderBlock><span>Price</span></HeaderBlock>
        <HeaderBlock><span>Remove</span></HeaderBlock>
    </CheckoutHeader>
    {cartItems.map((cartItem)=>
         <CheckoutItem cartItem={cartItem} key={cartItem.id}/>
    )}
    
    <Total>{`Total : $${totalPrice}`}</Total>
    
    <PaymentForm />
    
    </CheckoutContainer>


    );
}
export default Checkout;