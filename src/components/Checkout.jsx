import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from './axios';
import { GlobalContext } from '../context/GlobalState';
import './checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const { shoppingList, total, clearCart } = useContext(GlobalContext);
  const [clientSecret, setClientSecret] = useState(true);

  const elements = useElements();
  const stripe = useStripe();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/stripe/create?total=${total * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [shoppingList]);

  console.log('the secret key is', clientSecret);

  const handleCardPayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    console.log('until now');

    await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    }).then((result) => {
      console.log(result);
      console.log('result');
      clearCart();
    });
    navigate('/cart');
  };

  return (
    <div className={shoppingList.length >= 1 ? 'checkout-container-with-list' : 'checkout-container-withoutlist'}>
      <h1>Checkout Page</h1>
      <form onSubmit={(e) => handleCardPayment(e)}>
        <CardElement />
        <button disabled={!stripe} type="submit">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Checkout;
