import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './header.css';

const Header = () => (
  <div className="header-section">
    <img
      className="amazon-logo-class"
      src="https://boostedmedia.net/wp-content/uploads/2019/11/white-amazon-logo-png-6.png"
      alt="amazon-logo"
    />
    <div className="input-search-field">
      <input type="text" placeholder="Search Here" className="input-fields" />
      <SearchIcon style={{ fontSize: 42 }} className="search-icon" />
    </div>
    <div className="header-navigation">
      <div className="nav-options">
        <h5 className="line1-heading">Hello Guest</h5>
        <a className="line2-heading" href="https://twitter.com/home">
          <strong>Sign In</strong>
        </a>
      </div>
      <div className="nav-options">
        <h5 className="line1-heading">Return</h5>
        <a className="line2-heading" href="https://twitter.com/home">
          <strong>& Orders</strong>
        </a>
      </div>
      <div className="nav-options">
        <h5 className="line1-heading">Your</h5>
        <a className="line2-heading" href="https://twitter.com/home">
          <strong>Prime</strong>
        </a>
      </div>
      <div id="last-option-nav" className="nav-options ">
        <ShoppingBasketIcon className="shopping-icon" />
        <h5>0</h5>
      </div>
    </div>
  </div>
);

export default Header;
