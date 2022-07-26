import React, { useContext, useState } from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { signOut } from 'firebase/auth';
import './MobileHeader.css';
import { GlobalContext } from '../context/GlobalState';
import auth from '../firebase';

const MobileHeader = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { shoppingList, user, addUser } = useContext(GlobalContext);
  const bodyElement = document.body;

  if (navOpen) {
    bodyElement.style.overflow = 'hidden';
  } else {
    bodyElement.style.overflow = 'auto';
  }

  const singOutUser = async () => {
    await signOut(auth);
    setNavOpen(false);
    addUser('');
  };
  console.log('Hello');
  return (
    <div className="mobile-nav">
      <div className="menu-section-mobile">
        <Link to="/">
          <img
            className="logo-image-mobile-nav"
            src="https://active8studios.co.uk/wp-content/uploads/Amazon-Logo-schwarz.jpg"
            alt="amazon-logo"
          />
        </Link>
        <div className="menu-hamburger-mobile-section">
          <div
            role="button"
            tabIndex={0}
            className={!navOpen ? 'nav-closed-mobile' : 'nav-not-closed'}
            onClick={() => setNavOpen(true)}
            onKeyDown={() => setNavOpen(true)}
          >
            <MenuIcon className="hamburger-icon" />
          </div>
        </div>
      </div>
      <div className={navOpen ? 'nav-open-mobile' : 'nav-not-open'}>
        <div
          role="button"
          tabIndex={0}
          className="close-btn-div-menu"
          onClick={() => setNavOpen(false)}
          onKeyDown={() => setNavOpen(false)}
        >
          <CloseIcon className="close-btn-menu" />
        </div>

        <div className="menu-items">
          <div>
            <Link
              to="/"
              role="button"
              tabIndex={0}
              onClick={() => setNavOpen(false)}
              onKeyDown={() => setNavOpen(false)}
            >
              <img
                className="mobile-nav-open-logo"
                src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
                alt="amazon-logo"
              />
            </Link>
          </div>
          <div className="mobile-nav-input-field">
            <input
              type="text"
              placeholder="Search Here"
              className="mobile-nav-input-search"
            />
            <SearchIcon
              style={{ fontSize: 55 }}
              className="mobile-nav-search-icon"
            />
          </div>
          <div className="nav-links-postion">
            <div className="user-status-mobile-nav">
              {user.email ? (
                <button type="button" onClick={singOutUser}>
                  <h5 className="mobile-nav-line1-heading">
                    Hello
                    {user.email}
                    <strong>Sign Out</strong>
                  </h5>
                </button>
              ) : (
                <Link
                  role="button"
                  tabIndex={0}
                  to="/login"
                  className="sign-in-user-mobile-nav"
                  onClick={() => setNavOpen(false)}
                  onKeyDown={() => setNavOpen(false)}
                >
                  <h5 className="mobile-nav-line1-heading">
                    Hello Guest
                    <strong>Sign In</strong>
                  </h5>
                </Link>
              )}
            </div>
            <div>
              <a
                className="mobile-nav-line1-heading"
                href="https://twitter.com/home"
              >
                <h5>
                  Return
                  <strong>& Orders</strong>
                </h5>
              </a>
            </div>
            <div>
              <h5 className="mobile-nav-line1-heading">
                Your
                <strong>Prime</strong>
              </h5>
            </div>
            <div>
              <Link
                role="button"
                tabIndex={0}
                to="/cart"
                className="cart-btn-mobile-nav"
                onClick={() => setNavOpen(false)}
                onKeyDown={() => setNavOpen(false)}
              >
                <ShoppingBasketIcon className="shopping-icon-mobile-nav" />
                <span className="cart-items-mobile-nav">{shoppingList.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
