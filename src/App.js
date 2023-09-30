import React from 'react'
import Header from './components/Header';
import Main from './components/Main';
import {Routes, Route } from 'react-router-dom'
import Cart from "./components/Cart";

function App() {
  return (
    <div className='app'>
      {/* <Router> */}
        <Header />
        <Routes>
          {/* <Route exact  path="/" element={<Header />} /> */}
          <Route exact path="" element={<Main />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      {/* </Router> */}
    </div>

  );
}

export default App;
