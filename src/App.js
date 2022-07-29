import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Atc from './components/Atc';
import { GlobalProvider } from './context/GlobalState';
import MobileHeader from './components/MobileHeader';
import Footer from './components/Footer';
import Checkout from './components/Checkout';

const stripePromise = loadStripe(
  'pk_test_51LQUDGH4pWBnAXBEogpuJ6lMvCStTz0pZbIPokFavSzHNdav8iZdpRHDnMEKhQDBzQ94CERnEOavd9uDs4UBbHen00pkZSJInp',
);

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 850);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 850);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <div className="app">
      <GlobalProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                (
                  <>
                    {isDesktop ? (
                      <>
                        <Header />
                        <Home />
                      </>
                    ) : (
                      <>
                        <MobileHeader />
                        <Home />
                      </>
                    )}
                  </>
                )
              }
            />
            <Route
              path="/cart"
              element={
                (
                  <>
                    {isDesktop ? (
                      <>
                        <Header />
                        <Atc />
                      </>
                    ) : (
                      <>
                        <MobileHeader />
                        <Atc />
                      </>
                    )}
                  </>
                )
              }
            />
            <Route
              path="/login"
              element={
                (
                  <>
                    {isDesktop ? (
                      <>
                        <Header />
                        <Login />
                      </>
                    ) : (
                      <>
                        <MobileHeader />
                        <Login />
                      </>
                    )}
                  </>
                )
              }
            />
            <Route
              path="/payments"
              element={
                (
                  <>
                    {isDesktop ? (
                      <>
                        <Header />
                        <Elements stripe={stripePromise}>
                          <Checkout />
                        </Elements>
                      </>
                    ) : (
                      <>
                        <MobileHeader />
                        <Checkout />
                      </>
                    )}
                  </>
                )
              }
            />
          </Routes>
        </Router>
        <Footer />
      </GlobalProvider>
    </div>
  );
}

export default App;
