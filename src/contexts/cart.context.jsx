import { createContext, useState,useEffect } from "react";

const AddCartItems= (cartItems,productToAdd)=>{

    const existingCartItem =
        cartItems.find((cartItem)=>
        cartItem.id === productToAdd.id 

        );
        
   if(existingCartItem){
    return  cartItems.map((cartItem)=>
        cartItem.id===productToAdd.id ?
     {...cartItem,quantity:cartItem.quantity+1} :cartItem
    )}
   
    
    return [...cartItems,{...productToAdd,quantity:1}]
}

const rempoveFromCart=(cartItems,cartItemToRemove)=>{
    const existingCartItem =
        cartItems.find((cartItem)=>
        cartItem.id === cartItemToRemove.id 

        );

        if(existingCartItem.quantity==1){
            return cartItems.filter(cartItem=> cartItem.id !== cartItemToRemove.id)
        }

        return cartItems.map((cartItem)=>
        cartItem.id===cartItemToRemove.id ?
     {...cartItem,quantity:cartItem.quantity-1} :cartItem
    )
        

}


const clearFromCart=(cartItems,cartItemToClear)=>{
    const existingCartItem =
        cartItems.find((cartItem)=>
        cartItem.id === cartItemToClear.id 
      );
 if(existingCartItem){
            return cartItems.filter(cartItem=> cartItem.id !== cartItemToClear.id)
        }
        
    }






export const CartContext = createContext({
isCartOpen:false,
setIsCartOpen:()=>{},
cartItems:[],
addItemToCart:()=>{},
cartCount:0,
removeItemFromCart:()=>{},
totalPrice:0,
clearItemFromCart:()=>{}

});
export const CartProvider =({children})=>{

    const [isCartOpen,setIsCartOpen]= useState(false)
    
    const [cartItems,setCartItems]=useState([])
    const[cartCount,setCartCount] =useState()
    const[totalPrice,setTotalPrice] =useState()
    

    const addItemToCart=(productToAdd)=>{
      
        setCartItems(AddCartItems(cartItems,productToAdd))
    }

    const removeItemFromCart=(cartItemToRemove)=>{
      
        setCartItems(rempoveFromCart(cartItems,cartItemToRemove));
    }

    const clearItemFromCart=(cartItemToClear)=>{
      
        setCartItems(clearFromCart(cartItems,cartItemToClear));
    }

    useEffect(()=>{
        const newCartCount=cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
        setCartCount(newCartCount); }
        ,[cartItems])
        
        useEffect(()=>{
        const newCartPrice=cartItems.reduce((total,cartItem)=>total+cartItem.quantity * cartItem.price,0)
        setTotalPrice(newCartPrice); }
        ,[cartItems])
        
        

    
    const value= {isCartOpen,setIsCartOpen,cartItems,addItemToCart,cartCount,removeItemFromCart,totalPrice,clearItemFromCart};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}