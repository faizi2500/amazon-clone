import React, { useContext } from 'react';
import {
  signOut,
} from 'firebase/auth';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import './header.css';
import { GlobalContext } from '../context/GlobalState';
import auth from '../firebase';

const Header = () => {
  const { shoppingList, user, addUser } = useContext(GlobalContext);

  const singOutUser = async () => {
    await signOut(auth);
    addUser('');
  };

  return (
    <div className="header-section">
      <Link to="/" className="first-section">
        <img
          className="amazon-logo-class"
          src="https://boostedmedia.net/wp-content/uploads/2019/11/white-amazon-logo-png-6.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="input-search-field">
        <input type="text" placeholder="Search Here" className="input-fields" />
        <SearchIcon style={{ fontSize: 42 }} className="search-icon" />
      </div>
      <div className="header-navigation">
        <div className="nav-options">
          {user.email ? (
            <button type="button" onClick={singOutUser}>
              <h5 className="line1-heading">
                Hello
                {user.email}
              </h5>
              <strong>Sign Out</strong>
            </button>
          ) : (
            <Link to="/login" className="sign-in-btn-home-page">
              <h5 className="line1-heading">Hello Guest</h5>
              <strong>Sign In</strong>
            </Link>
          )}
        </div>
        <div className="nav-options">
          <h5 className="line1-heading">Return</h5>
          <a className="line2-heading" href="https://twitter.com/home">
            <strong>& Orders</strong>
          </a>
        </div>
        <div className="nav-options">
          <h5 className="line1-heading">Your</h5>
          <strong>Prime</strong>
        </div>
        <div id="last-option-nav" className="nav-options ">
          <Link to="/cart" className="cart-btn">
            <ShoppingBasketIcon className="shopping-icon" />
            <span>{shoppingList.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
