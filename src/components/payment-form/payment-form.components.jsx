import { useState } from "react";
import { useSelector } from "react-redux";
import {selectCartTotal} from '../../store/cart/cart.selector'
import {selectCurrentUser} from '../../store/user/user.selector'
import { CardElement,useStripe,useElements } from "@stripe/react-stripe-js";
import {PaymentFormContainer,FormContainer} from './payment-form.styles'
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.components";


const PaymentForm=()=>{
    const stripe=useStripe();
    const elements=useElements();
    const amount=useSelector(selectCartTotal);
    const currentUser=useSelector(selectCurrentUser);
    const [isProcessingPayment,setIsProcessingPayment]=useState(false);

    const paymentHandler=async(e)=>{
        e.preventDefault();

        if(!stripe ||!elements){
            return;
        }
        setIsProcessingPayment(true);
        const response = await fetch('/.netlify/functions/create-payment-intent',
        {
            method:'post',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify({amount:amount*100})

        }).then(res=>res.json());
        const {paymentIntent: {client_secret}}=response;
        
    const paymentResult=await stripe.confirmCardPayment(client_secret,{
        payment_method:{
            card:elements.getElement(CardElement),
            billing_details:{
                name:currentUser ? currentUser.displayName : 'Guest'
            },
        },
    });
    setIsProcessingPayment(false);
    if(paymentResult.error){
        alert(paymentResult.error);
    }
    else if(paymentResult.paymentIntent.status === "succeeded"){
        alert('Payment successful');
    }
    }
return (
    <PaymentFormContainer>
        <FormContainer onSubmit={ paymentHandler}>
            <h2>Credit Card Payment:</h2>
        <CardElement  />
        <Button buttonType={BUTTON_TYPE_CLASSES.base} isLoading={isProcessingPayment} >Pay now</Button>
        </FormContainer>
        
    </PaymentFormContainer>
);
}

export default PaymentForm;