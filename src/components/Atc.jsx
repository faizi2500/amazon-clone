import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './atc.css';
import Currency from './Currency';

const Atc = () => {
  const { shoppingList, removeItemFromList, clearCart } = useContext(GlobalContext);

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
          <hr />
          <button type="button" onClick={() => clearCart()}>Clear Cart</button>
          <div>
            {shoppingList.length ? (
              shoppingList.map((each) => (
                <>
                  <h2 key={each.id}>{each.title}</h2>
                  <button type="button" onClick={(e) => removeItemFromList(e, each)}>
                    Delete
                  </button>
                </>
              ))
            ) : (
              <h2>Nothing in the list</h2>
            )}
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
