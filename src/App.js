import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
    <Route exact path='/' component={HomePage}></Route>
    <Route  path='/shop/hats' component={HatsPage}></Route>
    </div>
  );
}

export default App;
