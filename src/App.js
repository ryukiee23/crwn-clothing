import React from 'react';
import './App.css';
import {Route ,Switch} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (

    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
      </Switch>

    </div>
  );
}

export default App;
