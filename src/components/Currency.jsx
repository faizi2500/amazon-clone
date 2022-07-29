import React from 'react';
import CurrencyFormat from 'react-currency-format';
import PropTypes from 'prop-types';
import './currency.css';
import { useNavigate } from 'react-router-dom';

const Currency = (props) => {
  const navigate = useNavigate();
  const { cartItems } = props;
  let totalAmount = 0;
  if (cartItems) {
    cartItems.map((each) => {
      totalAmount += each.price;
      return totalAmount;
    });
  }

  const checkoutClicked = () => {
    navigate('/payments');
  };

  return (
    <div>
      <CurrencyFormat
        value={totalAmount}
        displayType="text"
        thousandSeparator
        prefix="$"
        renderText={(totalAmount) => (
          <div className="price-container">
            <p className="checkout-price-title">
              Subtotal (
              {cartItems.length}
              &nbsp;
              items)
              :
              &nbsp;
              <span className="amount-checkout-price-title">{totalAmount}</span>
            </p>
            <div className="gift-checkbox-checkout-item">
              <input type="checkbox" />
              &nbsp;
              This order is a gift
            </div>
            <button type="button" onClick={checkoutClicked} className="checkout-btn-cart-page">
              Proceed To Checkout
            </button>
          </div>
        )}
      />
    </div>
  );
};

Currency.propTypes = {
  cartItems: PropTypes.instanceOf(Array).isRequired,
};

export default Currency;
