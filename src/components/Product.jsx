// import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './product.css';
import { GlobalContext } from '../context/GlobalState';
// import CartContext from '../context/cart/CartContext';

const Product = (props) => {
  const { addItemToList } = useContext(GlobalContext);
  const {
    id,
    title,
    price,
    rating,
    image,
    customclass,
  } = props;

  const stars = [1, 2, 3, 4, 5];
  const starsList = [];

  stars.forEach((item) => {
    const randomNumber = Math.random();
    if (item <= rating) {
      starsList.push(<StarIcon key={randomNumber} className="golden-stars" />);
    } else {
      starsList.push(<StarBorderIcon key={randomNumber} className="golden-outlined-stars" />);
    }
  });

  const addHanlder = (e) => {
    e.preventDefault();
    addItemToList(props);
  };

  return (
    <div className="product-box">
      <div className="description-half">
        <p>{title}</p>
        <small>$</small>
        <strong>{price}</strong>
        <div>{starsList}</div>
      </div>
      <div id={customclass} className="image-half">
        <img src={image} alt={`product ${id}`} className="product-image" />
      </div>
      <button type="submit" className="atc-button" onClick={(e) => addHanlder(e)}>
        Add to basket
      </button>
    </div>
  );
};

Product.defaultProps = {
  customclass: '',
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  customclass: PropTypes.string,
};

export default Product;
