import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { Button } from 'react-bootstrap';
const CheckOutForm = ({handlePayment}) => {
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const cardElement = elements.getElement(CardElement);
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
  
      if (error) {
        setPaymentError(error.message)
        setPaymentSuccess(null)
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        setPaymentSuccess(paymentMethod.id)
        setPaymentError(null)
        handlePayment(paymentMethod.id)
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <CardElement className="shadow p-3" />
        <Button type="submit" className="mt-3 w-100" disabled={!stripe}>Pay and Book Now</Button>
        {
            paymentError && <p className="text-danger">{paymentError}</p> 
        }
        {
            paymentSuccess &&  <p className="text-success">Your card info are saved successfully</p> 
        }
      </form>
    );
};

export default CheckOutForm;