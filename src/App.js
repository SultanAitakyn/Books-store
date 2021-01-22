import React from 'react';
import './App.css';
import MainContainer from './components/Main/MainContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { Route } from 'react-router-dom';
import CartContainer from './components/Cart/CartContainer';

let CartR = () => <CartContainer />;
let BooksR = () => <MainContainer />;

const App = () => {
  return (
    <body>
      <div className="app-wrapper">
        <HeaderContainer></HeaderContainer>
        <Route exact path="/" render={BooksR} />
        <Route path="/cart" render={CartR} />
      </div>
    </body>
  );
};

export default App;
