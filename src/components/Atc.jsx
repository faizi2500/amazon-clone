import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './atc.css';
import Currency from './Currency';

const Atc = () => {
  const { shoppingList } = useContext(GlobalContext);
  return (
    <div className="container-atc-page">
      <div className="checkout-section">
        <div className="first-half-checkout">
          <img
            src="https://amazon-website.herokuapp.com/img/banner.png"
            alt="sale banner"
            className="checkout-banner-image"
          />
          <h3>Your Shopping Basket</h3>
          {shoppingList.length > 0 && <h2>{shoppingList[0].title}</h2>}
          <hr />
          <div>
            <h2>Product 1</h2>
            <h2>Product 2</h2>
          </div>
        </div>
        <div className="second-half-checkout">
          <h3>Payment</h3>
          <Currency />
        </div>
      </div>
    </div>
  );
};

export default Atc;
