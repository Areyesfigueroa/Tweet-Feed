import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import SplashPage from './components/SplashPage/SplashPage';

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={SplashPage}/>
      </Switch>
    </div>
  );
}

export default App;
