import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Atc from './components/Atc';
import { GlobalProvider } from './context/GlobalState';

function App() {
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
                    <Header />
                    <Home />
                  </>
                )
              }
            />
            <Route
              path="/cart"
              element={
                (
                  <>
                    <Header />
                    <Atc />
                  </>
                )
              }
            />
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
