import {CartItemContainer,ItemDetails,Basediv} from './cart-item.styles'
 const CartItem =({cartItem})=>{
    const {name,quantity,imageUrl,price}=cartItem;
    return(
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`}/>
           <ItemDetails>
           <Basediv>{name}</Basediv>
           <Basediv>
            {quantity} x ${price}
            </Basediv> 
            </ItemDetails> 
           </CartItemContainer>

    );
 }
 export default CartItem;