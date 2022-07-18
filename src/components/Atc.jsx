import React, { useContext } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { GlobalContext } from '../context/GlobalState';
import './atc.css';
import Currency from './Currency';

const Atc = () => {
  const { shoppingList, removeItemFromList, clearCart } = useContext(GlobalContext);
  let count = 0;

  const evaluateRating = (element) => {
    const stars = [1, 2, 3, 4, 5];
    const starsList = [];
    stars.forEach((item) => {
      const randomNumber = Math.random();
      if (item <= element.rating) {
        starsList.push(
          <StarIcon key={randomNumber} className="golden-stars" />,
        );
      } else {
        starsList.push(
          <StarBorderIcon
            key={randomNumber}
            className="golden-outlined-stars"
          />,
        );
      }
    });
    return starsList;
  };

  return (
    <div className="container-atc-page">
      <div className="checkout-section">
        <div className="first-half-checkout">
          <img
            src="https://amazon-website.herokuapp.com/img/banner.png"
            alt="sale banner"
            className="checkout-banner-image"
          />
          <hr />
          <div className="clear-all-from-cart-btn">
            <button type="button" className="clear-cart-btn" onClick={() => clearCart()}>Clear Cart</button>
          </div>
          <div className="each-product-cart-section-div">
            {shoppingList.length ? (
              shoppingList.map((each, index) => {
                count += 1;
                return (
                  <div key={count} className="product-cart-section">
                    <img src={each.image} alt="Product display" className="cart-section-product-image" />
                    <div className="product-cart-section-details">
                      <h2>{each.title}</h2>
                      <div className="rating-section-cart">
                        {evaluateRating(each)}
                      </div>
                      <button type="button" className="remove-from-cart-btn" onClick={(e) => removeItemFromList(e, each, index)}>
                        Remove from basket
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="cart-empty-msg">Your cart is empty</p>
            )}
          </div>
        </div>
        <div className="second-half-checkout">
          <Currency cartItems={shoppingList} />
        </div>
      </div>
    </div>
  );
};

export default Atc;
