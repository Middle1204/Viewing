import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './common/globalstyle';
import MainBefore from './components/MainBefore/MainBefore';
import MainAfter from './components/MainAfter/MainAfter';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import Shop from './components/shop/shop';
import Account from './components/Account/Account';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainBefore />} />
        <Route path="/main" element={<MainAfter />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;
