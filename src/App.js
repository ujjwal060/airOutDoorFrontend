import React from 'react';
import './App.css';
import Header from './Header/Header';
import { BrowserRouter as Routes } from 'react-router-dom';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Home/>
      </Routes>
      {/* {!noFooterPaths.includes(location.pathname) && <Footer />} */}
    </div>
  );
}

export default App;
