import React, { useState, useContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase';
import { GlobalContext } from '../context/GlobalState';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const { addUser, user } = useContext(GlobalContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [userVal, setUserVal] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        addUser(currentUser);
      } else {
        const emptyUser = '';
        addUser(emptyUser);
      }
    });
  }, []);

  const loginUser = async () => {
    try {
      const userLogin = await signInWithEmailAndPassword(auth, email, password);
      console.log(userLogin);
      setEmail('');
      setPassword('');
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const newUserRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>{user.email}</h2>
      <div className="login-page-logo-image-section">
        <img
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt="amazon-logo"
          className="login-page-logo-image-style"
        />
      </div>

      <div className="login-container-info">
        <h2 className="sign-in-heading">Sign In</h2>
        <div className="email-input-login-section">
          <h5 className="login-page-input-headings">Email</h5>
          <input
            className="login-page-inputs"
            type="email"
            id="user-email-login"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password-input-login-section">
          <h5 className="login-page-input-headings">Password</h5>
          <input
            className="login-page-inputs"
            type="password"
            id="user-pswd-login"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-btn-div">
          <button className="login-btn-login-page" type="button" onClick={loginUser}>
            Login
          </button>
        </div>
        <p>
          {' '}
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <div className="login-btn-div">
          <button className="signup-btn-login-page" type="button" onClick={newUserRegister}>
            Create your Amazon Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
