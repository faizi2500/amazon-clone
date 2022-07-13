import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './product.css';

const Product = (props) => {
  const {
    id,
    title,
    price,
    rating,
    image,
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

  return (
    <div className="product-box">
      <div className="description-half">
        <p>{title}</p>
        <small>$</small>
        <strong>{price}</strong>
        <div>
          {starsList}
        </div>
      </div>
      <div className="image-half">
        <img src={image} alt={`product ${id}`} className="product-image" />
      </div>
      <button type="button" className="atc-button">Add to basket</button>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Product;
